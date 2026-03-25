import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Wrench, Shield, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Web Maintenance Johannesburg | Proactive Website Support',
  description: 'Keep your website running smoothly with professional web maintenance in Johannesburg. We provide security updates and performance optimization.',
  keywords: ['Web Maintenance Johannesburg', 'Website Support South Africa', 'Next.js Maintenance Services', 'Managed Website Updates', 'Digital Agency Support'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/web-maintenance',
  },
  openGraph: {
    title: 'Web Maintenance Johannesburg',
    description: 'Keep your website running smoothly with professional web maintenance in Johannesburg.',
    url: 'https://www.nostalgic-studio.co.za/services/web-maintenance',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function WebMaintenance() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/services/web-maintenance/#webpage',
    url: 'https://www.nostalgic-studio.co.za/services/web-maintenance',
    name: 'Web Maintenance Johannesburg',
    description: 'Proactive web maintenance and support services in Johannesburg, South Africa.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      '@id': 'https://www.nostalgic-studio.co.za/#organization'
    },
    mainEntity: {
      '@type': 'Service',
      name: 'Web Maintenance',
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
        name: 'Why do I need a web maintenance plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Regular maintenance ensures your website remains secure, fast, and up-to-date with the latest technology, preventing potential issues before they affect your business.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is included in your maintenance services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our services include regular security scans, software updates, performance optimization, monthly backups, and dedicated time for content updates or small design changes.'
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
              Reliable <span className="text-gradient">Web Maintenance Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Focus on your business while we handle your website. Our proactive maintenance plans 
              ensure your South African startup's online presence is always secure, fast, and functional.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Get Peace of Mind <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Proactive Care for Your Digital Asset</h2>
            <p className="text-muted-foreground mb-6">
              A website is never truly "finished". It requires ongoing care to perform at its best. 
              We offer comprehensive support packages tailored to your needs. 
              Our **web maintenance** services include:
            </p>
            <ul className="space-y-4">
              {[
                'Regular Next.js & Dependency Updates',
                'Continuous Security Monitoring & Patches',
                'Monthly Performance & Speed Optimization',
                'Automated Off-site Daily Backups',
                'Priority Support for Content Updates'
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
                <Shield className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Total Security</h3>
                <p className="text-muted-foreground text-sm">We keep your site protected from the latest threats with proactive monitoring and firewall management.</p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <RefreshCw className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Always Up-to-Date</h3>
                <p className="text-muted-foreground text-sm">We ensure your software and plugins are always current, improving stability and performance.</p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Wrench className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ongoing Optimization</h3>
                <p className="text-muted-foreground text-sm">We regularly audit your site's performance and SEO to ensure it continues to rank well.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-primary/5 rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Maintenance FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What happens if my site goes down?</h3>
              <p className="text-muted-foreground">
                With our 24/7 monitoring, we're often aware of issues before you are. 
                Our team will work immediately to restore your site as quickly as possible.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Can I cancel my plan at any time?</h3>
              <p className="text-muted-foreground">
                Yes, our maintenance plans are flexible. You can upgrade, downgrade, or 
                cancel your subscription with one month's notice.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Secure Your Website's Future</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to stop worrying about your website? Let the experts at Nostalgic Studio handle it.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Choose a Maintenance Plan</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
