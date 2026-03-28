/**
 * Shared JSON-LD schema factory functions.
 * Import and call these in any page to generate consistent structured data.
 */

const BASE_URL = 'https://www.nostalgic-studio.co.za'
const ORG_ID = `${BASE_URL}/#organization`
const BIZ_ID = `${BASE_URL}/#business`

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
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
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
    publisher: orgRef(),
    datePublished: opts.datePublished ?? '2026-01-01',
    dateModified: opts.dateModified ?? new Date().toISOString().split('T')[0],
  }
}

/**
 * Build an Article schema for blog posts.
 */
export function articleSchema(opts: {
  url: string
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  wordCount?: number
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}${opts.url}`,
    url: `${BASE_URL}${opts.url}`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    wordCount: opts.wordCount ?? 1000,
    author: {
      '@type': 'Person',
      name: opts.authorName ?? 'Mpho Moipolai',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logo/Logo.webp`,
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
