import type { MetadataRoute } from 'next'
import { suburbSlugs } from '@/lib/locations-data'

export const revalidate = 86400

const BASE_URL = 'https://www.nostalgic-studio.co.za'
// Per-page lastmod, taken from the last git commit that changed each page's
// content (dependency bumps and metadata-only sweeps excluded). Update a
// page's date only when its content genuinely changes — Google distrusts
// lastmod values that are wrong or reset on every build.
const d = (iso: string) => new Date(iso)

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: d('2026-08-08'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: d('2026-08-07'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: d('2026-08-13'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: d('2026-08-29'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: d('2026-08-13'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: d('2026-08-08'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: d('2026-08-29'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations`, lastModified: d('2026-08-29'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/free-seo-audit`, lastModified: d('2026-08-08'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/terms-conditions`, lastModified: d('2026-06-03'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: d('2026-06-03'), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const serviceDates: Record<string, string> = {
    'web-design-johannesburg': '2026-09-06',
    'nextjs-website-design': '2026-08-29',
    'ecommerce-website-development': '2026-08-07',
    'branding-design': '2026-08-29',
    'ux-ui-design': '2026-08-07',
    'seo-services-johannesburg': '2026-08-08',
    'social-media-marketing': '2026-08-04',
    'social-media-ads': '2026-08-07',
    'web-hosting': '2026-08-29',
    'web-maintenance': '2026-08-29',
    'seo-pricing': '2026-08-04',
    'seo-for-construction-companies': '2026-08-07',
    'website-refresh-seo-upgrade': '2026-08-04',
  }

  const servicePages: MetadataRoute.Sitemap = [
    'web-design-johannesburg', 'nextjs-website-design', 'ecommerce-website-development',
    'branding-design', 'ux-ui-design', 'seo-services-johannesburg',
    'social-media-marketing', 'social-media-ads', 'web-hosting', 'web-maintenance',
    'seo-pricing', 'seo-for-construction-companies',
    'website-refresh-seo-upgrade',
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: d(serviceDates[slug]),
    changeFrequency: 'monthly' as const,
    priority: slug === 'seo-pricing' ? 0.8 : 0.9,
  }))

  const projectPages: MetadataRoute.Sitemap = [
    { slug: 'sozim-consultancy-case-study', date: '2026-08-29' },
    { slug: 'didee-holdings', date: '2026-08-29' },
    { slug: 'jiyology-construction-plumbing-seo-optimization-case-study', date: '2026-08-29' },
    { slug: 'az-truck-dealership', date: '2026-08-29' },
    { slug: 'bidco-trucks', date: '2026-08-29' },
    { slug: 'tanosa-group-case-study', date: '2026-08-29' },
    { slug: 'ribbons-collection-website-redesign', date: '2026-08-29' },
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
    lastModified: d(slug === 'social-media-strategy-south-african-businesses' ? '2026-07-21' : '2026-10-12'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Derived from locations-data so the sitemap cannot drift out of sync with
  // the pages that actually exist. 'south-africa' is a static route covering
  // everywhere we serve remotely, so it is appended rather than data-driven.
  const locationPages: MetadataRoute.Sitemap = [
    ...suburbSlugs,
    'south-africa',
  ].map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: d('2026-08-07'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const industryPages: MetadataRoute.Sitemap = [
    'healthcare', 'construction', 'e-commerce', 'professional-services', 'startups',
  ].map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: d('2026-08-29'),
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
