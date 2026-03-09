import Link from 'next/link'
import LiquidMetalButton from './LiquidMetalButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid grid-fade opacity-60" />

      {/* Blue radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-surface-2 border border-border rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
          <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
            AI Agents + Web Presence
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          <span className="text-white">AI-Powered Ops.</span>
          <br />
          <span className="text-accent text-glow">Built for Your Business.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We build websites and set up AI agents that actually work.{' '}
          <span className="text-white font-medium">No fluff.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <LiquidMetalButton href="#contact" size="lg" className="w-full sm:w-auto">
            Get Your AI Stack
          </LiquidMetalButton>
          <Link
            href="/services"
            className="w-full sm:w-auto border border-border hover:border-accent text-white font-semibold px-8 py-4 rounded-lg text-base transition-all hover:bg-surface"
          >
            See Our Services →
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-xl mx-auto border-t border-border pt-10">
          {[
            { value: '48h', label: 'Avg Turnaround' },
            { value: '4', label: 'Service Tiers' },
            { value: '100%', label: 'Custom Builds' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-accent mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
