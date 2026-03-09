import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-accent font-black text-lg tracking-tight">ZERO DARK</span>
              <span className="text-white font-black text-lg tracking-tight">AI</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Websites and AI agents for small businesses that want to operate smarter. No fluff. Real results.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-500 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-sm text-gray-500 hover:text-white transition-colors">Services</Link></li>
              <li><a href="/#pricing" className="text-sm text-gray-500 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/#contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Get in Touch</h4>
            <p className="text-sm text-gray-500 mb-3">Ready to upgrade your business?</p>
            <a
              href="mailto:hello@zerodark.ai"
              className="text-accent hover:text-white text-sm font-medium transition-colors"
            >
              hello@zerodark.ai
            </a>
            <div className="mt-4">
              <a
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Zero Dark AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/ZeroDarkAI" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/ZeroDarkAI" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="X / Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/zero-dark-ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
