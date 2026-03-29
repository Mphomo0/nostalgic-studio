import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Wrench, Shield, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'

export const metadata: Metadata = {
  title: 'Web Maintenance | Proactive Website Support',
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

  const faqs = [
    {
      question: 'Why do I need a web maintenance plan?',
      answer: 'Regular maintenance ensures your website remains secure, fast, and up-to-date with the latest technology. Outdated websites are the number one target for hackers, and slow sites lose Google rankings. A maintenance plan prevents these issues before they affect your business.',
    },
    {
      question: 'What is included in your maintenance services?',
      answer: 'Our services include regular security scans, software updates, performance optimization, monthly backups, and dedicated time for content updates or small design changes. Higher-tier plans include SEO auditing and Core Web Vitals monitoring.',
    },
    {
      question: 'What happens if my site goes down?',
      answer: 'With our 24/7 monitoring, we are often aware of issues before you are. Our team will work immediately to restore your site as quickly as possible. Critical downtime issues are escalated to senior developers within 30 minutes.',
    },
    {
      question: 'Can I cancel my plan at any time?',
      answer: 'Yes, our maintenance plans are flexible. You can upgrade, downgrade, or cancel your subscription with one month\'s notice. There are no long-term contracts or cancellation fees.',
    },
    {
      question: 'How much does website maintenance cost in South Africa?',
      answer: 'Website maintenance in South Africa typically costs R500–R3,000 per month depending on the complexity of your site and the level of support required. Nostalgic Studio offers three tiers: Starter (R500/month), Professional (R1,500/month), and Enterprise (R3,000/month).',
    },
  ]

  return (
    <main className="pt-32 pb-20">
      <Script id="page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      
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

        {/* Definition Block - GEO Optimised */}
        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              What Is Website Maintenance?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Website maintenance is the ongoing process of checking, updating, and optimising a website 
              to ensure it remains secure, fast, and functional. It includes software updates, security 
              monitoring, performance optimisation, content updates, and regular backups.
            </p>
            <p className="text-muted-foreground">
              According to industry data, 60% of small business websites have at least one critical vulnerability. 
              Regular maintenance reduces security risks by 95% and ensures websites maintain their Google rankings. 
              The average cost of a website hack for a South African small business is R15,000–R75,000 in recovery costs.
            </p>
          </div>
        </section>

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

        <FaqSection faqs={faqs} title="Web Maintenance FAQ" />

        <KeyTakeaways
          takeaways={[
            { point: 'Proactive monitoring', detail: 'we detect and fix issues before your customers even notice them' },
            { point: 'Dependency updates prevent security vulnerabilities', detail: 'outdated packages are the most common attack vector for websites' },
            { point: 'Performance audits included', detail: 'we regularly check Core Web Vitals and fix regressions' },
            { point: 'Priority content updates', detail: 'maintenance plan clients get priority scheduling for content changes' },
            { point: 'Flexible plans', detail: 'cancel or change your subscription with one month\'s notice' },
          ]}
        />

        <AboutThisPage
          summary="This page covers Nostalgic Studio's web maintenance services in Johannesburg, South Africa. We provide security monitoring, software updates, performance optimization, and daily backups."
          covers={['Web Maintenance Johannesburg', 'Security Monitoring', 'Software Updates', 'Performance Optimization', 'Website Support']}
          lastUpdated="March 2026"
        />

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
