'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type SiteData = {
  id: string
  demo_url: string
  site_name: string
  description: string | null
  price_cents: number
  thumbnail_url: string | null
}

type LookupState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'found'; site: SiteData }
  | { status: 'not_found' }
  | { status: 'error'; message: string }

function formatPrice(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100)
}

export default function ClaimPage() {
  const [url, setUrl] = useState('')
  const [state, setState] = useState<LookupState>({ status: 'idle' })
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  async function handleLookup(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return

    setState({ status: 'loading' })

    try {
      const res = await fetch('/api/claim/lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (res.status === 404) {
        setState({ status: 'not_found' })
        return
      }

      if (!res.ok) {
        setState({ status: 'error', message: 'Something went wrong. Please try again.' })
        return
      }

      const data = await res.json()
      setState({ status: 'found', site: data.site })
    } catch {
      setState({ status: 'error', message: 'Network error. Please check your connection.' })
    }
  }

  async function handleBuyNow(siteId: string) {
    setCheckoutLoading(true)
    try {
      const res = await fetch('/api/claim/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ siteId }),
      })

      if (!res.ok) {
        const err = await res.json()
        setState({ status: 'error', message: err.error || 'Failed to start checkout.' })
        setCheckoutLoading(false)
        return
      }

      const { url: checkoutUrl } = await res.json()
      window.location.href = checkoutUrl
    } catch {
      setState({ status: 'error', message: 'Network error. Please try again.' })
      setCheckoutLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] bg-grid">
      {/* Hero */}
      <div className="pt-24 pb-12 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#0066ff]/10 border border-[#0066ff]/20 
                        text-[#0066ff] text-xs font-semibold uppercase tracking-widest 
                        rounded-full px-4 py-2 mb-6">
          ⚡ Instant Delivery
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
          Claim Your Site
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
          Paste your demo URL below. Get the full source code, instantly.
        </p>
      </div>

      {/* URL Input */}
      <div className="max-w-2xl mx-auto px-6">
        <form onSubmit={handleLookup} className="flex gap-3">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://lawrence-fish.vercel.app"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 
                       text-white placeholder:text-gray-600 text-base
                       focus:outline-none focus:border-[#0066ff]/60 focus:bg-white/8
                       transition-all duration-200"
            disabled={state.status === 'loading'}
          />
          <button
            type="submit"
            disabled={state.status === 'loading' || !url.trim()}
            className="bg-[#0066ff] hover:bg-[#0052cc] disabled:opacity-40 disabled:cursor-not-allowed
                       text-white font-bold px-6 py-4 rounded-xl transition-all duration-200
                       whitespace-nowrap text-sm"
          >
            {state.status === 'loading' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Looking up...
              </span>
            ) : 'Look Up →'}
          </button>
        </form>

        {/* Error */}
        {state.status === 'error' && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
            {state.message}
          </div>
        )}
      </div>

      {/* Results */}
      <div className="max-w-2xl mx-auto px-6 mt-8 pb-24">
        {/* Site Found Card */}
        {state.status === 'found' && (
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden 
                          animate-slide-up glow-blue">
            {/* Thumbnail */}
            {state.site.thumbnail_url ? (
              <div className="relative w-full h-52 bg-black">
                <Image
                  src={state.site.thumbnail_url}
                  alt={state.site.site_name}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
            ) : (
              <div className="w-full h-32 bg-gradient-to-r from-[#0066ff]/10 to-[#0066ff]/5 
                              flex items-center justify-center">
                <span className="text-4xl">🌐</span>
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#0066ff]/15 border border-[#0066ff]/30 
                              text-[#0066ff] text-xs font-bold uppercase tracking-wider 
                              rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 bg-[#0066ff] rounded-full animate-pulse" />
                Available to Claim
              </div>

              <h2 className="text-2xl font-black tracking-tight mb-2 text-white">
                {state.site.site_name}
              </h2>

              {state.site.description && (
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {state.site.description}
                </p>
              )}

              {/* What's included */}
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 mb-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  What you get
                </p>
                <ul className="space-y-2">
                  {[
                    'Full Next.js source code',
                    'Deploy to Vercel in 3 clicks',
                    'All assets & components included',
                    'Lifetime ownership — no subscriptions',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-[#0066ff] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">One-time payment</p>
                  <p className="text-3xl font-black text-white tracking-tight">
                    {formatPrice(state.site.price_cents)}
                  </p>
                </div>

                <button
                  onClick={() => handleBuyNow(state.site.id)}
                  disabled={checkoutLoading}
                  className="flex-1 sm:flex-none bg-[#0066ff] hover:bg-[#0052cc] 
                             disabled:opacity-50 disabled:cursor-not-allowed
                             text-white font-bold px-8 py-4 rounded-xl 
                             transition-all duration-200 text-base
                             hover:shadow-[0_0_30px_rgba(0,102,255,0.4)]"
                >
                  {checkoutLoading ? (
                    <span className="flex items-center gap-2 justify-center">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Redirecting...
                    </span>
                  ) : 'Buy Now →'}
                </button>
              </div>

              {/* Trust signals */}
              <p className="text-xs text-gray-600 mt-4 text-center">
                🔒 Secure checkout via Stripe · Instant delivery via email
              </p>
            </div>
          </div>
        )}

        {/* Not Found */}
        {state.status === 'not_found' && (
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center animate-slide-up">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-xl font-bold mb-2 text-white">Site not found</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              We couldn&apos;t find <span className="text-white font-mono text-xs bg-white/5 px-2 py-0.5 rounded">{url}</span> in our catalog.
              Want us to build something custom?
            </p>

            <a
              href={`mailto:zerodarkthirtyhq@gmail.com?subject=Custom Build Request&body=Hi, I'm interested in a custom build. Here's what I'm looking for:%0A%0A`}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 
                         border border-white/10 text-white font-semibold 
                         px-6 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              Request a Custom Build →
            </a>

            <button
              onClick={() => { setState({ status: 'idle' }); setUrl('') }}
              className="block mx-auto mt-4 text-gray-600 hover:text-gray-400 
                         text-sm transition-colors"
            >
              Try another URL
            </button>
          </div>
        )}

        {/* Idle hint */}
        {state.status === 'idle' && (
          <p className="text-center text-gray-700 text-sm mt-4">
            Try: <button
              onClick={() => setUrl('https://lawrence-fish.vercel.app')}
              className="text-[#0066ff]/60 hover:text-[#0066ff] transition-colors font-mono text-xs"
            >
              https://lawrence-fish.vercel.app
            </button>
          </p>
        )}
      </div>
    </div>
  )
}
