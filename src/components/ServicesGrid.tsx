const services = [
  {
    icon: '🌐',
    title: 'Business Website',
    description:
      'A sharp, fast, mobile-first website that makes your business look like it belongs at the top. 5 fully custom pages, built to convert.',
    tags: ['5 Pages', 'Mobile Ready', 'SEO Optimized'],
  },
  {
    icon: '🤖',
    title: 'AI Agent Setup',
    description:
      'We configure and deploy AI agents using OpenClaw — the same infrastructure used by top operators. Handle customer inquiries, scheduling, and ops automatically.',
    tags: ['OpenClaw', '24/7 Automation', 'Custom Workflows'],
  },
  {
    icon: '⚡',
    title: 'AI + Website Bundle',
    description:
      'The full package. A professional web presence plus an AI agent that works behind the scenes. One vendor. One build. Maximum impact.',
    tags: ['Best Value', 'Full Stack', 'Priority Build'],
  },
  {
    icon: '🔒',
    title: 'Monthly Retainer',
    description:
      'Ongoing maintenance, updates, AI agent tuning, and support. We keep your systems sharp so you can focus on running your business.',
    tags: ['Maintenance', 'AI Tuning', 'Priority Support'],
  },
]

export default function ServicesGrid() {
  return (
    <section className="bg-background py-24 px-4 sm:px-6" id="services">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Tools that work. No complexity.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every service is built to solve a real problem — fast load times, automated ops, and a digital presence that earns trust.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-surface border border-border rounded-2xl p-8 hover:border-accent/50 transition-all hover:bg-surface-2"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-accent border border-accent/30 bg-accent/5 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-accent hover:text-white text-sm font-semibold transition-colors"
          >
            Full service breakdown →
          </a>
        </div>
      </div>
    </section>
  )
}
