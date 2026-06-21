import type { Metadata } from 'next'

export const dynamic = 'force-static'
import { ArrowRight, CheckCircle2, LayoutTemplate, MousePointerClick, Smartphone, Globe, Palette, Search } from 'lucide-react'
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
  title: 'UX/UI Design Johannesburg',
  description:
    'UX/UI design for Johannesburg startups. Research-driven Figma prototyping and mobile-first interfaces that improve usability and boost conversions.',
  keywords: ['UX UI Design Johannesburg', 'User Experience Design South Africa', 'Interface Design Johannesburg', 'Mobile App Design South Africa', 'Figma Design Agency Johannesburg', 'UX Research South Africa'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/ux-ui-design',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/services/ux-ui-design',
      'x-default': 'https://www.nostalgic-studio.co.za/services/ux-ui-design',
    },
  },
  openGraph: {
    title: 'UX/UI Design Johannesburg',
    description: 'Research-driven UX/UI for Johannesburg startups. Figma, user research, mobile-first design.',
    url: 'https://www.nostalgic-studio.co.za/services/ux-ui-design',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [{ url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg', width: 1200, height: 630, alt: 'UX/UI Design Johannesburg — Nostalgic Studio' }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'UX/UI Design Johannesburg',
    description: 'Research-driven UX/UI for Johannesburg startups. Figma, user research, mobile-first design.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

const uxSchemas = [
  serviceSchema({
    id: 'ux-ui-design',
    name: 'UX/UI Design Johannesburg',
    description: 'Research-driven user experience and interface design services in Johannesburg. Figma prototyping, user research, and mobile-first design for startups.',
    url: '/services/ux-ui-design',
    areaServed: 'Johannesburg, South Africa',
    priceRange: 'R8000-R35000',
    deliveryTime: '3-8 weeks',
  }),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'UX/UI Design', url: '/services/ux-ui-design' },
  ]),
]

const uxFaqs = [
  {
    question: 'What is the difference between UX and UI design?',
    answer: 'UX (User Experience) focuses on the overall feel and usability, while UI (User Interface) focuses on the visual layout and look of the product.'
  },
  {
    question: 'Do you design for mobile apps as well?',
    answer: 'Yes, we specialize in responsive web design as well as dedicated mobile app interfaces, ensuring a seamless experience across all devices.'
  },
  {
    question: 'Why is UX design important for my startup?',
    answer: 'Good UX design reduces user frustration, increases retention, and can significantly improve your conversion rates, giving your startup a better chance of success.'
  },
  {
    question: 'What tools do you use for design?',
    answer: 'We primarily use Figma for our design work, allowing for real-time collaboration and easy handoff to our Next.js development team.'
  }
]

export default function UXUIDesign() {
  return (
    <main className="pt-32 pb-20">
      {uxSchemas.map((s, i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      
      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intuitive <span className="text-gradient">UX/UI Design Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <strong>Nostalgic Studio delivers UX/UI design for web and mobile apps — combining user research, wireframes, and high-fidelity prototypes to improve conversion and usability.</strong>{' '}
              Design that works for your users. We create beautiful, functional interfaces that
              improve usability and drive conversions for your South African digital products.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Start Your UX Project <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        {/* Definition Block - GEO Optimised */}
        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              What Is UX/UI Design?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                UX (User Experience) design focuses on how a product works and feels, while UI (User Interface) 
                design focuses on how it looks. Together, UX/UI design ensures digital products are intuitive, 
                accessible, and visually compelling for users.
              </p>
              <p>
                Studies show that every R1 invested in UX returns R100 — a 9,900% ROI. For South African startups, 
                professional UX/UI design reduces user abandonment by up to 40% and increases conversion rates 
                by 200–400% compared to poorly designed interfaces.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-foreground">Designing for the South African Audience</h3>
            <p className="text-muted-foreground mb-6">
              UX/UI design in South Africa requires a unique understanding of our local digital habits. With a significant portion of our population accessing the internet via mobile devices and often on high-cost data plans, "good design" means <strong>efficiency</strong>. At Nostalgic Studio, we prioritize light-weight interfaces and intuitive navigation that doesn't waste user time or bandwidth.
            </p>
            <p className="text-muted-foreground">
              By applying <strong>accessibility standards (WCAG)</strong> and cultural design principles, we ensure that your digital products are usable by every South African, regardless of their device or location. From high-speed fiber users in Sandton to mobile users on-the-go, we design interfaces that feel secondary to the task at hand — making the journey from discovery to conversion as seamless as possible.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">User-First Design Philosophy</h2>
            <p className="text-muted-foreground mb-6">
              We don't just make things look pretty. We use research and testing to ensure
              your digital product is easy to use and meets your business goals.
              Our <strong>UX/UI design</strong> process includes:
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

        <FaqSection faqs={uxFaqs} title="UX/UI Design FAQ" />

        <KeyTakeaways
          takeaways={[
            { point: 'Research-driven design', detail: 'we build user personas and conduct research before creating a single screen' },
            { point: 'Figma collaboration', detail: 'you can review and comment on designs in real-time before any code is written' },
            { point: 'Mobile-first in South Africa', detail: 'most SA users are on mobile so we design small-screen first' },
            { point: 'Design systems for scalability', detail: 'reusable component libraries mean future development is faster and cheaper' },
            { point: 'Conversion-focused', detail: 'every design decision aims to move users toward your business goals' },
          ]}
        />

        <AboutThisPage
          summary="This page covers Nostalgic Studio's UX/UI design services in Johannesburg. We research, prototype, and design intuitive interfaces for startups and digital products across South Africa."
          covers={['UX Research', 'UI Design', 'Wireframing', 'Prototyping', 'Design Systems', 'Mobile App Design']}
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
              <p className="text-sm text-muted-foreground">Great design needs to be found — get visibility on Google and AI answer engines.</p>
            </Link>
            <Link href="/services/web-design-johannesburg" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Globe className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Design Johannesburg</h3>
              <p className="text-sm text-muted-foreground">SEO-optimised, AI-friendly websites built with Next.js for maximum performance.</p>
            </Link>
            <Link href="/services/branding-design" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Palette className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Branding Design</h3>
              <p className="text-sm text-muted-foreground">Build a brand that customers trust and remember.</p>
            </Link>
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

        <div className="mx-auto px-4 max-w-3xl">
          <AuthorBio />
        </div>
      </div>
    </main>
  )
}
