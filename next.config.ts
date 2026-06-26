import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/industries/ecommerce',
        destination: '/industries/e-commerce',
        permanent: true,
      },
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion/react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
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
