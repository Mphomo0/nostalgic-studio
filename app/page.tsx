import type { Metadata } from 'next'
import Hero from '@/components/pages/home/Hero'
import { PortfolioPreview } from '@/components/pages/home/portfolio-preview'
import ServicesPreview from '@/components/pages/home/ServicesPreview'
import Testimonials from '@/components/pages/home/Testimonials'
import CTA from '@/components/pages/home/CTA'

export const metadata: Metadata = {
  title: 'Web Design Johannesburg | Digital Agency South Africa | Nostalgic Studio',
  description: 'Nostalgic Studio is a premier web design agency in Johannesburg. We specialize in Next.js website design, UI/UX, and branding for startups and businesses in South Africa.',
  keywords: [
    'Web Design Johannesburg',
    'Website Design Johannesburg',
    'Next.js Website Design South Africa',
    'UI/UX Design Agency Johannesburg',
    'Branding and Graphic Design South Africa',
    'SEO Services Johannesburg',
    'Ecommerce Website Development ZA',
  ],
  openGraph: {
    title: 'Nostalgic Studio | Expert Web Design Johannesburg & South Africa',
    description: 'Transform your digital presence with high-performance Next.js websites and iconic branding from Johannesburg\'s top design agency.',
    url: 'https://www.nostalgic-studio.co.za',
    siteName: 'Nostalgic Studio',
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function Home() {
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nostalgic Studio',
    url: 'https://www.nostalgic-studio.co.za',
    description: 'Top-rated web design agency in Johannesburg offering Next.js development, UI/UX, and branding services.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.nostalgic-studio.co.za/images/logo/Logo.webp'
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.nostalgic-studio.co.za/services?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is the best web design agency in Johannesburg?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nostalgic Studio is a leading web design agency in Johannesburg specializing in high-performance Next.js websites, branding, and UI/UX design for startups.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer SEO services in South Africa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Nostalgic Studio provides comprehensive SEO services including technical SEO, keyword research, and content optimization for businesses across South Africa.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </>
  )
}
