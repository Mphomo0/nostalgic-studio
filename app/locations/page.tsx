import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, CheckCircle2 } from 'lucide-react'
import { locations } from '@/lib/locations-data'
import { breadcrumbSchema } from '@/app/structured-data/schemas'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Web Design Locations Johannesburg & South Africa',
  description:
    'Web design and SEO services across Johannesburg, Pretoria, Cape Town, Durban and Bloemfontein. Local expertise, fixed pricing, Next.js websites.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/locations',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/locations',
      'x-default': 'https://www.nostalgic-studio.co.za/locations',
    },
  },
  openGraph: {
    title: 'Web Design Locations Johannesburg & South Africa | Nostalgic Studio',
    description:
      'Web design and SEO services across Johannesburg, Pretoria, Cape Town, Durban and Bloemfontein. Local expertise, fixed pricing, Next.js websites.',
    url: 'https://www.nostalgic-studio.co.za/locations',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design Locations — Nostalgic Studio',
      },
    ],
  },
}

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Locations', url: '/locations' },
            ]),
          ]),
        }}
      />
      <main className="min-h-screen">
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-primary/10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Locations We Serve
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Web design, SEO and branding for businesses across Johannesburg,
              Gauteng, and South Africa. Based in Midrand, working locally and
              remotely nationwide.
            </p>
          </div>
        </section>

        {/* Why local matters */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Why Choose a Local Web Design Agency?
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              A local agency understands the businesses, competition, and
              search behaviour in your specific market. We tailor every
              project to your area — from the suburbs you serve to the local
              search terms your customers actually use.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                'Local SEO targeting your city and surrounding suburbs',
                'South African hosting and mobile-network-optimised performance',
                'Local payment gateways (PayFast, Yoco, Ozow) built in',
                'Fixed pricing from R3,500 — no hidden fees',
                'AI search (GEO) optimisation for ChatGPT, Gemini and Perplexity',
                'Case studies from real clients in your region',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">
              Browse by Location
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group block border rounded-xl p-6 bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Web Design {loc.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {loc.province}
                    {loc.remoteNote ? ' · Remote' : ''}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {loc.description.slice(0, 120)}...
                  </p>
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5 border-t border-border text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don&apos;t See Your City?
            </h2>
            <p className="text-muted-foreground mb-8">
              We work with clients across all of South Africa, remotely or
              in person. Contact us for a free consultation and fixed quote,
              wherever you are based.
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
