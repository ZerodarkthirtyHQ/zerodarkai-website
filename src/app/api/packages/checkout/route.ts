import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { getSupabaseAdmin } from '@/lib/supabase'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export async function GET(req: NextRequest) {
  return handleCheckout(req)
}

export async function POST(req: NextRequest) {
  return handleCheckout(req)
}

async function handleCheckout(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    let slug = searchParams.get('slug')

    // Also check body for POST requests
    if (!slug && req.method === 'POST') {
      try {
        const body = await req.json()
        slug = body.slug
      } catch {
        // body might not be JSON
      }
    }

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ error: 'slug is required' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()

    // Fetch package from DB
    const { data: pkg, error: pkgError } = await supabase
      .from('packages')
      .select('*')
      .eq('slug', slug)
      .single()

    if (pkgError || !pkg) {
      console.error('[packages/checkout] package not found:', slug, pkgError)
      return NextResponse.json({ error: 'Package not found' }, { status: 404 })
    }

    const stripe = getStripe()

    // Create Stripe Checkout session using the stored price ID
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: pkg.stripe_price_id,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${BASE_URL}/packages/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/packages`,
      metadata: {
        type: 'package',
        package_id: pkg.id,
        package_slug: pkg.slug,
        package_name: pkg.name,
        github_repo: pkg.github_repo,
      },
      customer_creation: 'always',
      allow_promotion_codes: true,
    })

    // Create pending purchase record
    await supabase.from('package_purchases').insert({
      package_id: pkg.id,
      stripe_session_id: session.id,
      customer_email: 'pending@checkout',
    })

    // Redirect to Stripe checkout
    return NextResponse.redirect(session.url!, { status: 303 })
  } catch (err) {
    console.error('[packages/checkout] error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
