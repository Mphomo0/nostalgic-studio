/**
 * Shared JSON-LD schema factory functions.
 * Import and call these in any page to generate consistent structured data.
 */

const BASE_URL = 'https://www.nostalgic-studio.co.za'
const ORG_ID = `${BASE_URL}/#organization`
const BIZ_ID = `${BASE_URL}/#business`
const NON_DIGIT_RE = /[^0-9]/g
const BUILD_DATE = new Date().toISOString().split('T')[0]

/** Core organisation reference (use in subpage schemas to link back) */
export function orgRef() {
  return { '@id': ORG_ID }
}

/** Core business reference */
export function bizRef() {
  return { '@id': BIZ_ID }
}

/** Standard PostalAddress for Johannesburg */
export function joziAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: 'Midrand',
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    postalCode: '1685',
    addressCountry: 'ZA',
  }
}

/**
 * ProfessionalService entity for the business. Rendered on the homepage only;
 * other pages link to it via bizRef(). Review/AggregateRating markup is
 * intentionally omitted — self-serving reviews violate Google's guidelines.
 */
export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BIZ_ID,
    name: 'Nostalgic Studio',
    parentOrganization: orgRef(),
    description:
      'Nostalgic Studio is a web design and development agency in Johannesburg, South Africa, specialising in custom Next.js websites, UI/UX design, branding, SEO, and social media marketing for startups and small businesses.',
    url: BASE_URL,
    telephone: '+27-82-448-3273',
    foundingDate: '2013',
    currenciesAccepted: 'ZAR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, EFT',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' },
    ],
    priceRange: 'R3,500–R60,000',
    address: joziAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-25.9985',
      longitude: '28.1322',
    },
    areaServed: [
      { '@type': 'City', name: 'Johannesburg, South Africa' },
      { '@type': 'City', name: 'Sandton, South Africa' },
      { '@type': 'City', name: 'Soweto, South Africa' },
      { '@type': 'City', name: 'Midrand, South Africa' },
      { '@type': 'City', name: 'Mbombela, South Africa' },
      { '@type': 'City', name: 'Pretoria, South Africa' },
      { '@type': 'City', name: 'Randburg, South Africa' },
      { '@type': 'City', name: 'Fourways, South Africa' },
      { '@type': 'City', name: 'Rosebank, South Africa' },
      { '@type': 'City', name: 'Bryanston, South Africa' },
      { '@type': 'City', name: 'Thembisa, South Africa' },
      { '@type': 'City', name: 'Cape Town, South Africa' },
      { '@type': 'City', name: 'Centurion, South Africa' },
      { '@type': 'City', name: 'Kimberley, South Africa' },
      { '@type': 'City', name: 'Polokwane, South Africa' },
      { '@type': 'City', name: 'Roodepoort, South Africa' },
      { '@type': 'City', name: 'Randfontein, South Africa' },
      { '@type': 'City', name: 'Bloemfontein, South Africa' },
      { '@type': 'City', name: 'Durban, South Africa' },
      { '@type': 'Place', name: 'Century City, Cape Town, 7441, South Africa' },
      { '@type': 'AdministrativeArea', name: 'Gauteng, South Africa' },
      { '@type': 'Country', name: 'South Africa' },
    ],
    image: [
      `${BASE_URL}/images/og-image.jpg`,
      `${BASE_URL}/images/logo/Logo.webp`,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design & Digital Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design Johannesburg' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services Johannesburg' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next.js Website Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Graphic Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Hosting South Africa' } },
      ],
    },
  }
}

/**
 * Build a Service schema for a specific service page.
 */
export function serviceSchema(opts: {
  id: string
  name: string
  description: string
  url: string
  areaServed?: string
  priceRange?: string
  deliveryTime?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/#${opts.id}`,
    name: opts.name,
    description: opts.description,
    url: `${BASE_URL}${opts.url}`,
    provider: bizRef(),
    areaServed: opts.areaServed ?? 'South Africa',
    serviceType: opts.name,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'ZAR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: opts.priceRange?.split('-')[0].replace(NON_DIGIT_RE, '') || '5000',
        priceCurrency: 'ZAR',
        description: `Pricing starting from ${opts.priceRange || 'R5,000'}`
      }
    }
  }
}

/**
 * Build a WebPage schema for general pages.
 */
export function webPageSchema(opts: {
  url: string
  name: string
  description: string
  datePublished?: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BASE_URL}${opts.url}`,
    url: `${BASE_URL}${opts.url}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    publisher: orgRef(),
    datePublished: opts.datePublished ?? '2026-01-01',
    dateModified: opts.dateModified ?? BUILD_DATE,
  }
}

/**
 * Build a BlogPosting schema for blog posts.
 */
export function articleSchema(opts: {
  url: string
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  wordCount?: number
  authorName?: string
  articleSection?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}${opts.url}`,
    url: `${BASE_URL}${opts.url}`,
    headline: opts.headline,
    description: opts.description,
    image: {
      '@type': 'ImageObject',
      url: opts.image ?? `${BASE_URL}/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    wordCount: opts.wordCount ?? 1500,
    articleSection: opts.articleSection ?? 'Web Design',
    author: {
      '@type': 'Person',
      '@id': `${BASE_URL}/about#person`,
      name: opts.authorName ?? 'Mpho Moipolai',
      url: `${BASE_URL}/about`,
      jobTitle: 'Founder & Lead Developer',
      image: `${BASE_URL}/images/team/mpho-moipolai.webp`,
      sameAs: [
        'https://www.linkedin.com/in/mpho-moipolai-26b06286/',
        'https://www.instagram.com/studionostalgic',
      ],
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Nostalgic Studio',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logo/Logo.webp`,
        width: 200,
        height: 60,
      },
    },
    mainEntityOfPage: { '@id': `${BASE_URL}${opts.url}` },
  }
}

/**
 * Build a FAQPage schema from a list of Q&A pairs.
 */
export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

/**
 * Build a BreadcrumbList schema.
 */
export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }
}
