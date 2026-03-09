'use client'

interface Props {
  zipballUrl: string
  packageName: string
  githubPat: string
  repo: string
}

export default function PackageDownloadButton({ zipballUrl, packageName, githubPat, repo }: Props) {
  const filename = `${packageName.toLowerCase().replace(/\s+/g, '-')}-agent.zip`

  const handleDownload = async () => {
    // If the URL is a direct GitHub API URL, we need to proxy it through our API
    // to attach the auth header. If it's already a signed S3 URL, download directly.
    if (zipballUrl.includes('api.github.com')) {
      // Proxy through our download API to add auth header
      window.location.href = `/api/packages/download?repo=${encodeURIComponent(repo)}`
    } else {
      // Signed S3 URL — download directly
      const a = document.createElement('a')
      a.href = zipballUrl
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  return (
    <div className="text-center">
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-3 bg-[#0066ff] hover:bg-[#0052cc]
                   text-white font-bold px-8 py-4 rounded-xl transition-all duration-200
                   text-base hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] w-full justify-center
                   cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
        Download Agent Bundle
      </button>
      <p className="text-gray-600 text-xs mt-3">
        Full source code + INSTALL.md + config templates included.
      </p>
    </div>
  )
}
