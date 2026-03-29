import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, TrendingUp, Search, Globe } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'

export const metadata: Metadata = {
  title: 'SEO Services Johannesburg | Expert SEO Agency',
  description: 'Professional SEO services in Johannesburg. Boost your Google rankings with technical SEO, local SEO, and Next.js optimization.',
  keywords: [
    'SEO Services Johannesburg',
    'Search Engine Optimization Johannesburg',
    'SEO Agency South Africa',
    'Local SEO Johannesburg',
    'Next.js SEO Experts',
    'Google Ranking Services',
  ],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/seo-services-johannesburg',
  },
  openGraph: {
    title: 'SEO Services Johannesburg',
    description: 'Professional SEO services in Johannesburg. Boost your Google rankings with technical SEO, local SEO, and Next.js optimization.',
    url: 'https://www.nostalgic-studio.co.za/services/seo-services-johannesburg',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function SEOServicesJohannesburg() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/services/seo-services-johannesburg',
    url: 'https://www.nostalgic-studio.co.za/services/seo-services-johannesburg',
    name: 'SEO Services Johannesburg',
    description: 'Expert search engine optimization services in Johannesburg, South Africa.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      url: 'https://www.nostalgic-studio.co.za'
    },
    mainEntity: {
      '@type': 'Service',
      name: 'SEO Services',
      areaServed: 'Johannesburg',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Nostalgic Studio',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Johannesburg',
          addressRegion: 'Gauteng',
          addressCountry: 'ZA'
        }
      }
    }
  }

  const faqs = [
    {
      question: 'What are the benefits of SEO for my Johannesburg business?',
      answer: 'SEO increases your visibility in local search results, driving more organic traffic to your website and helping you reach potential customers in Johannesburg and across South Africa.'
    },
    {
      question: 'How does Next.js improve SEO?',
      answer: 'Next.js provides superior SEO through server-side rendering (SSR) and static site generation (SSG), making it easier for search engine bots to crawl and index your content quickly.'
    },
    {
      question: 'How long does SEO take to show results?',
      answer: 'SEO is a long-term strategy. Initial improvements appear in 3–4 months, with significant results typically achieved after 6–12 months of consistent optimization.'
    },
    {
      question: 'What is local SEO?',
      answer: 'Local SEO optimizes your online presence to attract more customers from local searches. It includes Google Business Profile optimization, local keywords, and location-specific content.'
    },
    {
      question: 'How much does SEO cost in South Africa?',
      answer: 'SEO services in South Africa typically range from R3,000–R15,000 per month depending on competitiveness, scope, and goals. We offer tailored packages for businesses of all sizes.'
    },
    {
      question: 'Do you focus on local Johannesburg search?',
      answer: 'Yes, our local SEO strategies are specifically designed to help businesses in Johannesburg and surrounding areas rank for location-based search terms.'
    },
    {
      question: 'What technical SEO do you offer?',
      answer: 'We offer comprehensive technical SEO including site speed optimization, XML sitemaps, robots.txt configuration, schema markup, canonical tags, and Core Web Vitals improvement.'
    },
    {
      question: 'Do you guarantee Google rankings?',
      answer: 'No ethical SEO provider can guarantee specific rankings. We promise transparent reporting, white-hat techniques, and measurable improvements in traffic and conversions.'
    }
  ]

  return (
    <main className="pt-32 pb-20">
      <Script id="page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      
      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert <span className="text-gradient">SEO Services Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dominating the search results requires more than just keywords. Our Next.js development expertise ensures 
              your site is technically sound and optimized for the highest visibility in South Africa.
            </p>
          </div>
        </MotionWrapper>

        {/* Definition Block - GEO Optimised */}
        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              What Is SEO?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              SEO (Search Engine Optimization) is the practice of optimising a website to rank higher 
              in search engine results pages (SERPs), increasing organic (non-paid) traffic. It includes 
              technical SEO, on-page content optimisation, and off-page link building.
            </p>
            <p className="text-muted-foreground">
              75% of users never scroll past the first page of Google results. For Johannesburg businesses, 
              local SEO is critical — 46% of all Google searches have local intent, and businesses in 
              the Google Local Pack receive 42% of all local search clicks.
            </p>
          </div>
        </section>

        {/* Featured Snippet - GEO */}
        <section className="mb-16" aria-labelledby="snippet-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="snippet-heading" className="text-2xl font-bold mb-4">
              What is the Best SEO Agency in Johannesburg?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nostalgic Studio is a leading <strong>SEO agency in Johannesburg</strong>, specializing in 
              technical SEO, local SEO, and <strong>Next.js website optimization</strong> for businesses 
              across South Africa. Our data-driven approach combines proven SEO strategies with cutting-edge 
              technology to deliver measurable results. We help businesses increase organic traffic, improve 
              Google rankings, and grow their online presence through comprehensive SEO solutions.
            </p>
          </div>
        </section>

        <MotionWrapper>
          <div className="text-center mb-16">
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Get Your SEO Audit <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Rank Higher, Grow Faster</h2>
            <p className="text-muted-foreground mb-6">
              In Johannesburg's competitive market, being on the first page of Google is non-negotiable. 
              We combine technical SEO with local insights to help your business stand out. 
              Our **SEO Services Johannesburg** focus on:
            </p>
            <ul className="space-y-4">
              {[
                'Technical SEO for Next.js Websites',
                'Local SEO Strategy for Johannesburg',
                'In-depth Keyword Research & Analysis',
                'Content Optimization & Strategy',
                'High-Quality Backlink Building'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-3xl border border-border flex flex-col items-center text-center">
              <Search className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold">Organic Traffic</h3>
            </div>
            <div className="bg-card p-6 rounded-3xl border border-border flex flex-col items-center text-center">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold">Better Rankings</h3>
            </div>
            <div className="bg-card p-6 rounded-3xl border border-border flex flex-col items-center text-center">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold">Local Visibility</h3>
            </div>
            <div className="bg-card p-6 rounded-3xl border border-border flex flex-col items-center text-center">
              <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold">ROI Focused</h3>
            </div>
          </div>
        </div>

        <FaqSection faqs={faqs} title="SEO Services FAQ" />

        {/* Key Takeaways - GEO */}
        <section className="mb-24" aria-labelledby="takeaways-heading">
          <h2 id="takeaways-heading" className="text-3xl font-bold mb-10 text-center">
            Why Choose Nostalgic Studio for SEO?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">Technical SEO Experts</h4>
              <p className="text-muted-foreground">
                We specialize in technical SEO for Next.js websites, ensuring fast load times and perfect crawlability.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">Local SEO Focus</h4>
              <p className="text-muted-foreground">
                We optimize for local search to help your business appear in "near me" searches and Google Maps.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">Data-Driven Approach</h4>
              <p className="text-muted-foreground">
                Every decision is backed by data. We provide detailed analytics and monthly performance reports.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">Content Strategy</h4>
              <p className="text-muted-foreground">
                We create SEO-optimized content that resonates with your audience and ranks on Google.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">Proven Results</h4>
              <p className="text-muted-foreground">
                70+ successful projects with measurable improvements in traffic and search rankings.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">Transparent Reporting</h4>
              <p className="text-muted-foreground">
                Monthly reports showing keyword rankings, traffic growth, and ROI metrics.
              </p>
            </div>
          </div>
        </section>

        <KeyTakeaways
          takeaways={[
            { point: 'Technical SEO first', detail: 'site speed, crawlability, and Core Web Vitals directly impact rankings' },
            { point: 'Local SEO specialists', detail: 'Google Business Profile and Johannesburg-specific optimizations that drive foot traffic' },
            { point: 'Long-term results', detail: 'organic traffic compounds over time unlike paid ads that stop when budgets do' },
            { point: 'Next.js SEO advantage', detail: 'our tech stack gives native SEO capabilities that plugin-based sites cannot match' },
            { point: 'Transparent reporting', detail: 'monthly reports with keyword rankings, traffic growth, and ROI metrics' },
          ]}
        />

        <AboutThisPage
          summary="This page covers Nostalgic Studio's SEO services in Johannesburg, South Africa. We help startups and businesses improve Google rankings through technical SEO, local SEO, and content optimization."
          covers={['Technical SEO', 'Local SEO Johannesburg', 'Keyword Research', 'Content Optimization', 'Google Business Profile']}
          lastUpdated="March 2026"
        />

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Dominate Search?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a tailored SEO strategy that drives real business growth for your South African startup.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
