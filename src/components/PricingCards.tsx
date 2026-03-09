const plans = [
  {
    name: 'Business Website',
    price: '$1,500–$3,000',
    period: 'one-time',
    description: 'A fully custom 5-page site that looks like it cost twice as much. Fast, sharp, and built to rank.',
    features: [
      '5 custom pages',
      'Mobile-first design',
      'SEO-ready structure',
      'Contact form integration',
      'Performance optimized',
      '30-day post-launch support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'AI + Website Bundle',
    price: '$2,000–$4,000',
    period: 'one-time',
    description: 'The full deployment. Website + AI agent in a single build. Most clients start here.',
    features: [
      'Everything in Business Website',
      'AI agent setup (OpenClaw)',
      'Custom automation workflows',
      'Business logic configuration',
      'Integration testing',
      '60-day post-launch support',
    ],
    cta: 'Get the Bundle',
    highlight: true,
  },
  {
    name: 'AI Agent Setup',
    price: '$500–$1,500',
    period: 'one-time',
    description: 'Already have a site? Add an AI agent that handles inquiries, scheduling, and routine ops 24/7.',
    features: [
      'OpenClaw deployment',
      'Custom agent configuration',
      'Business workflow setup',
      'Integration with existing systems',
      '24/7 automated operations',
      '30-day tuning period',
    ],
    cta: 'Add AI to My Business',
    highlight: false,
  },
  {
    name: 'Monthly Retainer',
    price: '$300–$500',
    period: '/mo',
    description: "Ongoing support so your site and AI stay sharp. We handle updates, tuning, and anything that breaks.",
    features: [
      'Site maintenance & updates',
      'AI agent monitoring & tuning',
      'Monthly performance report',
      'Priority support response',
      'Content updates (up to 4/mo)',
      'Security & uptime monitoring',
    ],
    cta: 'Start Retainer',
    highlight: false,
  },
]

export default function PricingCards() {
  return (
    <section className="bg-surface py-24 px-4 sm:px-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Straight numbers. No surprises.
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            All projects start with a free discovery call. Final quote depends on scope — these ranges are honest.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col border transition-all ${
                plan.highlight
                  ? 'border-accent bg-accent/5 glow-blue'
                  : 'border-border bg-background hover:border-accent/40'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-base font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-2xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <span className="text-accent font-bold mt-0.5 shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-semibold text-sm px-4 py-3 rounded-lg transition-all ${
                  plan.highlight
                    ? 'bg-accent hover:bg-accent-hover text-white'
                    : 'border border-border hover:border-accent text-white hover:bg-surface-2'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-8">
          All projects include a free 30-min discovery call. No commitment required.
        </p>
      </div>
    </section>
  )
}
