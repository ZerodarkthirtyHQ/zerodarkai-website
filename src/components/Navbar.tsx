'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChromeOrb } from './LiquidMetalButton'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <ChromeOrb size={10} />
            <span className="text-accent font-black text-xl tracking-tight group-hover:text-glow transition-all">
              ZERO DARK
            </span>
            <span className="text-white font-black text-xl tracking-tight">AI</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
              Services
            </Link>
            <Link href="/packages" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
              Packages
            </Link>
            <a href="/#pricing" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
              Pricing
            </a>
            <a href="/#contact" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
              Contact
            </a>
            <Link
              href="/packages"
              className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Buy Agents
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1.5">
              <span className={`block h-0.5 bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-surface px-4 py-4 space-y-3">
          <Link href="/" className="block text-sm text-gray-400 hover:text-white py-2" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" className="block text-sm text-gray-400 hover:text-white py-2" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/packages" className="block text-sm text-gray-400 hover:text-white py-2" onClick={() => setOpen(false)}>Packages</Link>
          <a href="/#pricing" className="block text-sm text-gray-400 hover:text-white py-2" onClick={() => setOpen(false)}>Pricing</a>
          <a href="/#contact" className="block text-sm text-gray-400 hover:text-white py-2" onClick={() => setOpen(false)}>Contact</a>
          <Link
            href="/packages"
            className="block bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-2.5 rounded text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Buy Agents
          </Link>
        </div>
      )}
    </header>
  )
}
