import type { Metadata } from 'next'

export const dynamic = 'force-static'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap,
  BarChart3,
  Smartphone,
  Search,
  Star,
  Shield,
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
  title: 'Affordable Web Design Johannesburg',
  description:
    'Affordable web design in Johannesburg from R3,500. Custom Next.js websites with SEO, mobile-first design, and free hosting. 5.0-star rated.',
  keywords: [
    'Affordable Web Design Johannesburg',
    'Cheap Website Design South Africa',
    'Budget Website Design Johannesburg',
    'Small Business Website Design',
    'Professional Website Design Affordable',
    'Website Design Prices South Africa',
    'Freelance Web Designer Johannesburg',
  ],
  alternates: {
    canonical:
      'https://www.nostalgic-studio.co.za/services/affordable-web-design-johannesburg',
    languages: {
      'en-ZA':
        'https://www.nostalgic-studio.co.za/services/affordable-web-design-johannesburg',
      'x-default':
        'https://www.nostalgic-studio.co.za/services/affordable-web-design-johannesburg',
    },
  },
  openGraph: {
    title: 'Affordable Web Design Johannesburg | Nostalgic Studio',
    description:
      'Professional websites from R3,500. Custom Next.js, SEO, mobile-first design. 5.0 Google rating. Free quote.',
    url: 'https://www.nostalgic-studio.co.za/services/affordable-web-design-johannesburg',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Affordable Web Design Johannesburg — Nostalgic Studio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Affordable Web Design Johannesburg',
    description:
      'Professional websites from R3,500. Custom Next.js, SEO, mobile-first design. 5.0 Google rating.',
    images: [
      'https://www.nostalgic-studio.co.za/images/og-image.jpg',
    ],
  },
}

const schemas = [
  serviceSchema({
    id: 'affordable-web-design-johannesburg',
    name: 'Affordable Web Design Johannesburg',
    description:
      'Professional affordable web design in Johannesburg, South Africa. Custom Next.js websites with SEO, mobile-first design, and conversion optimisation.',
    url: '/services/affordable-web-design-johannesburg',
    areaServed: 'South Africa',
    priceRange: 'R3500-R25000',
  }),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    {
      name: 'Affordable Web Design Johannesburg',
      url: '/services/affordable-web-design-johannesburg',
    },
  ]),
]

const faqs = [
  {
    question: 'How much does a professional website cost in South Africa?',
    answer:
      'Our prices start from R3,500 for a starter website and range up to R25,000 for a full e-commerce store. Most small business websites cost between R3,500 and R15,000. We provide a fixed quote — no hourly rates or hidden fees.',
  },
  {
    question: 'Is affordable web design still good quality?',
    answer:
      'Yes. We use Next.js — the same technology used by Nike, TikTok, and Netflix — to build fast, secure websites at a fraction of the cost of traditional agencies. Our starter package at R3,500 includes a mobile-responsive design, contact form, basic SEO, and Google Analytics setup.',
  },
  {
    question: 'How long does it take to build an affordable website?',
    answer:
      'Most websites are delivered within 2–4 weeks. Simple brochure sites can be ready in as little as 1 week. E-commerce stores typically take 4–8 weeks depending on complexity.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes. We require a 50% deposit to start and the balance on completion. For larger projects above R15,000, we can structure a payment plan that works for your budget.',
  },
  {
    question: 'What is included in the R3,500 starter package?',
    answer:
      'The starter package includes 3–5 pages, mobile-responsive design, contact form, basic SEO setup, Google Analytics integration, and free hosting for the first year. You can add more pages or features at any time.',
  },
  {
    question: 'Do you offer WordPress or only Next.js?',
    answer:
      'We specialise in Next.js because it is faster, more secure, and better for SEO than WordPress. However, if you specifically need a WordPress site, we can discuss options during your free consultation.',
  },
]

export default function AffordableWebDesign() {
  return (
    <main className="pt-32 pb-20">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-tighter mb-4 block">
              From R3,500 — Fixed Price
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Affordable Web Design Johannesburg
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <strong>
                Professional website design for small businesses that need a
                strong online presence without overspending.
              </strong>{' '}
              We focus on the essentials first: clear pages, mobile-friendly
              design, contact forms, basic SEO, and fast loading.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 5.0
                Google Rating
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" /> 70+ Projects
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Free Hosting 1
                Year
              </span>
            </div>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">
                Get a Free Quote <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </MotionWrapper>

        {/* Pricing Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Transparent Pricing — No Surprises
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Choose the package that fits your business. All prices are fixed and
            include hosting setup, SSL, and post-launch support.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: 'R3,500',
                desc: 'Perfect for freelancers, service providers, and landing pages.',
                features: [
                  '3–5 pages',
                  'Mobile responsive',
                  'Contact form',
                  'Basic SEO',
                  'Google Analytics',
                  'Free hosting 1 year',
                ],
                popular: false,
              },
              {
                name: 'Business',
                price: 'R15,000',
                desc: 'For SMEs that need a professional online presence.',
                features: [
                  '8–15 pages',
                  'Custom UI/UX design',
                  'Blog or CMS',
                  'Advanced SEO',
                  'Speed optimization',
                  'Free hosting 1 year',
                ],
                popular: true,
              },
              {
                name: 'E-Commerce',
                price: 'R25,000',
                desc: 'Full online stores with SA payment gateways.',
                features: [
                  'Unlimited products',
                  'PayFast / Yoco / Ozow',
                  'Mobile checkout',
                  'SEO product pages',
                  'Inventory management',
                  'Free hosting 1 year',
                ],
                popular: false,
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative border rounded-2xl p-8 bg-card flex flex-col ${pkg.popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'}`}
              >
                {pkg.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-3xl font-bold text-primary mb-2">
                  {pkg.price}
                </p>
                <p className="text-sm text-muted-foreground mb-6">{pkg.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get This Package</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Why Affordable Doesn't Mean Cheap */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">
              Affordable Does Not Mean Cheap
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  When you see a website for R1,500 or R2,000, it is almost
                  certainly built with a drag-and-drop builder or a WordPress
                  template that hundreds of other businesses already use. Those
                  sites load slowly, rank poorly on Google, and break on mobile
                  devices.
                </p>
                <p className="text-muted-foreground mb-4">
                  We build on Next.js — a modern framework used by Nike, TikTok,
                  and Netflix — because it delivers sub-second load times, 90+
                  Lighthouse scores, and SEO that works from day one. Our R3,500
                  starter package outperforms most R10,000 WordPress sites on
                  speed, security, and Google rankings.
                </p>
                <p className="text-muted-foreground">
                  You are not paying for a template. You are paying for custom
                  development, proper SEO foundations, mobile-first design, and
                  a website that actually brings in enquiries.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="font-bold mb-4">What You Get vs DIY Builders</h3>
                <div className="space-y-3">
                  {[
                    {
                      label: 'Custom-coded, not templated',
                      diy: 'Templated (hundreds of users)',
                    },
                    {
                      label: 'Sub-second load times',
                      diy: '2–5 second load times',
                    },
                    {
                      label: 'SEO foundation from day one',
                      diy: 'Requires paid plugins',
                    },
                    { label: 'Mobile-first design', diy: 'Responsive afterthought' },
                    {
                      label: 'Structured data for AI search',
                      diy: 'Not included',
                    },
                    {
                      label: 'Free hosting for first year',
                      diy: 'Monthly hosting fees',
                    },
                    {
                      label: 'Google Analytics and Search Console',
                      diy: 'Requires plugins',
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-2 gap-4 text-sm"
                    >
                      <span className="font-medium text-foreground">
                        {row.label}
                      </span>
                      <span className="text-muted-foreground">{row.diy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">
              What Is Included in Every Website
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {[
                { icon: Globe, text: 'Custom Next.js development' },
                { icon: Smartphone, text: 'Mobile-first responsive design' },
                { icon: Zap, text: 'Sub-second page load speeds' },
                { icon: Search, text: 'SEO titles, descriptions, heading structure' },
                { icon: BarChart3, text: 'Google Analytics & Search Console' },
                { icon: Shield, text: 'SSL certificate & security' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl"
                >
                  <item.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} title="Affordable Web Design FAQ" />

        <KeyTakeaways
          takeaways={[
            {
              point: 'Professional websites from R3,500',
              detail: 'fixed price, no hourly rates',
            },
            {
              point: 'Built on Next.js',
              detail: 'same technology used by Nike and TikTok',
            },
            {
              point: 'SEO-optimised from day one',
              detail: 'titles, descriptions, schema, and structure',
            },
            {
              point: 'Free hosting for first year',
              detail: 'includes SSL, CDN, and daily backups',
            },
            {
              point: 'Mobile-first responsive design',
              detail: 'looks great on phones, tablets, and desktops',
            },
          ]}
        />

        <AboutThisPage
          summary="This page covers Nostalgic Studio's affordable web design services in Johannesburg, South Africa. Professional, custom-coded websites starting from R3,500 with SEO, mobile-first design, and free hosting."
          covers={[
            'Affordable Web Design Johannesburg',
            'Cheap Website Design South Africa',
            'Budget Website Design',
            'Small Business Websites',
            'Next.js Web Design',
          ]}
          lastUpdated="June 2026"
        />

        {/* Related Services */}
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
                Full-service web design with custom UI/UX, branding, and premium
                features.
              </p>
            </Link>
            <Link
              href="/services/website-refresh-seo-upgrade"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <Zap className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Website Refresh & SEO Upgrade</h3>
              <p className="text-sm text-muted-foreground">
                Upgrade your existing site to modern Next.js without a full
                redesign.
              </p>
            </Link>
            <Link
              href="/services/seo-services-johannesburg"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <Search className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">SEO & AI Search Visibility</h3>
              <p className="text-sm text-muted-foreground">
                Rank on Google and get cited by ChatGPT, Gemini, and Perplexity.
              </p>
            </Link>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for a Professional Website?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation quote. We respond within 24 hours.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <div className="mx-auto px-4 max-w-3xl mt-16">
          <AuthorBio />
        </div>
      </div>
    </main>
  )
}
