import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Zero Dark AI — Websites & AI Agents for Small Business',
  description: 'We build websites and set up AI agents that actually work. No fluff. Professional web presence + automated operations for your business.',
  keywords: ['AI agents', 'small business websites', 'OpenClaw', 'web agency', 'business automation'],
  openGraph: {
    title: 'Zero Dark AI',
    description: 'AI-Powered Ops. Built for Your Business.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
