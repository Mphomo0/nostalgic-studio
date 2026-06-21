import type { Metadata } from 'next'

export const dynamic = 'force-static'
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  PenTool,
  Sparkles,
  Star,
  TrendingUp,
  Shield,
  Target,
  Users,
  Eye,
  MessageSquare,
  DollarSign,
  Layers,
  Zap,
  Globe,
  Search,
  Layout,
  Clock,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'
import AuthorBio from '@/components/geo/AuthorBio'
import { serviceSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'Branding Design Johannesburg | Brand Identity Agency',

  description:
    'Build a professional brand identity with Nostalgic Studio. Logo design, brand guidelines, colour systems, typography, and visual identity for South African businesses.',

  keywords: [
    'Branding Design Johannesburg',
    'Logo Design South Africa',
    'Corporate Identity Johannesburg',
    'Startup Branding Agency',
    'Visual Identity Design',
    'Graphic Design Johannesburg',
    'Brand Strategy South Africa',
    'Rebranding Services Johannesburg',
    'Brand Identity System',
    'Logo Design Agency Johannesburg',
  ],

  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/branding-design',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/services/branding-design',
      'x-default':
        'https://www.nostalgic-studio.co.za/services/branding-design',
    },
  },

  openGraph: {
    title: 'Branding Design Johannesburg | Brand Identity Agency',
    description:
      'Build a professional brand identity with Nostalgic Studio. Logo design, brand guidelines, colour systems, typography, and visual identity for South African businesses.',
    url: 'https://www.nostalgic-studio.co.za/services/branding-design',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Branding Design Johannesburg — Nostalgic Studio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Branding Design Johannesburg | Brand Identity Agency',
    description:
      'Build a professional brand identity with Nostalgic Studio. Logo design, brand guidelines, colour systems, typography, and visual identity for South African businesses.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

const faqs = [
  {
    question: 'What is included in a branding package?',
    answer:
      'Our branding packages include logo design, colour palette selection, typography, brand guidelines, and marketing asset templates to ensure consistency across all your materials.',
  },
  {
    question: 'How long does the branding process take?',
    answer:
      'A comprehensive branding project usually takes 3–6 weeks, from initial research and concept development to final delivery of all brand assets and style guides.',
  },
  {
    question: 'Can you rebrand my existing business?',
    answer:
      'Absolutely. We specialise in refreshing and revitalising established brands to better align with modern market expectations and evolving business goals. Rebranding typically takes 4–8 weeks.',
  },
  {
    question: 'Do I own the final designs?',
    answer:
      'Yes, upon completion and full payment, you will have 100% ownership of all final branding assets and source files, including logos, brand guidelines, and all supporting materials.',
  },
  {
    question: 'How much does branding design cost in Johannesburg?',
    answer:
      'Branding design in Johannesburg typically ranges from R5,000 for essential brand packages to R25,000+ for comprehensive brand identity systems with full strategy and guidelines.',
  },
  {
    question: 'Why is branding important for my business?',
    answer:
      'Professional branding increases customer trust, justifies premium pricing, improves brand recognition, and creates emotional connections with your audience. Consistent branding can increase revenue by up to 23%.',
  },
  {
    question: 'What is the difference between branding and logo design?',
    answer:
      'A logo is a single visual mark that represents your business. Branding is the complete visual identity system — including logo, colours, typography, imagery, tone of voice, and guidelines — that creates a cohesive brand experience across all touchpoints.',
  },
]

export default function BrandingDesign() {
  const schemas = [
    serviceSchema({
      id: 'branding-design',
      name: 'Branding Design Johannesburg | Brand Identity Agency',
      description:
        'Build a professional brand identity with Nostalgic Studio. Logo design, brand guidelines, colour systems, typography, and visual identity for South African businesses.',
      url: '/services/branding-design',
      areaServed: 'Johannesburg, South Africa',
      priceRange: 'R5000-R25000',
      deliveryTime: '3-6 weeks',
    }),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Branding Design', url: '/services/branding-design' },
    ]),
  ]

  const businessOutcomes = [
    {
      icon: TrendingUp,
      title: 'Increased Trust',
      description:
        'Professional branding signals credibility and reliability. 75% of consumers judge a company&apos;s credibility based on its website and brand design.',
    },
    {
      icon: DollarSign,
      title: 'Higher Conversion Rates',
      description:
        'Consistent brand presentation across all platforms can increase revenue by up to 23%. Strong brands command higher prices.',
    },
    {
      icon: Eye,
      title: 'Better Customer Perception',
      description:
        'Well-branded businesses are perceived as more professional, trustworthy, and valuable. First impressions are formed within 50 milliseconds.',
    },
    {
      icon: Shield,
      title: 'Pricing Power',
      description:
        'Strong brands can charge 20%+ more than unbranded competitors. Brand equity directly impacts your ability to command premium pricing.',
    },
    {
      icon: Target,
      title: 'Competitive Differentiation',
      description:
        'In crowded Johannesburg markets, distinctive branding helps you stand out and be remembered by potential customers.',
    },
    {
      icon: Users,
      title: 'Customer Loyalty',
      description:
        'Emotionally connected customers are 52% more valuable than highly satisfied customers. Strong brands create emotional bonds.',
    },
  ]

  const brandServices = [
    {
      icon: Palette,
      title: 'Brand Identity Design',
      items: [
        'Custom logo design & variations',
        'Colour palette selection',
        'Typography system',
        'Brand guidelines document',
        'Visual identity system',
      ],
    },
    {
      icon: PenTool,
      title: 'Brand Strategy',
      items: [
        'Brand positioning',
        'Brand messaging framework',
        'Target audience definition',
        'Competitive analysis',
        'Brand personality development',
      ],
    },
    {
      icon: Layers,
      title: 'Brand Assets',
      items: [
        'Business card design',
        'Social media templates',
        'Stationery design',
        'Brand pattern & textures',
        'Iconography system',
      ],
    },
    {
      icon: Zap,
      title: 'Rebranding Services',
      items: [
        'Brand audit & gap analysis',
        'Legacy brand transition',
        'Stakeholder alignment',
        'New identity rollout',
        'Internal brand training',
      ],
    },
  ]

  return (
    <main className="pt-32 pb-20">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <div className="container-wide mx-auto px-4">
        {/* Hero Section */}
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic{' '}
              <span className="text-gradient">
                Branding Design Johannesburg
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <strong>
                Nostalgic Studio creates brand identities for South African
                startups — including logo design, brand guidelines, and visual
                systems that build recognition and trust.
              </strong>{' '}
              Your brand is more than just a logo — it&apos;s the story you
              tell, the trust you build, and the value you command. We help
              South African startups and businesses create powerful brand
              identities that resonate, differentiate, and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8">
                <Link href="/contact">
                  Start Your Brand <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="heroOutline"
                className="h-14 px-8"
              >
                <Link href="#pricing">View Branding Packages</Link>
              </Button>
            </div>
          </div>
        </MotionWrapper>

        {/* AboutThisPage - GEO */}
        <AboutThisPage
          summary="Nostalgic Studio is a branding agency in Johannesburg, South Africa, specialising in brand identity design, logo design, brand strategy, and visual identity systems for startups and SMEs. Our branding services help businesses build trust, differentiate in competitive markets, and command premium pricing."
          covers={[
            'Brand Identity Design',
            'Logo Design',
            'Brand Strategy',
            'Rebranding',
            'Visual Identity Systems',
            'Brand Guidelines',
            'South Africa',
          ]}
          lastUpdated="June 2026"
        />

        {/* Definition Block - GEO Optimised */}
        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              Why Professional Branding Matters
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                Professional branding helps customers recognise, remember, and
                trust your business. A strong brand identity gives your website,
                social media, proposals, signage, and marketing material a
                consistent look and message.
              </p>
              <p>
                For small businesses, branding can help you:
              </p>
              <ul className="space-y-2">
                {[
                  'Look more professional',
                  'Build trust faster',
                  'Stand out from similar competitors',
                  'Improve the quality of your marketing material',
                  'Create a consistent customer experience',
                  'Charge with more confidence',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Local Business Angle Section */}
        <section className="mb-16" aria-labelledby="local-business-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="local-business-heading" className="text-2xl font-bold mb-4">
              Branding for Johannesburg and South African Businesses
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Your brand should work across the places your customers actually
                see you: Google, social media, WhatsApp, your website, proposals,
                business cards, uniforms, signage, and email signatures.
              </p>
              <p>
                We design brand identities that are practical for everyday
                business use, not just attractive on a mockup.
              </p>
            </div>
          </div>
        </section>

        {/* Business Outcomes Section */}
        <section className="mb-16" aria-labelledby="outcomes-heading">
          <h2
            id="outcomes-heading"
            className="text-3xl font-bold mb-8 text-center"
          >
            The Business Impact of Professional Branding
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Branding is not an expense — it&apos;s an investment that delivers
            measurable returns across every aspect of your business.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {businessOutcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <outcome.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{outcome.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics/Trust */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '70+', label: 'Brands Created', icon: Star },
              { number: '13+', label: 'Years Experience', icon: Clock },
              { number: '50+', label: 'Happy Clients', icon: Users },
              { number: '100%', label: 'Asset Ownership', icon: Shield },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card p-6 rounded-2xl border border-border text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Branding Services In Detail */}
        <section className="mb-16" aria-labelledby="services-heading">
          <h2
            id="services-heading"
            className="text-3xl font-bold mb-8 text-center"
          >
            Our Branding Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {brandServices.map((service) => (
              <div
                key={service.title}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* South Africa Market Section */}
        <section className="mb-16" aria-labelledby="sa-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="sa-heading" className="text-2xl font-bold mb-4">
              Branding for the South African Market
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                South Africa&apos;s diverse market presents unique branding
                opportunities and challenges. A brand that works in Sandton may
                need a different approach for Soweto or Cape Town. We understand
                the cultural nuances, visual preferences, and market dynamics
                that make South African branding distinct.
              </p>
              <p>
                From fintech startups in Johannesburg to retail businesses in
                Durban, we tailor every brand identity to resonate with local
                audiences while maintaining global design standards. We consider
                factors like:
              </p>
              <ul>
                <li>
                  Cultural symbolism and colour meaning in the South African
                  context
                </li>
                <li>
                  Typography legibility across English, Afrikaans, and Nguni
                  languages
                </li>
                <li>
                  Mobile-first brand assets for South Africa&apos;s high mobile
                  usage (60%+ of web traffic)
                </li>
                <li>
                  Affordable branding packages that respect startup budgets
                  without compromising quality
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Brand Process */}
        <section className="mb-16" aria-labelledby="process-heading">
          <h2
            id="process-heading"
            className="text-3xl font-bold mb-8 text-center"
          >
            Our Branding Process
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: 1,
                title: 'Discovery',
                description:
                  'We research your market, competitors, and audience to understand your brand&apos;s unique position.',
              },
              {
                step: 2,
                title: 'Strategy',
                description:
                  'We define brand positioning, messaging, personality, and visual direction.',
              },
              {
                step: 3,
                title: 'Design',
                description:
                  'We create logo concepts, colour palettes, typography, and visual systems.',
              },
              {
                step: 4,
                title: 'Deliver',
                description:
                  'We provide all final assets with comprehensive brand guidelines and source files.',
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="bg-card p-6 rounded-2xl border border-border text-center"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{phase.step}</span>
                </div>
                <h3 className="font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GEO / AI Section */}
        <section className="mb-16" aria-labelledby="geo-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="geo-heading" className="text-2xl font-bold mb-4">
              Brand Authority & AI Discoverability
            </h2>
            <p className="text-muted-foreground mb-6">
              In the age of AI search, your brand needs to be discoverable not
              just on Google, but across AI-powered platforms like ChatGPT,
              Gemini, and Perplexity. Strong brand authority signals help AI
              models recognise and recommend your business as a trusted source.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-bold mb-2">Entity Optimisation</h3>
                <p className="text-sm text-muted-foreground">
                  We build entity authority through structured data, consistent
                  brand mentions, and topic clusters that AI engines use to
                  verify your brand&apos;s expertise.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-bold mb-2">Brand Consistency</h3>
                <p className="text-sm text-muted-foreground">
                  Consistent brand presentation across all digital touchpoints
                  signals reliability to both human users and AI crawlers
                  evaluating your brand&apos;s trustworthiness.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-bold mb-2">Authoritative Content</h3>
                <p className="text-sm text-muted-foreground">
                  Well-structured brand content with clear E-E-A-T signals helps
                  AI models attribute expertise to your brand, increasing the
                  likelihood of being cited in AI-generated answers.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-bold mb-2">Visual Recognition</h3>
                <p className="text-sm text-muted-foreground">
                  A distinctive visual identity makes your brand recognisable
                  across platforms and helps build the familiarity that AI
                  search engines use as trust signals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10 md:p-16">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Brand?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free brand audit and discover how professional branding can
              transform your business. No obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-10">
                <Link href="/contact">
                  Get Your Free Brand Audit <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="heroOutline"
                className="h-14 px-8"
              >
                <Link href="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          className="mb-16"
          id="pricing"
          aria-labelledby="pricing-heading"
        >
          <h2
            id="pricing-heading"
            className="text-3xl font-bold mb-8 text-center"
          >
            Branding Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-2">Essential Brand</h3>
              <div className="text-3xl font-bold text-primary mb-4">R5,000</div>
              <p className="text-sm text-muted-foreground mb-6">
                Perfect for startups and freelancers needing a professional
                identity.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Custom logo design (3 concepts)',
                  'Colour palette selection',
                  'Typography selection',
                  'Logo files in PNG & SVG',
                  'Basic brand guidelines',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Business Brand</h3>
              <div className="text-3xl font-bold text-primary mb-4">
                R12,000
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                For growing businesses ready to establish a strong brand
                presence.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Custom logo design (5 concepts)',
                  'Complete colour system',
                  'Full typography system',
                  'Business card design',
                  'Social media templates',
                  'Comprehensive brand guidelines',
                  'All source files (AI, EPS, PNG, SVG)',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-2">Enterprise Brand</h3>
              <div className="text-3xl font-bold text-primary mb-4">
                R25,000+
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Comprehensive brand identity for established businesses and
                rebrands.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Full brand strategy workshop',
                  'Custom logo system',
                  'Complete brand identity',
                  'Stationery & collateral design',
                  'Social media kit',
                  'Brand guidelines manual',
                  'Brand launch assets',
                  'All source files',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16" aria-labelledby="why-heading">
          <h2 id="why-heading" className="text-3xl font-bold mb-8 text-center">
            Why Choose Nostalgic Studio for Branding?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: 'Experienced Design Team',
                description:
                  '13+ years of branding experience across South African and international markets. 70+ brand identities delivered.',
              },
              {
                icon: Shield,
                title: 'Full Ownership',
                description:
                  'You own 100% of all final assets. No licensing fees, no restrictions — your brand, your files.',
              },
              {
                icon: Palette,
                title: 'Strategic Approach',
                description:
                  'Every design decision is backed by research and strategy. We don&apos;t just make things look good — we make them work.',
              },
              {
                icon: Users,
                title: 'Collaborative Process',
                description:
                  'You have input at every stage. We present concepts, gather feedback, and refine until the brand feels right.',
              },
              {
                icon: DollarSign,
                title: 'Affordable Excellence',
                description:
                  'Premium branding at prices that respect startup budgets. From R5,000 for a complete brand identity.',
              },
              {
                icon: Zap,
                title: 'Integrated Services',
                description:
                  'Branding that works with your website, SEO, and marketing. We create cohesive experiences across all channels.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              &ldquo;Nostalgic Studio completely transformed our brand identity.
              Our customers immediately noticed the difference, and we&apos;ve
              seen a significant increase in engagement across all our marketing
              channels.&rdquo;
            </blockquote>
            <p className="font-bold">— Johannesburg Startup Founder</p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16" aria-labelledby="related-heading">
          <h2
            id="related-heading"
            className="text-2xl font-bold mb-6 text-center"
          >
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/services/web-design-johannesburg"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <Globe className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Design Johannesburg</h3>
              <p className="text-sm text-muted-foreground">
                Websites that reflect your brand identity and convert visitors
                into customers.
              </p>
            </Link>
            <Link
              href="/services/seo-services-johannesburg"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <Search className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">SEO Services Johannesburg</h3>
              <p className="text-sm text-muted-foreground">
                Get found on Google with our comprehensive SEO and GEO services.
              </p>
            </Link>
            <Link
              href="/services/ux-ui-design"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <Layout className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">UX/UI Design</h3>
              <p className="text-sm text-muted-foreground">
                User-centred design that makes your brand experience seamless
                and delightful.
              </p>
            </Link>
          </div>
        </section>

        <KeyTakeaways
          takeaways={[
            {
              point: 'Strong brand identity',
              detail:
                'increases trust, recognition, and customer loyalty with South African audiences',
            },
            {
              point: 'Professional logo and colour systems',
              detail:
                'ensure consistent presence across all platforms and touchpoints',
            },
            {
              point: 'Brand style guides',
              detail:
                'help your team maintain design consistency as your business grows',
            },
            {
              point: 'Nostalgic Studio',
              detail:
                'has designed brands for 70+ Johannesburg startups since 2016',
            },
            {
              point: 'Full ownership',
              detail:
                'all final branding assets are handed over upon project completion with no restrictions',
            },
            {
              point: 'Business impact',
              detail:
                'professional branding can increase revenue by up to 23% and justify premium pricing',
            },
          ]}
        />

        <AboutThisPage
          summary="Nostalgic Studio is a branding agency in Johannesburg, South Africa, specialising in logo design, brand identity, visual systems, and brand strategy for startups and SMEs. We have delivered 70+ brand projects since 2016."
          covers={[
            'Logo Design',
            'Visual Identity',
            'Brand Strategy',
            'Rebranding',
            'Style Guides',
            'Marketing Assets',
            'South Africa',
          ]}
          lastUpdated="June 2026"
        />

        <FaqSection
          faqs={faqs}
          title="Branding Design — Frequently Asked Questions"
        />

        <div className="mx-auto px-4 max-w-3xl">
          <AuthorBio />
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Build a Brand That Matters
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to give your business the professional look it deserves?
            Let&apos;s create a brand identity that sets you apart.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Start Your Branding Journey</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="heroOutline"
              className="h-14 px-8"
            >
              <Link href="/projects">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
