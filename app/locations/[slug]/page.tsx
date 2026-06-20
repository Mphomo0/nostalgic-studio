import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, MapPin, Building2, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { locations, suburbSlugs, type LocationInfo } from '@/lib/locations-data'
import { serviceSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return suburbSlugs.map((slug) => ({ slug }))
}

function locationMeta(loc: LocationInfo) {
  const title = `Web Design ${loc.name} | Digital Agency ${loc.name} | Nostalgic Studio`
  const desc = `Professional web design and digital services in ${loc.name}, ${loc.province}. Custom Next.js websites, SEO, branding, and e-commerce development. 5-star Google rated. Free quote.`
  return { title, desc }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const loc = locations.find((l) => l.slug === slug)
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
  const loc = locations.find((l) => l.slug === slug)
  if (!loc) notFound()

  const { title, desc } = locationMeta(loc)

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
      priceRange: 'R3500-R50000',
      deliveryTime: '4-8 weeks',
    }),
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
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional web design and digital services in {loc.name}. We
                build custom Next.js websites that load fast, rank on Google,
                and convert visitors into customers.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {loc.name}, {loc.province}
                </span>
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" /> Serving {loc.population}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> 50+ Happy Clients
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4" /> 5.0 Google Rating
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Digital Services in {loc.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {loc.description}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong>Custom Web Design</strong> — Next.js websites
                      built for speed, SEO, and conversions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong>SEO & AI Search Visibility</strong> — Rank on
                      Google and get cited by ChatGPT, Gemini, and Perplexity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong>Branding & Identity</strong> — Complete brand
                      design including logos, guidelines, and collateral
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong>E-commerce Development</strong> — Online stores
                      with PayFast, Yoco, and Ozow integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong>Social Media Marketing</strong> — Instagram,
                      Facebook, and LinkedIn management and paid ads
                    </span>
                  </li>
                </ul>
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
                    <dt className="text-sm text-muted-foreground">
                      Population
                    </dt>
                    <dd className="font-medium">{loc.population}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Key Business Areas
                    </dt>
                    <dd className="font-medium">{loc.businessHub}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Nearby Suburbs
                    </dt>
                    <dd className="font-medium">{loc.nearby.join(', ')}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Starting Price
                    </dt>
                    <dd className="font-medium text-primary">From R3,500</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Our Services in {loc.name}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Everything your business needs to dominate the {loc.name} market —
              from stunning websites to full digital marketing strategies.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Web Design',
                  href: '/services/web-design-johannesburg',
                  desc: `Custom Next.js websites for ${loc.name} businesses. 90+ Lighthouse scores, mobile-first, SEO-optimized.`,
                },
                {
                  title: 'SEO & AI Search',
                  href: '/services/seo-services-johannesburg',
                  desc: `Rank on Google and get cited by AI engines. ${loc.name} local SEO, entity optimization, and GEO strategy.`,
                },
                {
                  title: 'E-commerce',
                  href: '/services/ecommerce-website-development',
                  desc: `Online stores with SA payment gateways. Unlimited products, mobile checkout, SEO product pages.`,
                },
                {
                  title: 'Branding',
                  href: '/services/branding-design',
                  desc: `Complete brand identity design for ${loc.name} businesses. Logos, guidelines, and marketing collateral.`,
                },
                {
                  title: 'UI/UX Design',
                  href: '/services/ux-ui-design',
                  desc: `User-centered interfaces that convert. Research, wireframing, prototyping, and usability testing.`,
                },
                {
                  title: 'Social Media',
                  href: '/services/social-media-marketing',
                  desc: `Instagram, Facebook, and LinkedIn management and ad campaigns for ${loc.name} brands.`,
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block p-6 border rounded-xl hover:border-primary/50 transition-colors bg-card"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Local */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose a Local Web Design Agency for {loc.name}?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  A local agency understands the {loc.name} market, consumer
                  behaviour in {loc.province}, and what it takes to rank in
                  local search results. We build with South African hosting,
                  optimize for local mobile networks (where 60%+ of traffic
                  comes from), and know which payment gateways {loc.name}{' '}
                  businesses actually need.
                </p>
                <p>
                  Nostalgic Studio serves {loc.name} and surrounding areas
                  including {loc.nearby.slice(0, 3).join(', ')}. We deliver the
                  same high-performance Next.js websites, SEO, and branding that
                  have earned us a 5.0-star Google rating across 70+ projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Summary */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Web Design Pricing in {loc.name}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Transparent, fixed pricing — no hidden fees. All packages include
              hosting setup, SSL, and post-launch support.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Starter',
                  price: 'R3,500',
                  desc: 'Perfect for freelancers, service providers, and landing pages.',
                  features: [
                    '3-5 pages',
                    'Mobile responsive',
                    'Contact form',
                    'Basic SEO',
                    'Google Analytics',
                  ],
                },
                {
                  name: 'Business',
                  price: 'R15,000',
                  desc: 'For startups and SMEs that need a professional online presence.',
                  features: [
                    '8-15 pages',
                    'Custom UI/UX',
                    'Blog/CMS',
                    'Advanced SEO',
                    'Speed optimization',
                  ],
                },
                {
                  name: 'E-Commerce',
                  price: 'R25,000',
                  desc: 'Full online stores with SA payment gateways and inventory management.',
                  features: [
                    'Unlimited products',
                    'PayFast/Yoco/Ozow',
                    'Mobile checkout',
                    'SEO product pages',
                    'Inventory management',
                  ],
                },
              ].map((pkg) => (
                <div
                  key={pkg.name}
                  className="border rounded-xl p-8 bg-card flex flex-col"
                >
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-2">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {pkg.desc}
                  </p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Locations */}
        <section className="py-16 bg-muted/30">
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
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function Star({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
