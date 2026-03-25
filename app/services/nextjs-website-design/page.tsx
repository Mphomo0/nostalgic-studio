import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Zap, Layout, Shield } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Next.js Website Design | Fast & Scalable',
  description: 'Specialized Next.js website design in Johannesburg. We build blazing-fast, SEO-ready, and scalable web applications.',
  keywords: ['Next.js Website Design', 'Next.js Development Johannesburg', 'React Web Development South Africa', 'High Performance Websites', 'Modern Web Design'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/nextjs-website-design',
  },
  openGraph: {
    title: 'Next.js Website Design',
    description: 'Specialized Next.js website design in Johannesburg. We build blazing-fast, SEO-ready web applications.',
    url: 'https://www.nostalgic-studio.co.za/services/nextjs-website-design',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function NextjsWebsiteDesign() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/services/nextjs-website-design',
    url: 'https://www.nostalgic-studio.co.za/services/nextjs-website-design',
    name: 'Next.js Website Design',
    description: 'Expert Next.js website design and development services in Johannesburg.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      url: 'https://www.nostalgic-studio.co.za'
    },
    mainEntity: {
      '@type': 'Service',
      name: 'Next.js Development',
      areaServed: 'South Africa',
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
        name: 'Why should I choose Next.js for my website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Next.js offers unparalleled speed, excellent SEO capabilities, and a great developer experience, making it the ideal choice for modern, scalable websites and applications.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Next.js good for small businesses in South Africa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Next.js provides a competitive edge by ensuring your website loads instantly even on slower mobile connections, which is crucial for the South African market.'
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
              Modern <span className="text-gradient">Next.js Website Design</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build the future of your business with Next.js development. We create ultra-fast, 
              SEO-optimized digital experiences that give your South African startup a competitive advantage.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Start Your Project <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Why We Specialize in Next.js</h2>
            <p className="text-muted-foreground mb-6">
              At Nostalgic Studio, we believe in using the best tools for the job. Next.js is the leading 
              React framework that allows us to deliver high-performance websites without compromise. 
              Our **Next.js website design** process includes:
            </p>
            <ul className="space-y-4">
              {[
                'Server-Side Rendering (SSR) for Instant Loads',
                'Static Site Generation (SSG) for SEO',
                'Optimized Image Handling for Speed',
                'Seamless API Integrations',
                'Scalable Architecture for Growth'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>
          <div className="bg-card p-10 rounded-3xl border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Zap className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Performance First</h3>
            </div>
            <p className="text-muted-foreground mb-8">
              We leverage the latest Next.js features to ensure your website passes Core Web Vitals with flying colors, 
              providing the best possible user experience for your customers in Johannesburg.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Layout className="text-primary w-5 h-5" />
                <span>Responsive & Adaptive Layouts</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-primary w-5 h-5" />
                <span>Secure & Reliable Deployment</span>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-primary/5 rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Next.js Development FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">How is Next.js different from standard WordPress?</h3>
              <p className="text-muted-foreground">
                Next.js provides a much faster and more secure environment than WordPress. It allows for 
                custom-built features and better SEO, as it doesn't rely on heavy plugins.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Can you migrate my current site to Next.js?</h3>
              <p className="text-muted-foreground">
                Yes, we specialize in migrating legacy websites to modern Next.js architectures, 
                improving performance and user experience in the process.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Next.js Advantage</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to upgrade your online presence with the latest in web technology?
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Let's Talk Tech</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
