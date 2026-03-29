import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, ShoppingCart, CreditCard, Box } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ecommerce Website Development | Sell Online',
  description: 'Expert ecommerce website development in Johannesburg. We build high-converting online stores using Next.js with payment gateway integration.',
  keywords: ['Ecommerce Website Development Johannesburg', 'Online Store Builder South Africa', 'Next.js Ecommerce Development', 'Shopify Alternatives South Africa', 'Custom Ecommerce Solutions'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/ecommerce-website-development',
  },
  openGraph: {
    title: 'Ecommerce Website Development',
    description: 'Expert ecommerce website development in Johannesburg. We build high-converting online stores using Next.js.',
    url: 'https://www.nostalgic-studio.co.za/services/ecommerce-website-development',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function EcommerceWebsiteDevelopment() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/services/ecommerce-website-development',
    url: 'https://www.nostalgic-studio.co.za/services/ecommerce-website-development',
    name: 'Ecommerce Website Development',
    description: 'Professional ecommerce website development services in Johannesburg, South Africa.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      url: 'https://www.nostalgic-studio.co.za'
    },
    mainEntity: {
      '@type': 'Service',
      name: 'Ecommerce Development',
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

  return (
    <main className="pt-32 pb-20">
      <Script id="page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      
      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scalable <span className="text-gradient">Ecommerce Website Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
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
              and make shopping easy for your customers. Our **ecommerce website development** features:
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

        <FaqSection faqs={faqs} title="Ecommerce FAQ" />

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

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Start Selling Online Today</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to take your retail business to the digital world? Let's build something great together.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Get an Ecommerce Quote</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
