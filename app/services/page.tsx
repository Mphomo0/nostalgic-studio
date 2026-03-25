import type { Metadata } from 'next'
import ServicesList from '@/components/pages/services/ServicesList'
import ProcessSection from '@/components/pages/services/ProcessSection'
import CTASection from '@/components/pages/services/CTASection'
import ServicesHero from '@/components/pages/services/ServicesHero'
import { process, services } from '@/components/pages/services/data'
import Script from 'next/script'
import Link from 'next/link'
import { 
  Globe, 
  Search, 
  Zap, 
  ShoppingBag, 
  Palette, 
  Share2, 
  Megaphone, 
  Server, 
  Layout, 
  Settings 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Design Services Johannesburg | Digital Agency',
  description:
    'Expert web design services in Johannesburg. Next.js development, UI/UX design, branding, SEO, and ecommerce solutions.',
  keywords: [
    'web design services',
    'web design Johannesburg',
    'UI UX design agency',
    'branding services',
    'digital design company',
    'website development',
  ],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services',
  },
  openGraph: {
    title: 'Web Design Services Johannesburg',
    description:
      'Expert web design, UI/UX, branding, and digital services. Next.js development and SEO for South African businesses.',
    url: 'https://www.nostalgic-studio.co.za/services',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

const specializedSolutions = [
  {
    title: 'Web Design Johannesburg',
    href: '/services/web-design-johannesburg',
    icon: Globe,
  },
  {
    title: 'SEO Services Johannesburg',
    href: '/services/seo-services-johannesburg',
    icon: Search,
  },
  {
    title: 'Next.js Website Design',
    href: '/services/nextjs-website-design',
    icon: Zap,
  },
  {
    title: 'Ecommerce Website Development',
    href: '/services/ecommerce-website-development',
    icon: ShoppingBag,
  },
  {
    title: 'Branding Design',
    href: '/services/branding-design',
    icon: Palette,
  },
  {
    title: 'Social Media Marketing',
    href: '/services/social-media-marketing',
    icon: Share2,
  },
  {
    title: 'Social Media Ads',
    href: '/services/social-media-ads',
    icon: Megaphone,
  },
  {
    title: 'Web Hosting',
    href: '/services/web-hosting',
    icon: Server,
  },
  {
    title: 'UX/UI Design',
    href: '/services/ux-ui-design',
    icon: Layout,
  },
  {
    title: 'Web Maintenance',
    href: '/services/web-maintenance',
    icon: Settings,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data for Services */}
      <Script
        id="services-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Nostalgic Studio Design Services',
            description:
              'We offer comprehensive digital solutions tailored for startups and growing businesses, including web design, UI/UX design, branding, and digital design. Every service is designed to help your business thrive.',
            provider: {
              '@type': 'Organization',
              name: 'Nostalgic Studio',
              url: 'https://www.nostalgic-studio.co.za',
              logo: 'https://www.nostalgic-studio.co.za/logo.png',
              sameAs: [
                'https://www.facebook.com/webengineers',
                'https://www.linkedin.com/company/110356396/',
                'https://www.instagram.com/studionostalgic',
              ],
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Design Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Web Design',
                    description:
                      'Custom web design solutions focused on responsive layouts, user experience, and conversion optimization.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'UI/UX Design',
                    description:
                      'User interface and user experience design to ensure intuitive and engaging digital products.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Branding',
                    description:
                      'Complete branding solutions, including visual identity, logo design, and brand guidelines.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Digital Design',
                    description:
                      'Creative digital designs for marketing, social media, and online campaigns to boost engagement.',
                  },
                },
              ],
            },
          }),
        }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What web design services do you offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer comprehensive web design services including custom website development, Next.js websites, e-commerce solutions, UI/UX design, SEO optimization, branding, and ongoing website maintenance for businesses in South Africa.'
                }
              },
              {
                '@type': 'Question',
                name: 'How much does a website cost in South Africa?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Website costs vary based on complexity. Basic brochure websites start at R8,000, while custom Next.js sites range from R15,000-R35,000. E-commerce platforms typically cost R25,000-R50,000+.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you provide SEO services?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we offer comprehensive SEO services including technical SEO, on-page optimization, keyword research, content strategy, and local SEO for Johannesburg and South African businesses.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long does it take to build a website?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Typical projects take 4-8 weeks. Simple websites: 2-4 weeks. Custom Next.js sites: 4-6 weeks. E-commerce platforms: 6-12 weeks.'
                }
              },
              {
                '@type': 'Question',
                name: 'Why choose Next.js for web development?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG) for lightning-fast loading times, better SEO rankings, and improved user experience.'
                }
              }
            ]
          }),
        }}
      />

      <main className="pt-24 md:pt-32">
        <ServicesHero />
        <ServicesList services={services} />

        <section className="py-20 bg-primary/5">
          <div className="container-wide mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Specialized Digital Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored strategies and technical expertise designed for specific business needs 
                and local market dominance in South Africa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {specializedSolutions.map((solution) => (
                <Link
                  key={solution.href}
                  href={solution.href}
                  className="group flex flex-col p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg leading-tight mb-2">{solution.title}</h3>
                  <div className="mt-auto flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <Globe className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection steps={process} />

        {/* FAQ Section - AEO Optimization */}
        <section className="py-20 bg-card border-y border-border" aria-labelledby="faq-heading">
          <div className="container-wide mx-auto px-4">
            <h2 id="faq-heading" className="text-3xl font-bold mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Find answers to common questions about our web design and digital services.
            </p>
            <div className="max-w-3xl mx-auto grid gap-6">
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-bold mb-3">What web design services do you offer?</h3>
                <p className="text-muted-foreground">
                  We offer comprehensive web design services including custom website development, 
                  Next.js websites, e-commerce solutions, UI/UX design, SEO optimization, 
                  branding, and ongoing website maintenance for businesses in South Africa.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-bold mb-3">How much does a website cost in South Africa?</h3>
                <p className="text-muted-foreground">
                  Website costs vary based on complexity. Basic brochure websites start at R8,000, 
                  while custom Next.js sites range from R15,000-R35,000. E-commerce platforms 
                  typically cost R25,000-R50,000+. All projects include SEO optimization and 
                  mobile responsiveness.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-bold mb-3">Do you provide SEO services?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer comprehensive SEO services including technical SEO, on-page optimization, 
                  keyword research, content strategy, and local SEO for Johannesburg and South African businesses. 
                  Every website we build is optimized for search engines.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-bold mb-3">How long does it take to build a website?</h3>
                <p className="text-muted-foreground">
                  Typical projects take 4-8 weeks. Simple websites: 2-4 weeks. 
                  Custom Next.js sites: 4-6 weeks. E-commerce platforms: 6-12 weeks. 
                  Timeline depends on complexity, content readiness, and feedback speed.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-bold mb-3">Why choose Next.js for web development?</h3>
                <p className="text-muted-foreground">
                  Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG) 
                  for lightning-fast loading times, better SEO rankings, and improved user experience. 
                  It is the preferred framework for modern, high-performance websites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways - GEO Optimization */}
        <section className="py-20 bg-primary/5" aria-labelledby="takeaways-heading">
          <div className="container-wide mx-auto px-4">
            <h2 id="takeaways-heading" className="text-3xl font-bold mb-8 text-center">
              Why Choose Nostalgic Studio?
            </h2>
            <div className="max-w-3xl mx-auto grid gap-4">
              <div className="bg-card p-5 rounded-xl border border-border">
                <strong className="text-lg">13+ Years Industry Experience:</strong>
                <p className="text-muted-foreground mt-1">
                  Since 2016, we have been delivering high-quality web design and digital solutions to South African businesses.
                </p>
              </div>
              <div className="bg-card p-5 rounded-xl border border-border">
                <strong className="text-lg">70+ Projects Completed:</strong>
                <p className="text-muted-foreground mt-1">
                  Proven track record across various industries including e-commerce, SaaS, healthcare, and finance.
                </p>
              </div>
              <div className="bg-card p-5 rounded-xl border border-border">
                <strong className="text-lg">Next.js Specialists:</strong>
                <p className="text-muted-foreground mt-1">
                  We build modern, fast, and SEO-optimized websites using the latest Next.js technology.
                </p>
              </div>
              <div className="bg-card p-5 rounded-xl border border-border">
                <strong className="text-lg">Full-Service Digital Agency:</strong>
                <p className="text-muted-foreground mt-1">
                  From web design and development to branding, SEO, and maintenance - all under one roof.
                </p>
              </div>
              <div className="bg-card p-5 rounded-xl border border-border">
                <strong className="text-lg">Johannesburg Based, Serving South Africa:</strong>
                <p className="text-muted-foreground mt-1">
                  Local expertise with global standards. We understand the South African market and deliver world-class results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  )
}
