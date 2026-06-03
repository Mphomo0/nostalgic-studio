# SEO / AEO / GEO Full Audit & Optimization Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix every identified SEO/AEO/GEO defect on the Nostalgic Studio Next.js 16 site so it ranks higher on Google, earns AI citations, and presents consistent structured data.

**Architecture:** Targeted file-level edits only — no new routes, no restructuring. All changes are within `app/`, `public/`, and `app/structured-data/schemas.ts`. Each task is independently deployable.

**Tech Stack:** Next.js 16.2.6 App Router, React 19, TypeScript, JSON-LD via `<script type="application/ld+json">`, Tailwind CSS, shadcn/ui.

---

## Audit Findings Summary

### Critical (data integrity / E-E-A-T damage)
| # | File | Issue |
|---|------|-------|
| C1 | `app/layout.tsx:175` | `LocalBusiness.foundingDate: '2013'` contradicts `Organization.foundingDate: '2016'` and the about page copy |
| C2 | `app/layout.tsx:179` | `LocalBusiness.priceRange: 'R8,000–R60,000'` contradicts starter price of R3,500 shown on home/service pages |
| C3 | `app/layout.tsx:228` | `<html lang="en">` — must be `lang="en-ZA"` for SA English locale signals |
| C4 | `app/layout.tsx:118` vs `app/about/page.tsx:51` | Person `jobTitle` is "Founder & Lead Developer" in global schema but "Founder & Creative Director" on about page |
| C5 | `app/services/web-design-johannesburg/page.tsx:258` | `**Web Design Johannesburg**` is markdown syntax in JSX — renders as literal asterisks `**`, not bold |
| C6 | `app/services/seo-services-johannesburg/page.tsx:195` | Same markdown-in-JSX bug |

### High (CTR & ranking impact)
| # | File | Issue |
|---|------|-------|
| H1 | `app/services/web-design-johannesburg/page.tsx:15` | Title "Web Design JHB \| Next.js Experts" — abbreviation "JHB" misses the keyword "Johannesburg"; 33 chars (under-optimized) |
| H2 | `app/blog/what-is-nextjs-seo-2026/page.tsx:10` | Title "Next.js Best for SEO 2026" is 28 chars — far below the 50-60 char optimal range; weak CTR |
| H3 | `app/blog/what-is-nextjs-seo-2026/page.tsx:11` | Description is 97 chars — under the 140-160 char target |
| H4 | `app/services/web-design-johannesburg/page.tsx:17` | Description is 107 chars — under the 140-160 char target |
| H5 | `app/services/seo-services-johannesburg/page.tsx:17` | Description is 103 chars — under the 140-160 char target |
| H6 | `app/layout.tsx:96` | Global Twitter metadata missing `site` and `creator` — weakens Twitter/X card attribution |
| H7 | `app/page.tsx:85` | `WebSite.potentialAction.target` points to `/services?q=` — there is no search endpoint; misleads crawlers |
| H8 | `app/page.tsx` | Home page has no `FAQPage` schema despite rendering 5 visible FAQs — missed rich result opportunity |
| H9 | `app/about/page.tsx` | No `BreadcrumbList` schema — all pages except home should have it |
| H10 | `app/contact/page.tsx` | No `BreadcrumbList` schema and no `ContactPage` schema |

### Medium (schema completeness / GEO improvement)
| # | File | Issue |
|---|------|-------|
| M1 | `app/structured-data/schemas.ts:78` | `webPageSchema` lacks `isPartOf` linking to the `WebSite` entity — schema graph is disconnected |
| M2 | `app/structured-data/schemas.ts:125` | `articleSchema` publisher logo lacks `width` / `height` properties (recommended by Google) |
| M3 | `app/services/seo-services-johannesburg/page.tsx:158` | "Google SGE" is the deprecated name — it's now "Google AI Overviews" |
| M4 | `public/robots.txt:48` | Non-standard `IndexNow:` directive — robots.txt spec does not support this; remove it |
| M5 | All blog pages | Blog articles use native `<script>` for JSON-LD while service pages use `<Script>` — inconsistent hydration strategy |

---

## Task 1: Critical Data Consistency & HTML Lang Fix

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Fix `html lang`, `foundingDate`, `priceRange`, Twitter metadata**

  Open `app/layout.tsx` and apply four changes in one pass:

  **Change A — html element (line 228):**
  ```tsx
  // Before
  <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
  // After
  <html lang="en-ZA" className={inter.variable} data-scroll-behavior="smooth">
  ```

  **Change B — LocalBusiness foundingDate (line 175):**
  ```tsx
  // Before
  foundingDate: '2013',
  // After
  foundingDate: '2016',
  ```

  **Change C — LocalBusiness priceRange (line 179):**
  ```tsx
  // Before
  priceRange: 'R8,000–R60,000',
  // After
  priceRange: 'R3,500–R60,000',
  ```

  **Change D — Add `site` and `creator` to Twitter metadata (after line 103):**
  ```tsx
  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Web Design for Startups Johannesburg | Nostalgic Studio',
    description:
      'Custom Next.js websites for startups in Johannesburg. SEO-optimized, fast, and conversion-focused.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
  ```

- [ ] **Step 2: Verify the file builds**

  Run: `cd /Users/mphomoipolai/Documents/development/personal/nostalgicstudio && npx tsc --noEmit`
  Expected: no new type errors

- [ ] **Step 3: Commit**

  ```bash
  git add app/layout.tsx
  git commit -m "fix: correct LocalBusiness foundingDate, priceRange, html lang, add Twitter site/creator"
  ```

---

## Task 2: Fix Person `jobTitle` Inconsistency

**Files:**
- Modify: `app/layout.tsx` (line 118)
- Modify: `app/about/page.tsx` (line 52)

The authoritative title should be a single value used everywhere. "Founder & Lead Developer" better reflects the technical work described on service pages.

- [ ] **Step 1: Unify jobTitle in root layout**

  In `app/layout.tsx` at the Person schema node (around line 116–120):
  ```tsx
  // Before
  jobTitle: 'Founder & Lead Developer',
  // After — no change needed here, this is the canonical value
  ```

  In `app/about/page.tsx` line 52:
  ```tsx
  // Before
  jobTitle: 'Founder & Creative Director',
  // After
  jobTitle: 'Founder & Lead Developer',
  ```

- [ ] **Step 2: Verify build**

  Run: `npx tsc --noEmit`
  Expected: clean

- [ ] **Step 3: Commit**

  ```bash
  git add app/about/page.tsx
  git commit -m "fix: unify Person jobTitle to 'Founder & Lead Developer' across all schemas"
  ```

---

## Task 3: Fix Markdown Syntax in JSX (Content Rendering Bug)

**Files:**
- Modify: `app/services/web-design-johannesburg/page.tsx` (line 258)
- Modify: `app/services/seo-services-johannesburg/page.tsx` (line 195)

Markdown `**text**` syntax is not parsed in JSX — it renders as literal asterisks in the browser, which looks broken and reduces content quality signals.

- [ ] **Step 1: Fix web-design-johannesburg page**

  In `app/services/web-design-johannesburg/page.tsx`, find the paragraph around line 258:
  ```tsx
  // Before
  <p className="text-muted-foreground mb-6">
    In today's competitive digital market, having a "pretty" website isn't enough. 
    You need a site that is fast, accessible, and optimized for search engines. 
    Our **Web Design Johannesburg** team focuses on:
  </p>
  // After
  <p className="text-muted-foreground mb-6">
    In today&apos;s competitive digital market, having a &quot;pretty&quot; website isn&apos;t enough.
    You need a site that is fast, accessible, and optimized for search engines.
    Our <strong>Web Design Johannesburg</strong> team focuses on:
  </p>
  ```

- [ ] **Step 2: Fix seo-services-johannesburg page**

  In `app/services/seo-services-johannesburg/page.tsx`, find the paragraph around line 193:
  ```tsx
  // Before
  <p className="text-muted-foreground mb-6">
    In Johannesburg's competitive market, being on the first page of Google is non-negotiable. 
    We combine technical SEO with local insights to help your business stand out. 
    Our **SEO Services Johannesburg** focus on:
  </p>
  // After
  <p className="text-muted-foreground mb-6">
    In Johannesburg&apos;s competitive market, being on the first page of Google is non-negotiable.
    We combine technical SEO with local insights to help your business stand out.
    Our <strong>SEO Services Johannesburg</strong> focus on:
  </p>
  ```

- [ ] **Step 3: Fix outdated "Google SGE" terminology**

  In `app/services/seo-services-johannesburg/page.tsx`, find around line 156–158:
  ```tsx
  // Before
  ...answer engines like Perplexity, ChatGPT, and Google SGE.
  // After
  ...answer engines like Perplexity, ChatGPT, and Google AI Overviews.
  ```

- [ ] **Step 4: Verify build**

  Run: `npx tsc --noEmit`
  Expected: clean

- [ ] **Step 5: Commit**

  ```bash
  git add app/services/web-design-johannesburg/page.tsx app/services/seo-services-johannesburg/page.tsx
  git commit -m "fix: replace markdown syntax with JSX bold tags, update Google SGE to AI Overviews"
  ```

---

## Task 4: Improve Meta Titles & Descriptions

**Files:**
- Modify: `app/services/web-design-johannesburg/page.tsx`
- Modify: `app/blog/what-is-nextjs-seo-2026/page.tsx`
- Modify: `app/services/seo-services-johannesburg/page.tsx`
- Modify: `app/about/page.tsx`

Target: 50–60 chars for titles, 140–160 chars for descriptions.

- [ ] **Step 1: Fix web-design-johannesburg metadata**

  In `app/services/web-design-johannesburg/page.tsx`:
  ```tsx
  // Before
  title: 'Web Design JHB | Next.js Experts',
  description:
    'Professional web design in Johannesburg. Custom Next.js websites for startups. SEO-optimized. From R3,500.',
  // After
  title: 'Web Design Johannesburg | Custom Next.js Websites',
  description:
    'Professional web design in Johannesburg by Next.js specialists. Custom, SEO-optimized websites for startups and SMEs. Projects from R3,500. Free quote available.',
  ```

  Also update the OpenGraph title to match:
  ```tsx
  // Before (openGraph title)
  title: 'Web Design JHB | Next.js Experts',
  // After
  title: 'Web Design Johannesburg | Custom Next.js Websites | Nostalgic Studio',
  ```

- [ ] **Step 2: Fix Next.js SEO blog article metadata**

  In `app/blog/what-is-nextjs-seo-2026/page.tsx`:
  ```tsx
  // Before
  title: 'Next.js Best for SEO 2026',
  description:
    'Why Next.js outranks WordPress on Google. SSR, SSG, Core Web Vitals explained for SA businesses.',
  // After
  title: 'Why Next.js Is the Best Framework for SEO in 2026',
  description:
    'Next.js outperforms WordPress on Google with Server-Side Rendering, Static Site Generation, and superior Core Web Vitals scores. A guide for South African businesses.',
  ```

  Update OpenGraph title:
  ```tsx
  // Before
  title: 'Next.js Best for SEO 2026',
  // After
  title: 'Why Next.js Is the Best Framework for SEO in 2026 | Nostalgic Studio',
  ```

- [ ] **Step 3: Fix SEO services metadata**

  In `app/services/seo-services-johannesburg/page.tsx`:
  ```tsx
  // Before
  title: 'SEO Services Johannesburg',
  description:
    'SEO agency in Johannesburg. Technical SEO, local SEO & content strategy for SA businesses. Free audit.',
  // After
  title: 'SEO Services Johannesburg | Technical & Local SEO',
  description:
    'Expert SEO services in Johannesburg — technical SEO, local SEO, and content strategy for South African startups and SMEs. Free SEO audit. Plans from R1,500/month.',
  ```

- [ ] **Step 4: Fix About page metadata**

  In `app/about/page.tsx`:
  ```tsx
  // Before
  title: 'About | Digital Agency Johannesburg',
  description:
    'Founded in 2016, Nostalgic Studio is a Johannesburg digital agency building Next.js websites for startups.',
  // After
  title: 'About Nostalgic Studio | Web Design Agency Johannesburg',
  description:
    'Nostalgic Studio is a Johannesburg web design agency founded in 2016 by Mpho Moipolai. We build fast Next.js websites and brand identities for startups across South Africa.',
  ```

  Update OpenGraph:
  ```tsx
  // Before
  openGraph: {
    title: 'About | Digital Agency Johannesburg',
    description:
      'Founded in 2016, Nostalgic Studio builds Next.js websites for startups in Johannesburg.',
  // After
  openGraph: {
    title: 'About Nostalgic Studio | Web Design Agency Johannesburg',
    description:
      'Founded in 2016 by Mpho Moipolai, Nostalgic Studio builds fast Next.js websites and brand identities for startups across South Africa.',
  ```

- [ ] **Step 5: Verify build**

  Run: `npx tsc --noEmit`
  Expected: clean

- [ ] **Step 6: Commit**

  ```bash
  git add app/services/web-design-johannesburg/page.tsx app/blog/what-is-nextjs-seo-2026/page.tsx app/services/seo-services-johannesburg/page.tsx app/about/page.tsx
  git commit -m "seo: improve meta titles to 50-60 chars and descriptions to 140-160 chars"
  ```

---

## Task 5: Fix Schema Factory Functions

**Files:**
- Modify: `app/structured-data/schemas.ts`

- [ ] **Step 1: Add `isPartOf` to `webPageSchema` and fix `articleSchema` logo**

  In `app/structured-data/schemas.ts`, replace the `webPageSchema` function:
  ```typescript
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
      dateModified: opts.dateModified ?? new Date().toISOString().split('T')[0],
    }
  }
  ```

  Replace the `articleSchema` publisher logo section (lines 125-130):
  ```typescript
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
  ```

- [ ] **Step 2: Verify build**

  Run: `npx tsc --noEmit`
  Expected: clean

- [ ] **Step 3: Commit**

  ```bash
  git add app/structured-data/schemas.ts
  git commit -m "fix: add isPartOf to webPageSchema, add logo dimensions to articleSchema"
  ```

---

## Task 6: Fix Home Page Schema (WebSite + FAQPage)

**Files:**
- Modify: `app/page.tsx`

Two issues: (1) `potentialAction` points to a non-existent search endpoint; (2) no `FAQPage` schema despite 5 visible FAQs.

- [ ] **Step 1: Fix WebSite schema and add FAQPage**

  In `app/page.tsx`, first add the import at the top:
  ```tsx
  import { faqPageSchema } from '@/app/structured-data/schemas'
  ```

  Replace the `homepageSchema` object (lines 69–91) and add FAQ schema rendering:
  ```tsx
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.nostalgic-studio.co.za/#website',
    inLanguage: 'en-ZA',
    name: 'Nostalgic Studio',
    url: 'https://www.nostalgic-studio.co.za',
    description:
      'Top-rated web design agency in Johannesburg offering Next.js development, UI/UX, and branding services.',
    publisher: {
      '@id': 'https://www.nostalgic-studio.co.za/#organization',
    },
  }

  const faqSchema = faqPageSchema(faqs)
  ```

  In the JSX return, add the `faqSchema` script alongside the existing one:
  ```tsx
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      ...
  ```

- [ ] **Step 2: Verify build**

  Run: `npx tsc --noEmit`
  Expected: clean

- [ ] **Step 3: Commit**

  ```bash
  git add app/page.tsx
  git commit -m "fix: remove invalid WebSite potentialAction, add FAQPage schema to home page"
  ```

---

## Task 7: Add Missing Schemas to About & Contact Pages

**Files:**
- Modify: `app/about/page.tsx`
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Add breadcrumb to About page**

  In `app/about/page.tsx`, update imports to include `breadcrumbSchema`:
  ```tsx
  import { webPageSchema, orgRef, breadcrumbSchema } from '@/app/structured-data/schemas'
  ```

  Add to the `schemas` array:
  ```tsx
  const schemas = [
    webPageSchema({
      url: '/about',
      name: 'About Nostalgic Studio | Johannesburg Digital Agency',
      description: 'Nostalgic Studio is a Johannesburg digital design agency founded in 2016 by Mpho Moipolai. We blend timeless design with modern Next.js innovation.',
    }),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      // ... existing Person schema
    }
  ]
  ```

- [ ] **Step 2: Add breadcrumb + ContactPage schema to Contact page**

  In `app/contact/page.tsx`, add schema rendering. First add the import:
  ```tsx
  import Script from 'next/script'
  import { breadcrumbSchema } from '@/app/structured-data/schemas'
  ```

  Add a `ContactPage` export function with schemas before the existing metadata:
  ```tsx
  export default function ContactPage() {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': 'https://www.nostalgic-studio.co.za/contact',
        url: 'https://www.nostalgic-studio.co.za/contact',
        name: 'Contact Nostalgic Studio | Get a Free Quote',
        description: 'Contact Nostalgic Studio for a free consultation on web design, SEO, and branding services. Based in Johannesburg, South Africa.',
        isPartOf: { '@id': 'https://www.nostalgic-studio.co.za/#website' },
        publisher: { '@id': 'https://www.nostalgic-studio.co.za/#organization' },
      },
      breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]),
    ]
  ```

  Note: The contact page already has a `ContactForm` and `ContactInfo` import. Wrap the return with schema scripts:
  ```tsx
  return (
    <>
      {schemas.map((s, i) => (
        <Script key={i} id={`schema-contact-${i}`} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <main className="pt-32 pb-20">
        <div className="container-wide mx-auto px-4">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </>
  )
  ```

  > **Note:** Read the full contact page first to see the existing JSX structure before making this change, to avoid wrapping issues.

- [ ] **Step 3: Verify build**

  Run: `npx tsc --noEmit`
  Expected: clean

- [ ] **Step 4: Commit**

  ```bash
  git add app/about/page.tsx app/contact/page.tsx
  git commit -m "feat: add BreadcrumbList schema to about page, add ContactPage + BreadcrumbList to contact page"
  ```

---

## Task 8: Clean Up robots.txt

**Files:**
- Modify: `public/robots.txt`

The `IndexNow:` directive on line 48 is not part of the robots.txt specification. No crawler reads it from robots.txt. The IndexNow verification file already exists at `public/6017f70986854a2c82e65c1c7263a178.txt`.

- [ ] **Step 1: Remove non-standard IndexNow directive**

  In `public/robots.txt`, remove line 48:
  ```
  # Before (remove this line entirely)
  IndexNow: https://www.bing.com/indexnow?url=https://www.nostalgic-studio.co.za&key=6017f70986854a2c82e65c1c7263a178
  ```

  The `Sitemap:` directive on line 47 should stay.

- [ ] **Step 2: Commit**

  ```bash
  git add public/robots.txt
  git commit -m "fix: remove non-standard IndexNow directive from robots.txt"
  ```

---

## Task 9: Standardize JSON-LD Script Tags in Blog Articles

**Files:**
- Modify: `app/blog/what-is-nextjs-seo-2026/page.tsx`
- Check and fix remaining blog pages if they use the same pattern

Blog article pages use native `<script>` (lowercase) for JSON-LD while service pages use `<Script>` from `next/script`. The native `<script>` in the component body causes React hydration warnings in development and can double-render in client navigations.

- [ ] **Step 1: Update what-is-nextjs-seo-2026 to use Script**

  In `app/blog/what-is-nextjs-seo-2026/page.tsx`, add the import:
  ```tsx
  import Script from 'next/script'
  ```

  Replace both `<script>` tags (lines 63–71):
  ```tsx
  // Before
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
  />
  // After
  <Script id="schema-article" type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
  <Script id="schema-breadcrumb" type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
  />
  ```

- [ ] **Step 2: Check and fix remaining blog pages**

  Run: `grep -rn "<script" /Users/mphomoipolai/Documents/development/personal/nostalgicstudio/app/blog/`

  Apply the same `<script>` → `<Script id="...">` pattern to any other blog page files found.

- [ ] **Step 3: Verify build**

  Run: `npx tsc --noEmit`
  Expected: clean

- [ ] **Step 4: Commit**

  ```bash
  git add app/blog/
  git commit -m "fix: replace native script tags with next/script Script component in blog articles"
  ```

---

## Remaining Recommendations (Not Implemented Here)

These require content creation or business decisions and should be addressed as separate work:

### 1. LinkedIn Profile URL
The Person schema `sameAs` uses `https://www.linkedin.com/private/moipolai-mpho-110356396/` — the `/private/` path is not a public LinkedIn profile URL. Google cannot validate this sameAs connection. Replace with the actual public LinkedIn profile URL (`https://www.linkedin.com/in/[username]/`).

### 2. Content Gap: Location-Specific Service Pages
Target pages missing:
- `/services/web-design-pretoria` — "web design Pretoria" (est. 1,600/mo searches)
- `/services/web-design-sandton` — "web design Sandton" (est. 880/mo)
- `/services/web-design-midrand` — "web design Midrand" (est. 590/mo)

Each should reuse the service page structure from `web-design-johannesburg` with location-specific content.

### 3. Review / AggregateRating Schema
The testimonials on the home and service pages are not marked up with `Review` + `AggregateRating` schema. Adding this could unlock star rating rich results. Requires collecting real, verified ratings with reviewer names and dates.

### 4. Unique OG Images Per Service
All service pages share the same `og-image.jpg`. Creating unique, service-specific OG images would improve CTR when links are shared on social media.

### 5. `HowTo` Schema for Blog Articles
Blog posts that explain processes (e.g., "How to Choose a Web Design Company") should use `HowTo` schema for Google rich results. Requires adding structured steps to the article content.

### 6. Google Business Profile
Not a code change — claim, verify, and fully complete the Google Business Profile for "Nostalgic Studio Johannesburg" with photos, services, hours, and categories. This is the single highest-impact local SEO action.

---

## Estimated SEO Impact

| Task | Impact |
|------|--------|
| Task 1 (lang + dates + prices) | High — eliminates E-E-A-T damage from inconsistent business data |
| Task 2 (Person jobTitle) | Medium — schema entity consistency improves AI citation accuracy |
| Task 3 (markdown fix) | High — visible broken content on two primary service pages |
| Task 4 (titles/descriptions) | High — direct CTR improvement on 4 high-traffic pages |
| Task 5 (schema factories) | Medium — strengthens schema graph linkage, improves Google's entity understanding |
| Task 6 (home FAQ schema) | High — enables FAQ rich result on homepage for priority keywords |
| Task 7 (about/contact schemas) | Medium — completes schema coverage across all core pages |
| Task 8 (robots.txt) | Low — cleanup only |
| Task 9 (Script tags) | Low — hydration consistency |

---

## Files Modified

| File | Tasks |
|------|-------|
| `app/layout.tsx` | 1, 2 |
| `app/about/page.tsx` | 2, 4, 7 |
| `app/page.tsx` | 6 |
| `app/contact/page.tsx` | 7 |
| `app/services/web-design-johannesburg/page.tsx` | 3, 4 |
| `app/services/seo-services-johannesburg/page.tsx` | 3, 4 |
| `app/blog/what-is-nextjs-seo-2026/page.tsx` | 4, 9 |
| `app/structured-data/schemas.ts` | 5 |
| `public/robots.txt` | 8 |
| `app/blog/*.tsx` (other articles) | 9 |

## Files Created

None — all changes are modifications to existing files.

## Risk Assessment

All changes are safe to deploy:
- No route changes, no component restructuring
- Schema changes are additive (adding properties) or corrections (fixing wrong values)
- Meta tag changes do not affect component rendering
- robots.txt change is a removal of a non-functional directive
- `data-scroll-behavior` attribute is preserved (CSS `scroll-behavior: smooth` would require a globals.css edit — left as-is)
