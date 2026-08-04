/**
 * Single source of truth for all pricing across the site.
 *
 * Everything that quotes a price should derive it from here: Schema.org
 * `priceRange` fields, the machine-readable /pricing.md feed, and the
 * llms.txt / llms-full.txt drift check (scripts/check-pricing-drift.mjs).
 *
 * These figures previously lived in ~20 places and drifted apart — the LLM
 * files advertised a R3,500 starter site while every page said R1,500, and
 * quoted e-commerce "from R25,000" when R25,000 is the ceiling. Change a
 * number here and every consumer follows.
 *
 * Amounts are in ZAR, excluding VAT.
 */

export type PriceUnit = 'once-off' | 'month'

export interface Package {
  /** Stable key used by consumers to look a package up. */
  id: string
  name: string
  min: number
  /**
   * Upper bound. Always a real number so ranges can be computed; pair it with
   * `openEnded` when the published price carries a trailing "+".
   */
  max: number
  /** Published with a trailing "+" rather than as a hard cap. */
  openEnded?: boolean
  /**
   * Escape hatch for the rare package whose published price differs from its
   * computed range. Enterprise SEO is advertised as "R10,000+" even though it
   * carries a R15,000 ceiling for `priceRange` span purposes.
   */
  displayAs?: string
  unit: PriceUnit
  bestFor?: string
  includes: string
  /** Typical delivery window, where one applies. */
  delivery?: string
}

export const WEB_DESIGN_PACKAGES: Package[] = [
  {
    id: 'starter-website',
    name: 'Starter Website',
    min: 1500,
    max: 1500,
    unit: 'once-off',
    bestFor:
      'Startups, freelancers, and small businesses needing a credible online presence',
    includes:
      '5 custom pages, mobile-responsive design, contact form, basic SEO setup, social media links, Google Maps integration, 1 month hosting',
    delivery: '1–2 weeks',
  },
  {
    id: 'business-website',
    name: 'Business Website',
    min: 8000,
    max: 15000,
    unit: 'once-off',
    bestFor: 'Growing businesses needing speed, SEO, and a strong brand presence',
    includes:
      'Up to 10 custom pages, Next.js framework (90+ Lighthouse score), advanced SEO optimization, blog setup, analytics integration, custom UI/UX design, 3 months hosting',
    delivery: '3–6 weeks',
  },
  {
    id: 'ecommerce-store',
    name: 'E-Commerce Store',
    min: 10000,
    max: 25000,
    openEnded: true,
    unit: 'once-off',
    bestFor: 'Businesses selling online in South Africa',
    includes:
      'Unlimited products, South African payment gateway integration (PayFast, Yoco, Ozow, Peach Payments), shopping cart and checkout, inventory management, SEO-optimized product pages, mobile-first design, 6 months hosting',
    delivery: '8–12 weeks',
  },
  {
    id: 'website-refresh',
    name: 'Website Refresh & SEO Upgrade',
    min: 3500,
    max: 8500,
    unit: 'once-off',
    bestFor: 'Businesses with an existing website that underperforms',
    includes:
      'Redesign of existing site, technical SEO retrofit, performance optimization',
    delivery: '2–4 weeks',
  },
]

export const SEO_PACKAGES: Package[] = [
  {
    id: 'starter-seo',
    name: 'Starter SEO',
    min: 1500,
    max: 1500,
    unit: 'month',
    bestFor: '10 keywords, 5 pages optimized',
    includes:
      'Keyword research, on-page optimization, monthly performance report, technical SEO audit, basic local SEO setup',
  },
  {
    id: 'growth-seo',
    name: 'Growth SEO',
    min: 5000,
    max: 5000,
    unit: 'month',
    bestFor: '30 keywords, 15 pages optimized',
    includes:
      'Keyword research, on-page optimization, weekly reports, technical fixes, local SEO and Google Business Profile, content strategy (2 posts/month), link building, GEO/AI search optimization',
  },
  {
    id: 'enterprise-seo',
    name: 'Enterprise SEO',
    min: 10000,
    max: 15000,
    openEnded: true,
    displayAs: 'R10,000+',
    unit: 'month',
    bestFor: 'Unlimited keywords, full site optimization',
    includes:
      'Dedicated account manager, weekly calls, advanced technical SEO, content (4 posts/month), premium link building, full GEO strategy',
  },
]

export const OTHER_SERVICES: Package[] = [
  {
    id: 'branding',
    name: 'Branding & Identity',
    min: 1500,
    max: 8000,
    unit: 'once-off',
    includes:
      'Logo design, brand strategy, visual identity system, brand guidelines, marketing collateral, full ownership of all assets',
  },
  {
    id: 'ux-ui',
    name: 'UI/UX Design',
    min: 8000,
    max: 35000,
    unit: 'once-off',
    includes:
      'User research, wireframing, prototyping, interactive design systems, usability optimization, mobile app design',
  },
  {
    id: 'social-marketing',
    name: 'Social Media Marketing',
    min: 3000,
    max: 15000,
    unit: 'month',
    includes:
      'Instagram, Facebook, and LinkedIn management, content creation, community management, growth strategy',
  },
  {
    id: 'social-ads',
    name: 'Social Media Ads',
    min: 3000,
    max: 20000,
    unit: 'month',
    includes:
      'Facebook, Instagram, and LinkedIn paid campaigns, audience targeting, retargeting, conversion tracking (excludes ad spend)',
  },
  {
    id: 'web-hosting',
    name: 'Web Hosting',
    min: 200,
    max: 3000,
    unit: 'month',
    includes:
      'Managed Next.js hosting on Vercel, 99.9% uptime, free SSL, global CDN, daily backups, 24/7 monitoring',
  },
  {
    id: 'web-maintenance',
    name: 'Website Maintenance',
    min: 500,
    max: 3000,
    unit: 'month',
    includes:
      'Security updates, performance optimization, content updates, 24/7 monitoring',
  },
]

export const ALL_PACKAGES: Package[] = [
  ...WEB_DESIGN_PACKAGES,
  ...SEO_PACKAGES,
  ...OTHER_SERVICES,
]

const packageById = new Map(ALL_PACKAGES.map((p) => [p.id, p]))

export function getPackage(id: string): Package {
  const pkg = packageById.get(id)
  if (!pkg) throw new Error(`Unknown pricing package: "${id}"`)
  return pkg
}

/**
 * "R1,500" — comma-separated, matching how every page on the site writes it.
 * Deliberately not `toLocaleString('en-ZA')`, which uses a space separator.
 */
export function formatRand(amount: number): string {
  return `R${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}

/**
 * Human-readable price for a package.
 * "R1,500" | "R8,000 – R15,000" | "R10,000 – R25,000+" | "R200 – R3,000/month"
 */
export function formatPrice(pkg: Package): string {
  const suffix = pkg.unit === 'month' ? '/month' : ''
  if (pkg.displayAs) return `${pkg.displayAs}${suffix}`

  const plus = pkg.openEnded ? '+' : ''
  const amount =
    pkg.max === pkg.min
      ? formatRand(pkg.min)
      : `${formatRand(pkg.min)} – ${formatRand(pkg.max)}`
  return `${amount}${plus}${suffix}`
}

/**
 * Schema.org `priceRange` spanning one or more packages, in the plain
 * "R1500-R25000" form the existing schemas already emit.
 */
export function priceRange(...ids: string[]): string {
  const pkgs = ids.map(getPackage)
  const min = Math.min(...pkgs.map((p) => p.min))
  const max = Math.max(...pkgs.map((p) => p.max))
  return `R${min}-R${max}`
}

/**
 * Range covering everything the studio sells — used for the top-level business
 * schema. Derived rather than hardcoded, so it cannot drift.
 */
export function fullServiceRange(): string {
  const min = Math.min(...ALL_PACKAGES.map((p) => p.min))
  const max = Math.max(...ALL_PACKAGES.map((p) => p.max))
  return `${formatRand(min)}–${formatRand(max)}`
}

/** Website project floor-to-ceiling — the figure most service pages quote. */
export const WEBSITE_PRICE_RANGE = priceRange(
  'starter-website',
  'business-website',
  'ecommerce-store'
)

/** SEO retainer range as quoted on the SEO service pages. */
export const SEO_PRICE_RANGE = priceRange(
  'starter-seo',
  'growth-seo',
  'enterprise-seo'
)
