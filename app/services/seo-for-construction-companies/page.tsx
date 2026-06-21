import type { Metadata } from 'next'

export const dynamic = 'force-static'
import {
  ArrowRight,
  CheckCircle2,
  Search,
  BarChart3,
  MapPin,
  FileText,
  Smartphone,
  Star,
} from 'lucide-react'
import AuthorBio from '@/components/geo/AuthorBio'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import lazyLoad from 'next/dynamic'

const MotionWrapper = lazyLoad(
  () => import('@/components/layout/MotionWrapper'),
)
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'
import { serviceSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'SEO for Construction Companies in South Africa',
  description:
    'SEO for construction companies in South Africa. Improve Google visibility, get more tender enquiries, and attract local clients with local search strategy.',
  keywords: [
    'SEO for Construction Companies',
    'Construction SEO South Africa',
    'SEO for Building Contractors',
    'Construction Company Marketing',
    'Local SEO for Construction',
    'SEO for Civil Engineering Firms',
    'Construction Digital Marketing Johannesburg',
  ],
  alternates: {
    canonical:
      'https://www.nostalgic-studio.co.za/services/seo-for-construction-companies',
    languages: {
      'en-ZA':
        'https://www.nostalgic-studio.co.za/services/seo-for-construction-companies',
      'x-default':
        'https://www.nostalgic-studio.co.za/services/seo-for-construction-companies',
    },
  },
  openGraph: {
    title: 'SEO for Construction Companies in South Africa',
    description:
      'SEO for construction companies. Improve Google visibility, get more tender enquiries with local SEO, service pages, and website optimisation.',
    url: 'https://www.nostalgic-studio.co.za/services/seo-for-construction-companies',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO for Construction Companies South Africa — Nostalgic Studio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'SEO for Construction Companies in South Africa',
    description:
      'SEO for construction companies. Improve Google visibility, get more tender enquiries with local SEO, service pages, and website optimisation.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

const schemas = [
  serviceSchema({
    id: 'seo-for-construction-companies',
    name: 'SEO for Construction Companies in South Africa',
    description:
      'SEO services for construction companies in South Africa. Improve Google visibility, attract tender enquiries, and rank for local construction search terms.',
    url: '/services/seo-for-construction-companies',
    areaServed: 'South Africa',
    priceRange: 'R3500-R15000',
  }),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    {
      name: 'SEO for Construction Companies',
      url: '/services/seo-for-construction-companies',
    },
  ]),
]

const faqs = [
  {
    question: 'How long does SEO take for a construction company?',
    answer:
      'Most construction companies start seeing results within 8–12 weeks. The first month focuses on fixing website structure and local SEO foundations. By month three, you should see improved rankings for key service terms in your area.',
  },
  {
    question: 'Can SEO help my construction company win more tenders?',
    answer:
      'Yes. When tender decision-makers search for construction companies online, they choose from the ones they find. SEO ensures your company appears for relevant searches like "building contractor Johannesburg" or "civil engineering firm Gauteng", putting you on the shortlist before the RFP stage.',
  },
  {
    question: 'What areas of SEO do you focus on for construction companies?',
    answer:
      'We focus on technical SEO (site speed, mobile performance, structure), local SEO (Google Business Profile, local citations, area pages), and content SEO (service pages, project portfolios, case studies). All three work together to improve your visibility.',
  },
  {
    question: 'Do you work with construction companies outside Johannesburg?',
    answer:
      'Yes. We work with construction companies across South Africa, including Pretoria, Cape Town, Durban, Bloemfontein, and smaller towns. Our SEO approach is tailored to your specific service areas.',
  },
  {
    question: 'How much does SEO for a construction company cost?',
    answer:
      'Our SEO services start from R3,500 for a one-time SEO audit and optimisation package, with ongoing monthly SEO from R2,500 per month. We also include SEO as part of our website design packages at no extra cost.',
  },
]

export default function SEOForConstruction() {
  return (
    <main className="pt-32 pb-20">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-tighter mb-4 block">
              Construction Industry SEO
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SEO for Construction Companies in South Africa
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We help construction companies improve their visibility on Google
              by fixing website structure, creating dedicated service pages,
              improving local SEO, and making it easier for potential clients to
              request quotes.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 5.0
                Google Rating
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" /> 70+ Projects
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" /> 8–12 Week
                Results
              </span>
            </div>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">
                Get a Free SEO Review <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </MotionWrapper>

        {/* What Construction SEO Includes */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">
              What Construction SEO Includes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: Search,
                  text: 'Technical SEO audit and fixes',
                },
                {
                  icon: FileText,
                  text: 'Dedicated service pages for each construction vertical',
                },
                {
                  icon: MapPin,
                  text: 'Google Business Profile optimisation',
                },
                {
                  icon: BarChart3,
                  text: 'Local SEO for your service areas',
                },
                {
                  icon: Smartphone,
                  text: 'Mobile performance optimisation',
                },
                {
                  icon: CheckCircle2,
                  text: 'Project portfolio and case study optimisation',
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl"
                >
                  <item.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Construction Companies Need SEO */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">
              Why Construction Companies Need SEO
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  When a property developer or project manager needs a
                  construction partner, they search Google. If your company does
                  not appear on the first page, you never get the opportunity to
                  quote. SEO ensures your construction business is visible when
                  potential clients search for your services.
                </p>
                <p className="text-muted-foreground mb-4">
                  Most construction company websites are built without SEO in
                  mind. They have weak page structure, missing meta
                  descriptions, slow load times, and no local SEO foundation.
                  This means even established construction firms with strong
                  reputations are invisible online.
                </p>
                <p className="text-muted-foreground">
                  We fix this by rebuilding the SEO foundation of your website —
                  creating clear service pages, optimising for local search
                  terms in Gauteng and across South Africa, and ensuring Google
                  can properly index and rank every page.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="font-bold mb-4">
                  Real Results from Construction SEO
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">
                        Didee Holdings Website Redesign
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Indexed for 12+ construction search terms in Gauteng
                        within 2 weeks of launch.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">
                        Jiyology Building & Construction
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Service-specific pages rank for local search queries
                        with weekly enquiry submissions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Construction SEO Issues */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">
              Common SEO Issues We Fix for Construction Companies
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {[
                'All services listed on one page instead of dedicated service pages',
                'No local SEO targeting specific cities or suburbs',
                'Slow mobile load times hurting rankings',
                'Missing or weak meta descriptions on key pages',
                'No Google Business Profile or poorly optimised listing',
                'No structured data for AI search visibility',
                'Project portfolio not optimised for search',
                'No internal linking between service and location pages',
              ].map((issue) => (
                <div key={issue} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0 mt-2" />
                  <span className="text-muted-foreground">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} title="Construction SEO FAQ" />

        <KeyTakeaways
          takeaways={[
            {
              point: 'Dedicated service pages for each construction vertical',
              detail: 'building, civil works, renovations, plant hire',
            },
            {
              point: 'Local SEO for your service areas',
              detail: 'rank in Johannesburg, Pretoria, Cape Town, and beyond',
            },
            {
              point: 'Google Business Profile optimisation',
              detail: 'complete setup with reviews, photos, and posts',
            },
            {
              point: 'Mobile performance optimisation',
              detail: 'fast load times on South African mobile networks',
            },
            {
              point: 'Structured data for AI search',
              detail: 'get cited by ChatGPT, Gemini, and Perplexity',
            },
          ]}
        />

        <AboutThisPage
          summary="This page covers Nostalgic Studio's SEO services for construction companies in South Africa. We help building contractors, civil engineering firms, and renovation specialists improve Google visibility and attract more enquiries."
          covers={[
            'SEO for Construction Companies',
            'Construction SEO South Africa',
            'Local SEO for Builders',
            'Construction Digital Marketing',
            'SEO for Civil Engineering Firms',
          ]}
          lastUpdated="June 2026"
        />

        {/* Related Services */}
        <section className="mb-16" aria-labelledby="related-heading">
          <h2
            id="related-heading"
            className="text-2xl font-bold mb-6 text-center"
          >
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/services/seo-services-johannesburg"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <Search className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">SEO & AI Search Visibility</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive SEO for South African businesses. Rank on Google
                and get cited by AI engines.
              </p>
            </Link>
            <Link
              href="/services/web-design-johannesburg"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Design Johannesburg</h3>
              <p className="text-sm text-muted-foreground">
                SEO-optimised websites built on Next.js for maximum performance.
              </p>
            </Link>
            <Link
              href="/industries/construction"
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <BarChart3 className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Construction Industry</h3>
              <p className="text-sm text-muted-foreground">
                Learn more about our construction industry web design services.
              </p>
            </Link>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Found on Google?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a free SEO review of your construction company website. We
            identify what is holding back your Google rankings.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Get a Free SEO Review</Link>
          </Button>
        </div>

        <div className="mx-auto px-4 max-w-3xl mt-16">
          <AuthorBio />
        </div>
      </div>
    </main>
  )
}
