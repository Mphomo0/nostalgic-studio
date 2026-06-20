import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { industries, industrySlugs, type IndustryInfo } from '@/lib/industries-data'
import { breadcrumbSchema, serviceSchema } from '@/app/structured-data/schemas'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }))
}

function industryMeta(ind: IndustryInfo) {
  const title = `${ind.name} Website Design | Web Design for ${ind.name} Companies`
  const desc = `Professional website design for ${ind.name.toLowerCase()} companies in Johannesburg and South Africa. Custom Next.js websites, SEO, and digital marketing for ${ind.name.toLowerCase()} businesses. Free quote.`
  return { title, desc }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const ind = industries.find(i => i.slug === slug)
  if (!ind) return {}
  const { title, desc } = industryMeta(ind)
  return {
    title,
    description: desc,
    alternates: { canonical: `https://www.nostalgic-studio.co.za/industries/${ind.slug}`, languages: { 'en-ZA': `https://www.nostalgic-studio.co.za/industries/${ind.slug}` } },
    openGraph: { title: `${title} | Nostalgic Studio`, description: desc, url: `https://www.nostalgic-studio.co.za/industries/${ind.slug}`, siteName: 'Nostalgic Studio', type: 'website' },
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ind = industries.find(i => i.slug === slug)
  if (!ind) notFound()

  const { title, desc } = industryMeta(ind)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Industries', url: '/industries' }, { name: ind.name, url: `/industries/${ind.slug}` }]),
          serviceSchema({ id: `website-design-${ind.slug}`, name: `${ind.name} Website Design`, description: desc, url: `/industries/${ind.slug}`, areaServed: 'South Africa', priceRange: 'R3500-R50000' }),
        ])
      }} />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
              Industry Specialization — {ind.name}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {ind.name} Website Design
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
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Challenges {ind.name} Companies Face Online</h2>
                <ul className="space-y-4">
                  {ind.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-destructive/10 mt-1">
                        <Briefcase className="h-4 w-4 text-destructive" />
                      </div>
                      <span className="text-lg">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">How We Help {ind.name} Businesses</h2>
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

        {/* We Serve */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Who We Serve</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We build websites for a wide range of {ind.name.toLowerCase()} businesses across Johannesburg and South Africa.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ind.examples.map((ex) => (
                <div key={ex} className="border rounded-xl p-4 bg-card text-center font-medium">{ex}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Why {ind.name} Businesses Choose Nostalgic Studio</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { stat: '70+', label: 'Projects Delivered' },
                { stat: '5.0★', label: 'Google Rating' },
                { stat: '13+ yrs', label: 'Industry Experience' },
              ].map((s) => (
                <div key={s.stat} className="border rounded-xl p-6 bg-card">
                  <div className="text-3xl font-bold text-primary">{s.stat}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mt-8 max-w-xl mx-auto">
              We build on Next.js for 90+ Lighthouse scores, sub-1.5s load times, and SEO that works from day one — giving {ind.name.toLowerCase()} businesses a real competitive advantage online.
            </p>
          </div>
        </section>

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
            <h2 className="text-2xl font-bold mb-8 text-center">More Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.filter(i => i.slug !== ind.slug).map((i) => (
                <Button key={i.slug} asChild variant="outline">
                  <Link href={`/industries/${i.slug}`}>{i.name} Website Design</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

