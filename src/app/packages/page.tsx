import Link from 'next/link'

const packages = [
  {
    slug: 'the-seller',
    name: 'The Seller',
    agent: 'Max',
    price: '$297',
    priceCents: 29700,
    emoji: '🛒',
    tagline: 'Your 24/7 AI sales agent',
    description: 'Handles product listings, customer inquiries, order follow-ups, and abandoned cart recovery — fully automated.',
    features: [
      'Automated customer inquiry handling',
      'Abandoned cart recovery sequences',
      'Product listing optimization',
      'Order status automation',
      'Review request campaigns',
    ],
    highlight: false,
  },
  {
    slug: 'the-operator',
    name: 'The Operator',
    agent: 'Ops',
    price: '$397',
    priceCents: 39700,
    emoji: '⚙️',
    tagline: 'Runs your business while you sleep',
    description: 'Automates scheduling, internal communications, task routing, and ops reporting across your entire operation.',
    features: [
      'Automated scheduling & reminders',
      'Internal task routing',
      'Weekly ops reports',
      'Team communication automation',
      'SOP enforcement workflows',
    ],
    highlight: false,
  },
  {
    slug: 'the-dealmaker',
    name: 'The Dealmaker',
    agent: 'Rex',
    price: '$497',
    priceCents: 49700,
    emoji: '🤝',
    tagline: 'Built to close',
    description: 'Tracks leads, sends follow-ups, manages your pipeline, and never lets a deal go cold.',
    features: [
      'Lead tracking & pipeline management',
      'Automated follow-up sequences',
      'Deal stage automation',
      'Proposal generation',
      'Close rate analytics',
    ],
    highlight: true,
  },
  {
    slug: 'the-creator',
    name: 'The Creator',
    agent: 'Nova',
    price: '$297',
    priceCents: 29700,
    emoji: '✍️',
    tagline: 'Content on autopilot',
    description: 'Generates social posts, blog drafts, and email campaigns trained on your brand voice — every day.',
    features: [
      'Daily social post generation',
      'Blog drafts from topic outlines',
      'Email campaign automation',
      'Brand voice calibration',
      'Content calendar management',
    ],
    highlight: false,
  },
  {
    slug: 'the-contractor',
    name: 'The Contractor',
    agent: 'Bolt',
    price: '$397',
    priceCents: 39700,
    emoji: '🔧',
    tagline: 'Run your freelance operation',
    description: 'Client onboarding, project tracking, invoice chasing, and scope management — handled.',
    features: [
      'Client onboarding automation',
      'Project milestone tracking',
      'Invoice & payment follow-ups',
      'Scope creep detection',
      'Weekly client status emails',
    ],
    highlight: false,
  },
  {
    slug: 'the-analyst',
    name: 'The Analyst',
    agent: 'Atlas',
    price: '$497',
    priceCents: 49700,
    emoji: '📊',
    tagline: 'Raw data → decisions',
    description: 'Monitors KPIs, flags anomalies, and delivers weekly intelligence reports automatically.',
    features: [
      'KPI monitoring & alerting',
      'Anomaly detection',
      'Weekly intelligence reports',
      'Competitor tracking',
      'Revenue forecasting',
    ],
    highlight: false,
  },
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <div className="border-b border-[#222] bg-[#111] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#0066ff] text-xs font-semibold uppercase tracking-widest mb-4">
            Pre-Built AI Agents
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Drop-in AI agents.<br />
            <span className="text-[#0066ff]">Ready in minutes.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Six pre-built OpenClaw agents, each purpose-built for a specific job. Download, configure, deploy. 
            No setup hell.
          </p>
          <p className="text-gray-600 text-sm">
            One-time purchase. Lifetime updates included. Full source code delivered via GitHub.
          </p>
        </div>
      </div>

      {/* Package Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              className={`relative rounded-2xl p-7 flex flex-col border transition-all group ${
                pkg.highlight
                  ? 'border-[#0066ff] bg-[#0066ff]/5 shadow-[0_0_40px_rgba(0,102,255,0.15)]'
                  : 'border-[#222] bg-[#111] hover:border-[#0066ff]/40'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0066ff] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Best Value
                  </span>
                </div>
              )}

              {/* Agent badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{pkg.emoji}</span>
                  <div>
                    <p className="text-[#0066ff] text-xs font-semibold uppercase tracking-wider">
                      Agent: {pkg.agent}
                    </p>
                    <h2 className="text-white font-black text-xl leading-tight">
                      {pkg.name}
                    </h2>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">{pkg.price}</span>
                  <p className="text-gray-600 text-xs">one-time</p>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-gray-300 text-sm font-semibold mb-2">{pkg.tagline}</p>

              {/* Description */}
              <p className="text-gray-500 text-xs leading-relaxed mb-5">{pkg.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-7 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-400">
                    <span className="text-[#0066ff] font-bold mt-0.5 shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={`/api/packages/checkout?slug=${pkg.slug}`}
                className={`block text-center font-bold text-sm px-4 py-3.5 rounded-xl transition-all ${
                  pkg.highlight
                    ? 'bg-[#0066ff] hover:bg-[#0052cc] text-white shadow-[0_0_20px_rgba(0,102,255,0.3)]'
                    : 'border border-[#333] hover:border-[#0066ff] text-white hover:bg-[#0066ff]/10 group-hover:border-[#0066ff]/60'
                }`}
              >
                Buy Now — {pkg.price}
              </Link>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 border-t border-[#222] pt-12 text-center">
          <p className="text-gray-600 text-sm mb-6">
            All packages include full source code, INSTALL.md walkthrough, and lifetime updates via GitHub.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-xs text-gray-600">
            <span>🔒 Secure checkout via Stripe</span>
            <span>📦 GitHub delivery — instant access</span>
            <span>🔄 Lifetime updates</span>
            <span>🛠️ Full source code</span>
            <span>📧 Support included</span>
          </div>
        </div>
      </div>
    </div>
  )
}
