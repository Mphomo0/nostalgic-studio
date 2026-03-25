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
    default: 'Nostalgic Studio | Digital Design Agency for Startups',
    template: '%s | Nostalgic Studio',
  },
  description:
    'Nostalgic Studio is a digital design agency crafting stunning websites, brands, and digital products for startups and growing businesses. Web design, UI/UX, and branding services.',
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
    'local business web design',
  ],
  authors: [
    { name: 'Mpho Moipolai', url: 'https://www.nostalgic-studio.co.za/about' },
  ],
  creator: 'Nostalgic Studio',
  publisher: 'Nostalgic Studio',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za',
    languages: {
      'en': 'https://www.nostalgic-studio.co.za',
      'en-ZA': 'https://www.nostalgic-studio.co.za',
      'x-default': 'https://www.nostalgic-studio.co.za',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.nostalgic-studio.co.za',
    siteName: 'Nostalgic Studio',
    title: 'Nostalgic Studio | Digital Design Agency',
    description: 'Nostalgic Studio is a digital design agency crafting stunning websites, brands, and digital products for startups and growing businesses.',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nostalgic Studio - Digital Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nostalgic Studio | Digital Design Agency',
    description: 'Nostalgic Studio is a digital design agency crafting stunning websites, brands, and digital products.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const enterpriseSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1️⃣ Organization Entity
      {
        '@type': 'Organization',
        '@id': 'https://www.nostalgic-studio.co.za/#organization',
        name: 'Nostalgic Studio',
        url: 'https://www.nostalgic-studio.co.za',
        logo: 'https://www.nostalgic-studio.co.za/images/logo/Logo.webp',
        sameAs: [
          'https://www.facebook.com/webengineers',
          'https://www.linkedin.com/company/110356396',
          'https://www.instagram.com/studionostalgic',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+27-82-448-3273',
            contactType: 'customer service',
            availableLanguage: ['English'],
          },
        ],
      },

      // 2️⃣ Local Business Entity (merged with Organization)
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.nostalgic-studio.co.za/#business',
        name: 'Nostalgic Studio',
        parentOrganization: {
          '@id': 'https://www.nostalgic-studio.co.za/#organization',
        },
        description:
          'Nostalgic Studio is a Johannesburg and Bloemfontein based digital design agency offering web design, UI/UX, and branding services across South Africa.',
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
          { '@type': 'City', name: 'Johannesburg' },
          { '@type': 'City', name: 'Bloemfontein' },
          { '@type': 'Country', name: 'South Africa' },
        ],
        image: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        priceRange: '$$',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      },

      // 3️⃣ Services as separate entities for SEO clarity
      {
        '@type': 'Service',
        '@id': 'https://www.nostalgic-studio.co.za/#service-web-design',
        name: 'Web Design Services',
        description:
          'Custom web design services tailored for startups and growing businesses.',
        provider: {
          '@id': 'https://www.nostalgic-studio.co.za/#business',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://www.nostalgic-studio.co.za/#service-branding',
        name: 'Branding Services',
        description:
          'Professional branding services including logo & visual identity design.',
        provider: {
          '@id': 'https://www.nostalgic-studio.co.za/#business',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://www.nostalgic-studio.co.za/#service-uiux',
        name: 'UI/UX Design Services',
        description:
          'User interface & experience design optimized for conversion and usability.',
        provider: {
          '@id': 'https://www.nostalgic-studio.co.za/#business',
        },
      },

      // 4️⃣ Reviews (attached to LocalBusiness)
      {
        '@type': 'Review',
        '@id': 'https://www.nostalgic-studio.co.za/#review-1',
        itemReviewed: {
          '@id': 'https://www.nostalgic-studio.co.za/#business',
        },
        author: { '@type': 'Person', name: 'Ohentse Diseko' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Nostalgic Studio delivered a professional, high-quality website with great collaboration.',
      },
      {
        '@type': 'Review',
        '@id': 'https://www.nostalgic-studio.co.za/#review-2',
        itemReviewed: {
          '@id': 'https://www.nostalgic-studio.co.za/#business',
        },
        author: { '@type': 'Person', name: 'Stefan Mills' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'The team created a modern, professional site that matched our brand.',
      },

      // 5️⃣ Breadcrumb Navigation Schema
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.nostalgic-studio.co.za/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.nostalgic-studio.co.za/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://www.nostalgic-studio.co.za/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Web Design Services',
            item: 'https://www.nostalgic-studio.co.za/services/web-design',
          },
        ],
      },
    ],
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta
          name="ahrefs-site-verification"
          content="a0470f69c33928b32f9839d4b0a5b876bb9703a10a5a1fdd7d79c12d10f28f8c"
        />
        <meta
          name="google-site-verification"
          content="Z9mBnLyDFOUn6nKgbjCnnmKZupnoVrWjQtfYCEdy_f8"
        />

        {/* 🚀 Enterprise SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(enterpriseSchema),
          }}
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
