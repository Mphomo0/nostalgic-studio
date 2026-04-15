import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/pages/home/Hero'
import Link from 'next/link'

// Dynamically import below-the-fold components to defer JS execution and improve TTI
const PortfolioPreview = dynamic(() => import('@/components/pages/home/portfolio-preview').then(mod => mod.PortfolioPreview))
const ServicesPreview = dynamic(() => import('@/components/pages/home/ServicesPreview'))
const Testimonials = dynamic(() => import('@/components/pages/home/Testimonials'))
const CTA = dynamic(() => import('@/components/pages/home/CTA'))
const FaqSection = dynamic(() => import('@/components/geo/FaqSection').then(mod => mod.FaqSection))

export const metadata: Metadata = {
  title: 'Web Design Johannesburg | Custom Web Development & Next.js Agency',

  description:
    'Web design Johannesburg agency specializing in custom web development and high-performance Next.js websites. We build fast, SEO-optimized websites that convert visitors into clients across South Africa.',

  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za',
  },

  openGraph: {
    title: 'Web Design Johannesburg | Custom Web Development & Next.js Agency',
    description:
      'Custom web development and Next.js websites for Johannesburg businesses. Fast, scalable, and built to rank on Google.',
    url: 'https://www.nostalgic-studio.co.za',
    siteName: 'Nostalgic Studio',
    locale: 'en_ZA',
    type: 'website',
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
        'Web design costs in Johannesburg range from R5,000 for basic sites to R50,000+ for complex e-commerce platforms. Nostalgic Studio offers transparent pricing: starter sites from R8,000, business sites R15,000–R35,000, and e-commerce R25,000–R60,000+.',
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
