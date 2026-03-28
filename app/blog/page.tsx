import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Web Design & Digital Marketing Tips | Nostalgic Studio',
  description:
    'Expert articles on web design, Next.js development, SEO, and digital marketing from the Nostalgic Studio team in Johannesburg.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/blog',
  },
  openGraph: {
    title: 'Blog | Nostalgic Studio',
    description:
      'Web design, SEO, and digital marketing insights from Johannesburg\'s leading Next.js agency.',
    url: 'https://www.nostalgic-studio.co.za/blog',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

const posts = [
  {
    slug: 'what-is-nextjs-seo-2026',
    title: 'Why Next.js Is the Best Framework for SEO in 2026',
    excerpt:
      'Server-side rendering, static generation, and Core Web Vitals — learn why Next.js websites consistently outrank traditional CMS sites on Google.',
    readTime: '7 min read',
    date: '2026-03-20',
    category: 'Web Development',
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
    slug: '10-signs-business-needs-website-redesign',
    title: '10 Signs Your Business Website Needs a Redesign',
    excerpt:
      'Is your website hurting your conversions? Here are 10 clear signals it\'s time to invest in a professional redesign.',
    readTime: '5 min read',
    date: '2026-03-24',
    category: 'Strategy',
  },
]

export default function BlogIndex() {
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

  return (
    <main className="pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="container-wide mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Web Design &amp; Digital Marketing{' '}
            <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical advice on building websites, improving SEO, and growing
            your business online — from our Johannesburg team.
          </p>
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
      </div>
    </main>
  )
}
