import type { Metadata } from 'next'
import AboutCTA from '@/components/pages/about/AboutCTA'
import AboutHero from '@/components/pages/about/AboutHero'
import AboutStory from '@/components/pages/about/AboutStory'
import AboutValues from '@/components/pages/about/AboutValues'
import AboutTeam from '@/components/pages/about/AboutTeam'
import Testimonials from '@/components/pages/home/Testimonials'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Nostalgic Studio - a digital design agency founded in 2016. We blend timeless design principles with modern innovation to create memorable digital experiences for startups.',
  keywords: [
    'about Nostalgic Studio',
    'digital design agency Johannesburg',
    'web design company South Africa',
    'creative studio founded 2016',
    'Mpho Moipolai designer',
  ],
  openGraph: {
    title: 'About Us | Nostalgic Studio',
    description:
      'Learn about Nostalgic Studio - a digital design agency blending timeless principles with modern innovation.',
  },
}

export default function page() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'Nostalgic Studio',
    image: 'https://nostalgic-studio.co.za/images/logo/Logo.webp',
    '@id': 'https://nostalgic-studio.co.za/about',
    url: 'https://nostalgic-studio.co.za',
    telephone: '+27-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Johannesburg',
      addressLocality: 'Johannesburg',
      addressRegion: 'Gauteng',
      postalCode: '2000',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.2041,
      longitude: 28.0473,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '21:00',
    },
    sameAs: [
      'https://www.facebook.com/webengineers',
      'https://www.linkedin.com/company/110356396',
      'https://www.instagram.com/studionostalgic',
    ],
    priceRange: 'ZAR',
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mpho Moipolai',
    jobTitle: 'Founder & Creative Director',
    company: 'Nostalgic Studio',
    url: 'https://nostalgic-studio.co.za',
    sameAs: ['https://www.linkedin.com/in/mphomoipolai'],
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 md:pt-32">
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
        </>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <Testimonials />
        <AboutCTA />
      </main>
    </div>
  )
}
