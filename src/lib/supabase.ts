import { createClient } from '@supabase/supabase-js'

// Server-side admin client (service role — never exposed to browser)
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error('Missing Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)')
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

// Browser-safe client (uses anon key)
export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    throw new Error('Missing Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)')
  }
  return createClient(url, key)
}

export type DemoSite = {
  id: string
  demo_url: string
  site_name: string
  description: string | null
  price_cents: number
  stripe_price_id: string | null
  code_zip_path: string | null
  thumbnail_url: string | null
  created_at: string
}

export type Purchase = {
  id: string
  demo_site_id: string
  stripe_session_id: string | null
  customer_email: string | null
  download_token: string
  downloaded_at: string | null
  created_at: string
}

export type Package = {
  id: string
  slug: string
  name: string
  agent_name: string
  description: string | null
  price_cents: number
  stripe_price_id: string
  github_repo: string
  thumbnail_url: string | null
  created_at: string
}

export type PackagePurchase = {
  id: string
  package_id: string
  stripe_session_id: string
  customer_email: string
  download_token: string
  github_invite_sent: boolean
  downloaded_at: string | null
  created_at: string
}
