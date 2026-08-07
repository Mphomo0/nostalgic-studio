import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Video, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  serviceSchema,
  breadcrumbSchema,
  faqPageSchema,
} from '@/app/structured-data/schemas'
import { WEBSITE_PRICE_RANGE, formatRand, getPackage } from '@/lib/pricing-data'

export const dynamic = 'force-static'

const TITLE = 'Remote Web Design Across South Africa'
const DESC =
  'Johannesburg studio working remotely with businesses in Cape Town, Durban, Bloemfontein and the rest of South Africa. Same fixed pricing, same local SEO targeting.'
const URL = 'https://www.nostalgic-studio.co.za/locations/south-africa'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: URL,
    languages: { 'en-ZA': URL, 'x-default': URL },
  },
  openGraph: {
    title: `${TITLE} | Nostalgic Studio`,
    description: DESC,
    url: URL,
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Remote Web Design Across South Africa — Nostalgic Studio',
      },
    ],
  },
}

// Regions we serve remotely. These replace the former per-city pages
// (/locations/cape-town, /locations/durban, /locations/bloemfontein), which
// argued for hiring a local agency on pages that also disclosed we are not
// local. One honest page beats three that contradict themselves.
const regions = [
  {
    name: 'Cape Town & the Western Cape',
    areas: 'City Bowl, Century City, Claremont, Bellville, Stellenbosch',
    body: 'South Africa\'s most competitive digital market, with the highest concentration of startups, agencies and design studios in the country. A generic template will be ignored here. We work with Cape Town founders and DTC brands that need a site holding its own against agency-built competitors — and we are candid that a Cape Town studio can meet you for coffee and we cannot.',
  },
  {
    name: 'Durban & KwaZulu-Natal',
    areas: 'Umhlanga, La Lucia, Ballito, Westville, Berea',
    body: 'A port city serving a mix of local customers, international visitors and B2B clients. Tourism and hospitality businesses need booking flows that work on a phone with patchy signal; logistics and manufacturing firms need credible B2B sites. Both depend on fast pages on South African networks.',
  },
  {
    name: 'Bloemfontein & the Free State',
    areas: 'Langenhoven Park, Brandwag, Fichardt Park, Heuwelsig',
    body: 'The judicial capital, where business runs on trust and personal relationships. Legal practices, training providers and agri businesses need sites that read as established and credible rather than clever. We built the Tanosa Group site for a Bloemfontein consultancy on exactly that brief.',
  },
]

const faqs = [
  {
    q: 'You are in Johannesburg — why would I hire you instead of a local agency?',
    a: 'Sometimes you should not. If in-person workshops matter to how you work, hire someone in your city. What we offer is a specific build: custom Next.js sites that load in under two seconds, with SEO and AI-search structure included, at fixed prices from R1,500. If that is what you need and nobody nearby is offering it, distance is not the deciding factor.',
  },
  {
    q: 'How does a remote project actually run?',
    a: 'Over email and video calls. We share designs for review online, you comment directly on them, and we agree the timeline in writing before starting. Most clients never need an in-person meeting. You get the same weekly progress updates as our Gauteng clients.',
  },
  {
    q: 'Will my site still rank for searches in my city?',
    a: 'Yes. Local SEO targeting is based on your business location, not ours. We optimise your Google Business Profile, keep your name, address and phone details consistent across directories, and build content targeting your city and suburbs. Where your web developer sits has no bearing on it.',
  },
  {
    q: 'Is remote work more expensive or slower?',
    a: 'Neither. Pricing is identical to our Gauteng projects — starter sites from R1,500, most business websites R8,000–R15,000, e-commerce R10,000–R25,000+. Timelines are the same too: 1–2 weeks for a starter site, 3–6 weeks for a full business build.',
  },
  {
    q: 'Which parts of South Africa do you work with?',
    a: 'All of it. We are based in Midrand and work in person across Gauteng — Johannesburg, Sandton, Pretoria, Centurion and surrounds. Everywhere else in the country we work remotely, including Cape Town, Durban, Bloemfontein, Gqeberha, East London and Polokwane.',
  },
]

export default function RemoteSouthAfricaPage() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Locations', url: '/locations' },
      { name: 'South Africa', url: '/locations/south-africa' },
    ]),
    serviceSchema({
      id: 'remote-web-design-south-africa',
      name: 'Remote Web Design South Africa',
      description:
        'Remote web design, development and SEO for businesses across South Africa, delivered from Johannesburg. Custom Next.js websites, branding and e-commerce.',
      url: '/locations/south-africa',
      areaServed: 'South Africa',
      priceRange: WEBSITE_PRICE_RANGE,
      deliveryTime: '4-8 weeks',
    }),
    faqPageSchema(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-primary/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
                Working Remotely — Nationwide
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Web Design Across South Africa
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We are a Johannesburg studio. Outside Gauteng we work fully
                remotely — and we would rather say that plainly than pretend to
                a local office we do not have.
              </p>
              <p className="text-sm text-muted-foreground border-l-2 border-primary/40 pl-4 mb-8">
                Same fixed pricing, same timelines, and the same local SEO
                targeting as our Gauteng projects. The only real difference is
                that we are unlikely to meet you in person.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/locations">See Gauteng Locations</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Based in Midrand, Gauteng
                </span>
                <span className="flex items-center gap-2">
                  <Video className="h-4 w-4" /> Remote nationwide
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> From{' '}
                  {formatRand(getPackage('starter-website').min)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Honest case for remote */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              When a Remote Studio Makes Sense — and When It Does Not
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Most web projects do not need anyone in the room. Design review
                happens on a screen either way, content arrives by email either
                way, and the build happens wherever the developer sits. For a
                brochure site, a service-led business website, or an online
                store, being in a different province changes nothing about the
                result.
              </p>
              <p>
                Where it does matter: if you want in-person strategy workshops,
                on-site photography, or someone who can walk into your office
                when something breaks, hire locally. That is a real advantage
                and we are not going to argue you out of it.
              </p>
              <p>
                What being remote does not change is how your site performs in
                your market. Local SEO is driven by your business location, not
                ours — so we still target your city and suburbs, still optimise
                your Google Business Profile, still build on South African
                hosting with the payment gateways your customers use, and still
                tune pages for mobile data.
              </p>
            </div>
          </div>
        </section>

        {/* Regions */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              Regions We Work In Remotely
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We work with businesses anywhere in South Africa. These are the
              markets we see most often outside Gauteng.
            </p>
            <div className="space-y-6">
              {regions.map((r) => (
                <div
                  key={r.name}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold mb-2">{r.name}</h3>
                  <p className="text-sm text-primary mb-4">{r.areas}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case study */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <p className="text-xs text-primary font-semibold tracking-wide uppercase mb-2">
                Remote Project
              </p>
              <h2 className="text-2xl font-bold mb-3">Tanosa Group</h2>
              <p className="text-muted-foreground mb-6">
                A one-week website redesign for a Bloemfontein consulting firm,
                run entirely over email and video calls — delivering a
                professional mobile-first site that loads in under 1.5 seconds.
              </p>
              <Button asChild variant="outline">
                <Link href="/projects/tanosa-group-case-study">
                  Read the Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              What We Build
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Web Design',
                  href: '/services/web-design-johannesburg',
                  desc: 'Custom Next.js websites. 90+ Lighthouse scores, mobile-first, SEO-optimised.',
                },
                {
                  title: 'SEO & AI Search',
                  href: '/services/seo-services-johannesburg',
                  desc: 'Rank on Google and get cited by AI engines, targeted to your city.',
                },
                {
                  title: 'E-commerce',
                  href: '/services/ecommerce-website-development',
                  desc: 'Online stores with SA payment gateways and mobile checkout.',
                },
                {
                  title: 'Branding',
                  href: '/services/branding-design',
                  desc: 'Brand identity, logos, guidelines and marketing collateral.',
                },
                {
                  title: 'UI/UX Design',
                  href: '/services/ux-ui-design',
                  desc: 'Research, wireframing, prototyping and usability testing.',
                },
                {
                  title: 'Social Media',
                  href: '/services/social-media-marketing',
                  desc: 'Instagram, Facebook and LinkedIn management and ad campaigns.',
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group block p-6 border rounded-xl hover:border-primary/50 transition-colors bg-card"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Wherever You Are in South Africa
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free, no-obligation quote. We respond within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="tel:+27824483273">Call 082 448 3273</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
