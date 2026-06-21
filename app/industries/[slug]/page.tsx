import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Briefcase, Building2, TrendingUp, Shield, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  industries,
  industrySlugs,
  type IndustryInfo,
} from '@/lib/industries-data'
import { projects } from '@/lib/portfolio-data'
import { breadcrumbSchema, serviceSchema } from '@/app/structured-data/schemas'

const industryBySlug = new Map(industries.map((i) => [i.slug, i]))

export const dynamic = 'force-static'

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }))
}

function industryMeta(ind: IndustryInfo) {
  const title = `${ind.heroTagline} | Nostalgic Studio`
  const desc = ind.description.slice(0, 160)
  return { title, desc }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const ind = industryBySlug.get(slug)
  if (!ind) return {}
  const { title, desc } = industryMeta(ind)
  const url = `https://www.nostalgic-studio.co.za/industries/${ind.slug}`
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
      title,
      description: desc,
      url,
      siteName: 'Nostalgic Studio',
      type: 'website',
      images: [
        {
          url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${ind.heroTagline} — Nostalgic Studio`,
        },
      ],
    },
  }
}

const industryIcons: Record<string, typeof Building2> = {
  construction: Building2,
  'professional-services': Briefcase,
  healthcare: Shield,
  ecommerce: TrendingUp,
  startups: Zap,
}

function RelatedProjects({ slug }: { slug: string }) {
  const related = projects.filter((p) => {
    if (slug === 'construction')
      return p.industry?.toLowerCase().includes('construction')
    if (slug === 'professional-services')
      return p.industry?.toLowerCase().includes('consult')
    if (slug === 'healthcare') return false
    if (slug === 'ecommerce') return false
    if (slug === 'startups') return false
    return false
  })

  if (related.length === 0) return null

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Related Case Studies
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Real projects we have delivered for {indName(slug)} businesses.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-primary font-medium mb-1">
                  {p.category}
                </p>
                <h3 className="font-semibold text-sm text-foreground leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function indName(slug: string) {
  const ind = industryBySlug.get(slug)
  return ind?.name.toLowerCase() || slug
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const ind = industryBySlug.get(slug)
  if (!ind) notFound()

  const { title, desc } = industryMeta(ind)
  const Icon = industryIcons[slug] || Building2

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Industries', url: '/industries' },
              { name: ind.name, url: `/industries/${ind.slug}` },
            ]),
            serviceSchema({
              id: `website-design-${ind.slug}`,
              name: `${ind.name} Website Design`,
              description: desc,
              url: `/industries/${ind.slug}`,
              areaServed: 'South Africa',
              priceRange: 'R3500-R50000',
            }),
          ]),
        }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-primary/10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
              Industry Specialization
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {ind.heroTagline}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {ind.description}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {ind.challengeHeader}
                </h2>
                <ul className="space-y-4">
                  {ind.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-destructive/10 mt-1 shrink-0">
                        <Briefcase className="h-4 w-4 text-destructive" />
                      </div>
                      <span className="text-lg">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  How We Solve Them
                </h2>
                <ul className="space-y-4">
                  {ind.services.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <span className="text-lg">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              Who We Work With
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We build websites for a wide range of {ind.name.toLowerCase()}{' '}
              businesses across Johannesburg and South Africa.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ind.examples.map((ex) => (
                <div
                  key={ex}
                  className="border rounded-xl p-5 bg-card text-center font-medium hover:border-primary/30 transition-colors"
                >
                  {ex}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What a Construction Website Needs - only for construction */}
        {ind.websiteNeeds && ind.websiteNeeds.length > 0 ? (
          <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-4">
                What a Construction Website Needs
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                A strong construction website should include:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {ind.websiteNeeds.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              {ind.servicePageIdeas && ind.servicePageIdeas.length > 0 ? (
                <>
                  <h3 className="text-xl font-bold text-center mt-12 mb-6">
                    Service Page Ideas for Construction Clients
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {ind.servicePageIdeas.map((idea) => (
                      <span
                        key={idea}
                        className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium"
                      >
                        {idea}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* Why Choose Us - Industry Specific */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Why {ind.name} Businesses Choose Us
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {ind.whyUsPoints.map((point, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-6 bg-card text-left"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 max-w-lg mx-auto">
              {[
                { stat: '70+', label: 'Projects Delivered' },
                { stat: '5.0★', label: 'Google Rating' },
                { stat: '13+ yrs', label: 'Experience' },
              ].map((s) => (
                <div key={s.stat}>
                  <div className="text-3xl font-bold text-primary">
                    {s.stat}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects slug={slug} />

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{ind.cta}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Industries */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">
              More Industries We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {industries
                .filter((i) => i.slug !== ind.slug)
                .map((i) => (
                  <Button key={i.slug} asChild variant="outline">
                    <Link href={`/industries/${i.slug}`}>
                      {i.name} Website Design
                    </Link>
                  </Button>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
