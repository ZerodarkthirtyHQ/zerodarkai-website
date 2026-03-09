import { NextRequest, NextResponse } from 'next/server'

const GITHUB_PAT = process.env.GITHUB_PAT || ''
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'ZerodarkthirtyHQ'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const repo = searchParams.get('repo')

  if (!repo || typeof repo !== 'string') {
    return NextResponse.json({ error: 'repo is required' }, { status: 400 })
  }

  // Validate repo name to prevent injection (only allow zdai-* repos)
  if (!/^zdai-[a-z]+$/.test(repo)) {
    return NextResponse.json({ error: 'Invalid repo' }, { status: 400 })
  }

  try {
    // Fetch the zipball from GitHub with PAT auth
    const ghResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/zipball/main`,
      {
        headers: {
          Authorization: `token ${GITHUB_PAT}`,
          Accept: 'application/vnd.github+json',
        },
        redirect: 'follow',
      }
    )

    if (!ghResponse.ok) {
      console.error('[packages/download] GitHub error:', ghResponse.status)
      return NextResponse.json({ error: 'Failed to fetch bundle from GitHub' }, { status: 502 })
    }

    // Stream the ZIP back to the browser
    const filename = `${repo}-agent.zip`
    const headers = new Headers({
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${filename}"`,
    })

    // Get content-length if available
    const contentLength = ghResponse.headers.get('content-length')
    if (contentLength) {
      headers.set('Content-Length', contentLength)
    }

    return new NextResponse(ghResponse.body, { headers })
  } catch (err) {
    console.error('[packages/download] error:', err)
    return NextResponse.json({ error: 'Download failed' }, { status: 500 })
  }
}
