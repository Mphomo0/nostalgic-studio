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
    default: 'Web Design for Startups Johannesburg',
    template: '%s | Nostalgic Studio',
  },

  description:
    'Web design agency for startups in Johannesburg. Custom Next.js websites, branding & SEO. 70+ projects delivered. From R3,500.',

  keywords: [
    'Web Design Johannesburg',
    'Website Design Johannesburg',
    'Web Design South Africa',
    'Next.js Website Design',
    'UI/UX Design Agency Johannesburg',
    'Branding and Graphic Design Johannesburg',
    'SEO Services Johannesburg',
    'Social Media Marketing Johannesburg',
    'Social Media Ads Johannesburg',
    'Ecommerce Website Development South Africa',
    'Web Hosting South Africa',
    'UX UI Design Services',
    'Digital Agency Johannesburg',
    'Startup Web Design South Africa',
    'Affordable Web Design Johannesburg',
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
    title: 'Web Design for Startups Johannesburg | Nostalgic Studio',
    description:
      'Web design agency for startups in Johannesburg. Custom Next.js websites, branding & SEO. 70+ projects delivered. From R3,500.',

    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design for Startups Johannesburg - Nostalgic Studio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Web Design for Startups Johannesburg | Nostalgic Studio',
    description:
      'Custom Next.js websites for startups in Johannesburg. SEO-optimized, fast, and conversion-focused.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

const SCHEMA_PERSON = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.nostalgic-studio.co.za/about#person',
  name: 'Mpho Moipolai',
  url: 'https://www.nostalgic-studio.co.za/about',
  jobTitle: 'Founder & Lead Developer',
  worksFor: { '@id': 'https://www.nostalgic-studio.co.za/#organization' },
  sameAs: [
    'https://www.linkedin.com/private/moipolai-mpho-110356396/',
    'https://www.instagram.com/studionostalgic',
  ],
  knowsAbout: [
    'Web Design',
    'UI/UX Design',
    'Brand Identity',
    'Next.js Development',
    'SEO',
    'Digital Strategy',
  ],
}

const SCHEMA_WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.nostalgic-studio.co.za/#website',
  inLanguage: 'en-ZA',
  name: 'Nostalgic Studio',
  url: 'https://www.nostalgic-studio.co.za',
  description:
    'Top-rated web design agency in Johannesburg offering Next.js development, UI/UX, and branding services.',
  publisher: {
    '@id': 'https://www.nostalgic-studio.co.za/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.nostalgic-studio.co.za/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const SCHEMA_ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.nostalgic-studio.co.za/#organization',
  name: 'Nostalgic Studio',
  url: 'https://www.nostalgic-studio.co.za',
  foundingDate: '2016',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.nostalgic-studio.co.za/images/logo/Logo.webp',
    width: 200,
    height: 60,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  areaServed: [
    { '@type': 'City', name: 'Johannesburg' },
    { '@type': 'City', name: 'Sandton' },
    { '@type': 'City', name: 'Midrand' },
    { '@type': 'City', name: 'Pretoria' },
    { '@type': 'Country', name: 'South Africa' },
  ],
  sameAs: [
    'https://www.facebook.com/webengineers',
    'https://www.linkedin.com/company/110356396',
    'https://www.instagram.com/studionostalgic',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+27-82-448-3273',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'ZA',
  },
}

const SCHEMA_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.nostalgic-studio.co.za/#business',
  name: 'Nostalgic Studio',
  parentOrganization: { '@id': 'https://www.nostalgic-studio.co.za/#organization' },
  description:
    'Nostalgic Studio is a web design and development agency in Johannesburg, South Africa, specialising in custom Next.js websites, UI/UX design, branding, SEO, and social media marketing for startups and small businesses.',
  url: 'https://www.nostalgic-studio.co.za',
  telephone: '+27-82-448-3273',
  foundingDate: '2016',
  currenciesAccepted: 'ZAR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, EFT',
  openingHours: 'Mo-Fr 08:00-17:00',
  priceRange: 'R3,500–R60,000',
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
    { '@type': 'City', name: 'Johannesburg, South Africa' },
    { '@type': 'City', name: 'Sandton, South Africa' },
    { '@type': 'City', name: 'Soweto, South Africa' },
    { '@type': 'City', name: 'Midrand, South Africa' },
    { '@type': 'City', name: 'Mbombela, South Africa' },
    { '@type': 'City', name: 'Pretoria, South Africa' },
    { '@type': 'City', name: 'Randburg, South Africa' },
    { '@type': 'City', name: 'Thembisa, South Africa' },
    { '@type': 'City', name: 'Cape Town, South Africa' },
    { '@type': 'City', name: 'Centurion, South Africa' },
    { '@type': 'City', name: 'Kimberley, South Africa' },
    { '@type': 'City', name: 'Polokwane, South Africa' },
    { '@type': 'City', name: 'Roodepoort, South Africa' },
    { '@type': 'City', name: 'Randfontein, South Africa' },
    { '@type': 'City', name: 'Bloemfontein, South Africa' },
    { '@type': 'City', name: 'Hammanskraal, South Africa' },
    { '@type': 'City', name: 'Potchefstroom, South Africa' },
    { '@type': 'City', name: 'Durban, South Africa' },
    { '@type': 'Place', name: 'Bryanston, Sandton, 2191, South Africa' },
    { '@type': 'Place', name: 'Century City, Cape Town, 7441, South Africa' },
    { '@type': 'AdministrativeArea', name: 'Gauteng, South Africa' },
    { '@type': 'Country', name: 'South Africa' },
  ],
  image: [
    'https://www.nostalgic-studio.co.za/images/og-image.jpg',
    'https://www.nostalgic-studio.co.za/images/logo/Logo.webp',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design & Digital Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design Johannesburg' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services Johannesburg' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next.js Website Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Graphic Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Hosting South Africa' } },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        {/* Verification */}
        <meta
          name="google-site-verification"
          content="Z9mBnLyDFOUn6nKgbjCnnmKZupnoVrWjQtfYCEdy_f8"
        />

        {/* Site-wide Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_WEBSITE) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORGANIZATION) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_PERSON) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BUSINESS) }} />

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
