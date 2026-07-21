import type { Metadata } from 'next'

export const dynamic = 'force-static'
import { ArrowRight, CheckCircle2, Server, ShieldCheck, Zap, Globe, Search, Wrench } from 'lucide-react'
import AuthorBio from '@/components/geo/AuthorBio'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import lazyLoad from 'next/dynamic'
const MotionWrapper = lazyLoad(() => import('@/components/layout/MotionWrapper'))
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'
import { serviceSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'Web Hosting South Africa',
  description:
    'Managed Next.js web hosting in South Africa. 99.9% uptime, free SSL, global CDN, and daily backups included. Secure, fast websites from R500/month.',
  keywords: ['Web Hosting South Africa', 'Web Hosting Johannesburg', 'Next.js Hosting South Africa', 'Managed Web Hosting Johannesburg', 'Fast Hosting South Africa', 'Secure Website Hosting SA'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/web-hosting',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/services/web-hosting',
      'x-default': 'https://www.nostalgic-studio.co.za/services/web-hosting',
    },
  },
  openGraph: {
    title: 'Web Hosting South Africa',
    description: 'Fast managed Next.js hosting in SA. SSL, CDN, 99.9% uptime. From R500/month.',
    url: 'https://www.nostalgic-studio.co.za/services/web-hosting',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [{ url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg', width: 1200, height: 630, alt: 'Web Hosting South Africa — Nostalgic Studio' }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Web Hosting South Africa',
    description: 'Fast managed Next.js hosting in SA. SSL, CDN, 99.9% uptime. From R500/month.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

const hostingSchemas = [
  serviceSchema({
    id: 'web-hosting',
    name: 'Web Hosting South Africa',
    description: 'Managed web hosting in South Africa optimised for Next.js applications. 99.9% uptime, SSL, global CDN, and daily backups.',
    url: '/services/web-hosting',
    areaServed: 'South Africa',
    priceRange: 'R500-R3000',
  }),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Web Hosting', url: '/services/web-hosting' },
  ]),
]

const hostingFaqs = [
  {
    question: 'Where are your hosting servers located?',
    answer: 'We utilise edge computing and global CDN networks, ensuring your website is served from the closest possible server to your visitors in Johannesburg and across South Africa for maximum speed.',
  },
  {
    question: 'Is SSL included with your hosting?',
    answer: 'Yes, every hosting plan includes a free SSL certificate to ensure your website is secure and trusted by both users and search engines. HTTPS is also a Google ranking signal.',
  },
  {
    question: 'Will you migrate my site for me?',
    answer: 'Yes, we offer free migration services for all new hosting clients. Our team handles the entire process, ensuring a smooth transition from your old provider with zero downtime.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide dedicated technical support via email and WhatsApp during business hours (7:30am–9pm SAST, Monday to Friday; 8am–5pm Saturday). Emergency support is available 24/7 for critical issues affecting your live website.',
  },
  {
    question: 'How much does web hosting cost?',
    answer: 'Our managed hosting packages start from R500 per month for basic sites and scale up to R3,000+ per month for high-traffic ecommerce stores. All plans include SSL, CDN, daily backups, and security monitoring.',
  },
]

export default function WebHosting() {
  return (
    <main className="pt-32 pb-20">
      {hostingSchemas.map((s, i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      
      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blazing-Fast <span className="text-gradient">Web Hosting Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <strong>Nostalgic Studio provides managed web hosting for South African businesses — including SSL certificates, daily backups, uptime monitoring, and local servers from R200/month.</strong>{' '}
              Don&apos;t let a slow host hold your business back. Our hosting solutions are optimized for
              Next.js and high-performance applications, ensuring your site stays fast, secure, and always online.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Get Hosted Now <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        {/* Definition Block - GEO Optimised */}
        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              What Is Managed Web Hosting?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                Managed web hosting is a service where the hosting provider handles all technical aspects 
                of running a website — including server maintenance, security updates, backups, and performance 
                optimisation — so the business owner can focus on their core operations.
              </p>
              <p>
                Website downtime costs South African businesses an average of R5,000–R50,000 per hour depending on 
                the business type. Managed hosting with 99.9% uptime guarantees reduces this risk to less than 
                8.7 hours of downtime per year, compared to 43+ hours with budget hosting providers.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-foreground">Reliability at the Edge: Why Hosting Location Matters</h3>
            <p className="text-muted-foreground mb-6">
              In the world of high-performance web design, your choice of hosting is your foundation. At Nostalgic Studio, we don&apos;t just provide server space; we provide a <strong>globally distributed infrastructure</strong> optimized specifically for the frameworks we use. By utilizing Edge computing and local CDN nodes, we ensure that your website loads instantly for users in Johannesburg, Cape Town, and beyond. This reduction in latency isn&apos;t just a luxury—it&apos;s a critical factor in your Core Web Vitals and overall SEO performance.
            </p>
            <p className="text-muted-foreground">
              Our managed hosting solutions are designed for <strong>zero-friction growth</strong>. As your South African startup scales, our infrastructure automatically adjusts to your traffic needs without manual intervention. We prioritize deep security, from automated SSL provisioning to pro-active DDoS mitigation, ensuring that your digital asset is protected against the unique threats of the modern web. When you host with us, you&apos;re not just buying a service; you&apos;re securing peace of mind and technical excellence.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Reliable Infrastructure for Your Growth</h2>
            <p className="text-muted-foreground mb-6">
              We provide more than just server space. Our managed hosting includes everything you need
               to run a successful online business in South Africa. Our <strong>web hosting</strong> features:
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

        <FaqSection faqs={hostingFaqs} title="Web Hosting FAQ" />

        <KeyTakeaways
          takeaways={[
            { point: 'Edge-optimized for South Africa', detail: 'CDN nodes serve content from the closest location to your SA visitors' },
            { point: 'SSL included on every plan', detail: 'HTTPS is a Google ranking signal and builds visitor trust' },
            { point: 'Free site migration', detail: 'we move your site from your old host at no cost and with zero downtime' },
            { point: 'Daily automated backups', detail: 'off-site backups mean disaster recovery is always an option' },
            { point: 'Next.js optimized infrastructure', detail: 'our stack is tuned for the frameworks we build with' },
          ]}
        />

        <AboutThisPage
          summary="This page covers Nostalgic Studio's web hosting services in Johannesburg, South Africa. We provide fast, secure, and scalable hosting optimized for Next.js applications."
          covers={['Web Hosting Johannesburg', 'Next.js Hosting', 'Managed Hosting', 'SSL Certificates', 'Site Migration']}
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
              <p className="text-sm text-muted-foreground">Fast hosting + strong SEO = better rankings. Get found on Google and AI engines.</p>
            </Link>
            <Link href="/services/web-design-johannesburg" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Globe className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Design Johannesburg</h3>
              <p className="text-sm text-muted-foreground">SEO-optimised, AI-friendly websites built with Next.js for maximum performance.</p>
            </Link>
            <Link href="/services/web-maintenance" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Wrench className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Maintenance</h3>
              <p className="text-sm text-muted-foreground">Keep your site secure, fast and up-to-date with ongoing maintenance.</p>
            </Link>
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

        <div className="mx-auto px-4 max-w-3xl">
          <AuthorBio />
        </div>
      </div>
    </main>
  )
}
