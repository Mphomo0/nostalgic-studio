import type { Metadata } from 'next'
import AboutCTA from '@/components/pages/about/AboutCTA'
import AboutHero from '@/components/pages/about/AboutHero'
import AboutStory from '@/components/pages/about/AboutStory'
import AboutValues from '@/components/pages/about/AboutValues'
import AboutTeam from '@/components/pages/about/AboutTeam'
import Testimonials from '@/components/pages/home/Testimonials'
import AboutThisPage from '@/components/geo/AboutThisPage'

export const metadata: Metadata = {
  title: 'About Us | Digital Design Agency Johannesburg',
  description:
    'Nostalgic Studio is a Johannesburg digital design agency founded in 2016. We blend timeless design with modern Next.js innovation.',
  keywords: [
    'about Nostalgic Studio',
    'digital design agency Johannesburg',
    'web design company South Africa',
    'creative studio founded 2016',
    'Mpho Moipolai designer',
    'Johannesburg web design agency',
  ],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/about',
  },
  openGraph: {
    title: 'About Nostalgic Studio | Johannesburg Digital Agency',
    description:
      'Nostalgic Studio is a Johannesburg digital design agency founded in 2016. We blend timeless design with modern Next.js innovation.',
    url: 'https://www.nostalgic-studio.co.za/about',
    siteName: 'Nostalgic Studio',
    type: 'website',
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
    telephone: '+27-82-448-3273',
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
    worksFor: {
      '@id': 'https://www.nostalgic-studio.co.za/#organization',
    },
    url: 'https://nostalgic-studio.co.za/about',
    sameAs: [
      'https://www.linkedin.com/in/mphomoipolai',
      'https://www.instagram.com/studionostalgic',
    ],
    knowsAbout: [
      'Web Design',
      'UI/UX Design',
      'Brand Identity',
      'Next.js Development',
      'SEO',
      'Digital Strategy',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Central University of Technology',
    },
    description:
      'Mpho Moipolai is a Johannesburg-based designer and developer with 10+ years of experience building digital products for startups across South Africa.',
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
        <AboutThisPage
          summary="Nostalgic Studio is a Johannesburg digital design agency founded in 2016 by Mpho Moipolai. We build fast, modern websites and brand identities for startups and growing businesses across South Africa using Next.js and Tailwind CSS."
          covers={[
            'Johannesburg Web Design',
            'Brand Identity',
            'UI/UX Design',
            'Next.js Development',
            'South Africa',
          ]}
          lastUpdated="March 2026"
        />
        <AboutStory />
        <AboutValues />
        <Testimonials />
        <AboutCTA />
      </main>
    </div>
  )
}
