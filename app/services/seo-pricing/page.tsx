import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Search,
  BarChart3,
  Globe,
  TrendingUp,
  MessageSquare,
  FileText,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'SEO Pricing Johannesburg | Packages',
  description:
    'Transparent SEO pricing in Johannesburg. Starter R1,500/mo, Growth R5,000/mo, Enterprise R10,000/mo. Includes GEO & AI search optimization. Free audit.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/seo-pricing',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/services/seo-pricing',
      'x-default': 'https://www.nostalgic-studio.co.za/services/seo-pricing',
    },
  },
  openGraph: {
    title:
      'SEO Pricing Johannesburg | SEO Packages & Costs South Africa | Nostalgic Studio',
    description:
      'Transparent SEO pricing. Starter R1,500/mo, Growth R5,000/mo, Enterprise R10k+/mo. Includes GEO & AI search optimization.',
    url: 'https://www.nostalgic-studio.co.za/services/seo-pricing',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Pricing Johannesburg — Nostalgic Studio',
      },
    ],
  },
}

const faqs = [
  {
    question: 'How much does SEO cost in South Africa?',
    answer:
      'SEO services in South Africa typically range from R1,500–R15,000 per month. Nostalgic Studio offers transparent packages: Starter SEO from R1,500/month for basic optimization, Growth SEO from R5,000/month for comprehensive campaigns, and Enterprise SEO from R10,000/month for competitive markets.',
  },
  {
    question: 'How long does SEO take to show results?',
    answer:
      'Technical SEO improvements can show results in 2-4 weeks. Content and link-building efforts typically take 3-6 months to drive significant ranking improvements. SEO is a long-term investment that compounds over time.',
  },
  {
    question: 'What is included in the Starter SEO package?',
    answer:
      'Starter SEO includes keyword research (10 keywords), on-page optimization (5 pages), monthly performance report, technical SEO audit, and basic local SEO setup. Ideal for startups and small businesses building their online presence.',
  },
  {
    question: 'Do you offer month-to-month SEO contracts?',
    answer:
      'Yes. Our SEO packages are month-to-month with no long-term lock-in. We recommend a minimum 6-month commitment to see meaningful results, but you are free to cancel anytime.',
  },
  {
    question: 'Is GEO included in your SEO packages?',
    answer:
      'Yes. Growth SEO and Enterprise SEO packages include Generative Engine Optimization (GEO) — optimizing your content for ChatGPT, Gemini, Claude, and Perplexity citation. This is included at no extra cost.',
  },
]

const packages = [
  {
    name: 'Starter SEO',
    price: 'R1,500',
    period: '/month',
    desc: 'Perfect for startups and small businesses building their online presence.',
    popular: false,
    features: [
      'Keyword research (10 keywords)',
      'On-page optimization (5 pages)',
      'Monthly performance report',
      'Technical SEO audit',
      'Basic local SEO setup',
      'Google Business Profile review',
      'Email support',
    ],
  },
  {
    name: 'Growth SEO',
    price: 'R5,000',
    period: '/month',
    desc: 'For growing businesses ready to dominate their market.',
    popular: true,
    features: [
      'Keyword research (30 keywords)',
      'On-page optimization (15 pages)',
      'Weekly performance reports',
      'Technical SEO fixes & optimization',
      'Local SEO + GBP management',
      'Content strategy (2 posts/month)',
      'Link building outreach',
      'GEO / AI search optimization',
      'Priority email & chat support',
    ],
  },
  {
    name: 'Enterprise SEO',
    price: 'R10,000+',
    period: '/month',
    desc: 'Comprehensive SEO for established businesses and competitive markets.',
    popular: false,
    features: [
      'Unlimited keyword tracking',
      'Full site optimization',
      'Dedicated SEO manager',
      'Weekly strategy calls',
      'Advanced technical SEO',
      'Content creation (4 posts/month)',
      'Premium link building',
      'Full GEO / AI search strategy',
      'Quarterly competitor reviews',
      'Phone & priority support',
    ],
  },
]

const schemas = [
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'SEO Pricing', url: '/services/seo-pricing' },
  ]),
  serviceSchema({
    id: 'seo-pricing',
    name: 'SEO Services Johannesburg',
    description:
      'Transparent SEO packages from R1,500/month. Includes technical SEO, local SEO, content strategy, and GEO / AI search optimization.',
    url: '/services/seo-pricing',
    areaServed: 'Johannesburg, South Africa',
    priceRange: 'R1500-R15000',
    deliveryTime: 'Ongoing monthly',
  }),
  faqPageSchema(faqs),
]

export default function SeoPricingPage() {

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
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
              Transparent SEO Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              SEO Packages & Pricing Johannesburg
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Classic SEO meets AI search optimization. Transparent pricing, no
              hidden fees, month-to-month contracts.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              All packages include GEO (Generative Engine Optimization) for AI
              search visibility on ChatGPT, Gemini, Claude, and Perplexity.
            </p>
            <Button asChild size="lg">
              <Link href="/free-seo-audit">
                Claim Your Free SEO Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`border rounded-2xl p-8 bg-card relative ${pkg.popular ? 'ring-2 ring-primary shadow-lg scale-105 md:scale-105' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {pkg.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full"
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              What Every SEO Package Includes
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Every package combines classic SEO fundamentals with cutting-edge
              AI search optimization.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Search,
                  title: 'Technical SEO',
                  desc: 'Site speed, Core Web Vitals, crawlability, schema markup, sitemaps, and mobile optimization that Google rewards.',
                },
                {
                  icon: BarChart3,
                  title: 'Keyword Strategy',
                  desc: 'Data-driven keyword research targeting high-intent, commercial, and local search terms your customers actually use.',
                },
                {
                  icon: Globe,
                  title: 'Local SEO',
                  desc: 'Google Business Profile optimization, local citations, NAP consistency, and suburb-level targeting for Johannesburg businesses.',
                },
                {
                  icon: FileText,
                  title: 'Content Optimization',
                  desc: 'SEO-optimized blog posts, service pages, and landing pages that answer customer questions and drive organic traffic.',
                },
                {
                  icon: TrendingUp,
                  title: 'Link Building',
                  desc: 'White-hat link building through guest posting, digital PR, broken link building, and industry directory submissions.',
                },
                {
                  icon: MessageSquare,
                  title: 'GEO / AI Search',
                  desc: 'Entity optimization, structured data, answer-focused content, and citation building for ChatGPT, Gemini, and Perplexity visibility.',
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="border rounded-xl p-6 bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              SEO Timeline: What to Expect
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              SEO is a long-term strategy. Here is a realistic timeline of
              results.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  period: 'Month 1-3',
                  items: [
                    'Technical SEO audit & fixes',
                    'Keyword research & strategy',
                    'Google Business Profile optimization',
                    'Initial on-page improvements',
                  ],
                  status: 'Foundation',
                },
                {
                  period: 'Month 4-6',
                  items: [
                    'Content creation & optimization',
                    'Link building begins',
                    'Local citation building',
                    'Traffic growth visible',
                  ],
                  status: 'Growth',
                },
                {
                  period: 'Month 7-12',
                  items: [
                    'Significant ranking improvements',
                    'Consistent organic traffic growth',
                    'Lead & revenue attribution',
                    'Competitive market positioning',
                  ],
                  status: 'Dominance',
                },
              ].map((phase) => (
                <div
                  key={phase.period}
                  className="border rounded-xl p-6 bg-card text-center"
                >
                  <div className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                    {phase.status}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{phase.period}</h3>
                  <ul className="space-y-2 text-sm text-left">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Sure Which Package You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free SEO audit and we will recommend the right strategy for
              your business — no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/free-seo-audit">
                  Claim Your Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="tel:+27824483273">Call 082 448 3273</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              SEO Pricing — FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border rounded-lg p-4 cursor-pointer bg-card"
                >
                  <summary className="font-medium flex justify-between items-center">
                    {faq.question}
                    <span className="text-primary group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
