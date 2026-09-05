import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // The exported site's stylesheet is small; including it in the HTML removes
  // the extra render-blocking request on a cold mobile visit.
  experimental: {
    inlineCss: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
