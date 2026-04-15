import type { Metadata } from 'next'
import PortfolioHeader from '@/components/pages/projects/PortfolioHeader'
import PortfolioGrid from '@/components/pages/projects/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Our Work | Portfolio Johannesburg',
  description: 'Explore our portfolio of stunning websites and brands. View case studies showcasing our web design and branding work.',
  keywords: [
    'portfolio',
    'web design portfolio',
    'website case studies',
    'branding projects',
    'UI UX design examples',
    'digital design work',
    'website gallery',
    'Johannesburg web design portfolio',
  ],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/projects',
  },
  openGraph: {
    title: 'Our Work | Portfolio',
    description: 'Explore our portfolio of stunning websites, brands, and digital products from Johannesburg.',
    url: 'https://www.nostalgic-studio.co.za/projects',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function ProjectsPage() {
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Work',
    description: 'Portfolio of web design, branding, and digital design projects by Nostalgic Studio.',
    url: 'https://www.nostalgic-studio.co.za/projects',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: 6,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Sozim Trading & Consultancy Website Redesign',
          url: 'https://www.nostalgic-studio.co.za/projects/sozim-consultancy',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Didee Holdings Website Redesign',
          url: 'https://www.nostalgic-studio.co.za/projects/didee-holdings',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tanosa Group Website Redesign',
          url: 'https://www.nostalgic-studio.co.za/projects/tanosa-group',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Jiyology Building & Construction Website',
          url: 'https://www.nostalgic-studio.co.za/projects/jiyology-website',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'A-Z Truck Sales Dealership Website',
          url: 'https://www.nostalgic-studio.co.za/projects/az-truck-dealership',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Bidco Trucks Website',
          url: 'https://www.nostalgic-studio.co.za/projects/bidco-trucks',
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
      </>
      <PortfolioHeader />
      <PortfolioGrid />

      {/* Server-rendered content for SEO word count and context */}
      <section className="py-16 md:py-24 border-t border-border" aria-labelledby="expertise-heading">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 id="expertise-heading" className="text-3xl font-bold mb-8">Specialized Web Design Expertise</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mb-16">
              <p>
                At Nostalgic Studio, we don't just build websites; we create digital assets that drive growth. Our portfolio showcases a diverse range of projects, from high-performance startup landing pages to complex corporate platforms. Every project in our Johannesburg studio is approached with a focus on **speed, SEO, and user experience**.
              </p>
              <p>
                We specialize in using modern technologies like **Next.js and React** to deliver websites that outrank traditional CMS-based sites. This technical edge allows our clients to achieve superior search engine visibility and conversion rates from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Next.js Development</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Most of our featured projects are built using Next.js. This choice ensures that your business benefits from server-side rendering, instant page transitions, and automatic image optimization. For South African businesses, this means your site loads faster even on limited mobile data connections.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Conversion-Driven UX</h3>
                <p className="text-sm leading-relaxed mb-4">
                  A beautiful design is only effective if it converts. We integrate psychological principles of user behavior into every layout. By analyzing how users interact with our designs, we ensure that the call-to-action is always clear and frictionless.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Local SEO Optimization</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Building a site for the Johannesburg market requires specific technical SEO considerations. We ensure every project has proper schema markup, local business signals, and semantic HTML structure to help you dominate local search rankings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Brand Identity Systems</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Beyond web development, we help businesses define their visual identity. Our branding projects focus on creating a consistent, memorable brand that resonates with your specific target audience in the South African market.
                </p>
              </div>
            </div>

            <div className="mt-20 p-8 md:p-12 bg-card border border-border rounded-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to see your business here?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the 70+ successful projects we've delivered. Let's build a high-performance website that truly represents your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(var(--primary),0.3)]"
                >
                  Start Your Project
                </a>
                <a 
                  href="/services" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-bold transition-all hover:bg-secondary/80"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
