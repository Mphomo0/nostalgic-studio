import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, CheckCircle2 } from 'lucide-react'
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
    description:
      'Industry-specific web design for healthcare, construction, e-commerce, professional services & startups in Johannesburg and South Africa.',
    url: 'https://www.nostalgic-studio.co.za/industries',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Industry Web Design Johannesburg — Nostalgic Studio',
      },
    ],
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
        {/* Why industry-specific web design matters */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Why Industry-Specific Web Design Matters
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              A generic template website rarely works in competitive markets.
              Visitors in your industry have specific expectations — they want
              to see relevant credentials, familiar terminology, and design
              patterns that build trust within seconds. A healthcare patient
              looks for different signals than a property developer evaluating a
              construction firm. We tailor every website to the visual
              standards, conversion goals, and compliance requirements of your
              specific sector.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                'Sector-appropriate design language and trust signals',
                'Conversion flows matched to how buyers in your industry decide',
                'SEO targeting the keywords your clients actually search',
                'Compliance-aware forms and data handling (POPIA)',
                'Competitor analysis within your specific vertical',
                'Content strategy built around your industry pain points',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">
              Browse by Industry
            </h2>
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
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {ind.name} Website Design
                  </h3>
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

        {/* Our approach */}
        <section className="py-20 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Our Approach to Industry Web Design
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="font-bold mb-3">Industry Research</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Before writing a line of code, we study your competitors,
                  analyse how buyers in your sector behave online, and identify
                  the trust signals that convert visitors into enquiries in your
                  specific market.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="font-bold mb-3">Tailored Design & Build</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every page is designed around the decisions your clients make.
                  Whether that is showcasing project portfolios for construction
                  tenders, building patient trust for a medical practice, or
                  driving fast checkout for e-commerce — the design serves the
                  outcome.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="font-bold mb-3">SEO & Visibility</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Each website launches with technical SEO, structured data, and
                  location-specific content built in. We target the search terms
                  your clients use and optimise for Google's local pack in
                  Johannesburg and Gauteng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5 border-t border-border text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Not Sure Which Industry Page Fits Your Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us for a free consultation. We work with businesses across
              all sectors in Johannesburg, Gauteng, and South Africa — and we
              will tell you exactly what your website needs to compete in your
              market.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
