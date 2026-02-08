import type { Metadata } from 'next'
import Hero from '@/components/pages/home/Hero'
import { PortfolioPreview } from '@/components/pages/home/portfolio-preview'
import ServicesPreview from '@/components/pages/home/ServicesPreview'
import Testimonials from '@/components/pages/home/Testimonials'
import CTA from '@/components/pages/home/CTA'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Nostalgic Studio crafts stunning websites, brands, and digital products that help startups and businesses stand out. Award-winning digital design agency offering web design, UI/UX, and branding services.',
  openGraph: {
    title: 'Nostalgic Studio | Digital Design Agency for Startups',
    description: 'Crafting stunning websites, brands, and digital products that help startups and businesses stand out.',
  },
}

export default function Home() {
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nostalgic Studio',
    url: 'https://nostalgicstudio.com',
    description: 'Digital design agency crafting stunning websites, brands, and digital products for startups.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nostalgic-studio.co.za/services?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </>
  )
}
