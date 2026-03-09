import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

function normalizeUrl(raw: string): string {
  try {
    const url = new URL(raw.trim())
    // lowercase hostname, remove trailing slash from pathname
    const normalized = `${url.protocol}//${url.hostname.toLowerCase()}${url.pathname.replace(/\/+$/, '') || ''}`
    return normalized
  } catch {
    // If not a valid URL, do basic normalization
    return raw.trim().toLowerCase().replace(/\/+$/, '')
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { url } = body

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    const normalized = normalizeUrl(url)

    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('demo_sites')
      .select('id, demo_url, site_name, description, price_cents, thumbnail_url')
      .eq('demo_url', normalized)
      .single()

    if (error || !data) {
      return NextResponse.json({ found: false }, { status: 404 })
    }

    return NextResponse.json({ found: true, site: data })
  } catch (err) {
    console.error('[claim/lookup] error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
