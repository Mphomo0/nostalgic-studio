import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/industries/ecommerce',
        destination: '/industries/e-commerce',
        permanent: true,
      },
      {
        source: '/projects/sozim-consultancy',
        destination: '/projects/sozim-consultancy-case-study',
        permanent: true,
      },
      {
        source: '/projects/tanosa-group',
        destination: '/projects/tanosa-group-case-study',
        permanent: true,
      },
      {
        source: '/projects/jiyology-website',
        destination: '/projects/jiyology-construction-plumbing-seo-optimization-case-study',
        permanent: true,
      },
      {
        source: '/request-a-quote',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/web-hosting-security',
        destination: '/services/web-hosting',
        permanent: true,
      },
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion/react'],
  },
  async headers() {
    // Static assets under /public bypass Next's image-optimization cache
    // (see images.unoptimized below) and otherwise default to
    // max-age=0, must-revalidate. These files are pre-sized/pre-compressed
    // and don't change in place — if an image is ever replaced at the same
    // path, rename the file (or add a query hash) so cached clients pick up
    // the new version instead of serving the stale copy for up to a year.
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  images: {
    // All local images are pre-sized, pre-compressed WebP. Serving them
    // directly avoids Vercel image-transformation quota 402s (Hobby plan).
    // Remove this once on a plan with enough transformation quota.
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 1080, 1920],
    imageSizes: [64, 256],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
