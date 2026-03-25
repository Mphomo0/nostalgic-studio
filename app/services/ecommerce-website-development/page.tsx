import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, ShoppingCart, CreditCard, Box } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ecommerce Website Development | Sell Online South Africa',
  description: 'Expert ecommerce website development in Johannesburg. We build high-converting online stores using Next.js, integrated with South African payment gateways like PayFast and Peach Payments.',
  keywords: ['Ecommerce Website Development Johannesburg', 'Online Store Builder South Africa', 'Next.js Ecommerce Development', 'Shopify Alternatives South Africa', 'Custom Ecommerce Solutions'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/ecommerce-website-development',
  },
  openGraph: {
    title: 'Ecommerce Website Development | Nostalgic Studio',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which payment gateways do you support for ecommerce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We integrate with all major South African payment gateways, including PayFast, Peach Payments, Yoco, and Ozow, ensuring a smooth checkout experience for your customers.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why use Next.js for an ecommerce store?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Next.js is perfect for ecommerce because of its speed and SEO capabilities. Faster load times lead to higher conversion rates and better rankings on Google.'
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

        <section className="bg-primary/5 rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Ecommerce FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Can I manage my own products?</h3>
              <p className="text-muted-foreground">
                Yes, we provide a user-friendly Content Management System (CMS) that allows you to easily 
                add, edit, and remove products without any technical knowledge.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Is my ecommerce site secure?</h3>
              <p className="text-muted-foreground">
                Security is our top priority. By using Next.js and modern serverless architectures, 
                we significantly reduce the attack surface compared to platforms like WordPress.
              </p>
            </div>
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
      </div>
    </main>
  )
}
