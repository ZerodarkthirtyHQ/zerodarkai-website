import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — Zero Dark AI',
  description: 'Full breakdown of every service tier we offer: business websites, AI agent deployments, bundles, and monthly retainers.',
}

const tiers = [
  {
    id: 'website',
    icon: '🌐',
    name: 'Business Website',
    price: '$1,500 – $3,000',
    period: 'one-time',
    tagline: 'A professional web presence that earns trust from day one.',
    description:
      "Your website is your storefront, pitch deck, and 24/7 sales rep all at once. We build from scratch — no templates, no WordPress bloat. Just a sharp, fast site engineered to make your business look like the real deal.",
    details: [
      {
        heading: 'What You Get',
        items: [
          '5 fully custom pages (Home, About, Services, Contact + 1 of your choice)',
          'Mobile-first, responsive layout that looks great on every screen',
          'SEO-ready structure — proper meta tags, sitemaps, semantic HTML',
          'Performance optimized — fast load times, compressed assets',
          'Contact form integration (email or backend)',
          'Custom domain setup assistance',
          '30 days of post-launch support and fixes',
        ],
      },
      {
        heading: 'Timeline',
        items: [
          'Discovery call: 30 minutes',
          'Design mockup delivery: 3–5 business days',
          'Full build: 7–14 days from approval',
          'Revisions: up to 2 rounds included',
        ],
      },
      {
        heading: 'Best For',
        items: [
          'New businesses establishing their online presence',
          'Existing businesses with outdated or no website',
          'Service businesses that need to generate leads online',
          'Anyone tired of DIY builders that look like DIY builders',
        ],
      },
    ],
    accent: false,
  },
  {
    id: 'ai-agent',
    icon: '🤖',
    name: 'AI Agent Setup',
    price: '$500 – $1,500',
    period: 'one-time',
    tagline: 'Automate the repetitive. Focus on what actually matters.',
    description:
      "We deploy AI agents using OpenClaw — the same infrastructure powering serious operations. Your agent can answer customer questions, handle scheduling, qualify leads, and run custom business logic 24/7 without you lifting a finger.",
    details: [
      {
        heading: 'What You Get',
        items: [
          'Full OpenClaw deployment and configuration',
          'Custom agent trained on your business context',
          'Workflow automation (lead routing, scheduling, FAQs)',
          'Integration with your existing tools where applicable',
          'Testing and validation before go-live',
          '30-day tuning period — we refine based on real usage',
          'Documentation on how to manage and update your agent',
        ],
      },
      {
        heading: 'What Your Agent Can Do',
        items: [
          'Answer customer questions instantly, any time of day',
          'Capture lead information and route to your CRM or email',
          'Handle appointment booking and scheduling flows',
          'Send automated follow-ups and confirmations',
          'Run custom business-specific workflows you define',
          'Escalate to a human when needed',
        ],
      },
      {
        heading: 'Best For',
        items: [
          'Businesses getting repetitive inquiries that eat up time',
          'Service businesses that need 24/7 availability',
          'Companies already with a website but no automation',
          'Anyone spending hours on tasks a machine can handle',
        ],
      },
    ],
    accent: false,
  },
  {
    id: 'bundle',
    icon: '⚡',
    name: 'AI + Website Bundle',
    price: '$2,000 – $4,000',
    period: 'one-time',
    tagline: 'The full deployment. One vendor. Maximum impact.',
    description:
      "This is what most clients should start with. A professional website and a live AI agent built together — designed to work as a system. The site captures visitors. The agent converts them. Everything is integrated and tested before it goes live.",
    details: [
      {
        heading: 'Everything in Both Services, Plus',
        items: [
          'Website and AI agent built together as one integrated system',
          'Agent embedded directly in your site (chat widget, form flows)',
          'Unified design language — site and agent feel like one product',
          'Combined testing and QA across both systems',
          'Priority build queue — your project moves to the front',
          '60 days of post-launch support (double the individual plans)',
          'Savings vs buying separately: up to $500',
        ],
      },
      {
        heading: 'How It Works Together',
        items: [
          'Visitor lands on your site → clean, fast, professional first impression',
          'AI agent engages visitor → answers questions, captures info',
          'Lead is qualified and routed → you only talk to ready prospects',
          'Follow-up automated → no manual chasing required',
          'You close deals. The system does the rest.',
        ],
      },
      {
        heading: 'Best For',
        items: [
          'New businesses launching for the first time',
          'Any business that wants the complete setup done right once',
          'Service businesses with high-volume inquiry workflows',
          'Anyone who doesn\'t want to manage two separate vendors',
        ],
      },
    ],
    accent: true,
  },
  {
    id: 'retainer',
    icon: '🔒',
    name: 'Monthly Retainer',
    price: '$300 – $500',
    period: '/mo',
    tagline: 'We keep your systems sharp. You keep running your business.',
    description:
      "Technology drifts. Sites go stale. AI agents need tuning as your business evolves. The retainer is ongoing maintenance, monitoring, and optimization — so you never have to think about whether your systems are working. They are.",
    details: [
      {
        heading: 'What\'s Covered',
        items: [
          'Website maintenance — updates, plugin patches, uptime monitoring',
          'AI agent performance monitoring and tuning',
          'Up to 4 content updates per month (text, images, pages)',
          'Monthly performance report — traffic, agent activity, issues flagged',
          'Priority support — we respond within 4 business hours',
          'Security monitoring — flagged and patched before they become problems',
          'Hosting coordination assistance',
        ],
      },
      {
        heading: 'Why a Retainer Matters',
        items: [
          'A website that isn\'t maintained goes stale — search engines notice',
          'AI agents trained on old info give wrong answers',
          'Security vulnerabilities compound over time without patches',
          'You don\'t have time to manage this — that\'s the whole point',
        ],
      },
      {
        heading: 'Best For',
        items: [
          'Any existing client after project completion',
          'Businesses that want hands-off ongoing operations',
          'Companies whose sites are their primary lead source',
          'Anyone who\'s been burned by neglected tech before',
        ],
      },
    ],
    accent: false,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-32 pb-20 px-4 sm:px-6 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid grid-fade opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-5">
            Every tier. Every detail.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here&apos;s exactly what you get with each service. No vague promises — just a clear breakdown of what we build and why it works.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {tiers.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="text-sm text-gray-400 hover:text-accent border border-border hover:border-accent px-4 py-2 rounded-lg transition-all"
              >
                {t.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tier sections */}
      {tiers.map((tier, i) => (
        <section
          key={tier.id}
          id={tier.id}
          className={`py-20 px-4 sm:px-6 border-b border-border ${i % 2 === 0 ? 'bg-background' : 'bg-surface'}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left: overview */}
              <div className="lg:col-span-2">
                <div className="text-5xl mb-4">{tier.icon}</div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">{tier.name}</h2>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-black text-accent">{tier.price}</span>
                  <span className="text-gray-500 text-sm">{tier.period}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium mb-4 italic">"{tier.tagline}"</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{tier.description}</p>
                <a
                  href="/#contact"
                  className={`inline-block font-semibold text-sm px-6 py-3 rounded-lg transition-all ${
                    tier.accent
                      ? 'bg-accent hover:bg-accent-hover text-white glow-blue'
                      : 'border border-border hover:border-accent text-white hover:bg-surface-2'
                  }`}
                >
                  Get a Quote →
                </a>
                {tier.accent && (
                  <div className="mt-4">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">★ Most Popular</span>
                  </div>
                )}
              </div>

              {/* Right: detail blocks */}
              <div className="lg:col-span-3 space-y-6">
                {tier.details.map((block) => (
                  <div key={block.heading} className="bg-background border border-border rounded-xl p-6">
                    <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">
                      {block.heading}
                    </h3>
                    <ul className="space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                          <span className="text-accent font-bold shrink-0 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="bg-accent/5 border-t border-accent/20 py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Not sure which tier is right?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Book a free 30-minute call. We&apos;ll figure out what your business actually needs — no upsell, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 glow-blue"
            >
              Get a Free Quote
            </a>
            <Link
              href="/"
              className="border border-border hover:border-accent text-white font-semibold px-8 py-4 rounded-lg transition-all hover:bg-surface"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
