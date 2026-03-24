import type { Metadata } from 'next'
import PortfolioHeader from '@/components/pages/projects/PortfolioHeader'
import PortfolioGrid from '@/components/pages/projects/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Our Work | Portfolio Johannesburg | Nostalgic Studio',
  description: 'Explore our portfolio of stunning websites, brands, and digital products. View case studies showcasing our web design, UI/UX, and branding work for South African businesses.',
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
  openGraph: {
    title: 'Our Work | Portfolio | Nostalgic Studio',
    description: 'Explore our portfolio of stunning websites, brands, and digital products from Johannesburg.',
  },
}

export default function ProjectsPage() {
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Work',
    description: 'Portfolio of web design, branding, and digital design projects by Nostalgic Studio.',
    url: 'https://nostalgic-studio.co.za/projects',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: 6,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Sozim Trading & Consultancy Website Redesign',
          url: 'https://nostalgic-studio.co.za/projects/sozim-consultancy',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Didee Holdings Website Redesign',
          url: 'https://nostalgic-studio.co.za/projects/didee-holdings',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tanosa Group Website Redesign',
          url: 'https://nostalgic-studio.co.za/projects/tanosa-group',
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
