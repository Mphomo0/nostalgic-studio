import type { MetadataRoute } from 'next'

export const revalidate = 86400 // regenerate sitemap at most once per day

const BASE_URL = 'https://www.nostalgic-studio.co.za'
const STABLE_DATE = new Date('2026-05-25')

export default function sitemap(): MetadataRoute.Sitemap {
  const now = STABLE_DATE

  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/terms-conditions`,
      lastModified: new Date('2026-02-09'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date('2026-02-09'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = [
    'web-design-johannesburg',
    'nextjs-website-design',
    'ecommerce-website-development',
    'branding-design',
    'ux-ui-design',
    'seo-services-johannesburg',
    'social-media-marketing',
    'social-media-ads',
    'web-hosting',
    'web-maintenance',
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
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
].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...corePages, ...servicePages, ...projectPages, ...blogPages]
}
