'use client'

interface Props {
  signedUrl: string
  siteName: string
}

export default function DownloadButton({ signedUrl, siteName }: Props) {
  return (
    <div className="text-center">
      <a
        href={signedUrl}
        download={`${siteName.toLowerCase().replace(/\s+/g, '-')}-source.zip`}
        className="inline-flex items-center gap-3 bg-[#0066ff] hover:bg-[#0052cc]
                   text-white font-bold px-8 py-4 rounded-xl transition-all duration-200
                   text-base hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] w-full justify-center"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
        Download Source Code
      </a>
      <p className="text-gray-600 text-xs mt-3">
        This link expires in 1 hour. Bookmark this page or save the ZIP immediately.
      </p>
    </div>
  )
}
