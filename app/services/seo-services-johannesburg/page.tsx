import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, TrendingUp, Search, Globe } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'SEO Services Johannesburg | Expert SEO Agency | Nostalgic Studio',
  description: 'Professional SEO services in Johannesburg. Boost your Google rankings with technical SEO, local SEO, and Next.js optimization for South African businesses.',
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
    title: 'SEO Services Johannesburg | Nostalgic Studio',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the benefits of SEO for my Johannesburg business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SEO increases your visibility in local search results, driving more organic traffic to your website, and helping you reach potential customers in Johannesburg and across South Africa.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does Next.js improve SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Next.js provides superior SEO through server-side rendering (SSR) and static site generation (SSG), making it easier for search engine bots to crawl and index your content quickly.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does SEO take to show results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SEO is a long-term strategy. Initial improvements appear in 3-4 months, with significant results typically achieved after 6-12 months of consistent optimization.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is local SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Local SEO optimizes your online presence to attract more customers from local searches. It includes Google Business Profile optimization, local keywords, and location-specific content.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does SEO cost in South Africa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SEO services in South Africa typically range from R3,000-R15,000 per month depending on competitiveness, scope, and goals. We offer tailored packages for businesses of all sizes.'
        }
      }
    ]
  }

  return (
    <main className="pt-32 pb-20">
      <Script id="page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
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

        <section className="bg-primary/5 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">How long does it take to see SEO results?</h3>
              <p className="text-muted-foreground">
                SEO is a long-term strategy. While some improvements can be seen in 3-4 months, 
                significant results usually take 6-12 months of consistent effort.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Do you focus on local Johannesburg search?</h3>
              <p className="text-muted-foreground">
                Yes, our local SEO strategies are specifically designed to help businesses in 
                Johannesburg and surrounding areas rank for location-based search terms.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What technical SEO do you offer?</h3>
              <p className="text-muted-foreground">
                We offer comprehensive technical SEO including site speed optimization, XML sitemaps, 
                robots.txt configuration, schema markup, canonical tags, and Core Web Vitals improvement.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Do you guarantee Google rankings?</h3>
              <p className="text-muted-foreground">
                No ethical SEO provider can guarantee specific rankings. We promise transparent reporting, 
                white-hat techniques, and measurable improvements in traffic and conversions.
              </p>
            </div>
          </div>
        </section>

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
