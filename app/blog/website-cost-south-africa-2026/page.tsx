import type { Metadata } from 'next'
import Link from 'next/link'
import { FaqSection } from '@/components/geo/FaqSection'
import { CitationBlock } from '@/components/geo/CitationBlock'

export const metadata: Metadata = {
  title: 'How Much Does a Website Cost in South Africa? (2026 Guide) | Nostalgic Studio',
  description:
    'A transparent, up-to-date breakdown of website design and development pricing in South Africa — from R5,000 basic sites to R50,000+ e-commerce platforms.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/blog/website-cost-south-africa-2026',
  },
  openGraph: {
    title: 'How Much Does a Website Cost in South Africa? (2026 Price Guide)',
    description:
      'Transparent pricing for web design in South Africa. Compare packages from R5,000 to R50,000+.',
    url: 'https://www.nostalgic-studio.co.za/blog/website-cost-south-africa-2026',
    siteName: 'Nostalgic Studio',
    type: 'article',
  },
}

const faqs = [
  {
    question: 'How much does a basic website cost in South Africa?',
    answer:
      'A basic 3–5 page brochure website in South Africa costs between R5,000 and R12,000. This includes a home page, about page, services page, and contact page with a basic contact form.',
  },
  {
    question: 'How much does an e-commerce website cost in South Africa?',
    answer:
      'E-commerce websites in South Africa typically cost between R20,000 and R60,000 depending on the number of products, payment gateway integrations, and custom functionality required.',
  },
  {
    question: 'Do South African web designers charge monthly or once-off?',
    answer:
      'Both models exist. Most agencies charge a once-off design fee, then an optional monthly maintenance/hosting retainer of R500–R3,000 per month. Nostalgic Studio offers both once-off and retainer packages.',
  },
  {
    question: 'Is it cheaper to use a website builder or hire a web designer?',
    answer:
      'Website builders like Wix or Squarespace have lower upfront costs (R500–R1,500/month) but lack custom design, advanced SEO control, and scalability. A professionally built website delivers better ROI over 2–3 years for growing businesses.',
  },
]

const pricingTiers = [
  {
    name: 'Brochure / Starter Site',
    price: 'R5,000 – R12,000',
    includes: ['3–5 pages', 'Responsive design', 'Contact form', 'Basic SEO setup', 'Once-off payment'],
  },
  {
    name: 'Business / Corporate Site',
    price: 'R15,000 – R35,000',
    includes: ['8–15 pages', 'Custom UI/UX design', 'Blog / CMS integration', 'Advanced SEO package', 'Google Analytics setup'],
  },
  {
    name: 'E-commerce Store',
    price: 'R25,000 – R60,000+',
    includes: ['Unlimited products', 'Payment gateway integration', 'Inventory management', 'Customer accounts', 'Email marketing integration'],
  },
]

export default function WebsiteCostSAArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
headline: 'How Much Does a Website Cost in South Africa? (2026 Guide)',
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  author: {
    '@type': 'Person',
    name: 'Mpho Moipolai',
    url: 'https://www.nostalgic-studio.co.za/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Nostalgic Studio',
    url: 'https://www.nostalgic-studio.co.za',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.nostalgic-studio.co.za/images/logo/Logo.webp',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/blog/website-cost-south-africa-2026',
  },
    description:
      'A transparent breakdown of web design pricing in South Africa — from R5,000 brochure sites to R50,000+ e-commerce platforms.',
  }

  return (
    <main className="pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="container-wide mx-auto px-4 max-w-3xl">
        <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2" aria-hidden="true">›</span>
          <span>Website Cost South Africa 2026</span>
        </nav>

        <header className="mb-12">
          <div className="flex gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">Pricing</span>
            <time dateTime="2026-03-22" className="text-xs text-muted-foreground self-center">March 22, 2026</time>
          </div>
<h1 className="text-4xl md:text-5xl font-bold mb-6">
      How Much Does a Website Cost in South Africa? (2026 Guide)
      </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you need a simple brochure site or a full e-commerce platform, here is a transparent, 
            current breakdown of website design and development costs in South Africa.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4">

          <h2>2026 South Africa Website Pricing Overview</h2>
          <p>
            Website costs in South Africa vary significantly based on complexity, the agency you choose, 
            and whether you need custom functionality. Here is an honest breakdown from our experience 
            building 70+ websites for South African businesses.
          </p>

          <CitationBlock
            stat="R5,000 – R60,000+"
            context="typical website design and development cost range in South Africa in 2026, depending on scope and complexity."
            source="Nostalgic Studio pricing data (2026)"
          />

          {/* Pricing Table */}
          <div className="my-8 space-y-4 not-prose">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="border border-border rounded-2xl p-6 bg-card">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
                  <span className="text-primary font-bold text-lg">{tier.price}</span>
                </div>
                <ul className="space-y-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2>What Factors Affect Website Cost?</h2>
          <p>
            <strong>Complexity and number of pages</strong> — A 5-page brochure site costs significantly less than 
            a 20-page corporate site with custom animations and integrations.
          </p>
          <p>
            <strong>Design approach</strong> — Template-based designs are cheaper. Custom bespoke UI/UX designed 
            from scratch costs more but delivers a unique brand experience.
          </p>
          <p>
            <strong>Functionality</strong> — Booking systems, e-commerce, membership portals, API integrations, 
            and custom forms all add to the cost.
          </p>
          <p>
            <strong>SEO and content</strong> — Basic technical SEO setup is usually included. 
            Advanced keyword research, content writing, and ongoing SEO strategies are additional.
          </p>

          <h2>Hidden Costs to Watch For</h2>
          <p>
            Some agencies quote a low upfront price but charge separately for hosting, domain renewal, 
            SSL certificates, and maintenance. At Nostalgic Studio, we provide transparent pricing 
            with all standard inclusions stated upfront.
          </p>

          <CitationBlock
            stat="R500 – R3,000/month"
            context="typical monthly website maintenance and hosting retainer cost in South Africa for managed services."
            source="Nostalgic Studio pricing data (2026)"
          />

          <h2>Ready to Get a Quote?</h2>
          <p>
            Tell us about your project and we will send you a detailed, no-obligation quote within 24 hours.
          </p>
          <p>
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Get a free website quote from Nostalgic Studio →
            </Link>
          </p>
        </div>

        <FaqSection faqs={faqs} title="Website Cost FAQs" />
      </article>
    </main>
  )
}
