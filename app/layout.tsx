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

const SCHEMA_PERSON = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.nostalgic-studio.co.za/about#person',
  name: 'Mpho Moipolai',
  url: 'https://www.nostalgic-studio.co.za/about',
  jobTitle: 'Founder & Lead Developer',
  worksFor: { '@id': 'https://www.nostalgic-studio.co.za/#organization' },
  sameAs: [
    'https://www.linkedin.com/in/mpho-moipolai-26b06286/',
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
  foundingDate: '2013',
  currenciesAccepted: 'ZAR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, EFT',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' },
  ],
  priceRange: 'R3,500–R60,000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Midrand',
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    postalCode: '1685',
    addressCountry: 'ZA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-25.9985',
    longitude: '28.1322',
  },
  areaServed: [
    { '@type': 'City', name: 'Johannesburg, South Africa' },
    { '@type': 'City', name: 'Sandton, South Africa' },
    { '@type': 'City', name: 'Soweto, South Africa' },
    { '@type': 'City', name: 'Midrand, South Africa' },
    { '@type': 'City', name: 'Mbombela, South Africa' },
    { '@type': 'City', name: 'Pretoria, South Africa' },
    { '@type': 'City', name: 'Randburg, South Africa' },
    { '@type': 'City', name: 'Fourways, South Africa' },
    { '@type': 'City', name: 'Rosebank, South Africa' },
    { '@type': 'City', name: 'Bryanston, South Africa' },
    { '@type': 'City', name: 'Thembisa, South Africa' },
    { '@type': 'City', name: 'Cape Town, South Africa' },
    { '@type': 'City', name: 'Centurion, South Africa' },
    { '@type': 'City', name: 'Kimberley, South Africa' },
    { '@type': 'City', name: 'Polokwane, South Africa' },
    { '@type': 'City', name: 'Roodepoort, South Africa' },
    { '@type': 'City', name: 'Randfontein, South Africa' },
    { '@type': 'City', name: 'Bloemfontein, South Africa' },
    { '@type': 'City', name: 'Durban, South Africa' },
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
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      author: { '@type': 'Person', name: 'Ohentse Diseko' },
      reviewBody: 'Nostalgic Studio designed our website and delivered a professional, high-quality result. The collaboration was smooth and the final website exceeded expectations.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      author: { '@type': 'Person', name: 'Stefan Mills' },
      reviewBody: 'The Nostalgic Studio team created a modern, professional website that matches our brand perfectly. The design quality and attention to detail were outstanding.',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5.0,
    bestRating: 5,
    ratingCount: 6,
    reviewCount: 6,
  },
}

const SELLER = {
  '@type': 'Organization',
  name: 'Nostalgic Studio',
  url: 'https://www.nostalgic-studio.co.za',
} as const

const PRODUCT_RATING = {
  '@type': 'AggregateRating',
  ratingValue: 5.0,
  bestRating: 5,
  ratingCount: 6,
  reviewCount: 6,
} as const

const SCHEMA_PRODUCT_WEB = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Web Design Services Johannesburg',
  description: 'Custom Next.js websites with 90+ Lighthouse scores, SEO optimization, and mobile-first design. For startups and businesses in South Africa.',
  image: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
  url: 'https://www.nostalgic-studio.co.za/services/web-design-johannesburg',
  brand: { '@type': 'Brand', name: 'Nostalgic Studio' },
  aggregateRating: PRODUCT_RATING,
  offers: [
    { '@type': 'Offer', name: 'Starter Website', price: 3500, priceCurrency: 'ZAR', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', seller: SELLER },
    { '@type': 'Offer', name: 'Business Website', price: 15000, priceCurrency: 'ZAR', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', seller: SELLER },
    { '@type': 'Offer', name: 'E-Commerce Store', price: 25000, priceCurrency: 'ZAR', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', seller: SELLER },
  ],
}

const SCHEMA_PRODUCT_SEO = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SEO & AI Search Services Johannesburg',
  description: 'Classic SEO combined with Generative Engine Optimization (GEO) for visibility on Google, ChatGPT, Gemini, Claude, and Perplexity.',
  image: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
  url: 'https://www.nostalgic-studio.co.za/services/seo-services-johannesburg',
  brand: { '@type': 'Brand', name: 'Nostalgic Studio' },
  aggregateRating: PRODUCT_RATING,
  offers: [
    { '@type': 'Offer', name: 'Starter SEO', price: 1500, priceCurrency: 'ZAR', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', seller: SELLER },
    { '@type': 'Offer', name: 'Growth SEO', price: 5000, priceCurrency: 'ZAR', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', seller: SELLER },
    { '@type': 'Offer', name: 'Enterprise SEO', price: 10000, priceCurrency: 'ZAR', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', seller: SELLER },
  ],
}

const SITE_SCHEMAS_JSON = JSON.stringify([
  SCHEMA_WEBSITE, SCHEMA_ORGANIZATION, SCHEMA_PERSON,
  SCHEMA_BUSINESS, SCHEMA_PRODUCT_WEB, SCHEMA_PRODUCT_SEO,
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
        <Script id="meta-pixel" strategy="afterInteractive">
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
