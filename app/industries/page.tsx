import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { industries } from '@/lib/industries-data'
import { breadcrumbSchema, webPageSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'Web Design by Industry Johannesburg',
  description:
    'Industry-specific web design for healthcare, construction, e-commerce, professional services & startups in Johannesburg and South Africa.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/industries',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/industries',
      'x-default': 'https://www.nostalgic-studio.co.za/industries',
    },
  },
  openGraph: {
    title: 'Web Design by Industry Johannesburg | Nostalgic Studio',
    description: 'Industry-specific web design for healthcare, construction, e-commerce, professional services & startups in Johannesburg and South Africa.',
    url: 'https://www.nostalgic-studio.co.za/industries',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [{ url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg', width: 1200, height: 630, alt: 'Industry Web Design Johannesburg — Nostalgic Studio' }],
  },
}

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Industries', url: '/industries' },
            ]),
          ]),
        }}
      />
      <main className="min-h-screen">
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-primary/10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specialized web design and digital services tailored for your
              industry. We understand the unique challenges and opportunities in
              your market.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group block border rounded-xl p-6 bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {ind.name} Website Design
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {ind.description.slice(0, 150)}...
                  </p>
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
