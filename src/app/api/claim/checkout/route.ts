import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { getSupabaseAdmin } from '@/lib/supabase'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { siteId } = body

    if (!siteId || typeof siteId !== 'string') {
      return NextResponse.json({ error: 'siteId is required' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()

    // Fetch site details
    const { data: site, error: siteError } = await supabase
      .from('demo_sites')
      .select('*')
      .eq('id', siteId)
      .single()

    if (siteError || !site) {
      return NextResponse.json({ error: 'Site not found' }, { status: 404 })
    }

    const stripe = getStripe()

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: site.site_name,
              description: site.description || 'Complete website source code',
              images: site.thumbnail_url ? [site.thumbnail_url] : [],
            },
            unit_amount: site.price_cents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${BASE_URL}/claim/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/claim`,
      metadata: {
        demo_site_id: site.id,
        site_name: site.site_name,
      },
      customer_creation: 'always',
    })

    // Create a pending purchase record
    await supabase.from('purchases').insert({
      demo_site_id: site.id,
      stripe_session_id: session.id,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[claim/checkout] error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
