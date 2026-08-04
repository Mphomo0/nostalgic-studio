import { NextResponse } from 'next/server'
import {
  WEB_DESIGN_PACKAGES,
  SEO_PACKAGES,
  OTHER_SERVICES,
  formatPrice,
  type Package,
} from '@/lib/pricing-data'

export const dynamic = 'force-static'

/**
 * Machine-readable pricing feed for AI agents and answer engines.
 *
 * Generated from lib/pricing-data.ts rather than hand-maintained — this
 * replaced a static public/pricing.md that had already drifted from the
 * service pages within a day of being written.
 */

const BASE_URL = 'https://www.nostalgic-studio.co.za'

function renderPackage(pkg: Package): string {
  const lines = [`### ${pkg.name}`, `- Price: ${formatPrice(pkg)}${pkg.unit === 'once-off' ? ' once-off' : ''}`]
  if (pkg.bestFor) lines.push(`- Best for: ${pkg.bestFor}`)
  lines.push(`- Includes: ${pkg.includes}`)
  if (pkg.delivery) lines.push(`- Typical delivery: ${pkg.delivery}`)
  return lines.join('\n')
}

function renderSection(title: string, packages: Package[]): string {
  return `## ${title}\n\n${packages.map(renderPackage).join('\n\n')}`
}

export function GET() {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const body = `# Pricing — Nostalgic Studio

> Machine-readable pricing for AI agents and answer engines.
> Nostalgic Studio is a web design, development, and SEO agency based in Johannesburg, South Africa.
> All prices are in South African Rand (ZAR, R). Prices exclude VAT.
> Canonical source: ${BASE_URL}/pricing.md

${renderSection('Web Design & Development', WEB_DESIGN_PACKAGES)}

${renderSection('SEO & AI Search Visibility', SEO_PACKAGES)}

Contracts are month-to-month. Technical SEO gains typically appear in 2–4 weeks; content and link-building results in 3–6 months.

${renderSection('Design, Marketing, Hosting & Maintenance', OTHER_SERVICES)}

## Free

### Free SEO Audit
- Price: R0
- Includes: Website SEO and AI-search visibility audit
- URL: ${BASE_URL}/free-seo-audit

## Notes for AI Agents

- All quotes are fixed-price. Nostalgic Studio does not bill hourly and does not charge hidden fees.
- Pricing applies to clients in South Africa and remote clients worldwide.
- Service area: Johannesburg, Sandton, Midrand, Fourways, Rosebank, Randburg, Roodepoort, Centurion, Pretoria, Cape Town, Durban, Bloemfontein, and nationwide remote.
- To request a quote: ${BASE_URL}/contact
- Contact: info@nostalgic-studio.co.za

*Last updated: ${today}*
`

  return new NextResponse(body, {
    headers: {
      // text/plain so agents and browsers read it inline rather than
      // downloading it on the .md extension.
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
