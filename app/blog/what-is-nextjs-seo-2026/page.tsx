import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { FaqSection } from '@/components/geo/FaqSection'
import { CitationBlock } from '@/components/geo/CitationBlock'
import AuthorBio from '@/components/geo/AuthorBio'
import { articleSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'Why Next.js Is the Best Framework for SEO in 2026',
  description:
    'Server-side rendering, static generation, and Core Web Vitals — learn why Next.js websites consistently outrank traditional CMS sites on Google in 2026.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/blog/what-is-nextjs-seo-2026',
  },
  openGraph: {
    title: 'Why Next.js Is the Best Framework for SEO in 2026',
    description:
      'Next.js SSR, ISR, and Core Web Vitals explained — with real performance comparisons against WordPress.',
    url: 'https://www.nostalgic-studio.co.za/blog/what-is-nextjs-seo-2026',
    siteName: 'Nostalgic Studio',
    type: 'article',
  },
}

const faqs = [
  {
    question: 'Is Next.js better than WordPress for SEO?',
    answer:
      'Yes. Next.js delivers faster page loads, better Core Web Vitals scores, and more control over metadata than WordPress. Google\'s ranking algorithm rewards fast pages — Next.js sites consistently score higher in Lighthouse audits than equivalent WordPress sites.',
  },
  {
    question: 'Does Next.js support Server-Side Rendering?',
    answer:
      'Yes. Next.js supports Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) — giving developers full control over when and how pages are rendered for optimal SEO.',
  },
  {
    question: 'Does Next.js help with Google Core Web Vitals?',
    answer:
      'Yes. Next.js includes automatic image optimisation (next/image), font optimisation (next/font), and script loading strategies that directly improve LCP, CLS, and INP — the three Google Core Web Vitals metrics that affect rankings.',
  },
]

export default function NextjsSeoArticle() {
  const schema = articleSchema({
    url: '/blog/what-is-nextjs-seo-2026',
    headline: 'Why Next.js Is the Best Framework for SEO in 2026',
    description:
      'Server-side rendering, static generation, and Core Web Vitals — learn why Next.js websites consistently outrank traditional CMS sites on Google.',
    datePublished: '2026-03-20',
    dateModified: '2026-04-06',
    wordCount: 1520,
    articleSection: 'Web Development',
  })

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Why Next.js Is Best for SEO', url: '/blog/what-is-nextjs-seo-2026' },
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
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2" aria-hidden="true">›</span>
          <span>Why Next.js Is Best for SEO</span>
        </nav>

        <header className="mb-12">
          <div className="flex gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">Web Development</span>
            <time dateTime="2026-03-20" className="text-xs text-muted-foreground self-center">March 20, 2026</time>
          </div>
<h1 className="text-4xl md:text-5xl font-bold mb-6">
      Why Next.js Is the Best Framework for SEO in 2026
      </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Server-side rendering, automatic image optimisation, and superior Core Web Vitals scores 
            make Next.js the go-to choice for businesses that want to rank on Google.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4">

          <h2>What Is Next.js?</h2>
          <p>
            Next.js is an open-source React framework built by Vercel. It extends React with server-side capabilities, 
            giving developers full control over how and when pages are rendered — which has enormous implications for SEO.
          </p>
          <p>
            At Nostalgic Studio, we build every client website on Next.js because it consistently delivers 
            the best Lighthouse scores and search engine visibility of any framework we have tested.
          </p>

          <CitationBlock
            stat="70+ projects"
            context="built on Next.js by Nostalgic Studio since 2016, all achieving 90+ Lighthouse performance scores."
            source="Nostalgic Studio client records (2026)"
          />

          <h2>Why Google Rewards Next.js Websites</h2>
          <p>
            Google&apos;s ranking algorithm uses <strong>Core Web Vitals</strong> — three metrics that measure real user 
            experience — as a direct ranking signal. Next.js addresses all three:
          </p>
          <ul className="space-y-3 my-6 list-none pl-0">
            {[
              'LCP (Largest Contentful Paint): next/image automatically serves WebP/AVIF and lazy-loads below-the-fold images',
              'CLS (Cumulative Layout Shift): Server-rendered HTML eliminates the layout shift caused by client-side JavaScript mounting',
              'INP (Interaction to Next Paint): React Server Components reduce JavaScript bundle size, speeding up interactivity',
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <h2>Server-Side Rendering vs Static Generation</h2>
          <p>
            Next.js offers three rendering strategies, each optimised for different SEO needs:
          </p>
          <p>
            <strong>Static Site Generation (SSG)</strong> pre-renders pages at build time, delivering instant responses 
            to crawlers and users alike. Ideal for service pages, landing pages, and blog posts.
          </p>
          <p>
            <strong>Server-Side Rendering (SSR)</strong> renders pages on each request. Best for dynamic pages 
            that need fresh data but must still be crawler-accessible — like product listings or user dashboards.
          </p>
          <p>
            <strong>Incremental Static Regeneration (ISR)</strong> lets you update static pages in the background 
            without a full rebuild — giving you the speed of SSG with the freshness of SSR.
          </p>

          <h2>Next.js vs WordPress for SEO</h2>
          <p>
            WordPress powers 43% of the web, but it is not designed for modern SEO performance. 
            A typical WordPress site with plugins scores 40–70 on Lighthouse. 
            A equivalent Next.js site typically scores 90–100.
          </p>

          <CitationBlock
            stat="90–100 Lighthouse scores"
            context="typical performance scores for Nostalgic Studio Next.js builds, vs 40–70 for equivalent WordPress sites."
            source="Nostalgic Studio internal benchmarks (2026)"
          />

          <h2>Conclusion</h2>
          <p>
            If your business wants to compete on Google in 2026, your website needs to be fast, crawlable, and structured correctly. 
            Next.js is the framework that makes all three achievable without trade-offs.
          </p>
          <p>
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Get in touch with Nostalgic Studio
            </Link>{' '}
            to discuss a Next.js website for your business.
          </p>
        </div>

        <FaqSection faqs={faqs} title="Next.js SEO — Common Questions" />

        <AuthorBio />
      </article>
    </main>
  )
}
