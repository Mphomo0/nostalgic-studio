/**
 * Guards the hand-written LLM text files against pricing drift.
 *
 * public/llms.txt and public/llms-full.txt are mostly prose, so they are not
 * generated from lib/pricing-data.ts the way /pricing.md is. This script
 * asserts that every price they quote still matches the canonical data.
 *
 * Runs as part of `npm run build`. Exits non-zero on drift.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// Parse lib/pricing-data.ts without needing a TS toolchain: pull the numeric
// fields straight out of the object literals.
const source = fs.readFileSync(path.join(root, 'lib/pricing-data.ts'), 'utf8')
const packages = []
const blockRe = /id: '([^']+)',\s*\n\s*name: '([^']*)',\s*\n\s*min: (\d+),\s*\n\s*max: (\d+),/g
let m
while ((m = blockRe.exec(source))) {
  packages.push({ id: m[1], name: m[2], min: Number(m[3]), max: Number(m[4]) })
}
if (packages.length === 0) {
  console.error('check-pricing-drift: could not parse any packages from lib/pricing-data.ts')
  process.exit(1)
}

const byId = Object.fromEntries(packages.map((p) => [p.id, p]))
const rand = (n) => `R${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`

/**
 * Each expectation is a phrase that MUST appear verbatim in the given file.
 * Written as data so a pricing change surfaces here rather than silently
 * leaving the prose stale.
 */
const EXPECTATIONS = [
  // ---- public/llms.txt ----
  {
    file: 'public/llms.txt',
    label: 'web design tiers (Key Facts)',
    phrase: `starts from ${rand(byId['starter-website'].min)} for starter sites, ${rand(byId['business-website'].min)}–${rand(byId['business-website'].max)} for business websites, and ${rand(byId['ecommerce-store'].min)}–${rand(byId['ecommerce-store'].max)}+ for e-commerce stores`,
  },
  {
    file: 'public/llms.txt',
    label: 'SEO range (site map entry)',
    phrase: `Starter ${rand(byId['starter-seo'].min)}/mo to Enterprise ${rand(byId['enterprise-seo'].min)}+/mo`,
  },
  // ---- public/llms-full.txt ----
  {
    file: 'public/llms-full.txt',
    label: 'starter website',
    phrase: `**Starter Website**: ${rand(byId['starter-website'].min)} once-off`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'business website',
    phrase: `**Business Website**: ${rand(byId['business-website'].min)}-${rand(byId['business-website'].max)} once-off`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'e-commerce store',
    phrase: `**E-Commerce Store**: ${rand(byId['ecommerce-store'].min)}-${rand(byId['ecommerce-store'].max)}+ once-off`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'starter SEO',
    phrase: `**Starter SEO**: ${rand(byId['starter-seo'].min)}/month`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'growth SEO',
    phrase: `**Growth SEO**: ${rand(byId['growth-seo'].min)}/month`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'enterprise SEO',
    phrase: `**Enterprise SEO**: ${rand(byId['enterprise-seo'].min)}+/month`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'web hosting',
    phrase: `Web Hosting: ${rand(byId['web-hosting'].min)}-${rand(byId['web-hosting'].max)}/month`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'website maintenance',
    phrase: `Website Maintenance: ${rand(byId['web-maintenance'].min)}-${rand(byId['web-maintenance'].max)}/month`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'social media marketing',
    phrase: `Social Media Marketing: ${rand(byId['social-marketing'].min)}-${rand(byId['social-marketing'].max)}/month`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'social media ads',
    phrase: `Social Media Ads: ${rand(byId['social-ads'].min)}-${rand(byId['social-ads'].max)}/month`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'UI/UX design',
    phrase: `UI/UX Design: ${rand(byId['ux-ui'].min)}-${rand(byId['ux-ui'].max)}`,
  },
  {
    file: 'public/llms-full.txt',
    label: 'branding',
    phrase: `Branding: ${rand(byId['branding'].min)}-${rand(byId['branding'].max)}`,
  },
]

const cache = new Map()
const readFile = (rel) => {
  if (!cache.has(rel)) cache.set(rel, fs.readFileSync(path.join(root, rel), 'utf8'))
  return cache.get(rel)
}

const failures = []
for (const { file, label, phrase } of EXPECTATIONS) {
  if (!readFile(file).includes(phrase)) {
    failures.push({ file, label, phrase })
  }
}

if (failures.length > 0) {
  console.error('\n✗ Pricing drift detected — these files disagree with lib/pricing-data.ts:\n')
  for (const f of failures) {
    console.error(`  ${f.file}  [${f.label}]`)
    console.error(`    expected to find: "${f.phrase}"\n`)
  }
  console.error('Update the file(s) above to match lib/pricing-data.ts, then rebuild.\n')
  process.exit(1)
}

console.log(`✓ Pricing consistent across ${cache.size} file(s) — ${EXPECTATIONS.length} checks passed.`)
