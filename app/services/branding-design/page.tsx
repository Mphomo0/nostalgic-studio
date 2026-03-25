import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Palette, PenTool, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Branding Design Johannesburg | Visual Identity for Startups',
  description: 'Elevate your brand with professional branding design in Johannesburg. We create memorable logos and visual identities that help South African startups stand out.',
  keywords: ['Branding Design Johannesburg', 'Logo Design South Africa', 'Corporate Identity Johannesburg', 'Startup Branding Agency', 'Visual Identity Design'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/branding-design',
  },
  openGraph: {
    title: 'Branding Design Johannesburg | Nostalgic Studio',
    description: 'Elevate your brand with professional branding design in Johannesburg. We create memorable logos and visual identities.',
    url: 'https://www.nostalgic-studio.co.za/services/branding-design',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function BrandingDesign() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/services/branding-design',
    url: 'https://www.nostalgic-studio.co.za/services/branding-design',
    name: 'Branding Design Johannesburg',
    description: 'Expert branding and visual identity design services in Johannesburg.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      url: 'https://www.nostalgic-studio.co.za'
    },
    mainEntity: {
      '@type': 'Service',
      name: 'Branding Design',
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
        name: 'What is included in a branding package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our branding packages typically include logo design, color palette selection, typography, and brand guidelines to ensure consistency across all your marketing materials.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does the branding process take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A comprehensive branding project usually takes 3-6 weeks, from initial research and concepts to final delivery of assets.'
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
              Strategic <span className="text-gradient">Branding Design Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your brand is more than just a logo. It's the story you tell your customers. 
              We help South African startups build strong, cohesive visual identities that resonate and inspire.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Define Your Brand <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Create a Lasting Impression</h2>
            <p className="text-muted-foreground mb-6">
              In a crowded marketplace, a strong brand identity is your most valuable asset. 
              We combine strategy and creativity to deliver designs that work. 
              Our **branding design** services include:
            </p>
            <ul className="space-y-4">
              {[
                'Custom Logo Design & Symbolism',
                'Curated Brand Color Palettes',
                'Strategic Typography Selection',
                'Comprehensive Brand Style Guides',
                'Social Media & Marketing Assets'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>
          <div className="bg-card p-10 rounded-3xl border border-border flex flex-col gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Palette className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Visual Language</h3>
                <p className="text-muted-foreground">We develop a unique visual language that speaks directly to your target audience in Johannesburg.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <PenTool className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Precision Design</h3>
                <p className="text-muted-foreground">Every element is crafted with precision, ensuring your brand looks professional across all platforms.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Sparkles className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Consistent Impact</h3>
                <p className="text-muted-foreground">We ensure your brand remains consistent, whether it's on a Next.js website or a business card.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-primary/5 rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Branding FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Can you rebrand my existing business?</h3>
              <p className="text-muted-foreground">
                Absolutely. We specialize in refreshing and revitalizing established brands to 
                better align with modern market expectations and business goals.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Do I own the final designs?</h3>
              <p className="text-muted-foreground">
                Yes, upon completion and full payment, you will have 100% ownership of all 
                final branding assets and files.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Build a Brand That Matters</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to give your business the professional look it deserves?
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Start Your Branding Journey</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
