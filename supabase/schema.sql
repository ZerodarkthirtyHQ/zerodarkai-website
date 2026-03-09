-- Zero Dark AI — /claim feature schema
-- Run this in the Supabase SQL editor

-- demo_sites table
create table if not exists demo_sites (
  id uuid primary key default gen_random_uuid(),
  demo_url text unique not null,       -- e.g. "https://lawrence-fish.vercel.app"
  site_name text not null,             -- e.g. "Lawrence Fish Market"
  description text,                    -- short pitch shown on claim card
  price_cents integer not null,        -- e.g. 150000 for $1,500
  stripe_price_id text,               -- optional: Stripe Price ID (if using saved prices)
  code_zip_path text,                  -- Supabase Storage path to the ZIP file
  thumbnail_url text,                  -- screenshot/preview URL
  created_at timestamptz default now()
);

-- purchases table
create table if not exists purchases (
  id uuid primary key default gen_random_uuid(),
  demo_site_id uuid references demo_sites(id),
  stripe_session_id text unique,
  customer_email text,
  download_token text unique default gen_random_uuid()::text,
  downloaded_at timestamptz,
  created_at timestamptz default now()
);

-- Seed data: Lawrence Fish Market
insert into demo_sites (demo_url, site_name, description, price_cents)
values (
  'https://lawrence-fish.vercel.app',
  'Lawrence Fish Market',
  'Japanese-aesthetic restaurant site for a Chicago sushi restaurant. 3 pages, Yelp review carousel, location info, online ordering CTAs.',
  150000
)
on conflict (demo_url) do nothing;

-- Storage bucket for ZIP files
-- Run this in the Supabase Storage settings, or uncomment if using CLI:
-- insert into storage.buckets (id, name, public) values ('site-zips', 'site-zips', false);

-- RLS policies (recommended)
-- Allow service role to read/write everything (handled via service key in API routes)
-- No public access needed for purchases table

-- Enable RLS
alter table demo_sites enable row level security;
alter table purchases enable row level security;

-- demo_sites: anyone can read (for the lookup API to work with anon key)
-- Actually we use service key in API routes, so RLS is a safety measure
create policy "demo_sites_read" on demo_sites for select using (true);

-- purchases: only service role can access (API routes use service key)
-- No public policies needed for purchases
