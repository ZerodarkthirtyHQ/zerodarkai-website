import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { getSupabaseAdmin } from '@/lib/supabase'
import Stripe from 'stripe'
import { Resend } from 'resend'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
const GITHUB_PAT = process.env.GITHUB_PAT || ''
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'ZerodarkthirtyHQ'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('[webhook] STRIPE_WEBHOOK_SECRET not set')
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  const stripe = getStripe()
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('[webhook] signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const metadata = session.metadata || {}

    // Route to the correct handler based on purchase type
    if (metadata.type === 'package') {
      await handlePackagePurchase(session, metadata)
    } else {
      await handleClaimPurchase(session)
    }
  }

  return NextResponse.json({ received: true })
}

// ─── Package Purchase Handler ──────────────────────────────────────────────────

async function handlePackagePurchase(
  session: Stripe.Checkout.Session,
  metadata: Record<string, string>
) {
  const supabase = getSupabaseAdmin()
  const customerEmail = session.customer_details?.email || session.customer_email || null

  if (!customerEmail) {
    console.error('[webhook/package] no customer email in session:', session.id)
    return
  }

  const repo = metadata.github_repo
  const packageName = metadata.package_name
  const packageId = metadata.package_id

  try {
    // Update the pending purchase record with actual email
    const { data: purchase, error: updateError } = await supabase
      .from('package_purchases')
      .update({ customer_email: customerEmail })
      .eq('stripe_session_id', session.id)
      .select()
      .single()

    if (updateError || !purchase) {
      // Record might not exist if webhook fires before checkout route completed insert
      // Insert fresh
      const { data: newPurchase, error: insertError } = await supabase
        .from('package_purchases')
        .insert({
          package_id: packageId,
          stripe_session_id: session.id,
          customer_email: customerEmail,
        })
        .select()
        .single()

      if (insertError) {
        console.error('[webhook/package] failed to create purchase record:', insertError)
        return
      }

      await deliverPackage(newPurchase.download_token, repo, packageName, customerEmail)
    } else {
      await deliverPackage(purchase.download_token, repo, packageName, customerEmail)
    }
  } catch (err) {
    console.error('[webhook/package] error:', err)
  }
}

async function deliverPackage(
  downloadToken: string,
  repo: string,
  packageName: string,
  customerEmail: string
) {
  const supabase = getSupabaseAdmin()

  // Generate GitHub zipball URL
  // This endpoint returns a redirect to a temporary signed S3 URL
  let zipballUrl: string | null = null

  try {
    const ghResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/zipball/main`,
      {
        method: 'GET',
        headers: {
          Authorization: `token ${GITHUB_PAT}`,
          Accept: 'application/vnd.github+json',
        },
        redirect: 'manual', // capture the redirect URL
      }
    )

    // GitHub returns 302 with Location header pointing to S3
    zipballUrl = ghResponse.headers.get('location') || null

    // If no redirect, the URL itself is the download
    if (!zipballUrl && ghResponse.ok) {
      zipballUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/zipball/main`
    }
  } catch (err) {
    console.error('[webhook/package] GitHub zipball fetch failed:', err)
    // Fall back to the direct API URL
    zipballUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/zipball/main`
  }

  // Store zipball URL in purchase record
  await supabase
    .from('package_purchases')
    .update({ github_invite_sent: true })
    .eq('download_token', downloadToken)

  const downloadPageUrl = `${BASE_URL}/packages/download/${downloadToken}`

  // Send email
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    try {
      await resend.emails.send({
        from: 'Zero Dark AI <no-reply@zerodarkai.com>',
        to: customerEmail,
        subject: `${packageName} is ready — Zero Dark AI`,
        html: buildPackageEmail(packageName, downloadPageUrl),
      })
    } catch (emailErr) {
      console.error('[webhook/package] failed to send email:', emailErr)
    }
  } else {
    // Fallback: log the download URL
    console.log(`[webhook/package] RESEND_API_KEY not set. Download URL for ${customerEmail}: ${downloadPageUrl}`)
  }
}

function buildPackageEmail(packageName: string, downloadUrl: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body style="background:#0a0a0a; color:#ffffff; font-family: system-ui, sans-serif; margin:0; padding:0;">
      <div style="max-width:560px; margin:0 auto; padding:40px 24px;">
        <div style="margin-bottom:32px;">
          <span style="font-size:24px; font-weight:800; letter-spacing:-0.5px; color:#0066ff;">ZERO DARK AI</span>
        </div>
        <h1 style="font-size:28px; font-weight:700; margin-bottom:8px; color:#ffffff;">
          Your agent is ready 🤖
        </h1>
        <p style="color:#888; font-size:16px; margin-bottom:32px;">
          Payment confirmed. Here's your download link for <strong style="color:#fff">${packageName}</strong>.
        </p>
        <a href="${downloadUrl}"
           style="display:inline-block; background:#0066ff; color:#ffffff; text-decoration:none;
                  padding:14px 28px; border-radius:8px; font-weight:600; font-size:16px; margin-bottom:32px;">
          Access Your Agent →
        </a>
        <p style="color:#555; font-size:14px; margin-bottom:8px;">
          Your download page includes setup instructions and the full agent bundle.
        </p>
        <hr style="border:none; border-top:1px solid #222; margin:32px 0;">
        <p style="color:#444; font-size:13px;">
          Questions? Reply to this email or reach us at zerodarkthirtyhq@gmail.com
        </p>
      </div>
    </body>
    </html>
  `
}

// ─── Claim (Demo Site) Purchase Handler ───────────────────────────────────────

async function handleClaimPurchase(session: Stripe.Checkout.Session) {
  const supabase = getSupabaseAdmin()

  try {
    const { data: purchase, error: fetchError } = await supabase
      .from('purchases')
      .select('*')
      .eq('stripe_session_id', session.id)
      .single()

    if (fetchError || !purchase) {
      console.error('[webhook/claim] purchase not found for session:', session.id)
      return
    }

    const customerEmail =
      session.customer_details?.email || session.customer_email || null

    const { error: updateError } = await supabase
      .from('purchases')
      .update({ customer_email: customerEmail })
      .eq('id', purchase.id)

    if (updateError) {
      console.error('[webhook/claim] failed to update purchase:', updateError)
      return
    }

    const { data: site } = await supabase
      .from('demo_sites')
      .select('site_name')
      .eq('id', purchase.demo_site_id)
      .single()

    const siteName = site?.site_name || 'Your site'
    const downloadUrl = `${BASE_URL}/claim/download/${purchase.download_token}`

    if (customerEmail && process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      try {
        await resend.emails.send({
          from: 'Zero Dark AI <no-reply@zerodarkai.com>',
          to: customerEmail,
          subject: `Your site is ready — ${siteName}`,
          html: buildClaimEmail(siteName, downloadUrl),
        })
      } catch (emailErr) {
        console.error('[webhook/claim] failed to send email:', emailErr)
      }
    }
  } catch (err) {
    console.error('[webhook/claim] error processing checkout.session.completed:', err)
  }
}

function buildClaimEmail(siteName: string, downloadUrl: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body style="background:#0a0a0a; color:#ffffff; font-family: system-ui, sans-serif; margin:0; padding:0;">
      <div style="max-width:560px; margin:0 auto; padding:40px 24px;">
        <div style="margin-bottom:32px;">
          <span style="font-size:24px; font-weight:800; letter-spacing:-0.5px;">ZERO DARK AI</span>
        </div>
        <h1 style="font-size:28px; font-weight:700; margin-bottom:8px; color:#ffffff;">
          Your site is ready 🚀
        </h1>
        <p style="color:#888; font-size:16px; margin-bottom:32px;">
          Payment confirmed. Here's your download link for <strong style="color:#fff">${siteName}</strong>.
        </p>
        <a href="${downloadUrl}"
           style="display:inline-block; background:#0066ff; color:#ffffff; text-decoration:none;
                  padding:14px 28px; border-radius:8px; font-weight:600; font-size:16px; margin-bottom:32px;">
          Download Your Site Code →
        </a>
        <p style="color:#555; font-size:14px; margin-bottom:8px;">
          This link expires in 1 hour. You can request a new one by replying to this email.
        </p>
        <hr style="border:none; border-top:1px solid #222; margin:32px 0;">
        <p style="color:#444; font-size:13px;">
          Questions? Reply to this email or reach us at zerodarkthirtyhq@gmail.com
        </p>
      </div>
    </body>
    </html>
  `
}
