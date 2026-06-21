import type { MetadataRoute } from 'next'

export const revalidate = 86400

const BASE_URL = 'https://www.nostalgic-studio.co.za'
const NOW = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: NOW, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/free-seo-audit`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/terms-conditions`, lastModified: new Date('2026-02-09'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date('2026-02-09'), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = [
    'web-design-johannesburg', 'nextjs-website-design', 'ecommerce-website-development',
    'branding-design', 'ux-ui-design', 'seo-services-johannesburg',
    'social-media-marketing', 'social-media-ads', 'web-hosting', 'web-maintenance',
    'seo-pricing', 'affordable-web-design-johannesburg', 'seo-for-construction-companies',
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: slug === 'seo-pricing' ? 0.8 : 0.9,
  }))

  const projectPages: MetadataRoute.Sitemap = [
    { slug: 'sozim-consultancy', date: '2024-01-15' },
    { slug: 'didee-holdings', date: '2024-01-20' },
    { slug: 'jiyology-website', date: '2024-01-25' },
    { slug: 'az-truck-dealership', date: '2024-01-28' },
    { slug: 'bidco-trucks', date: '2024-01-30' },
    { slug: 'tanosa-group', date: '2024-02-01' },
  ].map(({ slug, date }) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(date),
    changeFrequency: 'never' as const,
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = [
    'what-is-nextjs-seo-2026',
    'website-cost-south-africa-2026',
    '10-signs-business-needs-website-redesign',
    'how-to-choose-web-design-company-johannesburg',
    'what-is-local-seo-south-africa',
    'how-long-to-build-website-2026',
    'social-media-strategy-south-african-businesses',
    'what-is-generative-engine-optimization',
    'seo-for-startups-south-africa',
    'small-business-website-guide-johannesburg',
    'web-design-cost-south-africa-2026-guide',
  ].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const locationPages: MetadataRoute.Sitemap = [
    'sandton', 'fourways', 'rosebank', 'midrand', 'pretoria',
    'randburg', 'roodepoort', 'centurion', 'cape-town', 'durban', 'bloemfontein',
  ].map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const industryPages: MetadataRoute.Sitemap = [
    'healthcare', 'construction', 'ecommerce', 'professional-services', 'startups',
  ].map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    ...corePages,
    ...servicePages,
    ...projectPages,
    ...blogPages,
    ...locationPages,
    ...industryPages,
  ]
}
