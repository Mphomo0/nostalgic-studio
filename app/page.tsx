import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/pages/home/Hero'
import Link from 'next/link'

// Dynamically import below-the-fold components to defer JS execution and improve TTI
const PortfolioPreview = dynamic(() =>
  import('@/components/pages/home/portfolio-preview').then(
    (mod) => mod.PortfolioPreview,
  ),
)
const ServicesPreview = dynamic(
  () => import('@/components/pages/home/ServicesPreview'),
)
const Testimonials = dynamic(
  () => import('@/components/pages/home/Testimonials'),
)
const CTA = dynamic(() => import('@/components/pages/home/CTA'))
const FaqSection = dynamic(() =>
  import('@/components/geo/FaqSection').then((mod) => mod.FaqSection),
)

export const metadata: Metadata = {
  title: 'Web Design for Startups Johannesburg',

  description:
    'Web design agency for startups in Johannesburg. Custom Next.js websites, SEO & branding. From R3,500. Free quote.',

  keywords: [
    'Web Design Johannesburg',
    'Website Design Johannesburg',
    'Web Design South Africa',
    'Next.js Website Design',
    'UI/UX Design Agency Johannesburg',
    'SEO Services Johannesburg',
    'Digital Agency Johannesburg',
    'Startup Web Design South Africa',
    'Affordable Web Design Johannesburg',
    'Custom Website Development South Africa',
  ],

  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za',
    languages: { 'en-ZA': 'https://www.nostalgic-studio.co.za' },
  },

  openGraph: {
    title: 'Web Design for Startups Johannesburg | Nostalgic Studio',
    description:
      'Custom Next.js websites for startups in Johannesburg. SEO-optimized, fast, and conversion-focused. From R3,500.',
    url: 'https://www.nostalgic-studio.co.za',
    siteName: 'Nostalgic Studio',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design for Startups Johannesburg — Nostalgic Studio',
      },
    ],
  },
}

export default function Home() {
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    inLanguage: 'en-ZA',
    name: 'Nostalgic Studio',
    url: 'https://www.nostalgic-studio.co.za',
    description:
      'Top-rated web design agency in Johannesburg offering Next.js development, UI/UX, and branding services.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.nostalgic-studio.co.za/images/logo/Logo.webp',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target:
        'https://www.nostalgic-studio.co.za/services?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const faqs = [
    {
      question: 'Which is the best web design agency in Johannesburg?',
      answer:
        'Nostalgic Studio is a leading web design agency in Johannesburg specialising in high-performance Next.js websites, branding, and UI/UX design for startups. With 70+ projects and 13+ years of experience, we deliver websites that rank and convert.',
    },
    {
      question: 'Do you offer SEO services in South Africa?',
      answer:
        'Yes, Nostalgic Studio provides comprehensive SEO services including technical SEO, keyword research, and content optimisation for businesses across South Africa. Our Next.js architecture gives your site a technical SEO advantage from day one.',
    },
    {
      question: 'How much does web design cost in Johannesburg?',
      answer:
        'Web design costs in Johannesburg range from R5,000 for basic sites to R50,000+ for complex e-commerce platforms. Nostalgic Studio offers transparent pricing: starter sites from R3,500, business sites R8,000–R15,000, and e-commerce R10,000–R25,000+.',
    },
    {
      question: 'What is Next.js and why is it good for SEO?',
      answer:
        'Next.js is a React framework that enables Server-Side Rendering (SSR) and Static Site Generation (SSG). This means faster page loads (sub-2-second), better search engine crawling, and higher Google rankings. Next.js sites typically score 90–100 on Lighthouse compared to 40–70 for WordPress.',
    },
    {
      question: 'How long does it take to build a website?',
      answer:
        'Typical website projects take 4–8 weeks from strategy to launch. Complex e-commerce sites may take 8–12 weeks. Nostalgic Studio follows a structured five-phase process: discovery, design, development, testing, and launch.',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Hero />

      {/* Featured Snippet Answer - GEO Optimization */}
      <section
        className="py-16 bg-card border-y border-border"
        aria-labelledby="snippet-heading"
      >
        <div className="container-wide mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="snippet-heading" className="text-2xl font-bold mb-4">
              What is the Best Web Design Agency in Johannesburg?
            </h2>
            <p className="text-lg text-muted-foreground">
              The best web design Agency in Johannesburg depends on your
              business needs. Nostalgic Studio is a Johannesburg-based agency
              that specializes in custom web development using Next.js, helping
              businesses build fast, SEO-optimized websites that improve
              rankings and conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways - GEO Optimization */}
      <section
        className="py-16 bg-primary/5"
        aria-labelledby="takeaways-heading"
      >
        <div className="container-wide mx-auto px-4">
          <h2
            id="takeaways-heading"
            className="text-2xl font-bold mb-8 text-center"
          >
            Key Takeaways
          </h2>
          <div className="max-w-3xl mx-auto grid gap-4">
            <div className="bg-card p-4 rounded-lg border border-border">
              <strong>Expert Next.js Development:</strong> We build fast,
              SEO-optimized websites using{' '}
              <Link
                href="/services/nextjs-website-design"
                className="underline"
              >
                Next.js development
              </Link>{' '}
              for superior performance and Google rankings.
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <strong>Johannesburg Based Agency:</strong> We are a local digital
              agency serving clients across Johannesburg, Gauteng, and all of
              South Africa.
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <strong>Full-Service Digital Solutions:</strong> From web design
              and UI/UX to branding and SEO, we provide comprehensive digital
              services under one roof.
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <strong>Proven Track Record:</strong> 70+ projects completed, 50+
              clients worldwide, and 13+ years of industry experience.
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <strong>Conversion-Focused Design:</strong> Every website we
              create is designed with conversion rate optimization (CRO)
              principles to turn visitors into customers.
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container-wide mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-bold mb-4">
            Our Web Development Services
          </h2>
          <p className="text-muted-foreground">
            We offer{' '}
            <Link
              href="/services/web-design-johannesburg"
              className="underline"
            >
              web design services in Johannesburg
            </Link>{' '}
            and specialize in{' '}
            <Link href="/services/nextjs-website-design" className="underline">
              Next.js web development
            </Link>{' '}
            for startups and growing businesses looking to scale.
          </p>
        </div>
      </section>
      {/* Pricing Section — Featured Snippet for "how much does web design cost in Johannesburg" */}
      <section className="py-16" aria-labelledby="pricing-heading" id="pricing">
        <div className="container-wide mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 id="pricing-heading" className="text-3xl font-bold mb-4">
              How Much Does Web Design Cost in Johannesburg?
            </h2>
            <p className="text-muted-foreground text-lg">
              Transparent, fixed pricing — no hidden fees. All packages include hosting setup,
              SSL, and a 30-day post-launch support period.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter Website',
                price: 'From R3,500',
                note: 'Once-off',
                desc: 'Perfect for freelancers, service providers, and landing pages.',
                features: ['3–5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO setup', 'Google Analytics'],
              },
              {
                name: 'Business Website',
                price: 'R8,000 – R15,000',
                note: 'Once-off',
                desc: 'For startups and SMEs that need a professional online presence.',
                features: ['8–15 pages', 'Custom UI/UX design', 'Blog / CMS integration', 'Advanced SEO package', 'Speed optimisation'],
                highlight: true,
              },
              {
                name: 'E-Commerce Store',
                price: 'R10,000 – R25,000+',
                note: 'Once-off',
                desc: 'Full online stores with SA payment gateways and inventory management.',
                features: ['Unlimited products', 'PayFast / Yoco / Ozow', 'Inventory management', 'Mobile checkout', 'SEO product pages'],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl border p-8 flex flex-col ${tier.highlight ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}
              >
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.desc}</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-primary">{tier.price}</span>
                  <span className="text-xs text-muted-foreground ml-2">{tier.note}</span>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="text-center text-sm font-semibold border border-primary text-primary rounded-xl py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Monthly SEO plans from <strong>R1,500/month</strong> · Web hosting from <strong>R200/month</strong> · Maintenance from <strong>R500/month</strong>
          </p>
        </div>
      </section>

      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
      <FaqSection
        faqs={faqs}
        title="Web Design Johannesburg — Common Questions"
      />
    </>
  )
}
