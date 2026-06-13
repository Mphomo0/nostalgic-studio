import type { Metadata } from 'next'

export const dynamic = 'force-static'
import { ArrowRight, CheckCircle2, Wrench, Shield, RefreshCw, Globe, Search, Server } from 'lucide-react'
import AuthorBio from '@/components/geo/AuthorBio'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import lazyLoad from 'next/dynamic'
const MotionWrapper = lazyLoad(() => import('@/components/layout/MotionWrapper'))
import Script from 'next/script'
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'
import { serviceSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'Web Maintenance South Africa',
  description:
    'Website maintenance for SA businesses. Security updates, performance optimisation & 24/7 monitoring. Keep your site fast from R500/month.',
  keywords: ['Web Maintenance Johannesburg', 'Website Support South Africa', 'Next.js Maintenance Services', 'Managed Website Updates South Africa', 'Website Security Monitoring SA'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/web-maintenance',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/services/web-maintenance',
      'x-default': 'https://www.nostalgic-studio.co.za/services/web-maintenance',
    },
  },
  openGraph: {
    title: 'Web Maintenance South Africa',
    description: 'Keep your website secure and performing. Monthly plans from R500/month. 24/7 monitoring.',
    url: 'https://www.nostalgic-studio.co.za/services/web-maintenance',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [{ url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg', width: 1200, height: 630, alt: 'Web Maintenance South Africa — Nostalgic Studio' }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Web Maintenance South Africa',
    description: 'Keep your website secure and performing. Monthly plans from R500/month. 24/7 monitoring.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

const maintenanceSchemas = [
  serviceSchema({
    id: 'web-maintenance',
    name: 'Web Maintenance South Africa',
    description: 'Proactive website maintenance and support in Johannesburg. Security monitoring, Next.js updates, performance optimisation, and daily backups.',
    url: '/services/web-maintenance',
    areaServed: 'South Africa',
    priceRange: 'R500-R3000',
  }),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Web Maintenance', url: '/services/web-maintenance' },
  ]),
]

const maintenanceFaqs = [
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

export default function WebMaintenance() {
  return (
    <main className="pt-32 pb-20">
      {maintenanceSchemas.map((s, i) => (
        <Script key={i} id={`schema-${i}`} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      
      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reliable <span className="text-gradient">Web Maintenance Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <strong>Nostalgic Studio offers website maintenance plans for South African businesses — keeping your site secure, updated, and performing with monthly reports from R500/month.</strong>{' '}
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
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                Website maintenance is the ongoing process of checking, updating, and optimising a website 
                to ensure it remains secure, fast, and functional. It includes software updates, security 
                monitoring, performance optimisation, content updates, and regular backups.
              </p>
              <p>
                According to industry data, 60% of small business websites have at least one critical vulnerability. 
                Regular maintenance reduces security risks by 95% and ensures websites maintain their Google rankings. 
                The average cost of a website hack for a South African small business is R15,000–R75,000 in recovery costs.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-foreground">Proactive Care: Protecting Your Digital Equity</h3>
            <p className="text-muted-foreground mb-6">
              A website is a living digital asset, not a static brochure. In the fast-moving tech environment of Johannesburg, staying relevant means staying updated. At Nostalgic Studio, we view maintenance as <strong>proactive value preservation</strong>. We don't just wait for things to break; we actively monitor your Next.js application for dependency vulnerabilities, performance regressions, and SEO health. Our goal is to ensure that the high-performance site we built for you continues to deliver ROI years after launch.
            </p>
            <p className="text-muted-foreground">
              Our maintenance plans are more than just a safety net—they are a <strong>competitive advantage</strong>. By ensuring your Core Web Vitals remain in the "green" and your security patches are always current, we keep your business ahead of competitors who neglect their digital presence. We understand the South African business landscape, where reliability and trust are paramount. With our team handling the technical heavy lifting, you can focus on scaling your operations, confident that your digital foundation is solid, secure, and performing at its peak.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Proactive Care for Your Digital Asset</h2>
            <p className="text-muted-foreground mb-6">
              A website is never truly "finished". It requires ongoing care to perform at its best.
              We offer comprehensive support packages tailored to your needs.
              Our <strong>web maintenance</strong> services include:
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

        <FaqSection faqs={maintenanceFaqs} title="Web Maintenance FAQ" />

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

        {/* Internal Links */}
        <section className="mb-16" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-bold mb-6 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/seo-services-johannesburg" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Search className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">SEO & AI Search Visibility</h3>
              <p className="text-sm text-muted-foreground">Maintenance keeps your site healthy — SEO ensures it gets found. Get both.</p>
            </Link>
            <Link href="/services/web-hosting" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Server className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Hosting</h3>
              <p className="text-sm text-muted-foreground">Fast, secure, scalable hosting optimised for Next.js applications.</p>
            </Link>
            <Link href="/services/web-design-johannesburg" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Globe className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Design Johannesburg</h3>
              <p className="text-sm text-muted-foreground">SEO-optimised, AI-friendly websites built with Next.js for maximum performance.</p>
            </Link>
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

        <div className="mx-auto px-4 max-w-3xl">
          <AuthorBio />
        </div>
      </div>
    </main>
  )
}
