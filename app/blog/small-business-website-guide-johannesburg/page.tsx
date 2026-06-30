import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { articleSchema, breadcrumbSchema, faqPageSchema } from '@/app/structured-data/schemas'

export const dynamic = 'force-static'

const PUB_DATE = '2026-06-16'

export const metadata: Metadata = {
  title: 'Small Business Website Guide Johannesburg',
  description: 'Complete website guide for small businesses in Johannesburg. Rank on Google, generate leads, and compete with big brands — affordably. Free expert advice.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/blog/small-business-website-guide-johannesburg',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/blog/small-business-website-guide-johannesburg',
      'x-default': 'https://www.nostalgic-studio.co.za/blog/small-business-website-guide-johannesburg',
    },
  },
  openGraph: { title: 'Small Business Website Guide Johannesburg | Nostalgic Studio', description: 'Everything Jozi business owners need to know about getting a website that generates leads.', url: 'https://www.nostalgic-studio.co.za/blog/small-business-website-guide-johannesburg', siteName: 'Nostalgic Studio', type: 'article', images: [{ url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg', width: 1200, height: 630, alt: 'Small Business Website Guide Johannesburg — Nostalgic Studio' }] },
}

const faqs = [
  { question: 'How much does a small business website cost in Johannesburg?', answer: 'A professional small business website in Johannesburg typically costs between R3,500 and R15,000 upfront, with ongoing hosting and maintenance from R250-R500 per month. The exact cost depends on complexity, number of pages, and whether e-commerce functionality is needed.' },
  { question: 'How long does it take to build a small business website?', answer: 'A standard 5-10 page small business website takes 2-4 weeks from design to launch. This includes strategy, design, development, content population, and SEO setup.' },
  { question: 'Do I need e-commerce for my small business?', answer: 'Only if you sell products directly online. For service-based businesses (plumbers, lawyers, consultants), a well-designed service website with contact forms and booking is more effective than e-commerce.' },
  { question: 'Can I build my own website with Wix or Squarespace?', answer: 'Yes, but DIY platforms have limitations: poor SEO performance, slow load times, and difficulty scaling. For a business that needs to generate leads, a professionally built website on Next.js or WordPress delivers significantly better results.' },
]

export default function SmallBizGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          articleSchema({ url: '/blog/small-business-website-guide-johannesburg', headline: 'Small Business Website Guide Johannesburg', description: metadata.description ?? '', datePublished: PUB_DATE, articleSection: 'Guide' }),
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Small Business Website Guide', url: '/blog/small-business-website-guide-johannesburg' }]),
          faqPageSchema(faqs),
        ])
      }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-2">Small Business Guide — Johannesburg</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Small Business Website Guide: Johannesburg 2026</h1>
        <p className="text-lg text-muted-foreground mb-8">How Jozi small business owners can compete with big brands online</p>

        <div className="prose prose-lg max-w-none">
          <p>Johannesburg's small business economy is thriving. From Fourways to Rosebank, Sandton to Soweto, entrepreneurs are launching every day. But most small business websites fail at the one thing that matters: generating leads.</p>
          <p>This guide covers exactly what Johannesburg small business owners need to know about getting a website that actually works.</p>

          <h2>1. Your Website is Your Best Salesperson</h2>
          <p>A great website works 24/7. It answers questions, builds trust, and captures leads while you sleep. A bad website repels customers and wastes your marketing budget. The difference between the two is not about flashy design — it is about clarity, speed, and SEO.</p>

          <h2>2. Lead Generation {'>'} Pretty Design</h2>
          <p>Many small business owners focus on how their website looks. Visual design matters, but a beautiful site with no leads is a billboard in the desert. Every page should guide visitors toward a specific action: call, email, book, or buy.</p>

          <h2>3. Local SEO is Non-Negotiable</h2>
          <p>When someone searches &quot;plumber Fourways&quot; or &quot;web designer Sandton&quot;, they are ready to buy. Local SEO ensures you appear in those searches. This means optimizing for Johannesburg suburbs, maintaining a Google Business Profile, and getting listed in SA business directories. Our <Link href="/services/seo-services-johannesburg" className="text-primary font-medium hover:underline">SEO services in Johannesburg</Link> are built specifically for this — helping small businesses capture high-intent local traffic.</p>

          <h2>4. Speed = Revenue</h2>
          <p>Google research shows that 53% of mobile users leave a page that takes longer than 3 seconds to load. Most small business websites load in 5-8 seconds because they are built on slow platforms with heavy plugins. A fast website (under 2 seconds) ranks higher and converts better.</p>

          <h2>5. Choose the Right Platform</h2>
          <p>WordPress powers 43% of the web, but comes with performance and security overhead. Next.js (what Nostalgic Studio uses) delivers 90+ Lighthouse scores out of the box. For small businesses on a tight budget, a well-optimized WordPress site can also work — as long as it is built lean.</p>

          <h2>6. Content That Ranks</h2>
          <p>Google ranks websites that answer questions. Blog posts, service pages, FAQs, and guides all build topical authority. A small business with 20+ pages of quality content will outrank a bigger competitor with 5 thin pages.</p>

          <h2>Your Johannesburg Small Business Website Checklist</h2>
          <ul>
            <li>Clear headline explaining what you do (within 3 seconds)</li>
            <li>Prominent call-to-action above the fold</li>
            <li>Mobile-responsive design (60%+ of traffic is mobile)</li>
            <li>Fast loading (under 2 seconds)</li>
            <li>Contact form + phone number + WhatsApp link</li>
            <li>Google Business Profile (verified and complete)</li>
            <li>Customer testimonials or reviews</li>
            <li>SEO metadata on every page</li>
            <li>Privacy policy and terms (legally required in SA)</li>
            <li>Analytics tracking (Google Analytics or similar)</li>
          </ul>

          <p>Most Johannesburg small businesses get 3-5 of these right. Getting all 10 is how you dominate your local market.</p>
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
            <Link href="/contact">Discuss Your Website <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </article>
    </>
  )
}
