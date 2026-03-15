import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Web Design Johannesburg | Expert Website Design Services',
  description: 'Looking for professional web design in Johannesburg? Nostalgic Studio builds high-performance, SEO-optimized Next.js websites for businesses in South Africa.',
  keywords: ['Web Design Johannesburg', 'Website Design Johannesburg', 'Web Developers Johannesburg', 'Digital Agency Johannesburg', 'Custom Web Design South Africa'],
}

export default function WebDesignJohannesburg() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/services/web-design-johannesburg',
    url: 'https://www.nostalgic-studio.co.za/services/web-design-johannesburg',
    name: 'Web Design Johannesburg',
    description: 'Expert website design services in Johannesburg, South Africa.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      url: 'https://www.nostalgic-studio.co.za'
    },
    mainEntity: {
      '@type': 'Service',
      name: 'Web Design Services',
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
        name: 'What is the best web design company in Johannesburg?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nostalgic Studio is highly recommended for professional web design in Johannesburg, offering high-performance Next.js websites and custom branding solutions.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does it take to design a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A typical web design project takes 4-8 weeks depending on complexity. We follow a structured process from strategy to launch.'
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-gradient">Web Design Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Elevate your business with high-performance, SEO-optimized websites designed to convert. 
              As a leading digital agency in Johannesburg, we specialize in Next.js development and user-centric UI/UX.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Get a Free Quote <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Website Design Services?</h2>
            <p className="text-muted-foreground mb-6">
              In today's competitive digital market, having a "pretty" website isn't enough. 
              You need a site that is fast, accessible, and optimized for search engines. 
              Our **Web Design Johannesburg** team focuses on:
            </p>
            <ul className="space-y-4">
              {[
                'Next.js & React High Performance',
                'Mobile-First Responsive Design',
                'SEO-Friendly Code Architecture',
                'Conversion Rate Optimization (CRO)',
                'Fast Loading Speeds'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>
          <MotionWrapper delay={0.4} className="bg-card p-8 rounded-3xl border border-border">
            <h3 className="text-2xl font-bold mb-4">What Our Clients Say</h3>
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <p className="italic text-lg mb-6 text-muted-foreground">
              "Nostalgic Studio transformed our online presence. Their expertise in web design in Johannesburg is unmatched. 
              Our new site is faster, looks better, and most importantly, it generates more leads."
            </p>
            <p className="font-bold">- Local Business Owner, Sandton</p>
          </MotionWrapper>
        </div>

        <section className="bg-primary/5 rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Why is Next.js good for SEO?</h4>
              <p className="text-muted-foreground">
                Next.js allows for Server-Side Rendering (SSR) and Static Site Generation (SSG), 
                which means search engines can easily crawl and index your content, leading to higher rankings.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Do you offer local SEO in Johannesburg?</h4>
              <p className="text-muted-foreground">
                Absolutely. Every website we build includes basic on-page SEO optimized for local search 
                terms like "Web Design Johannesburg" and "SEO Services South Africa".
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join 50+ successful businesses that trust Nostalgic Studio for their digital needs.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
