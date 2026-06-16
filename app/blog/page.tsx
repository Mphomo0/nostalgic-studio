import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Design & Digital Marketing Blog',
  description:
    'Expert articles on web design, Next.js development, SEO, and digital marketing from the Nostalgic Studio team in Johannesburg, South Africa.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/blog',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/blog',
      'x-default': 'https://www.nostalgic-studio.co.za/blog',
    },
  },
  openGraph: {
    title: 'Web Design & Digital Marketing Blog | Nostalgic Studio',
    description:
      'Web design, SEO, and digital marketing insights from Johannesburg\'s leading Next.js agency.',
    url: 'https://www.nostalgic-studio.co.za/blog',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Web Design & Digital Marketing Blog | Nostalgic Studio',
    description: 'Web design, SEO, and digital marketing insights from Johannesburg\'s leading Next.js agency.',
  },
}

const posts = [
  {
    slug: 'social-media-strategy-south-african-businesses',
    title: 'Social Media Strategy for South African Businesses (2026)',
    excerpt:
      'Stop wasting money on social media. Learn the most effective social media strategies for South African businesses in 2026. WhatsApp, TikTok, and LinkedIn insights.',
    readTime: '8 min read',
    date: '2026-05-28',
    category: 'Marketing',
  },
  {
    slug: 'how-long-to-build-website-2026',
    title: 'How Long Does it Take to Build a Website? (2026 Timeline)',
    excerpt:
      'From discovery to launch: A realistic breakdown of how long it takes to build a professional website in South Africa. Timeline for brochure, business, and e-commerce sites.',
    readTime: '7 min read',
    date: '2026-05-20',
    category: 'Process',
  },
  {
    slug: 'what-is-local-seo-south-africa',
    title: 'What is Local SEO? A Guide for South African Businesses (2026)',
    excerpt:
      'Learn how to dominate local search in Johannesburg and South Africa. Everything you need to know about Google Maps, local citations, and geo-targeted content.',
    readTime: '9 min read',
    date: '2026-05-13',
    category: 'SEO',
  },
  {
    slug: 'how-to-choose-web-design-company-johannesburg',
    title: 'How to Choose a Web Design Company in Johannesburg (2026 Guide)',
    excerpt:
      "Don't get scammed. Learn the 7 critical questions to ask before hiring a web design agency in Johannesburg. Portfolio, tech stack, and SEO expertise explained.",
    readTime: '8 min read',
    date: '2026-05-06',
    category: 'Strategy',
  },
  {
    slug: '10-signs-business-needs-website-redesign',
    title: '10 Signs Your Business Website Needs a Redesign',
    excerpt:
      "Is your website hurting your conversions? Here are 10 clear signals it's time to invest in a professional redesign.",
    readTime: '5 min read',
    date: '2026-03-24',
    category: 'Strategy',
  },
  {
    slug: 'website-cost-south-africa-2026',
    title: 'How Much Does a Website Cost in South Africa? (2026 Guide)',
    excerpt:
      'A transparent breakdown of web design pricing in South Africa — from R5,000 brochure sites to R50,000+ e-commerce platforms.',
    readTime: '6 min read',
    date: '2026-03-22',
    category: 'Pricing',
  },
  {
    slug: 'what-is-nextjs-seo-2026',
    title: 'Why Next.js Is the Best Framework for SEO in 2026',
    excerpt:
      'Server-side rendering, static generation, and Core Web Vitals — learn why Next.js websites consistently outrank traditional CMS sites on Google.',
    readTime: '7 min read',
    date: '2026-03-20',
    category: 'Web Development',
  },
]

const blogFaqs = [
  {
    question: 'What topics does the Nostalgic Studio blog cover?',
    answer: 'We cover web design, Next.js development, local SEO, branding, social media marketing, and digital strategy — all written specifically for South African businesses and entrepreneurs.',
  },
  {
    question: 'How often does Nostalgic Studio publish new articles?',
    answer: 'We publish new articles regularly, typically 1–2 per month. Topics are chosen based on questions we receive from clients and emerging trends in the South African digital market.',
  },
  {
    question: 'Is the content specific to South African businesses?',
    answer: 'Yes. All articles are written with South African businesses in mind, including local market data, pricing in ZAR, and platform preferences relevant to SA consumers. Our team is based in Johannesburg.',
  },
]

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Nostalgic Studio Blog',
  url: 'https://www.nostalgic-studio.co.za/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Nostalgic Studio',
    url: 'https://www.nostalgic-studio.co.za',
  },
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `https://www.nostalgic-studio.co.za/blog/${p.slug}`,
    datePublished: p.date,
  })),
}

const blogFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: blogFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function BlogIndex() {
  return (
    <main className="pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqSchema) }}
      />

      <div className="container-wide mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Web Design & Digital Marketing{' '}
            <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Practical advice on building websites, improving SEO, and growing
            your business online — from our Johannesburg team.
          </p>
          
          <section className="bg-card border border-border rounded-3xl p-8 md:p-12 text-left mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Our Editorial Philosophy</h2>
            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground">
              <p>
                In the rapidly evolving digital landscape of South Africa, staying informed is a competitive necessity. The Nostalgic Studio blog is dedicated to decoding complex technical trends into actionable business strategies. We focus on the intersection of <strong>performance engineering</strong> (Next.js, SSR, Core Web Vitals) and <strong>user-centric design</strong>.
              </p>
              <p>
                Our team shares insights gained from building high-growth startups and modernizing established brands in Johannesburg. From deep dives into <strong>Generative Engine Optimization (GEO)</strong> to transparent guides on website costs in the local market, our content is designed to empower South African entrepreneurs with the knowledge they need to dominate their digital niches.
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                <span className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.readTime}
                </span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                aria-label={`Read: ${post.title}`}
              >
                Read article <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-20 bg-card border border-border rounded-3xl p-8 md:p-12" aria-labelledby="blog-faq-heading">
          <h2 id="blog-faq-heading" className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <dl className="space-y-6">
            {blogFaqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-foreground mb-2">{faq.question}</dt>
                <dd className="text-muted-foreground leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  )
}
