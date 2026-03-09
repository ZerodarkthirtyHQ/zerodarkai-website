import { getSupabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'
import PackageDownloadButton from './PackageDownloadButton'

const GITHUB_PAT = process.env.GITHUB_PAT || ''
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'ZerodarkthirtyHQ'

interface Props {
  params: { token: string }
}

async function getZipballUrl(repo: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/zipball/main`,
      {
        headers: {
          Authorization: `token ${GITHUB_PAT}`,
          Accept: 'application/vnd.github+json',
        },
        redirect: 'manual',
        cache: 'no-store',
      }
    )
    const location = response.headers.get('location')
    if (location) return location
  } catch {
    // ignore, use fallback
  }
  // Fallback: direct API URL (requires auth header — use as last resort)
  return `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/zipball/main`
}

export default async function PackageDownloadPage({ params }: Props) {
  const supabase = getSupabaseAdmin()
  const { token } = params

  // Validate token
  const { data: purchase, error } = await supabase
    .from('package_purchases')
    .select('*, packages(name, agent_name, github_repo, description)')
    .eq('download_token', token)
    .single()

  if (error || !purchase) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="text-5xl mb-6">⛔</div>
          <h1 className="text-2xl font-black text-white mb-3">Invalid download link</h1>
          <p className="text-gray-400 text-sm mb-6">
            This link is expired or invalid. Check your email or contact support.
          </p>
          <a
            href="mailto:zerodarkthirtyhq@gmail.com?subject=Package Download Link Issue"
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
      .from('package_purchases')
      .update({ downloaded_at: new Date().toISOString() })
      .eq('id', purchase.id)
  }

  const pkg = purchase.packages as {
    name: string
    agent_name: string
    github_repo: string
    description: string | null
  } | null

  const packageName = pkg?.name || 'Your Package'
  const agentName = pkg?.agent_name || 'Your Agent'
  const repo = pkg?.github_repo || ''

  // Generate fresh zipball URL
  const zipballUrl = repo ? await getZipballUrl(repo) : null

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 py-16">
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
          <p className="text-[#0066ff] text-xs font-semibold uppercase tracking-widest mb-2">
            Agent: {agentName}
          </p>
          <h1 className="text-3xl font-black text-white tracking-tight mb-2">
            {packageName}
          </h1>
          <p className="text-gray-400 text-sm">Your complete agent bundle is ready</p>
        </div>

        {/* Download Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-6">
          {zipballUrl ? (
            <PackageDownloadButton
              zipballUrl={zipballUrl}
              packageName={packageName}
              githubPat={GITHUB_PAT}
              repo={repo}
            />
          ) : (
            <div className="text-center py-4">
              <p className="text-yellow-400 text-sm mb-2">⏳ Your bundle is being prepared</p>
              <p className="text-gray-500 text-xs">
                Refresh this page in a moment. Contact support if this persists.
              </p>
            </div>
          )}
        </div>

        {/* Setup Instructions */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
            Get your agent running in 15 minutes
          </h2>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Install OpenClaw',
                desc: 'If you don\'t have OpenClaw yet, install it first.',
                code: 'npm install -g openclaw',
              },
              {
                step: '2',
                title: 'Unzip the bundle',
                desc: 'Extract to a folder on your machine.',
                code: null,
              },
              {
                step: '3',
                title: 'Run the install script',
                desc: 'Follow the INSTALL.md included in the bundle for full setup.',
                code: 'bash install.sh',
              },
              {
                step: '4',
                title: 'Configure your agent',
                desc: 'Edit the .env file with your API keys and business info. The agent handles the rest.',
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
              Need help? Email{' '}
              <a href="mailto:zerodarkthirtyhq@gmail.com" className="text-[#0066ff] hover:underline">
                zerodarkthirtyhq@gmail.com
              </a>{' '}
              — we&apos;ll get you running.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/packages" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">
            ← Browse More Agents
          </Link>
        </div>
      </div>
    </div>
  )
}
