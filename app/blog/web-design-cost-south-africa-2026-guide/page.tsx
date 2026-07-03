import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { articleSchema, breadcrumbSchema, faqPageSchema } from '@/app/structured-data/schemas'

export const dynamic = 'force-static'

const PUB_DATE = '2026-06-16'

export const metadata: Metadata = {
  title: 'Web Design Pricing South Africa 2026',
  description: 'Full pricing guide for web design in South Africa 2026. Compare brochure, e-commerce & custom sites with real rand pricing from R3,500 to R50,000+.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/blog/web-design-cost-south-africa-2026-guide',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/blog/web-design-cost-south-africa-2026-guide',
      'x-default': 'https://www.nostalgic-studio.co.za/blog/web-design-cost-south-africa-2026-guide',
    },
  },
  openGraph: { title: 'Web Design Cost South Africa 2026 | Nostalgic Studio', description: 'How much does a website cost in SA in 2026? Full pricing breakdown from R3,500 to R50,000+.', url: 'https://www.nostalgic-studio.co.za/blog/web-design-cost-south-africa-2026-guide', siteName: 'Nostalgic Studio', type: 'article', images: [{ url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg', width: 1200, height: 630, alt: 'Web Design Cost South Africa 2026 Guide — Nostalgic Studio' }] },
}

const faqs = [
  { question: 'What is the cheapest way to get a website in South Africa?', answer: 'DIY platforms like Wix or Shopify cost as little as R150-R500/month, but you get what you pay for — poor SEO, slow load times, and difficulty scaling. For a business website, a professionally built 5-page brochure site starting at R3,500 delivers far better ROI.' },
  { question: 'How much does an e-commerce website cost in SA?', answer: 'E-commerce websites in South Africa typically cost between R12,000 and R40,000 depending on product count, payment gateway integration (PayFast, Yoco, Ozow), and custom features.' },
  { question: 'Are there hidden costs in web design?', answer: 'Common ongoing costs include hosting (R150-R500/month), domain renewal (R100-R200/year), SSL certificates (often included), email hosting, and maintenance fees. Always ask what is included in the quoted price.' },
  { question: 'Is a R5,000 website good enough?', answer: 'For a small service-based business, a well-built R5,000 website can absolutely generate leads. The key is investing in good SEO, fast hosting, and quality copywriting rather than expensive visual design.' },
]

export default function WebDesignCostGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          articleSchema({ url: '/blog/web-design-cost-south-africa-2026-guide', headline: 'Web Design Cost South Africa 2026', description: metadata.description ?? '', datePublished: PUB_DATE, dateModified: '2026-07-03', articleSection: 'Pricing' }),
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Web Design Cost SA 2026', url: '/blog/web-design-cost-south-africa-2026-guide' }]),
          faqPageSchema(faqs),
        ])
      }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-2">Pricing Guide</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Web Design Cost in South Africa 2026</h1>
        <p className="text-lg text-muted-foreground mb-8">A transparent breakdown of what different types of websites cost in SA rands</p>

        <div className="prose prose-lg max-w-none">
          <p>One of the most common questions we hear from Johannesburg business owners: &quot;How much does a website cost?&quot; The answer depends on what you need. Here is a transparent breakdown of web design pricing in South Africa for 2026.</p>

          <h2>Website Pricing by Type</h2>

          <table className="w-full border-collapse border">
            <thead><tr><th className="border p-2 font-semibold">Website Type</th><th className="border p-2 font-semibold">Price Range (ZAR)</th><th className="border p-2 font-semibold">Best For</th></tr></thead>
            <tbody>
              <tr><td className="border p-2">Basic Brochure Site</td><td className="border p-2">R3,500 - R8,000</td><td className="border p-2">Small local businesses, freelancers</td></tr>
              <tr><td className="border p-2">Standard Business Site</td><td className="border p-2">R8,000 - R18,000</td><td className="border p-2">SMEs, professional services</td></tr>
              <tr><td className="border p-2">E-commerce Store</td><td className="border p-2">R12,000 - R40,000</td><td className="border p-2">Retail, online stores</td></tr>
              <tr><td className="border p-2">Custom Web Application</td><td className="border p-2">R30,000 - R80,000+</td><td className="border p-2">Startups, SaaS, platforms</td></tr>
            </tbody>
          </table>

          <h2>What Determines Price?</h2>
          <ul>
            <li><strong>Number of pages:</strong> More pages = more design, content, and development work</li>
            <li><strong>Custom design vs template:</strong> Custom designs cost more but differentiate your brand</li>
            <li><strong>Functionality:</strong> E-commerce, booking systems, member areas all add complexity</li>
            <li><strong>Content creation:</strong> Professional copywriting and photography cost extra</li>
            <li><strong>SEO setup:</strong> On-page SEO, structured data, and technical optimization</li>
            <li><strong>Platform choice:</strong> Next.js costs more upfront but delivers better performance than WordPress</li>
          </ul>

          <h2>Ongoing Costs to Budget For</h2>
          <ul>
            <li><strong>Hosting:</strong> R150 - R500 per month</li>
            <li><strong>Domain renewal:</strong> R100 - R200 per year</li>
            <li><strong>SSL certificate:</strong> Often included, else R500 - R1,500/year</li>
            <li><strong>Maintenance:</strong> R500 - R2,000 per month (updates, backups, security)</li>
            <li><strong>SEO & content:</strong> R1,500 - R5,000 per month for ongoing optimization</li>
          </ul>

          <h2>Common Pricing Mistakes</h2>
          <p><strong>Mistake 1: Choosing the cheapest option.</strong> A R1,000 website built on a free template will cost you more in lost leads than a R8,000 professional site.</p>
          <p><strong>Mistake 2: Overpaying for flashy design.</strong> A beautiful site with poor SEO and slow load times cannot generate leads. Invest in performance and search visibility first.</p>
          <p><strong>Mistake 3: Hidden costs.</strong> Always ask: &quot;What is included in this price?&quot; Some agencies charge extra for hosting, SEO setup, content, and even basic revisions.</p>

          <h2>What R8,000 Gets You (Professional Standard)</h2>
          <ul>
            <li>5-10 custom-designed pages</li>
            <li>Mobile-responsive design</li>
            <li>Basic on-page SEO</li>
            <li>Contact form with email integration</li>
            <li>Google Business Profile setup</li>
            <li>1 year of hosting (often included)</li>
            <li>1 hour of post-launch training</li>
          </ul>

          <p>At Nostalgic Studio, our standard business website packages start at R8,000 and include all of the above plus Next.js development for superior speed, structured data implementation, and ongoing SEO support.</p>

          <p>Want a package-by-package breakdown of what each tier includes? See our detailed <Link href="/blog/website-cost-south-africa-2026" className="text-primary hover:underline">website cost guide for South Africa</Link>.</p>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-xl">
          <h3 className="text-xl font-bold mb-2">Frequently Asked Questions</h3>
          <div className="space-y-4 mt-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h4 className="font-semibold">{faq.question}</h4>
                <p className="text-muted-foreground mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/contact">Get a Custom Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </article>
    </>
  )
}
