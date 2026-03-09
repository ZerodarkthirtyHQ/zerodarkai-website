/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' — we need API routes for /claim feature
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
