import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, MapPin, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { locations, suburbSlugs, type LocationInfo } from '@/lib/locations-data'
import {
  serviceSchema,
  breadcrumbSchema,
  faqPageSchema,
} from '@/app/structured-data/schemas'
import {
  WEBSITE_PRICE_RANGE,
  formatRand,
  getPackage,
} from '@/lib/pricing-data'

const locationBySlug = new Map(locations.map((l) => [l.slug, l]))

export const dynamic = 'force-static'

export function generateStaticParams() {
  return suburbSlugs.map((slug) => ({ slug }))
}

function locationMeta(loc: LocationInfo) {
  return { title: loc.titleTag, desc: loc.metaDescription }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const loc = locationBySlug.get(slug)
  if (!loc) return {}
  const { title, desc } = locationMeta(loc)
  const url = `https://www.nostalgic-studio.co.za/locations/${loc.slug}`
  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
      languages: {
        'en-ZA': url,
        'x-default': url,
      },
    },
    openGraph: {
      title: `${title} | Nostalgic Studio`,
      description: desc,
      url,
      siteName: 'Nostalgic Studio',
      type: 'website',
      images: [{
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `Web Design ${loc.name} — Nostalgic Studio`,
      }],
    },
  }
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const loc = locationBySlug.get(slug)
  if (!loc) notFound()

  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Locations', url: '/locations' },
      { name: `${loc.name}`, url: `/locations/${loc.slug}` },
    ]),
    serviceSchema({
      id: `web-design-${loc.slug}`,
      name: `Web Design ${loc.name}`,
      description: `Professional web design and development services in ${loc.name}, ${loc.province}. Custom Next.js websites, SEO, branding, and e-commerce.`,
      url: `/locations/${loc.slug}`,
      areaServed: `${loc.name}, South Africa`,
      priceRange: WEBSITE_PRICE_RANGE,
      deliveryTime: '4-8 weeks',
    }),
    // FAQs render as always-visible cards below, so the answers are already in
    // the HTML — this makes the same Q&A pairs machine-readable for AI engines
    // and Google's FAQ rich results.
    ...(loc.faq.length > 0
      ? [faqPageSchema(loc.faq.map(({ q, a }) => ({ question: q, answer: a })))]
      : []),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-primary/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
                Web Design Agency — {loc.name}, {loc.province}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Web Design {loc.name}
              </h1>
              {/* loc.description rather than a generic line — the same
                  sentence on eight pages is boilerplate, and each location
                  already has copy written about its own market. */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {loc.description}
              </p>
              {loc.remoteNote && (
                <p className="text-sm text-muted-foreground border-l-2 border-primary/40 pl-4 mb-8">
                  {loc.remoteNote}
                </p>
              )}
              <div className="flex flex-wrap gap-4 mb-10">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/web-design-johannesburg">View Website Packages</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {loc.name}, {loc.province}
                </span>
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" /> Serving {loc.population}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About — Unique content per location */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Web Design for {loc.name} Businesses
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {loc.uniqueContent}
                </p>
              </div>
              <div className="bg-card border rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-muted-foreground">Location</dt>
                    <dd className="font-medium">
                      {loc.name}, {loc.province}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Population</dt>
                    <dd className="font-medium">{loc.population}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Key Business Areas</dt>
                    <dd className="font-medium">{loc.businessHub}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Nearby Suburbs</dt>
                    <dd className="font-medium">{loc.nearby.join(', ')}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Starting Price</dt>
                    <dd className="font-medium text-primary">
                      From {formatRand(getPackage('starter-website').min)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Local Businesses */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              Local Businesses We Serve in {loc.name}
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              We build websites for a wide range of businesses in {loc.name}
              {' '}and the surrounding {loc.province} area.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loc.localBusinesses.map((b) => (
                <div
                  key={b}
                  className="border rounded-xl p-5 bg-card text-center font-medium hover:border-primary/30 transition-colors"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Case Study */}
        {loc.localCaseStudy ? (
          <section className="py-16 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <p className="text-xs text-primary font-semibold tracking-wide uppercase mb-2">
                  Local Case Study
                </p>
                <h2 className="text-2xl font-bold mb-3">
                  {loc.localCaseStudy.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {loc.localCaseStudy.description}
                </p>
                <Button asChild variant="outline">
                  <Link href={`/projects/${loc.localCaseStudy.slug}`}>
                    Read the Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        ) : null}

        {/* Service links. Deliberately links only — the descriptions here
            were identical on every location page and duplicated the service
            pages they point at. The internal links are the part with value. */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-6">
              What we do for {loc.name} businesses
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                ['Web Design', '/services/web-design-johannesburg'],
                ['SEO & AI Search', '/services/seo-services-johannesburg'],
                ['E-commerce', '/services/ecommerce-website-development'],
                ['Branding', '/services/branding-design'],
                ['UI/UX Design', '/services/ux-ui-design'],
                ['Social Media', '/services/social-media-marketing'],
              ].map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="rounded-full border px-5 py-2.5 text-sm font-medium bg-card hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why us — the "local agency" argument only holds where we are
            actually local. For cities we serve remotely (loc.remoteNote), we
            make the honest case for a remote studio instead of claiming a
            presence we do not have. */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {loc.remoteNote ? (
                <>
                  <h2 className="text-3xl font-bold mb-6">
                    Working with a Johannesburg Studio from {loc.name}
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      We do not have an office in {loc.name}. We are based in
                      Johannesburg and run {loc.name} projects remotely — over
                      email, video calls, and shared design reviews. In
                      practice most clients never need an in-person meeting,
                      and the ones who do are usually better served by a studio
                      down the road from them. We would rather say that plainly
                      than imply a {loc.province} presence we do not have.
                    </p>
                    <p>
                      What being remote does not change: your site is still
                      built for the {loc.name} market. That means local SEO
                      targeting {loc.name} and nearby areas like{' '}
                      {loc.nearby.slice(0, 3).join(', ')}, South African
                      hosting, the payment gateways {loc.province} customers
                      actually use, and pages tuned for local mobile networks —
                      where most South African traffic comes from. Pricing and
                      timelines are identical to our Gauteng projects.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-6">
                    Working with us in {loc.name}
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      We are based in Gauteng, so {loc.name} is a drive away
                      rather than a video call. Every build targets{' '}
                      {loc.name} and the suburbs around it —{' '}
                      {loc.nearby.slice(0, 3).join(', ')} — on South African
                      hosting, with the payment gateways your customers already
                      use.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Pricing has its own section on the homepage, the starting price is
            in Quick Facts above, and every location FAQ answers the cost
            question — a fourth restatement here was pure boilerplate. */}

        {/* FAQ */}
        {loc.faq.length > 0 ? (
          <section className="py-16 bg-muted/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Frequently Asked Questions About Web Design in {loc.name}
              </h2>
              <div className="space-y-6">
                {loc.faq.map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold mb-2">{item.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Related Locations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">
              More Locations
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {locations
                .filter((l) => l.slug !== loc.slug)
                .slice(0, 6)
                .map((l) => (
                  <Button key={l.slug} asChild variant="outline">
                    <Link href={`/locations/${l.slug}`}>
                      <MapPin className="mr-2 h-4 w-4" />
                      Web Design {l.name}
                    </Link>
                  </Button>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Business in {loc.name}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free, no-obligation quote. We respond within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#pricing">See Pricing</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="tel:+27824483273">Call 082 448 3273</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
