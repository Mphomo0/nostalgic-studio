import type { Metadata } from 'next'

export const dynamic = 'force-static'
import Link from 'next/link'
import { FaqSection } from '@/components/geo/FaqSection'
import { CitationBlock } from '@/components/geo/CitationBlock'
import AuthorBio from '@/components/geo/AuthorBio'
import AboutThisPage from '@/components/geo/AboutThisPage'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import { articleSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'What is Local SEO? South Africa 2026 Guide',
  description:
    'Dominate local search results in South Africa. Learn Google Maps optimisation, local citations, and geo-targeted content strategies for 2026.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/blog/what-is-local-seo-south-africa',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/blog/what-is-local-seo-south-africa',
      'x-default': 'https://www.nostalgic-studio.co.za/blog/what-is-local-seo-south-africa',
    },
  },
  openGraph: {
    title: 'What is Local SEO? A Complete Guide for South Africa 2026',
    description:
      'How to rank on Google Maps and capture local customers in South Africa. Local SEO strategies that work in 2026.',
    url: 'https://www.nostalgic-studio.co.za/blog/what-is-local-seo-south-africa',
    siteName: 'Nostalgic Studio',
    type: 'article',
    images: [{ url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg', width: 1200, height: 630, alt: 'Local SEO South Africa Guide — Nostalgic Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'What is Local SEO? A Complete Guide for South Africa 2026',
    description: 'How to rank on Google Maps and capture local customers in South Africa. Local SEO strategies that work in 2026.',
  },
}

const faqs = [
  {
    question: 'How long does it take for local SEO to work?',
    answer:
      'Typically, you will see initial results in 3–6 months. However, for highly competitive areas like "Web Design Johannesburg," it can take 6–12 months of consistent optimization to reach the top 3 positions.',
  },
  {
    question: 'Is Google Business Profile free?',
    answer:
      'Yes, creating a Google Business Profile is completely free. However, optimizing it and maintaining high rankings through updates, reviews, and local content often requires professional management.',
  },
  {
    question: 'What are local citations?',
    answer:
      'Local citations are mentions of your business\'s Name, Address, and Phone number (NAP) on other websites like directories, social media, and local news sites. Consistent NAP data is a key ranking factor.',
  },
]

export default function LocalSEOArticle() {
  const schema = articleSchema({
    url: '/blog/what-is-local-seo-south-africa',
    headline: 'What is Local SEO? A Guide for South African Businesses (2026)',
    description: 'Master local search engine optimization to attract more customers in your specific South African city or suburb.',
    datePublished: '2026-05-13',
    dateModified: '2026-06-13',
    wordCount: 1600,
    articleSection: 'SEO',
  })

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'What is Local SEO South Africa', url: '/blog/what-is-local-seo-south-africa' },
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
          <span>What is Local SEO South Africa</span>
        </nav>

        <header className="mb-12">
          <div className="flex gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">SEO</span>
            <time dateTime="2026-05-13" className="text-xs text-muted-foreground self-center">May 13, 2026</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What is Local SEO? A Guide for South African Businesses
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            If your customers are in Johannesburg, <Link href="/locations/pretoria" className="text-primary hover:underline">Pretoria</Link>, or <Link href="/locations/cape-town" className="text-primary hover:underline">Cape Town</Link>, general SEO isn&apos;t enough.
            You need Local SEO to ensure your business appears when people search for &quot;services near me.&quot;
          </p>
        </header>

        <AboutThisPage
          summary="Local SEO helps South African businesses appear in Google's Map Pack — the top 3 results for searches like 'web design Johannesburg'. This guide covers the three pillars: Google Business Profile optimisation, on-page local optimisation, and building local citations. Results typically take 3–6 months."
          covers={['Local SEO', 'Google Business Profile', 'Google Maps', 'Johannesburg', 'Local Citations', 'Map Pack']}
          lastUpdated="May 2026"
        />

        <KeyTakeaways
          takeaways={[
            { point: '46% of all Google searches have local intent', detail: "If you're not in the Map Pack, you're invisible to nearly half of all potential customers searching in your area" },
            { point: 'Google Business Profile is the strongest single local ranking signal', detail: 'Businesses with 50+ reviews and regular posts rank significantly higher in the Map Pack than competitors' },
            { point: 'NAP consistency across all platforms is non-negotiable', detail: 'Name, Address, and Phone must be identical on your website, GBP, directories, and social media profiles' },
            { point: 'SA local citations on Brabys, Hotfrog, and Yellow Pages build local authority', detail: 'Each citation confirms to Google that your business is legitimate and physically present in your area' },
          ]}
        />

        <div className="prose prose-lg max-w-none text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4">
          
          <h2>The Definition of Local SEO</h2>
          <p>
            Local SEO is the practice of optimizing your online presence to attract more business from 
            relevant local searches. These searches take place on Google and other search engines, 
            but critically, they often trigger the &quot;Map Pack&quot; — the top three local business listings 
            on the search results page.
          </p>
          
          <CitationBlock
            stat="46%"
            context="of all Google searches have 'local intent,' meaning the user is looking for information or services within their immediate vicinity."
            source="Google Search Statistics (2025)"
          />

          <h2>Why Local SEO Matters in South Africa</h2>
          <p>
            In South Africa, mobile penetration is exceptionally high. Most people search for services 
            on their smartphones while on the go. If your &quot;<Link href="/locations/sandton" className="text-primary hover:underline">Web Design Sandton</Link>&quot; page isn&apos;t optimized,
            you&apos;re handing customers to your competitors on a silver platter.
          </p>

          <h2>The 3 Pillars of Local SEO Success</h2>
          <h3>1. Google Business Profile (GBP)</h3>
          <p>
            Your GBP is your digital storefront. It needs high-quality photos, accurate opening hours, 
            and most importantly, consistent reviews. Encourage your happy customers in Johannesburg 
             to leave feedback — it&apos;s the strongest signal for local rankings.
          </p>

          <h3>2. On-Page Local Optimization</h3>
          <p>
            This involves including your city and suburb names naturally in your content, titles, and 
            meta descriptions. Using structured data (JSON-LD) to tell search engines exactly where 
            you are located and what areas you serve is non-negotiable in 2026.
          </p>

          <h3>3. Local Citations and Backlinks</h3>
          <p>
            Getting mentioned on South African directories like Brabys, Hotfrog, or local news sites 
            builds your &quot;Local Authority.&quot; These citations confirm to Google that your business is 
            legitimate and physically present in the area you claim.
          </p>

          <CitationBlock
            stat="76%"
            context="of people who search on their smartphone for something nearby visit a business within a day."
            source="Think with Google"
          />

          <h2>Conclusion</h2>
          <p>
            Local SEO is the most cost-effective way for small businesses in South Africa to compete 
            with larger national brands. By winning the local search battle, you capture high-intent 
            leads right when they are ready to buy.
          </p>
          
          <p>
            <Link href="/services/seo-services-johannesburg" className="text-primary font-medium hover:underline">
              Need help dominating local search? Explore our SEO services →
            </Link>
          </p>
        </div>

        <FaqSection faqs={faqs} title="Local SEO FAQs" />

        <section className="container-wide mx-auto px-4 pb-8 max-w-3xl">
          <h2 className="text-xl font-bold mb-4">Related Articles</h2>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li><Link href="/blog/how-to-choose-web-design-company-johannesburg" className="text-primary hover:underline">How to Choose a Web Design Company in Johannesburg (2026 Guide)</Link></li>
            <li><Link href="/blog/website-cost-south-africa-2026" className="text-primary hover:underline">Website Cost South Africa 2026: What to Budget for Your Website</Link></li>
          </ul>
        </section>

        <AuthorBio />
      </article>
    </main>
  )
}
