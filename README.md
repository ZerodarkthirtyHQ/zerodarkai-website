# Zero Dark AI — Website

Marketing website for **Zero Dark AI**, a web agency specializing in business websites and AI agent setups for small businesses.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Output:** Static export (`next export`)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Services grid, Pricing cards, Contact form |
| `/services` | Full service tier breakdown |

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Serve static export
npx serve out/
```

## Design

- **Background:** `#0a0a0a` — near-black
- **Accent:** `#0066ff` — electric blue
- **Font:** Inter (Google Fonts)
- **Vibe:** Military-precision meets AI-forward. Sharp, clean, no fluff.

## Services Offered

| Service | Price |
|---------|-------|
| Business Website (5 pages) | $1,500–$3,000 |
| AI Agent Setup (OpenClaw) | $500–$1,500 |
| AI + Website Bundle | $2,000–$4,000 |
| Monthly Retainer | $300–$500/mo |

## Contact

Update `hello@zerodark.ai` throughout the codebase with your actual contact email before deploying.

## Deployment

This is a static export (`output: 'export'` in `next.config.js`). The `/out` directory can be deployed to:
- Vercel (recommended — just connect the repo)
- Netlify
- Cloudflare Pages
- Any static host

```bash
npm run build
# Deploy the ./out directory
```
