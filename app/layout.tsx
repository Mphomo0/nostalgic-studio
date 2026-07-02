import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/layout/FloatingContact'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', adjustFontFallback: true, display: 'swap' })

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
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za',
      'x-default': 'https://www.nostalgic-studio.co.za',
    },
    types: {
      'application/rss+xml': [
        { url: 'https://www.nostalgic-studio.co.za/feed.xml', title: 'Nostalgic Studio Blog RSS Feed' },
      ],
    },
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
}

const SCHEMA_ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.nostalgic-studio.co.za/#organization',
  name: 'Nostalgic Studio',
  url: 'https://www.nostalgic-studio.co.za',
  foundingDate: '2013',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.nostalgic-studio.co.za/images/logo/Logo.webp',
    width: 200,
    height: 60,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Midrand',
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    postalCode: '1685',
    addressCountry: 'ZA',
  },
  areaServed: [
    { '@type': 'City', name: 'Johannesburg' },
    { '@type': 'City', name: 'Sandton' },
    { '@type': 'City', name: 'Midrand' },
    { '@type': 'City', name: 'Pretoria' },
    { '@type': 'Country', name: 'South Africa' },
  ],
  email: 'info@nostalgic-studio.co.za',
  sameAs: [
    'https://www.facebook.com/webengineers',
    'https://www.linkedin.com/company/110356396',
    'https://www.instagram.com/studionostalgic',
    'https://clutch.co/profile/nostalgic-studio',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+27-82-448-3273',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'ZA',
  },
}

const SITE_SCHEMAS_JSON = JSON.stringify([
  SCHEMA_WEBSITE, SCHEMA_ORGANIZATION,
])

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SITE_SCHEMAS_JSON }} />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1432424522283384');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1432424522283384&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BYEL2HLX78"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BYEL2HLX78');
          `}
        </Script>
      </head>

      <body
        className="antialiased"
      >
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
