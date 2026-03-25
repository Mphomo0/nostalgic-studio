import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, LayoutTemplate, MousePointerClick, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'UX/UI Design Johannesburg | Intuitive Interfaces',
  description: 'Elevate your digital product with professional UX/UI design in Johannesburg. We create intuitive, engaging interfaces.',
  keywords: ['UX/UI Design Johannesburg', 'User Experience Design South Africa', 'Interface Design Johannesburg', 'Mobile App Design South Africa', 'Web Design Agency'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/ux-ui-design',
  },
  openGraph: {
    title: 'UX/UI Design Johannesburg',
    description: 'Elevate your digital product with professional UX/UI design in Johannesburg. We create intuitive, engaging interfaces.',
    url: 'https://www.nostalgic-studio.co.za/services/ux-ui-design',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function UXUIDesign() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/services/ux-ui-design/#webpage',
    url: 'https://www.nostalgic-studio.co.za/services/ux-ui-design',
    name: 'UX/UI Design Johannesburg',
    description: 'Expert user experience and interface design services in Johannesburg, South Africa.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      '@id': 'https://www.nostalgic-studio.co.za/#organization'
    },
    mainEntity: {
      '@type': 'Service',
      name: 'UX/UI Design',
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
        name: 'What is the difference between UX and UI design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UX (User Experience) design focuses on the overall feel of the experience and how easy it is for users to achieve their goals, while UI (User Interface) design focuses on the look and layout of the product.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you design for mobile apps as well?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in responsive web design as well as dedicated mobile app interfaces, ensuring a seamless experience across all devices.'
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
              Intuitive <span className="text-gradient">UX/UI Design Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Design that works for your users. We create beautiful, functional interfaces that 
              improve usability and drive conversions for your South African digital products.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Enhance Your UX <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">User-First Design Philosophy</h2>
            <p className="text-muted-foreground mb-6">
              We don't just make things look pretty. We use research and testing to ensure 
              your digital product is easy to use and meets your business goals. 
              Our **UX/UI design** process includes:
            </p>
            <ul className="space-y-4">
              {[
                'User Research & Persona Development',
                'Wireframing & Interactive Prototyping',
                'Visual Interface (UI) Design',
                'Usability Testing & Iteration',
                'Design Systems for Scalability'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>
          <div className="bg-card p-10 rounded-3xl border border-border">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MousePointerClick className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Interaction Design</h3>
                  <p className="text-muted-foreground text-sm">We focus on how users interact with your site, ensuring every click is meaningful.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <LayoutTemplate className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Visual Hierarchy</h3>
                  <p className="text-muted-foreground text-sm">We use color, typography, and spacing to guide users towards your most important content.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Smartphone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Mobile-First Approach</h3>
                  <p className="text-muted-foreground text-sm">With high mobile usage in South Africa, we ensure your design is flawless on small screens.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-primary/5 rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">UX/UI FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Why is UX design important for my startup?</h3>
              <p className="text-muted-foreground">
                Good UX design reduces user frustration, increases retention, and can significantly 
                improve your conversion rates, giving your startup a better chance of success.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What tools do you use for design?</h3>
              <p className="text-muted-foreground">
                We primarily use Figma for our design work, allowing for real-time collaboration 
                and easy handoff to our Next.js development team.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Build a Better Experience</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to transform your digital product with world-class UX/UI design?
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Start Your Design Project</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
