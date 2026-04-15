import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nostalgic-studio.co.za'),

  title: {
    default:
      'Custom Web Development & Web Design Johannesburg | Nostalgic Studio',
    template: '%s | Nostalgic Studio',
  },

  description:
    'Custom web development and web design agency in Johannesburg. We build high-performance Next.js websites for startups and growing businesses in South Africa.',

  // Keywords not critical but kept for minor engines
  keywords: [
    'web development Johannesburg',
    'web design South Africa',
    'Next.js agency South Africa',
    'custom website development',
    'Johannesburg web designer',
    'startup web development',
  ],

  authors: [
    { name: 'Mpho Moipolai', url: 'https://www.nostalgic-studio.co.za/about' },
  ],

  creator: 'Nostalgic Studio',
  publisher: 'Nostalgic Studio',

  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },

  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za',
  },

  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.nostalgic-studio.co.za',
    siteName: 'Nostalgic Studio',
    title:
      'Custom Web Development & Web Design Johannesburg | Nostalgic Studio',
    description:
      'We build high-performance Next.js websites for startups and businesses in South Africa. Custom, scalable, and SEO-optimized.',

    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Web Development Johannesburg - Nostalgic Studio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Custom Web Development & Web Design Johannesburg | Nostalgic Studio',
    description:
      'High-performance websites built with Next.js for startups and growing businesses in South Africa.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.nostalgic-studio.co.za/#organization',
        name: 'Nostalgic Studio',
        url: 'https://www.nostalgic-studio.co.za',
        logo: 'https://www.nostalgic-studio.co.za/images/logo/Logo.webp',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Johannesburg',
          addressRegion: 'Gauteng',
          addressCountry: 'ZA',
        },
        sameAs: [
          'https://www.facebook.com/webengineers',
          'https://www.linkedin.com/company/110356396',
          'https://www.instagram.com/studionostalgic',
        ],
      },

      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.nostalgic-studio.co.za/#business',
        name: 'Nostalgic Studio',
        parentOrganization: {
          '@id': 'https://www.nostalgic-studio.co.za/#organization',
        },
        description:
          'Custom web development and web design agency in Johannesburg, South Africa specializing in Next.js websites.',
        url: 'https://www.nostalgic-studio.co.za',
        telephone: '+27-82-448-3273',

        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Johannesburg',
          addressRegion: 'Gauteng',
          addressCountry: 'ZA',
        },

        geo: {
          '@type': 'GeoCoordinates',
          latitude: '-26.2041',
          longitude: '28.0473',
        },

        areaServed: [
          {
            '@type': 'City',
            name: 'Johannesburg'
          },
          {
            '@type': 'Country',
            name: 'South Africa'
          }
        ],

        image: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',

        priceRange: 'R5000 - R35000',
      },

    ],
  }

  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        {/* Verification */}
        <meta
          name="google-site-verification"
          content="Z9mBnLyDFOUn6nKgbjCnnmKZupnoVrWjQtfYCEdy_f8"
        />

        {/* Main Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BYEL2HLX78"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BYEL2HLX78');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
