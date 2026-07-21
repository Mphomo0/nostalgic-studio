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
  title: 'Website Build Timeline South Africa 2026',
  description:
    'Realistic website development timeline in South Africa. Brochure, business & e-commerce sites from 2 to 12 weeks. Plan your project launch with confidence.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/blog/how-long-to-build-website-2026',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/blog/how-long-to-build-website-2026',
      'x-default': 'https://www.nostalgic-studio.co.za/blog/how-long-to-build-website-2026',
    },
  },
  openGraph: {
    title: 'How Long Does It Take to Build a Website in South Africa? (2026)',
    description:
      'Realistic timelines for building a website in South Africa. Learn each phase and how to speed up your launch.',
    url: 'https://www.nostalgic-studio.co.za/blog/how-long-to-build-website-2026',
    siteName: 'Nostalgic Studio',
    type: 'article',
    images: [{ url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg', width: 1200, height: 630, alt: 'Website Build Timeline South Africa 2026 — Nostalgic Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'How Long Does It Take to Build a Website in South Africa? (2026)',
    description: 'Realistic timelines for building a website in South Africa. Learn each phase and how to speed up your launch.',
  },
}

const faqs = [
  {
    question: 'Can you build a website in a week?',
    answer:
      'While a simple landing page can be built in a week, a professional 5–10 page business website typically requires 4–6 weeks for proper strategy, SEO, and testing. Speed should never compromise quality or performance.',
  },
  {
    question: 'What is the longest phase of web development?',
    answer:
      'Surprisingly, the "Content Gathering" phase is often the longest. Projects are frequently delayed because the client hasn\'t finalized their text, photos, or branding. Development usually takes 2–4 weeks once content is ready.',
  },
  {
    question: 'How can I speed up my website launch?',
    answer:
      'Have your content ready before the project starts, respond to feedback within 24 hours, and choose a streamlined tech stack like Next.js that allows for rapid development without technical debt.',
  },
]

export default function TimelineArticle() {
  const schema = articleSchema({
    url: '/blog/how-long-to-build-website-2026',
    headline: 'How Long Does it Take to Build a Website? (2026 Timeline)',
    description: 'A realistic guide to website development timelines in South Africa, covering everything from discovery to deployment.',
    datePublished: '2026-05-20',
    dateModified: '2026-06-13',
    wordCount: 1350,
    articleSection: 'Process',
  })

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'How Long to Build a Website', url: '/blog/how-long-to-build-website-2026' },
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
          <span>How Long to Build a Website</span>
        </nav>

        <header className="mb-12">
          <div className="flex gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">Process</span>
            <time dateTime="2026-05-20" className="text-xs text-muted-foreground self-center">May 20, 2026</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Long Does it Take to Build a Website? (2026 Timeline)
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            &quot;When will it be ready?&quot; is the first question every client asks. While every project is unique, 
            here is a realistic roadmap for building a high-performance website in 2026.
          </p>
        </header>

        <AboutThisPage
          summary="A professional website in South Africa takes 2–12 weeks to build depending on complexity. Brochure sites take 2–4 weeks, business websites 4–8 weeks, and e-commerce stores 8–12 weeks. Content gathering is the most common cause of delays, adding weeks to any project."
          covers={['Website Timeline', 'Web Development Process', 'South Africa 2026', 'Project Planning', 'E-commerce Development']}
          lastUpdated="May 2026"
        />

        <KeyTakeaways
          takeaways={[
            { point: 'Brochure sites (3–5 pages) take 2–4 weeks from kickoff to launch', detail: 'Assuming content, copy, and branding assets are ready before development begins' },
            { point: 'Business websites with custom features take 4–8 weeks', detail: 'Includes discovery, design, development, SEO setup, and user acceptance testing phases' },
            { point: 'E-commerce stores typically require 8–12 weeks', detail: 'Payment gateway integration, product loading, and security testing add significant time' },
            { point: 'Having content ready before kickoff can reduce your timeline by 2–3 weeks', detail: 'Content gathering is the #1 cause of project delays in South African web development' },
          ]}
        />

        <div className="prose prose-lg max-w-none text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4">
          
          <h2>Summary of Timelines by Project Type</h2>
          <p>
            The duration of your project depends heavily on the complexity of the features you require. 
            Here is what we see in the South African market today:
          </p>
          
          <div className="my-8 overflow-x-auto">
            <table className="w-full text-left border-collapse border border-border">
              <thead>
                <tr className="bg-primary/5">
                  <th className="p-4 border border-border font-bold">Project Type</th>
                  <th className="p-4 border border-border font-bold">Typical Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-border">Starter / Landing Page</td>
                  <td className="p-4 border border-border">2 – 3 Weeks</td>
                </tr>
                <tr className="bg-card">
                  <td className="p-4 border border-border">Business Website (5-10 pages)</td>
                  <td className="p-4 border border-border">4 – 8 Weeks</td>
                </tr>
                <tr>
                  <td className="p-4 border border-border">E-commerce / Custom App</td>
                  <td className="p-4 border border-border">8 – 16 Weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CitationBlock
            stat="4-8 Weeks"
            context="The industry standard timeline for a high-quality, custom-coded business website in South Africa."
            source="Nostalgic Studio Project Data (2025)"
          />

          <h2>Phase 1: Discovery & Strategy (1 Week)</h2>
          <p>
            We don&apos;t start with code; we start with questions. This phase involves understanding your target 
            audience, defining your unique selling proposition (USP), and planning the sitemap. This is the 
            foundation that ensures your site actually converts.
          </p>

          <h2>Phase 2: UI/UX Design (2 Weeks)</h2>
          <p>
            This is where we create the visual identity of your site. We design high-fidelity prototypes in 
            Figma, allowing you to see exactly how your site will look and feel before a single line of 
            code is written.
          </p>

          <h2>Phase 3: Development & SEO (2-4 Weeks)</h2>
          <p>
            This is the &quot;engine room&quot; phase. We build your site using Next.js, ensuring it is blazing fast 
            and technically perfect for search engines. We also implement all the GEO-ready features like 
            schema markup and FAQ sections.
          </p>

          <h2>Phase 4: Testing & Quality Assurance (1 Week)</h2>
          <p>
            We test your site on all devices (iPhone, Android, Desktop) and browsers. We check for broken 
            links, optimize images for speed, and ensure your contact forms are working perfectly across 
            South Africa&apos;s different network speeds.
          </p>

          <CitationBlock
            stat="53%"
            context="of mobile users will leave a site if it takes longer than 3 seconds to load, making technical optimization the most critical part of development."
            source="Google Web Performance Data"
          />

          <h2>Phase 5: Launch & Support</h2>
          <p>
            Once you&apos;re happy, we go live! We also provide a training session on how to manage your 
            content and offer ongoing maintenance to keep your site secure and up to date.
          </p>
          
          <p>
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Want a specific timeline for your project? Get a custom roadmap →
            </Link>
          </p>
        </div>

        <FaqSection faqs={faqs} title="Timeline FAQs" />

        <section className="container-wide mx-auto px-4 pb-8 max-w-3xl">
          <h2 className="text-xl font-bold mb-4">Related Articles</h2>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li><Link href="/blog/website-cost-south-africa-2026" className="text-primary hover:underline">Website Cost South Africa 2026: Full Pricing Guide</Link></li>
            <li><Link href="/blog/10-signs-business-needs-website-redesign" className="text-primary hover:underline">10 Signs Your Business Website Needs a Redesign</Link></li>
          </ul>
        </section>

        <AuthorBio />
      </article>
    </main>
  )
}
