import Link from 'next/link'

export default function ClaimSuccessPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div className="w-20 h-20 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full 
                        flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-[#0066ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white">
          Payment confirmed! 🎉
        </h1>

        <p className="text-gray-400 text-lg mb-2">
          Check your email for your download link.
        </p>
        <p className="text-gray-600 text-sm mb-10">
          The link will arrive within 1–2 minutes. Check your spam folder if you don&apos;t see it.
        </p>

        {/* What to expect */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-left mb-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            What happens next
          </p>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Check your email',
                desc: 'Your download link is on its way from no-reply@zerodarkai.com',
              },
              {
                step: '2',
                title: 'Download the ZIP',
                desc: 'One click — full Next.js project, all assets included',
              },
              {
                step: '3',
                title: 'Deploy to Vercel',
                desc: 'Push to GitHub → connect to Vercel → live in 3 minutes',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 bg-[#0066ff]/10 border border-[#0066ff]/20 
                                rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0066ff] text-xs font-bold">{item.step}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-6">
          Questions? Email us at{' '}
          <a href="mailto:zerodarkthirtyhq@gmail.com" className="text-[#0066ff] hover:underline">
            zerodarkthirtyhq@gmail.com
          </a>
        </p>

        <Link
          href="/"
          className="text-gray-600 hover:text-gray-400 text-sm transition-colors"
        >
          ← Back to Zero Dark AI
        </Link>
      </div>
    </div>
  )
}
