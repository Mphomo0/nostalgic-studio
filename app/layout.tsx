import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
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
  metadataBase: new URL('https://nostalgic-studio.co.za'),
  title: {
    default: 'Nostalgic Studio | Digital Design Agency for Startups',
    template: '%s | Nostalgic Studio',
  },
  description: 'Nostalgic Studio is a digital design agency crafting stunning websites, brands, and digital products for startups and growing businesses. Web design, UI/UX, and branding services.',
  keywords: [
    'digital design agency',
    'web design company',
    'UI/UX design studio',
    'branding agency',
    'startup web design',
    'website design services',
    'responsive website design',
    'South Africa web design',
    'Johannesburg design agency',
    'creative studio',
  ],
  authors: [{ name: 'Mpho Moipolai', url: 'https://nostalgic-studio.co.za/about' }],
  creator: 'Nostalgic Studio',
  publisher: 'Nostalgic Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://nostalgic-studio.co.za',
    siteName: 'Nostalgic Studio',
    title: 'Nostalgic Studio | Digital Design Agency for Startups',
    description: 'Crafting stunning websites, brands, and digital products for startups and growing businesses.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nostalgic Studio - Digital Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nostalgic Studio | Digital Design Agency',
    description: 'Crafting stunning websites, brands, and digital products for startups.',
    images: ['/images/og-image.jpg'],
    creator: '@studionostalgic',
  },
  alternates: {
    canonical: 'https://nostalgic-studio.co.za',
  },
  category: 'Design',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nostalgic Studio',
    url: 'https://nostalgic-studio.co.za',
    logo: 'https://nostalgic-studio.co.za/images/logo/Logo.webp',
    description: 'Digital design agency crafting stunning websites, brands, and digital products for startups and growing businesses.',
    foundingDate: '2016',
    founder: {
      '@type': 'Person',
      name: 'Mpho Moipolai',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
      addressLocality: 'Johannesburg',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+27-XXX-XXXX',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.facebook.com/webengineers',
      'https://www.linkedin.com/company/110356396',
      'https://www.instagram.com/studionostalgic',
    ],
    areaServed: 'Worldwide',
    serviceType: 'Web Design, UI/UX Design, Branding',
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
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
