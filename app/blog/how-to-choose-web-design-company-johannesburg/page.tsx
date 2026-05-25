import type { Metadata } from 'next'

export const dynamic = 'force-static'
import Link from 'next/link'
import { FaqSection } from '@/components/geo/FaqSection'
import { CitationBlock } from '@/components/geo/CitationBlock'
import AuthorBio from '@/components/geo/AuthorBio'
import { articleSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'Choose a Web Design Co. JHB',
  description:
    '7 critical questions to ask before hiring a web design agency in Johannesburg. Portfolio, tech stack & SEO explained.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/blog/how-to-choose-web-design-company-johannesburg',
  },
  openGraph: {
    title: 'Choose a Web Design Co. JHB',
    description:
      'Learn how to evaluate Johannesburg web design agencies. 7 critical questions to ask before signing.',
    url: 'https://www.nostalgic-studio.co.za/blog/how-to-choose-web-design-company-johannesburg',
    siteName: 'Nostalgic Studio',
    type: 'article',
  },
}

const faqs = [
  {
    question: 'What should I look for in a web design portfolio?',
    answer:
      'Look for diversity in industry, mobile responsiveness, and site speed. A good portfolio should show live websites that load quickly and have clear calls to action, not just static mockups.',
  },
  {
    question: 'Is it better to hire a freelancer or an agency in Johannesburg?',
    answer:
      'Freelancers are often cheaper but may lack the breadth of skills (SEO, UX, Dev) or reliability for long-term support. Agencies provide a multi-disciplinary team and structured processes, which is safer for business-critical projects.',
  },
  {
    question: 'Why is the tech stack important for my website?',
    answer:
      'The technology used (e.g., WordPress vs Next.js) affects your site\'s speed, security, and SEO. Modern frameworks like Next.js offer superior performance and better long-term scalability compared to older page builders.',
  },
]

export default function ChooseAgencyArticle() {
  const schema = articleSchema({
    url: '/blog/how-to-choose-web-design-company-johannesburg',
    headline: 'How to Choose a Web Design Company in Johannesburg (2026 Guide)',
    description: 'A comprehensive guide on evaluating and hiring the right web design partner for your South African business.',
    datePublished: '2026-05-13',
    wordCount: 1450,
    articleSection: 'Strategy',
  })

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Choosing a Web Design Company', url: '/blog/how-to-choose-web-design-company-johannesburg' },
  ])

  return (
    <main className="pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="container-wide mx-auto px-4 max-w-3xl">
        <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2" aria-hidden="true">›</span>
          <span>Choosing a Web Design Company</span>
        </nav>

        <header className="mb-12">
          <div className="flex gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">Strategy</span>
            <time dateTime="2026-05-13" className="text-xs text-muted-foreground self-center">May 13, 2026</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How to Choose a Web Design Company in Johannesburg (2026 Guide)
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hiring the wrong agency can cost you thousands in lost revenue and technical debt. 
            Here is how to vet Johannesburg web designers to find a partner that actually grows your business.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4">
          
          <h2>1. Review Their Own Technical Performance</h2>
          <p>
            Before looking at their portfolio, look at their own website. Run it through Google PageSpeed Insights. 
            If a web design agency can't get a 90+ score on their own site, they won't do it for yours.
          </p>
          
          <CitationBlock
            stat="90-100"
            context="The target Lighthouse performance score any modern web agency should be achieving on their own homepage in 2026."
            source="Google Core Web Vitals Standards"
          />

          <h2>2. Ask About Their Tech Stack</h2>
          <p>
            In 2026, "just WordPress" isn't enough for high-growth startups. Ask if they offer modern headless 
            frameworks like Next.js or Astro. These technologies provide sub-second load times and native security 
            benefits that traditional builders simply can't match.
          </p>

          <h2>3. Verify SEO Expertise Beyond Keywords</h2>
          <p>
            SEO is no longer just about meta tags. It's about schema markup, Core Web Vitals, and AI-readiness (GEO). 
            Ask the agency how they optimize for answer engines like Perplexity or ChatGPT. If they don't mention 
            structured data (JSON-LD), keep looking.
          </p>

          <h2>4. Content Ownership and Lock-in</h2>
          <p>
            Who owns the code? Who owns the domain? Some agencies use proprietary builders that lock you into 
            their hosting forever. Ensure you have full ownership of all assets and the ability to move your 
            site if the relationship ends.
          </p>

          <h2>5. Do They Understand Your Business Goals?</h2>
          <p>
            A good designer asks about your "brand identity." A great designer asks about your "customer 
            acquisition cost" and "conversion goals." Look for a partner that prioritizes ROI over just 
            making things look "pretty."
          </p>

          <CitationBlock
            stat="40%"
            context="The average reduction in bounce rate when moving from a generic template to a custom-designed UX optimized for conversion."
            source="Nostalgic Studio Case Studies (2025)"
          />

          <h2>Conclusion</h2>
          <p>
            Choosing a web design company in Johannesburg is a long-term investment. Don't rush the decision. 
            Check references, verify technical skills, and ensure their values align with yours.
          </p>
          
          <p>
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Ready to talk to a technical web partner? Book a discovery call with Nostalgic Studio →
            </Link>
          </p>
        </div>

        <FaqSection faqs={faqs} title="Hiring a Web Designer FAQs" />

        <AuthorBio />
      </article>
    </main>
  )
}
