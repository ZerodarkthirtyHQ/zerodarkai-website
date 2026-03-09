import Link from 'next/link'

const featured = [
  {
    slug: 'the-seller',
    name: 'The Seller',
    agent: 'Max',
    emoji: '🛒',
    price: '$297',
    tagline: 'Your 24/7 AI sales agent',
  },
  {
    slug: 'the-dealmaker',
    name: 'The Dealmaker',
    agent: 'Rex',
    emoji: '🤝',
    price: '$497',
    tagline: 'Built to close',
    highlight: true,
  },
  {
    slug: 'the-analyst',
    name: 'The Analyst',
    agent: 'Atlas',
    emoji: '📊',
    price: '$497',
    tagline: 'Raw data → decisions',
  },
]

export default function PackagesPreview() {
  return (
    <section className="bg-background py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Pre-Built Agents</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Deploy a specialist AI agent<br className="hidden sm:block" />
            <span className="text-accent"> in 15 minutes.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Six purpose-built agents. Download, configure, go live. No custom dev required.
          </p>
        </div>

        {/* Featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((pkg) => (
            <div
              key={pkg.slug}
              className={`relative rounded-2xl p-6 flex flex-col border transition-all ${
                pkg.highlight
                  ? 'border-accent bg-accent/5 shadow-[0_0_40px_rgba(0,102,255,0.12)]'
                  : 'border-border bg-surface hover:border-accent/40'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Best Value
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-2xl block mb-2">{pkg.emoji}</span>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                    {pkg.agent}
                  </p>
                  <h3 className="text-white font-black text-lg">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{pkg.tagline}</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <span className="text-xl font-black text-white">{pkg.price}</span>
                  <p className="text-gray-600 text-xs">one-time</p>
                </div>
              </div>

              <Link
                href={`/api/packages/checkout?slug=${pkg.slug}`}
                className={`mt-auto block text-center font-bold text-sm px-4 py-3 rounded-xl transition-all ${
                  pkg.highlight
                    ? 'bg-accent hover:bg-accent-hover text-white'
                    : 'border border-border hover:border-accent text-white hover:bg-surface-2'
                }`}
              >
                Buy Now — {pkg.price}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-accent hover:text-white font-semibold text-sm transition-colors"
          >
            See all 6 agents →
          </Link>
        </div>
      </div>
    </section>
  )
}
