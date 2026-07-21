import type { Metadata } from 'next'

export const dynamic = 'force-static'
import {
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Search,
  Zap,
  Globe,
  TrendingUp,
} from 'lucide-react'
import AuthorBio from '@/components/geo/AuthorBio'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import lazyLoad from 'next/dynamic'
const MotionWrapper = lazyLoad(
  () => import('@/components/layout/MotionWrapper'),
)
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'
import { serviceSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'Website Refresh & SEO Upgrade South Africa',
  description:
    'Upgrade your website with improved design, speed, SEO, and lead generation. Helping SA businesses refresh and optimize their online presence.',
  keywords: [
    'Website Refresh South Africa',
    'SEO Upgrade Johannesburg',
    'Website Redesign South Africa',
    'Modern Website Refresh',
    'Next.js Website Redesign',
  ],
  alternates: {
    canonical:
      'https://www.nostalgic-studio.co.za/services/website-refresh-seo-upgrade',
    languages: {
      'en-ZA':
        'https://www.nostalgic-studio.co.za/services/website-refresh-seo-upgrade',
      'x-default':
        'https://www.nostalgic-studio.co.za/services/website-refresh-seo-upgrade',
    },
  },
  openGraph: {
    title: 'Website Refresh & SEO Upgrade South Africa',
    description:
      'Upgrade your website with improved design, speed, SEO, and lead generation. Helping SA businesses refresh and optimize their online presence.',
    url: 'https://www.nostalgic-studio.co.za/services/website-refresh-seo-upgrade',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Refresh & SEO Upgrade — Nostalgic Studio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Website Refresh & SEO Upgrade South Africa',
    description:
      'Upgrade your website with improved design, speed, SEO, and lead generation. Helping SA businesses refresh and optimize their online presence.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

const refreshSchemas = [
  serviceSchema({
    id: 'website-refresh-seo-upgrade',
    name: 'Website Refresh & SEO Upgrade South Africa',
    description:
      'Upgrade your website with improved design, speed, SEO, and lead generation. Helping SA businesses refresh and optimize their online presence.',
    url: '/services/website-refresh-seo-upgrade',
    areaServed: 'South Africa',
    priceRange: 'R3,500-R8,500',
  }),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    {
      name: 'Website Refresh & SEO Upgrade',
      url: '/services/website-refresh-seo-upgrade',
    },
  ]),
]

const refreshFaqs = [
  {
    question: 'What is a website refresh?',
    answer:
      'A website refresh is a modern rebuild of your existing website — updating the design, improving page speed, restructuring content, and adding SEO metadata. Unlike a full redesign, we keep your existing content and branding while upgrading the technology to Next.js for better performance.',
  },
  {
    question: 'How is a refresh different from a full redesign?',
    answer:
      "A refresh upgrades your existing site's technology, speed, and SEO without changing your brand identity or starting from scratch. A full redesign involves new branding, new content strategy, and a completely new visual direction. A refresh is faster and more affordable.",
  },
  {
    question: 'Will my SEO improve after a refresh?',
    answer:
      'Yes. We add proper page titles, meta descriptions, heading structure, alt text, schema markup, and optimise for Core Web Vitals. Most clients see improved Google rankings within 4–8 weeks after launch.',
  },
  {
    question: 'Do I need a new website or just a refresh?',
    answer:
      'If your brand is still strong but your site is slow, outdated, or not bringing in leads, a refresh is ideal. If you are rebranding or changing your entire business model, a full redesign may be better.',
  },
  {
    question: 'How long does a website refresh take?',
    answer:
      'Most website refreshes take 2–4 weeks depending on the number of pages and complexity. We work with your existing content to minimise downtime and disruption.',
  },
]

export default function WebsiteRefreshPage() {
  return (
    <main className="pt-32 pb-20">
      {refreshSchemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Website Refresh & SEO Upgrade{' '}
              <span className="text-gradient">
                for South African Businesses
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <strong>
                If your website looks outdated, loads slowly, or is not bringing
                enquiries, you may not need to start from zero.
              </strong>{' '}
              Nostalgic Studio helps South African businesses refresh their
              websites, improve SEO foundations, and turn more visitors into
              leads.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">
                Get Your Free Website Review <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </MotionWrapper>

        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              What Is a Website Refresh & SEO Upgrade?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                A website refresh is a modern rebuild of your existing website
                using Next.js — improving page speed, adding proper SEO
                structure, updating the design, and optimising for conversions.
                It is not a full redesign from scratch; we keep your brand,
                content, and URL structure while upgrading everything under the
                hood.
              </p>
              <p>
                An SEO upgrade adds technical SEO foundations that most older
                websites lack: proper heading hierarchy, meta descriptions, Open
                Graph tags, schema markup, XML sitemaps, and Core Web Vitals
                optimisation. Together, a refresh and SEO upgrade can transform
                a slow, invisible website into a fast, Google-friendly lead
                machine.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-foreground">
              Why Refresh Instead of Redesign?
            </h3>
            <p className="text-muted-foreground mb-6">
              A full website redesign can cost R10,000–R25,000 and take 6–12
              weeks. A website refresh is typically R3,500–R8,500 and takes 2–4
              weeks. If your brand is still strong and your content is mostly
              good, a refresh gives you the speed and SEO benefits of a modern
              site without the cost and time of a full rebuild.
            </p>
            <p className="text-muted-foreground">
              For many South African small businesses, a website refresh is the
              most cost-effective way to start getting more enquiries from
              Google. Your existing site may have good content but be held back
              by slow loading times, poor mobile performance, or missing SEO
              tags that Google needs to rank you.
            </p>
          </div>
        </section>

        {/* Signs Your Website Needs a Refresh */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">
              Signs Your Website Needs a Refresh
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'It looks outdated compared to competitors',
                'It loads slowly on mobile',
                'It does not appear for important Google searches',
                'Your services are all combined on one page',
                'There is no clear call-to-action',
                'Your contact form is weak or broken',
                'You have no analytics or conversion tracking',
                'Your Google Business Profile is not connected properly',
              ].map((sign) => (
                <div key={sign} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0 mt-2" />
                  <span className="text-muted-foreground">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">
              What We Refresh & Upgrade
            </h2>
            <p className="text-muted-foreground mb-6">
              We focus on the areas that make the biggest difference to your
              Google rankings and conversion rates:
            </p>
            <ul className="space-y-4">
              {[
                'Page speed — target under 2 seconds load time',
                'SEO metadata — titles, descriptions, heading structure',
                'Schema markup — LocalBusiness, Service, FAQ schemas',
                'Mobile responsiveness — proper touch targets and layouts',
                'Content restructuring — clearer messaging and CTAs',
                'Core Web Vitals — LCP, FID, CLS optimisation',
                'Google Analytics & Search Console setup',
                'Conversion tracking — calls, forms, WhatsApp clicks',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Zap className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sub-2-Second Loading</h3>
                <p className="text-muted-foreground text-sm">
                  We rebuild your site on Next.js for instant page loads and
                  smooth navigation.
                </p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Search className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">SEO Foundation</h3>
                <p className="text-muted-foreground text-sm">
                  Proper page structure, metadata, and schema markup so Google
                  can find and rank you.
                </p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lead Generation</h3>
                <p className="text-muted-foreground text-sm">
                  Clear calls-to-action, contact forms, WhatsApp integration,
                  and conversion tracking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Improve */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">What We Improve</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Homepage messaging',
                'Service page structure',
                'Mobile layout',
                'Page speed',
                'SEO titles and descriptions',
                'Internal linking',
                'Contact forms and WhatsApp CTAs',
                'Google Analytics and Search Console setup',
                'Google Business Profile alignment',
                'Basic schema markup',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best For */}
        <section className="mb-16">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Best For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This service is ideal for businesses that already have a website
              but are not getting enough enquiries from Google, referrals, or
              social media.
            </p>
          </div>
        </section>

        <FaqSection
          faqs={refreshFaqs}
          title="Website Refresh & SEO Upgrade FAQ"
        />

        <KeyTakeaways
          takeaways={[
            {
              point: 'Keep your brand and content',
              detail: 'we upgrade the technology, not your identity',
            },
            {
              point: 'Full SEO foundation added',
              detail: 'metadata, schema, sitemaps, and Core Web Vitals',
            },
            {
              point: 'Faster and more affordable than a redesign',
              detail: '2-4 weeks turnaround, R3,500-R8,500',
            },
            {
              point: 'Built on Next.js',
              detail: 'modern framework for speed, security, and scalability',
            },
            {
              point: 'Conversion-focused',
              detail: 'clear CTAs, tracking, and lead-capture setup',
            },
          ]}
        />

        <AboutThisPage
          summary="This page covers Nostalgic Studio's website refresh and SEO upgrade services in Johannesburg, South Africa. We rebuild outdated sites on Next.js with full SEO and conversion optimisation."
          covers={[
            'Website Refresh Johannesburg',
            'SEO Upgrade South Africa',
            'Website Redesign',
            'Next.js Rebuild',
            'Lead Generation Website',
          ]}
          lastUpdated="June 2026"
        />

        <section className="mb-16" aria-labelledby="related-heading">
          <h2
            id="related-heading"
            className="text-2xl font-bold mb-6 text-center"
          >
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/services/web-design-johannesburg"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <Globe className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Design Johannesburg</h3>
              <p className="text-sm text-muted-foreground">
                Custom Next.js websites built for startups and small businesses.
              </p>
            </Link>
            <Link
              href="/services/seo-services-johannesburg"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <Search className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">SEO Services Johannesburg</h3>
              <p className="text-sm text-muted-foreground">
                Technical SEO, local SEO, and content strategy to rank higher.
              </p>
            </Link>
            <Link
              href="/services/web-maintenance"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <RefreshCw className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Maintenance</h3>
              <p className="text-sm text-muted-foreground">
                Keep your refreshed site secure, updated, and performing.
              </p>
            </Link>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Refresh Your Website?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a free review of your current site and a no-obligation quote for
            a refresh.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Get Your Free Website Review</Link>
          </Button>
        </div>

        <div className="mx-auto px-4 max-w-3xl">
          <AuthorBio />
        </div>
      </div>
    </main>
  )
}
