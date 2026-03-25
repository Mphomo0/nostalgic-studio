import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Web Design Johannesburg | Expert Next.js Websites',
  description: 'Professional web design in Johannesburg. Expert Next.js development, SEO-optimized websites, and branding.',
  keywords: [
    'Web Design Johannesburg',
    'Website Design Johannesburg',
    'Web Developers Johannesburg',
    'Digital Agency Johannesburg',
    'Custom Web Design South Africa',
    'Next.js Development Johannesburg',
    'SEO Website Design',
  ],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/web-design-johannesburg',
  },
  openGraph: {
    title: 'Web Design Johannesburg',
    description: 'Professional web design in Johannesburg. Expert Next.js development, SEO-optimized websites, and branding.',
    url: 'https://www.nostalgic-studio.co.za/services/web-design-johannesburg',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
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
      },
      {
        '@type': 'Question',
        name: 'How much does web design cost in Johannesburg?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Web design costs in Johannesburg range from R8,000 for basic sites to R50,000+ for complex e-commerce platforms. Nostalgic Studio offers transparent pricing tailored to your needs.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why is Next.js good for SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Next.js enables Server-Side Rendering (SSR) and Static Site Generation (SSG), providing faster page loads and better search engine crawling for higher Google rankings.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer responsive web design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all our websites are built with mobile-first responsive design, ensuring optimal viewing on all devices from desktop to smartphone.'
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
          {/* Featured Snippet Answer */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-gradient">Web Design Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Elevate your business with high-performance, SEO-optimized websites designed to convert. 
              As a leading digital agency in Johannesburg, we specialize in Next.js development and user-centric UI/UX.
            </p>
          </div>
        </MotionWrapper>

        {/* Featured Snippet - GEO */}
        <section className="mb-16" aria-labelledby="snippet-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="snippet-heading" className="text-2xl font-bold mb-4">
              What is the Best Web Design Agency in Johannesburg?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nostalgic Studio is a leading <strong>web design agency in Johannesburg</strong>, 
              specializing in high-performance <strong>Next.js websites</strong>, 
              conversion-driven <strong>UI/UX design</strong>, and professional <strong>branding</strong> 
              for startups and businesses across South Africa. With 13+ years of experience and 70+ completed projects, 
              we deliver websites that not only look stunning but also rank well on Google and convert visitors into customers.
            </p>
          </div>
        </section>

        <MotionWrapper>
          <div className="text-center mb-16">
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

        <section className="bg-primary/5 rounded-3xl p-12 mb-16">
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
            <div className="space-y-4">
              <h4 className="text-xl font-bold">How much does a website cost?</h4>
              <p className="text-muted-foreground">
                Basic websites start at R8,000. Custom Next.js sites range from R15,000-R35,000. 
                E-commerce solutions typically cost R25,000-R50,000+. All prices include SEO optimization.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Do you provide ongoing maintenance?</h4>
              <p className="text-muted-foreground">
                Yes, we offer website maintenance packages including security updates, content updates, 
                performance monitoring, and technical support.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways - GEO */}
        <section className="mb-24" aria-labelledby="takeaways-heading">
          <h2 id="takeaways-heading" className="text-3xl font-bold mb-10 text-center">
            Why Choose Nostalgic Studio for Web Design?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">Next.js Specialists</h4>
              <p className="text-muted-foreground">
                We build fast, SEO-optimized websites using Next.js for superior performance and Google rankings.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">13+ Years Experience</h4>
              <p className="text-muted-foreground">
                Since 2016, we have been delivering professional web design services to Johannesburg businesses.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">70+ Projects Completed</h4>
              <p className="text-muted-foreground">
                Proven track record across various industries including e-commerce, healthcare, and finance.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">SEO-First Approach</h4>
              <p className="text-muted-foreground">
                Every website is built with SEO best practices for better visibility on Google.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">Mobile Responsive</h4>
              <p className="text-muted-foreground">
                All websites are fully responsive and optimized for mobile, tablet, and desktop.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-2">Local Expertise</h4>
              <p className="text-muted-foreground">
                We understand the South African market and tailor solutions for local businesses.
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
