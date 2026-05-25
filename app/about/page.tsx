import type { Metadata } from 'next'

export const dynamic = 'force-static'

import AboutCTA from '@/components/pages/about/AboutCTA'
import AboutHero from '@/components/pages/about/AboutHero'
import AboutStory from '@/components/pages/about/AboutStory'
import AboutValues from '@/components/pages/about/AboutValues'
import AboutTeam from '@/components/pages/about/AboutTeam'
import Testimonials from '@/components/pages/home/Testimonials'
import AboutThisPage from '@/components/geo/AboutThisPage'

export const metadata: Metadata = {
  title: 'About | Digital Agency Johannesburg',
  description:
    'Founded in 2016, Nostalgic Studio is a Johannesburg digital agency building Next.js websites for startups.',
  keywords: [
    'about Nostalgic Studio',
    'digital design agency Johannesburg',
    'web design company South Africa',
    'creative studio founded 2016',
    'Mpho Moipolai designer',
    'Johannesburg web design agency',
  ],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/about',
  },
  openGraph: {
    title: 'About | Digital Agency Johannesburg',
    description:
      'Founded in 2016, Nostalgic Studio builds Next.js websites for startups in Johannesburg.',
    url: 'https://www.nostalgic-studio.co.za/about',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

import { webPageSchema, orgRef } from '@/app/structured-data/schemas'
import Script from 'next/script'

export default function page() {
  const schemas = [
    webPageSchema({
      url: '/about',
      name: 'About Nostalgic Studio | Johannesburg Digital Agency',
      description: 'Nostalgic Studio is a Johannesburg digital design agency founded in 2016 by Mpho Moipolai. We blend timeless design with modern Next.js innovation.',
    }),
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://www.nostalgic-studio.co.za/about#person',
      name: 'Mpho Moipolai',
      jobTitle: 'Founder & Creative Director',
      worksFor: orgRef(),
      url: 'https://www.nostalgic-studio.co.za/about',
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
      description:
        'Mpho Moipolai is a Johannesburg-based designer and developer with 13+ years of experience building digital products for startups across South Africa.',
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 md:pt-32">
        {schemas.map((s, i) => (
          <Script key={i} id={`schema-${i}`} type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
        <AboutHero />
        <AboutThisPage
          summary="Nostalgic Studio is a Johannesburg digital design agency founded in 2016 by Mpho Moipolai. We build fast, modern websites and brand identities for startups and growing businesses across South Africa using Next.js and Tailwind CSS."
          covers={[
            'Johannesburg Web Design',
            'Brand Identity',
            'UI/UX Design',
            'Next.js Development',
            'South Africa',
          ]}
          lastUpdated="March 2026"
        />

        {/* Server-rendered content for SEO and text-to-HTML ratio */}
        <section className="py-20 border-t border-border" aria-labelledby="foundation-heading">
          <div className="container-wide mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 id="foundation-heading" className="text-3xl font-bold mb-8">Built on Vision and Innovation</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                <p>
                  Since 2016, Nostalgic Studio has been at the intersection of artisanal design and technical precision. We believe that every business, regardless of size, deserves a digital presence that is as professional as it is powerful. In an era where <strong>web vitals and search engine visibility</strong> determine business success, we provide the technical edge needed to dominate the Johannesburg market.
                </p>
                <p>
                  Our foundation is built on the philosophy of "Nostalgia meet Innovation" — combining the timeless principles of graphic design with the cutting-edge capabilities of modern web frameworks like <strong>Next.js</strong>. This approach ensures that our websites are not just beautiful, but also incredibly fast, secure, and built to scale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Why Johannesburg businesses choose us?</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Johannesburg is a competitive hub. To stand out, businesses need more than a generic template. We offer <strong>custom, high-performance websites</strong> that load in under 2 seconds, which is crucial for retaining mobile users who are often on-the-go. Our local market knowledge allows us to tailor SEO strategies specifically for Gauteng-based audiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Our Technical Excellence</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    We are specialists in the React ecosystem. By leveraging Next.js, we provide businesses across South Africa with <strong>server-side rendered (SSR)</strong> applications. This technology ensures that your content is always accessible to search engine crawlers without relying on JavaScript rendering, which is exactly why our clients often see immediate improvements in Google rankings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">A Focus on Results</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Design without strategy is just art. We focus on conversion rates and user journeys. Every button placement, every heading, and every image is optimized to guide your customers toward your business goals. We've helped over 50 startups transform their digital presence into a reliable customer-generation machine.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Sustainable Partnerships</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    We don't just deliver a project and disappear. We build long-term partnerships. Our maintenance and hosting services ensure that your site remains secure and high-performing long after launch. We grow as our clients grow, providing the digital infrastructure needed for every stage of your business journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutStory />
        <AboutValues />
        <Testimonials />
        <AboutCTA />
      </main>
    </div>
  )
}
