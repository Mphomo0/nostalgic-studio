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
  metadataBase: new URL('https://nostalgic-studio.co.za'),
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
    { name: 'Mpho Moipolai', url: 'https://nostalgic-studio.co.za/about' },
  ],
  creator: 'Nostalgic Studio',
  publisher: 'Nostalgic Studio',
  robots: { index: true, follow: true },
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
        '@id': 'https://nostalgic-studio.co.za/#organization',
        name: 'Nostalgic Studio',
        url: 'https://nostalgic-studio.co.za',
        logo: 'https://nostalgic-studio.co.za/images/logo/Logo.webp',
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

      // 2️⃣ Local Business Entity (with geo + service area) — recommended for local SEO pages:contentReference[oaicite:2]{index=2}
      {
        '@type': 'LocalBusiness',
        '@id': 'https://nostalgic-studio.co.za/#localbusiness',
        name: 'Nostalgic Studio',
        branchOf: {
          '@id': 'https://nostalgic-studio.co.za/#organization',
        },
        description:
          'Nostalgic Studio is a Johannesburg and Bloemfontein based digital design agency offering web design, UI/UX, and branding services across South Africa.',
        url: 'https://nostalgic-studio.co.za',
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
        image: 'https://nostalgic-studio.co.za/images/og-image.jpg',
        priceRange: '$$',
      },

      // 3️⃣ Services as separate entities for SEO clarity — best practice for service businesses:contentReference[oaicite:3]{index=3}
      {
        '@type': 'Service',
        '@id': 'https://nostalgic-studio.co.za/#service-web-design',
        name: 'Web Design Services',
        description:
          'Custom web design services tailored for startups and growing businesses.',
        provider: { '@id': 'https://nostalgic-studio.co.za/#localbusiness' },
      },
      {
        '@type': 'Service',
        '@id': 'https://nostalgic-studio.co.za/#service-branding',
        name: 'Branding Services',
        description:
          'Professional branding services including logo & visual identity design.',
        provider: { '@id': 'https://nostalgic-studio.co.za/#localbusiness' },
      },
      {
        '@type': 'Service',
        '@id': 'https://nostalgic-studio.co.za/#service-uiux',
        name: 'UI/UX Design Services',
        description:
          'User interface & experience design optimized for conversion and usability.',
        provider: { '@id': 'https://nostalgic-studio.co.za/#localbusiness' },
      },

      // 4️⃣ Example Reviews (attach to LocalBusiness):contentReference[oaicite:4]{index=4}
      {
        '@type': 'Review',
        '@id': 'https://nostalgic-studio.co.za/#review-1',
        itemReviewed: {
          '@id': 'https://nostalgic-studio.co.za/#localbusiness',
        },
        author: { '@type': 'Person', name: 'Ohentse Diseko' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Nostalgic Studio delivered a professional, high-quality website with great collaboration.',
      },
      {
        '@type': 'Review',
        '@id': 'https://nostalgic-studio.co.za/#review-2',
        itemReviewed: {
          '@id': 'https://nostalgic-studio.co.za/#localbusiness',
        },
        author: { '@type': 'Person', name: 'Stefan Mills' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'The team created a modern, professional site that matched our brand.',
      },

      // 5️⃣ FAQ Page Schema — answers visible FAQs on site (higher CTR often seen):contentReference[oaicite:5]{index=5}
      {
        '@type': 'FAQPage',
        '@id': 'https://nostalgic-studio.co.za/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services does Nostalgic Studio offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Web design, branding, UI/UX design and custom digital product services.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you serve clients in Bloemfontein?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — we provide design services to clients in Bloemfontein, Johannesburg, and across South Africa.',
            },
          },
        ],
      },

      // 6️⃣ Breadcrumb Navigation Schema (important for SERP structure):contentReference[oaicite:6]{index=6}
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://nostalgic-studio.co.za/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://nostalgic-studio.co.za/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://nostalgic-studio.co.za/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Web Design Services',
            item: 'https://nostalgic-studio.co.za/services/web-design',
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
