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
  title: 'Services | Nostalgic Studio',
  description:
    'Professional web design, UI/UX design, branding, and digital design services for startups and businesses. Our comprehensive digital solutions drive growth and conversions.',
  keywords: [
    'web design services',
    'UI UX design agency',
    'branding services',
    'digital design company',
    'website development',
    'responsive web design',
    'logo design services',
    'brand identity design',
  ],
  openGraph: {
    title: 'Services | Nostalgic Studio',
    description:
      'Professional web design, UI/UX design, branding, and digital design services for startups.',
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
        <CTASection />
      </main>
    </div>
  )
}
