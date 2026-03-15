import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Server, ShieldCheck, Zap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Web Hosting Johannesburg | Fast & Reliable Hosting Services',
  description: 'Experience blazing-fast web hosting in Johannesburg. We provide secure, scalable, and optimized hosting solutions for Next.js websites and South African businesses.',
  keywords: ['Web Hosting Johannesburg', 'Next.js Hosting South Africa', 'Managed Web Hosting Johannesburg', 'Fast Hosting South Africa', 'Secure Website Hosting'],
}

export default function WebHosting() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/services/web-hosting/#webpage',
    url: 'https://www.nostalgic-studio.co.za/services/web-hosting',
    name: 'Web Hosting Johannesburg',
    description: 'Reliable and high-performance web hosting services in Johannesburg, South Africa.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      '@id': 'https://www.nostalgic-studio.co.za/#organization'
    },
    mainEntity: {
      '@type': 'Service',
      name: 'Web Hosting',
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
        name: 'Where are your hosting servers located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We utilize edge computing and global CDN networks, ensuring your website is served from the closest possible server to your visitors in Johannesburg and across South Africa for maximum speed.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is SSL included with your hosting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, every hosting plan includes a free SSL certificate to ensure your website is secure and trusted by both users and search engines.'
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
              Blazing-Fast <span className="text-gradient">Web Hosting Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Don't let a slow host hold your business back. Our hosting solutions are optimized for 
              Next.js and high-performance applications, ensuring your site stays fast, secure, and always online.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Get Hosted Now <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Reliable Infrastructure for Your Growth</h2>
            <p className="text-muted-foreground mb-6">
              We provide more than just server space. Our managed hosting includes everything you need 
               to run a successful online business in South Africa. Our **web hosting** features:
            </p>
            <ul className="space-y-4">
              {[
                'Optimized Hosting for Next.js & React',
                '99.9% Uptime Guarantee',
                'Global CDN & Edge Computing',
                'Automated Daily Backups',
                '24/7 Security Monitoring & Firewalls'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
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
                <h3 className="text-xl font-bold mb-2">Lightning Speed</h3>
                <p className="text-muted-foreground text-sm">We use SSD storage and advanced caching to ensure your website loads in milliseconds.</p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                <p className="text-muted-foreground text-sm">Protect your data with automated SSL, DDoS protection, and regular security patches.</p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Server className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scalable Resources</h3>
                <p className="text-muted-foreground text-sm">As your traffic grows, your hosting can grow with you, without any downtime.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-primary/5 rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Web Hosting FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Will you migrate my site for me?</h3>
              <p className="text-muted-foreground">
                Yes, we offer free migration services for all new hosting clients, 
                ensuring a smooth transition from your old provider.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What kind of support do you offer?</h3>
              <p className="text-muted-foreground">
                We provide dedicated technical support via email and WhatsApp, 
                helping you resolve any hosting-related issues quickly.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Better Hosting</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Give your website the home it deserves. Join Nostalgic Studio for premium web hosting.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Switch Your Hosting Today</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
