import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'
import {
  ArrowRight,
  CheckCircle2,
  Search,
  FileSearch,
  BarChart3,
  TrendingUp,
  Shield,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  breadcrumbSchema,
  webPageSchema,
  faqPageSchema,
} from '@/app/structured-data/schemas'
import SeoAuditForm from '@/components/pages/free-seo-audit/SeoAuditForm'

export const metadata: Metadata = {
  title: 'Free SEO Audit Johannesburg',
  description:
    'Free SEO audit for your Johannesburg business. We identify ranking issues and deliver an actionable report with prioritised fixes. No obligation.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/free-seo-audit',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/free-seo-audit',
      'x-default': 'https://www.nostalgic-studio.co.za/free-seo-audit',
    },
  },
  openGraph: {
    title: 'Free SEO Audit Johannesburg | Nostalgic Studio',
    description:
      'Get a free SEO audit for your Johannesburg business. Detailed analysis, actionable fixes, no obligation.',
    url: 'https://www.nostalgic-studio.co.za/free-seo-audit',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free SEO Audit Johannesburg — Nostalgic Studio',
      },
    ],
  },
}

const faqs = [
  {
    question: 'What is included in the free SEO audit?',
    answer:
      'Your free SEO audit includes analysis of your website technical SEO, on-page optimization, page speed, mobile usability, keyword gaps, competitor comparison, and local SEO signals. You receive a detailed report with prioritized fixes.',
  },
  {
    question: 'How long does the audit take?',
    answer:
      'We deliver your SEO audit report within 5-7 business days after receiving your request. The report includes a 30-minute follow-up call to walk through findings and recommendations.',
  },
  {
    question: 'Is there any obligation after the audit?',
    answer:
      'No. The audit is completely free with no obligation. We provide the report and recommendations, and you decide if you want to proceed with any suggested improvements.',
  },
  {
    question: 'Who is this audit for?',
    answer:
      'Our free SEO audit is for any business in Johannesburg or South Africa that wants to understand why their website is not ranking and what specific steps will improve their Google visibility.',
  },
]

const schemas = [
  webPageSchema({
    url: '/free-seo-audit',
    name: 'Free SEO Audit Johannesburg',
    description: 'Get a free SEO audit for your Johannesburg business.',
    datePublished: '2026-06-01',
  }),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Free SEO Audit', url: '/free-seo-audit' },
  ]),
  faqPageSchema(faqs),
]

export default function FreeSeoAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-primary/5" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
              Free SEO Audit
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Find Out Why Your Website Is Not Ranking on Google
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a detailed, no-obligation SEO audit that reveals exactly what
              is holding your site back — and what to fix to start ranking.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Button asChild size="lg">
                <a href="#audit-form">
                  Claim Your Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <FileSearch className="h-4 w-4" /> Technical SEO Analysis
              </span>
              <span className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" /> Competitor Comparison
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" /> Keyword Opportunities
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4" /> No Obligation
              </span>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              What Your Free SEO Audit Includes
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A comprehensive analysis across 7 critical areas that impact your
              Google rankings.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Search,
                  title: 'Technical SEO',
                  items: [
                    'Crawlability & indexability',
                    'Page speed & Core Web Vitals',
                    'Mobile responsiveness',
                    'Schema markup audit',
                    'XML sitemap & robots.txt',
                  ],
                },
                {
                  icon: FileSearch,
                  title: 'On-Page SEO',
                  items: [
                    'Title tags & meta descriptions',
                    'Heading structure analysis',
                    'Keyword targeting audit',
                    'Content quality assessment',
                    'Internal linking review',
                  ],
                },
                {
                  icon: BarChart3,
                  title: 'Keyword Analysis',
                  items: [
                    'Current ranking positions',
                    'Keyword gap analysis',
                    'Low-competition opportunities',
                    'Local keyword potential',
                    'AI search keyword audit',
                  ],
                },
                {
                  icon: TrendingUp,
                  title: 'Competitor Analysis',
                  items: [
                    'Top 5 competitor review',
                    'Keyword overlap analysis',
                    'Backlink comparison',
                    'Content gap analysis',
                    'Local SEO comparison',
                  ],
                },
                {
                  icon: Zap,
                  title: 'Local SEO',
                  items: [
                    'Google Business Profile audit',
                    'Local citation check',
                    'NAP consistency review',
                    'Local ranking assessment',
                    'Review profile analysis',
                  ],
                },
                {
                  icon: Shield,
                  title: 'AI Search / GEO',
                  items: [
                    'AI citation readiness',
                    'Structured data audit',
                    'Entity authority check',
                    'Content depth analysis',
                    'Answer engine optimization',
                  ],
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="border rounded-xl p-6 bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
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

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Three simple steps to uncover your SEO potential.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Submit Your Details',
                  desc: 'Fill in the form below with your website URL and business info. It takes 2 minutes.',
                },
                {
                  step: '02',
                  title: 'We Analyse Your Site',
                  desc: 'Our team runs a comprehensive audit across technical SEO, on-page, content, local, and AI search readiness.',
                },
                {
                  step: '03',
                  title: 'Get Your Report',
                  desc: 'Receive a detailed report with prioritized fixes and a 30-minute walkthrough call — at no cost.',
                },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="text-4xl font-bold text-primary/30 mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="audit-form" className="py-20 bg-muted/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border rounded-xl p-8 bg-card">
              <h2 className="text-2xl font-bold mb-2 text-center">
                Claim Your Free SEO Audit
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fill in your details and we will send your audit report within
                5–7 business days.
              </p>
              <SeoAuditForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border rounded-lg p-4 cursor-pointer"
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
