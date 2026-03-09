import { getSupabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'
import DownloadButton from './DownloadButton'

interface Props {
  params: { token: string }
}

export default async function DownloadPage({ params }: Props) {
  const supabase = getSupabaseAdmin()
  const { token } = params

  // Validate token
  const { data: purchase, error } = await supabase
    .from('purchases')
    .select('*, demo_sites(site_name, code_zip_path, description)')
    .eq('download_token', token)
    .single()

  if (error || !purchase) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="text-5xl mb-6">⛔</div>
          <h1 className="text-2xl font-black text-white mb-3">Invalid download link</h1>
          <p className="text-gray-400 text-sm mb-6">
            This link is expired or invalid. Please check your email or contact support.
          </p>
          <a
            href="mailto:zerodarkthirtyhq@gmail.com?subject=Download Link Issue"
            className="inline-flex items-center gap-2 bg-[#0066ff] text-white font-semibold 
                       px-6 py-3 rounded-xl text-sm hover:bg-[#0052cc] transition-colors"
          >
            Contact Support →
          </a>
        </div>
      </div>
    )
  }

  // Mark downloaded_at on first visit
  if (!purchase.downloaded_at) {
    await supabase
      .from('purchases')
      .update({ downloaded_at: new Date().toISOString() })
      .eq('id', purchase.id)
  }

  // Generate signed URL if we have a zip path
  let signedUrl: string | null = null
  const zipPath = purchase.demo_sites?.code_zip_path

  if (zipPath) {
    const { data: signed } = await supabase.storage
      .from('site-zips')
      .createSignedUrl(zipPath, 3600) // 1 hour

    signedUrl = signed?.signedUrl || null
  }

  const siteName = purchase.demo_sites?.site_name || 'Your site'

  return (
    <div className="min-h-screen bg-[#0a0a0a] bg-grid flex items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full 
                          flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#0066ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-2">
            {siteName}
          </h1>
          <p className="text-gray-400 text-sm">Your complete source code is ready</p>
        </div>

        {/* Download Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-6">
          {signedUrl ? (
            <DownloadButton signedUrl={signedUrl} siteName={siteName} />
          ) : (
            <div className="text-center py-4">
              <p className="text-yellow-400 text-sm mb-2">⏳ Your files are being prepared</p>
              <p className="text-gray-500 text-xs">
                We&apos;ll email you when they&apos;re ready. Usually within a few minutes.
              </p>
            </div>
          )}
        </div>

        {/* Deploy Instructions */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
            Deploy to Vercel in 3 steps
          </h2>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Unzip & push to GitHub',
                code: 'git init && git add . && git commit -m "init" && gh repo create my-site --public --push',
                desc: 'Or drag the folder to GitHub Desktop',
              },
              {
                step: '2',
                title: 'Connect to Vercel',
                desc: 'Go to vercel.com → New Project → Import your GitHub repo → click Deploy',
                code: null,
              },
              {
                step: '3',
                title: 'Add your domain',
                desc: 'In Vercel project settings → Domains → add your custom domain. Takes 2 minutes.',
                code: null,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 bg-[#0066ff]/10 border border-[#0066ff]/20 
                                rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0066ff] text-xs font-bold">{item.step}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs mb-2">{item.desc}</p>
                  {item.code && (
                    <code className="block bg-black/50 border border-white/10 rounded-lg 
                                     px-3 py-2 text-xs text-gray-300 font-mono overflow-x-auto">
                      {item.code}
                    </code>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-gray-600 text-xs">
              Need help deploying? Email{' '}
              <a href="mailto:zerodarkthirtyhq@gmail.com" className="text-[#0066ff] hover:underline">
                zerodarkthirtyhq@gmail.com
              </a>{' '}
              — we&apos;ll get you live.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">
            ← Back to Zero Dark AI
          </Link>
        </div>
      </div>
    </div>
  )
}
