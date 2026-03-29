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
    </div>
  )
}
