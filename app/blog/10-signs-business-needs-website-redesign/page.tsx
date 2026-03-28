import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { FaqSection } from '@/components/geo/FaqSection'

export const metadata: Metadata = {
  title: '10 Signs Your Business Website Needs a Redesign | Nostalgic Studio',
  description:
    'Is your website costing you customers? These 10 warning signs indicate it\'s time to invest in a professional redesign — from slow loading to outdated design.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/blog/10-signs-business-needs-website-redesign',
  },
  openGraph: {
    title: '10 Signs Your Business Website Needs a Redesign',
    description:
      'Slow loading, poor mobile experience, low conversions — 10 warning signs you need a website redesign.',
    url: 'https://www.nostalgic-studio.co.za/blog/10-signs-business-needs-website-redesign',
    siteName: 'Nostalgic Studio',
    type: 'article',
  },
}

const signs = [
  {
    number: '01',
    title: 'It Loads Slowly',
    description:
      'Google penalises slow websites in search rankings. If your site takes more than 3 seconds to load, you are losing both visitors and SEO positions.',
  },
  {
    number: '02',
    title: 'It Is Not Mobile-Friendly',
    description:
      'Over 60% of web traffic in South Africa is mobile. If your site does not adapt to small screens, visitors leave immediately.',
  },
  {
    number: '03',
    title: 'It Looks Outdated',
    description:
      'Design trends evolve rapidly. A site that looked modern in 2018 looks dated in 2025 — and customers judge your credibility by your website\'s appearance.',
  },
  {
    number: '04',
    title: 'You Are Embarrassed to Share It',
    description:
      'If you hesitate before sending your website link to a potential client, that instinct is telling you something important.',
  },
  {
    number: '05',
    title: 'Low Conversion Rate',
    description:
      'Getting visitors but no enquiries or sales? Poor UX, weak calls-to-action, and confusing navigation all kill conversions.',
  },
  {
    number: '06',
    title: 'It Is Not Ranking on Google',
    description:
      'If you cannot find your business on Google for relevant keywords, your site likely has fundamental SEO and technical issues that require a rebuild.',
  },
  {
    number: '07',
    title: 'High Bounce Rate',
    description:
      'A bounce rate above 70% means visitors are landing and immediately leaving. Poor design, slow speed, and irrelevant content are the usual culprits.',
  },
  {
    number: '08',
    title: 'It Is Hard to Update',
    description:
      'If you need a developer to change basic text or images, your site is too rigid. A modern website should let you manage content easily.',
  },
  {
    number: '09',
    title: 'It Is Not Secure (No HTTPS)',
    description:
      'Browsers mark HTTP sites as "Not Secure". This breaks visitor trust and negatively impacts Google rankings. Non-negotiable in 2025.',
  },
  {
    number: '10',
    title: 'Your Competitors Look Better',
    description:
      'If a potential customer compares your site to a competitor\'s and yours looks worse, you have already lost the sale — before saying a word.',
  },
]

const faqs = [
  {
    question: 'How often should a business website be redesigned?',
    answer:
      'Most business websites benefit from a full redesign every 3–5 years and minor visual updates every 1–2 years. Technology, design trends, and SEO best practices evolve quickly, and an outdated site can actively hurt your business.',
  },
  {
    question: 'How long does a website redesign take?',
    answer:
      'A typical business website redesign takes 4–8 weeks with a professional agency. Complex sites with custom functionality can take 8–14 weeks.',
  },
  {
    question: 'Will a website redesign improve my Google ranking?',
    answer:
      'Yes, if the redesign addresses technical SEO issues (site speed, mobile-friendliness, proper metadata, and structured data). A redesign that ignores SEO can temporarily hurt rankings, so choosing an agency with SEO expertise is critical.',
  },
]

export default function RedesignSignsArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: '10 Signs Your Business Website Needs a Redesign',
    datePublished: '2026-03-24',
    dateModified: '2026-03-24',
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
      '@id': 'https://www.nostalgic-studio.co.za/blog/10-signs-business-needs-website-redesign',
    },
    description:
      'Is your website costing you customers? These 10 warning signs indicate it\'s time to invest in a professional redesign.',
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
          <span>10 Signs You Need a Redesign</span>
        </nav>

        <header className="mb-12">
          <div className="flex gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">Strategy</span>
            <time dateTime="2026-03-24" className="text-xs text-muted-foreground self-center">March 24, 2026</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            10 Signs Your Business Website Needs a Redesign
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your website is your most important sales tool — or it should be. 
            If any of these 10 warning signs apply, it is costing you business.
          </p>
        </header>

        <div className="my-8 p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex gap-4 items-start">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Quick check:</strong>{' '}
            If more than 3 of these signs apply to your current website, a redesign is likely costing you more than it saves.
          </p>
        </div>

        <div className="space-y-6 my-10">
          {signs.map((sign) => (
            <div key={sign.number} className="flex gap-5 items-start p-6 bg-card border border-border rounded-2xl">
              <span className="text-3xl font-bold text-primary/30 flex-shrink-0 leading-none">{sign.number}</span>
              <div>
                <h2 className="text-lg font-bold text-foreground mb-1">{sign.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{sign.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="my-10 p-8 bg-primary/5 border border-primary/20 rounded-2xl">
          <h2 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
            Ready for a Website That Works?
          </h2>
          <p className="text-muted-foreground mb-5">
            Nostalgic Studio specialises in rebuilding underperforming websites into high-converting, 
            SEO-optimised platforms built on Next.js.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get a free redesign consultation →
          </Link>
        </div>

        <FaqSection faqs={faqs} title="Website Redesign FAQs" />
      </article>
    </main>
  )
}
