import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Palette, PenTool, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'

export const metadata: Metadata = {
  title: 'Branding Design Johannesburg | Visual Identity',
  description: 'Elevate your brand with professional branding design in Johannesburg. We create memorable logos and visual identities.',
  keywords: ['Branding Design Johannesburg', 'Logo Design South Africa', 'Corporate Identity Johannesburg', 'Startup Branding Agency', 'Visual Identity Design'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/branding-design',
  },
  openGraph: {
    title: 'Branding Design Johannesburg',
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

  const faqs = [
    {
      question: 'What is included in a branding package?',
      answer: 'Our branding packages include logo design, color palette selection, typography, and brand guidelines to ensure consistency across all your marketing materials.'
    },
    {
      question: 'How long does the branding process take?',
      answer: 'A comprehensive branding project usually takes 3–6 weeks, from initial research and concepts to final delivery of assets.'
    },
    {
      question: 'Can you rebrand my existing business?',
      answer: 'Absolutely. We specialize in refreshing and revitalizing established brands to better align with modern market expectations and business goals.'
    },
    {
      question: 'Do I own the final designs?',
      answer: 'Yes, upon completion and full payment, you will have 100% ownership of all final branding assets and files.'
    }
  ]

  return (
    <main className="pt-32 pb-20">
      <Script id="page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      
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

        {/* Definition Block - GEO Optimised */}
        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              What Is Brand Identity Design?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                Brand identity design is the process of creating a visual system — including logo, colours, 
                typography, and style guidelines — that represents a business's values and differentiates it in the market. 
                A strong brand identity increases customer trust and recognition.
              </p>
              <p>
                Research shows that consistent brand presentation across all platforms increases revenue by up to 23%. 
                For Johannesburg startups, professional branding establishes credibility from day one, 
                making it easier to attract investors, partners, and customers in a competitive South African market.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-foreground">Beyond the Logo: Why Strategic Branding Matters</h3>
            <p className="text-muted-foreground mb-6">
              In the vibrant and diverse Johannesburg market, your brand is the bridge between your business and your community. It's not just about a pretty symbol; it's about the <strong>emotional connection</strong> you build with your audience. At Nostalgic Studio, we look at the psychology behind colors, the history behind typography, and the cultural context of your industry to build a brand that is both modern and timeless.
            </p>
            <p className="text-muted-foreground">
              A well-defined visual identity acts as a silent salesperson. It tells your story when you aren't there to speak. Whether you are a fintech startup in Sandton or a boutique cafe in Maboneng, having a cohesive brand strategy ensures that every touchpoint — from your Next.js website to your packaging — reinforces your market position and value proposition.
            </p>
          </div>
        </section>

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

        <FaqSection faqs={faqs} title="Branding Design FAQ" />

        <KeyTakeaways
          takeaways={[
            { point: 'Strong brand identity', detail: 'increases trust and recognition with South African customers' },
            { point: 'Professional logo and colour systems', detail: 'ensure consistent presence across all platforms' },
            { point: 'Brand style guides', detail: 'help your team maintain design consistency as your business grows' },
            { point: 'Nostalgic Studio', detail: 'has designed brands for 70+ Johannesburg startups since 2016' },
            { point: 'Full ownership', detail: 'all final branding assets are handed over upon project completion' },
          ]}
        />

        <AboutThisPage
          summary="This page was written by the Nostalgic Studio design team in Johannesburg, South Africa. We have delivered branding and visual identity projects for startups across Gauteng since 2016."
          covers={['Logo Design', 'Visual Identity', 'Brand Strategy', 'Style Guides', 'Marketing Assets']}
          lastUpdated="March 2026"
        />

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
