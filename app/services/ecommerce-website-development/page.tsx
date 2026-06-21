import type { Metadata } from 'next'

export const dynamic = 'force-static'
import { ArrowRight, CheckCircle2, ShoppingCart, CreditCard, Box, Globe, Search, Server } from 'lucide-react'
import AuthorBio from '@/components/geo/AuthorBio'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'
import lazyLoad from 'next/dynamic'
const MotionWrapper = lazyLoad(() => import('@/components/layout/MotionWrapper'))
import { serviceSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'Ecommerce Development South Africa',
  description:
    'Custom Next.js ecommerce websites in Johannesburg with SA payment gateways: PayFast, Yoco and Ozow. Fast, secure online stores from R25,000.',
  keywords: ['Ecommerce Website Development Johannesburg', 'Online Store Builder South Africa', 'Next.js Ecommerce Development', 'PayFast Integration South Africa', 'Custom Ecommerce Solutions', 'WooCommerce Alternative South Africa'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/ecommerce-website-development',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/services/ecommerce-website-development',
      'x-default': 'https://www.nostalgic-studio.co.za/services/ecommerce-website-development',
    },
  },
  openGraph: {
    title: 'Ecommerce Development South Africa',
    description: 'Custom Next.js online stores with SA payment gateways. PayFast, Yoco & Ozow. From R25,000.',
    url: 'https://www.nostalgic-studio.co.za/services/ecommerce-website-development',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [{ url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg', width: 1200, height: 630, alt: 'Ecommerce Development South Africa — Nostalgic Studio' }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Ecommerce Development South Africa',
    description: 'Custom Next.js online stores with SA payment gateways. PayFast, Yoco & Ozow. From R25,000.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

const ecommerceSchemas = [
  serviceSchema({
    id: 'ecommerce-website-development',
    name: 'Ecommerce Website Development South Africa',
    description: 'Custom Next.js ecommerce development in Johannesburg with South African payment gateways including PayFast, Yoco, and Ozow.',
    url: '/services/ecommerce-website-development',
    areaServed: 'South Africa',
    priceRange: 'R25000-R60000',
    deliveryTime: '8-12 weeks',
  }),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Ecommerce Development', url: '/services/ecommerce-website-development' },
  ]),
]

const ecommerceFaqs = [
  {
    question: 'Which payment gateways do you support for ecommerce?',
    answer: 'We integrate with all major South African payment gateways, including PayFast, Peach Payments, Yoco, and Ozow, ensuring a smooth checkout experience for your customers.',
  },
  {
    question: 'Why use Next.js for an ecommerce store?',
    answer: 'Next.js is ideal for ecommerce because it delivers sub-2-second load times, which directly increases conversion rates. Studies show a 1-second delay in page load reduces conversions by 7%. Next.js also provides superior SEO through server-side rendering, helping your products rank higher on Google.',
  },
  {
    question: 'Can I manage my own products?',
    answer: 'Yes, we provide a user-friendly Content Management System (CMS) that allows you to easily add, edit, and remove products without any technical knowledge. We also offer training sessions to get your team up to speed.',
  },
  {
    question: 'Is my ecommerce site secure?',
    answer: 'Security is our top priority. By using Next.js and modern serverless architectures, we significantly reduce the attack surface compared to platforms like WordPress. All stores include SSL encryption, PCI-compliant payment processing, and automated security patches.',
  },
  {
    question: 'How long does it take to build an ecommerce website?',
    answer: 'A typical ecommerce website takes 8–12 weeks from kickoff to launch. This includes strategy, design, development, payment gateway integration, product loading, and testing. Simpler stores with fewer products can be completed in 4–6 weeks.',
  },
]

export default function EcommerceWebsiteDevelopment() {
  return (
    <main className="pt-32 pb-20">
      {ecommerceSchemas.map((s, i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scalable <span className="text-gradient">Ecommerce Website Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <strong>Nostalgic Studio builds custom e-commerce websites for South African businesses — including PayFast/Yoco/Ozow integration, mobile checkout, and SEO product pages from R10,000.</strong>{' '}
              Turn your visitors into customers with a high-performance online store.
              Our Next.js ecommerce solutions are designed for speed, security, and maximum ROI in the South African market.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Launch Your Store <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        {/* Definition Block - GEO Optimised */}
        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              What Is Ecommerce Website Development?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ecommerce website development is the process of building online stores that allow businesses 
              to sell products or services over the internet. It includes product catalogues, shopping carts, 
              payment gateway integration, and order management systems.
            </p>
            <p className="text-muted-foreground">
              In South Africa, ecommerce grew by 66% between 2020 and 2025, with online retail reaching R71 billion in 2025. 
              A professionally built ecommerce website on Next.js loads 2–3x faster than traditional platforms, 
              which directly impacts conversion rates — studies show every 1-second improvement in load time 
              increases conversions by 7%.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Custom Online Stores That Convert</h2>
            <p className="text-muted-foreground mb-6">
              Don't settle for a generic template. We build bespoke ecommerce experiences that reflect your brand
              and make shopping easy for your customers. Our <strong>ecommerce website development</strong> features:
            </p>
            <ul className="space-y-4">
              {[
                'High-Performance Next.js Frontend',
                'South African Payment Gateway Integration',
                'Advanced Inventory Management',
                'Mobile-Optimized Shopping Cart',
                'SEO-Friendly Product Pages'
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
                <ShoppingCart className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Seamless Checkout</h3>
                <p className="text-muted-foreground text-sm">Reduce cart abandonment with a fast, one-page checkout process optimized for mobile users.</p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <CreditCard className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
                <p className="text-muted-foreground text-sm">We ensure your transactions are safe with PCI-compliant integrations and SSL encryption.</p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Box className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Logistics Integration</h3>
                <p className="text-muted-foreground text-sm">Connect your store with local shipping providers for automated rates and tracking.</p>
              </div>
            </div>
          </div>
        </div>

        <FaqSection faqs={ecommerceFaqs} title="Ecommerce FAQ" />

        <KeyTakeaways
          takeaways={[
            { point: 'Next.js ecommerce', detail: 'delivers faster load times and higher Google rankings than WordPress stores' },
            { point: 'South African payment gateways', detail: 'including PayFast, Peach Payments, Yoco, and Ozow are fully integrated' },
            { point: 'CMS included', detail: 'manage your own products without any technical knowledge' },
            { point: 'Mobile-optimized', detail: 'shopping cart and checkout experience reduces cart abandonment' },
            { point: 'Logistics integration', detail: 'automated shipping rates and tracking with local couriers' },
          ]}
        />

        <AboutThisPage
          summary="This page covers Nostalgic Studio's ecommerce website development services in Johannesburg, South Africa. We build custom Next.js online stores with South African payment gateways for businesses ready to sell online."
          covers={['Ecommerce Development', 'Next.js Online Stores', 'Payment Gateway Integration', 'Inventory Management', 'CMS']}
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
              <p className="text-sm text-muted-foreground">Drive organic traffic to your store with classic SEO + AI search optimisation.</p>
            </Link>
            <Link href="/services/web-design-johannesburg" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Globe className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Design Johannesburg</h3>
              <p className="text-sm text-muted-foreground">SEO-optimised, AI-friendly websites built with Next.js for maximum performance.</p>
            </Link>
            <Link href="/services/web-hosting" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Server className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Hosting</h3>
              <p className="text-sm text-muted-foreground">Fast, secure, scalable hosting optimised for Next.js and ecommerce stores.</p>
            </Link>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Start Selling Online Today</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to take your retail business to the digital world? Let's build something great together.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Get an Ecommerce Quote</Link>
          </Button>
        </div>

        <div className="mx-auto px-4 max-w-3xl">
          <AuthorBio />
        </div>
      </div>
    </main>
  )
}
