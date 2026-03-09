-- Zero Dark AI: Packages Schema
-- Run this in Supabase SQL editor

create table if not exists packages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,           -- e.g. "the-seller"
  name text not null,                  -- e.g. "The Seller"
  agent_name text not null,            -- e.g. "Max"
  description text,
  price_cents integer not null,
  stripe_price_id text not null,
  github_repo text not null,           -- e.g. "zdai-seller"
  thumbnail_url text,
  created_at timestamptz default now()
);

create table if not exists package_purchases (
  id uuid primary key default gen_random_uuid(),
  package_id uuid references packages(id),
  stripe_session_id text unique not null,
  customer_email text not null,
  download_token text unique not null default gen_random_uuid()::text,
  github_invite_sent boolean default false,
  downloaded_at timestamptz,
  created_at timestamptz default now()
);

-- Seed: 6 packages
insert into packages (slug, name, agent_name, description, price_cents, stripe_price_id, github_repo)
values
  (
    'the-seller',
    'The Seller',
    'Max',
    'Max is your 24/7 AI sales agent. Handles product listings, customer inquiries, order follow-ups, and abandoned cart recovery — fully automated.',
    29700,
    'price_1T8vHEFXfUQQz2YeKEVTdngV',
    'zdai-seller'
  ),
  (
    'the-operator',
    'The Operator',
    'Ops',
    'Ops keeps your business running while you sleep. Automates scheduling, internal communications, task routing, and ops reporting.',
    39700,
    'price_1T8vHEFXfUQQz2YeQzAEgAhA',
    'zdai-operator'
  ),
  (
    'the-dealmaker',
    'The Dealmaker',
    'Rex',
    'Rex is built to close. Tracks leads, sends follow-ups, manages your pipeline, and never lets a deal go cold.',
    49700,
    'price_1T8vHFFXfUQQz2YeuzNrKawP',
    'zdai-dealmaker'
  ),
  (
    'the-creator',
    'The Creator',
    'Nova',
    'Nova generates content on autopilot. Social posts, blog drafts, email campaigns — trained on your brand voice.',
    29700,
    'price_1T8vHFFXfUQQz2Yelkx9bWhr',
    'zdai-creator'
  ),
  (
    'the-contractor',
    'The Contractor',
    'Bolt',
    'Bolt runs your freelance operation. Client onboarding, project tracking, invoice chasing, and scope management handled.',
    39700,
    'price_1T8vHGFXfUQQz2Yefgm3VbVL',
    'zdai-contractor'
  ),
  (
    'the-analyst',
    'The Analyst',
    'Atlas',
    'Atlas turns raw data into decisions. Monitors KPIs, flags anomalies, and delivers weekly intelligence reports automatically.',
    49700,
    'price_1T8vHHFXfUQQz2Ye4wTDs0dK',
    'zdai-analyst'
  )
on conflict (slug) do update set
  stripe_price_id = excluded.stripe_price_id,
  price_cents = excluded.price_cents;
