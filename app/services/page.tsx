import type { Metadata } from 'next'
import ServicesList from '@/components/pages/services/ServicesList'
import ProcessSection from '@/components/pages/services/ProcessSection'
import CTASection from '@/components/pages/services/CTASection'
import ServicesHero from '@/components/pages/services/ServicesHero'
import { process, services } from '@/components/pages/services/data'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Services | Nostalgic Studio',
  description:
    'Professional web design, UI/UX design, branding, and digital design services for startups and businesses. Our comprehensive digital solutions drive growth and conversions.',
  keywords: [
    'web design services',
    'UI UX design agency',
    'branding services',
    'digital design company',
    'website development',
    'responsive web design',
    'logo design services',
    'brand identity design',
  ],
  openGraph: {
    title: 'Services | Nostalgic Studio',
    description:
      'Professional web design, UI/UX design, branding, and digital design services for startups.',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data for Services */}
      <Script
        id="services-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Nostalgic Studio Design Services',
            description:
              'We offer comprehensive digital solutions tailored for startups and growing businesses, including web design, UI/UX design, branding, and digital design. Every service is designed to help your business thrive.',
            provider: {
              '@type': 'Organization',
              name: 'Nostalgic Studio',
              url: 'https://www.nostalgic-studio.co.za',
              logo: 'https://www.nostalgic-studio.co.za/logo.png',
              sameAs: [
                'https://www.facebook.com/webengineers',
                'https://www.linkedin.com/company/110356396/',
                'https://www.instagram.com/studionostalgic',
              ],
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Design Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Web Design',
                    description:
                      'Custom web design solutions focused on responsive layouts, user experience, and conversion optimization.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'UI/UX Design',
                    description:
                      'User interface and user experience design to ensure intuitive and engaging digital products.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Branding',
                    description:
                      'Complete branding solutions, including visual identity, logo design, and brand guidelines.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Digital Design',
                    description:
                      'Creative digital designs for marketing, social media, and online campaigns to boost engagement.',
                  },
                },
              ],
            },
          }),
        }}
      />

      <main className="pt-24 md:pt-32">
        <ServicesHero />
        <ServicesList services={services} />
        <ProcessSection steps={process} />
        <CTASection />
      </main>
    </div>
  )
}
