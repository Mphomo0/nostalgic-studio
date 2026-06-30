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
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion/react'],
  },
  images: {
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
