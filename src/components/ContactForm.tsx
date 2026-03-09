'use client'

export default function ContactForm() {
  const mailto =
    'mailto:hello@zerodark.ai?subject=Free%20Quote%20Request&body=Hi%20Zero%20Dark%20AI%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20services.%0A%0AName%3A%20%0ABusiness%3A%20%0AService%20interested%20in%3A%20%0ATimeline%3A%20%0A%0AThanks%21'

  return (
    <section className="bg-background py-24 px-4 sm:px-6" id="contact">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-gray-500 text-lg">
            Free 30-min call. No pitch. Just a conversation about what your business actually needs.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10">
          <form
            action={mailto}
            method="get"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const name = (form.querySelector('#name') as HTMLInputElement)?.value || ''
              const business = (form.querySelector('#business') as HTMLInputElement)?.value || ''
              const service = (form.querySelector('#service') as HTMLSelectElement)?.value || ''
              const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value || ''
              const subject = encodeURIComponent('Free Quote Request — Zero Dark AI')
              const body = encodeURIComponent(
                `Hi Zero Dark AI,\n\nName: ${name}\nBusiness: ${business}\nService Interested In: ${service}\n\nMessage:\n${message}\n\nThanks!`
              )
              window.location.href = `mailto:hello@zerodark.ai?subject=${subject}&body=${body}`
            }}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Smith"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                  Business Name *
                </label>
                <input
                  id="business"
                  type="text"
                  required
                  placeholder="Acme Corp"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@yourbusiness.com"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                What Are You Looking For? *
              </label>
              <select
                id="service"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors appearance-none"
              >
                <option value="" disabled>Select a service...</option>
                <option value="Business Website ($1,500–$3,000)">Business Website ($1,500–$3,000)</option>
                <option value="AI Agent Setup ($500–$1,500)">AI Agent Setup ($500–$1,500)</option>
                <option value="AI + Website Bundle ($2,000–$4,000)">AI + Website Bundle ($2,000–$4,000)</option>
                <option value="Monthly Retainer ($300–$500/mo)">Monthly Retainer ($300–$500/mo)</option>
                <option value="Not sure yet">Not sure yet — want to talk</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Tell Us About Your Business
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="What does your business do? What problem are you trying to solve?"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-lg text-base transition-all hover:scale-[1.02] active:scale-[0.98] glow-blue"
            >
              Send Message — Get a Free Quote
            </button>

            <p className="text-center text-xs text-gray-600">
              This will open your email client. We respond within 24 hours.
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 border-t border-border" />
            <span className="text-xs text-gray-600 uppercase tracking-widest">or reach out directly</span>
            <div className="flex-1 border-t border-border" />
          </div>

          {/* Direct contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@zerodark.ai"
              className="flex items-center justify-center gap-2 border border-border hover:border-accent rounded-lg px-6 py-3 text-sm text-gray-400 hover:text-white transition-all"
            >
              <span>✉️</span>
              hello@zerodark.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
