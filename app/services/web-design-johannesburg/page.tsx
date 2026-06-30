import type { Metadata } from 'next'

export const dynamic = 'force-static'
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Globe,
  Layout,
  Search,
  Zap,
  MapPin,
  Clock,
  Award,
  Users,
} from 'lucide-react'
import AuthorBio from '@/components/geo/AuthorBio'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import lazyLoad from 'next/dynamic'
const MotionWrapper = lazyLoad(
  () => import('@/components/layout/MotionWrapper'),
)
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'
import { serviceSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'Web Design Johannesburg | From R3,500',
  description:
    'Need web design in Johannesburg? Nostalgic Studio builds fast, mobile-friendly, SEO-ready websites for small businesses, startups, and service companies.',
  keywords: [
    'Web Design Johannesburg',
    'Website Design Johannesburg',
    'Web Developers Johannesburg',
    'Digital Agency Johannesburg',
    'Custom Web Design South Africa',
    'Next.js Development Johannesburg',
    'SEO Website Design',
    'Affordable Web Design Johannesburg',
    'Responsive Web Design South Africa',
    'Website Design Cost South Africa',
    'Web Design Agency Sandton',
    'Best Web Design Agency Johannesburg',
  ],
  alternates: {
    canonical:
      'https://www.nostalgic-studio.co.za/services/web-design-johannesburg',
    languages: {
      'en-ZA':
        'https://www.nostalgic-studio.co.za/services/web-design-johannesburg',
      'x-default':
        'https://www.nostalgic-studio.co.za/services/web-design-johannesburg',
    },
  },
  openGraph: {
    title: 'Web Design Johannesburg | From R3,500',
    description:
      'Need web design in Johannesburg? Nostalgic Studio builds fast, mobile-friendly, SEO-ready websites for small businesses, startups, and service companies.',
    url: 'https://www.nostalgic-studio.co.za/services/web-design-johannesburg',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [
      {
        url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design Johannesburg — Nostalgic Studio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Web Design Johannesburg | From R3,500',
    description:
      'Need web design in Johannesburg? Nostalgic Studio builds fast, mobile-friendly, SEO-ready websites for small businesses, startups, and service companies.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

const webDesignSchemas = [
  serviceSchema({
    id: 'web-design-johannesburg',
    name: 'Web Design Johannesburg',
    description:
      'Performance-first web design and development in Johannesburg, South Africa. Custom Next.js websites built for speed, SEO, and high conversion rates. 5-star Google rated.',
    url: '/services/web-design-johannesburg',
    areaServed: 'Johannesburg, South Africa',
    priceRange: 'R8000-R50000',
    deliveryTime: '4-8 weeks',
  }),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    {
      name: 'Web Design Johannesburg',
      url: '/services/web-design-johannesburg',
    },
  ]),
]

const webDesignFaqs = [
  {
    question: 'How much does web design cost in Johannesburg in 2026?',
    answer:
      'Professional web design in Johannesburg ranges from R3,500 for a basic starter site to R50,000+ for custom e-commerce platforms. A custom Next.js business website typically costs R15,000–R35,000 and includes SEO, mobile responsiveness, and performance optimization. Get a free quote.',
  },
  {
    question: 'Which web design agency is best in Johannesburg?',
    answer:
      'The best web design agency in Johannesburg depends on your needs. Nostalgic Studio is a 5-star Google rated agency specializing in high-performance Next.js websites for startups. We combine 13+ years of experience with modern technology to deliver sites that load fast and convert visitors. See our portfolio.',
  },
  {
    question: 'How long does it take to build a website in Johannesburg?',
    answer:
      'Most professional websites take 4–8 weeks from strategy to launch. Simple brochure sites can be ready in 2–3 weeks, while complex e-commerce platforms may take 8–12 weeks. The timeline depends on content readiness, design complexity, and how quickly feedback is provided.',
  },
  {
    question:
      'What is the difference between Next.js and WordPress for web design?',
    answer:
      'Next.js websites typically score 90–100 on Google Lighthouse compared to 40–70 for WordPress. This means faster load times, better SEO rankings, and higher conversion rates. Next.js also has no plugin vulnerabilities. However, WordPress is easier for non-technical users to manage content independently.',
  },
  {
    question:
      'Do small businesses in Johannesburg really need a custom website?',
    answer:
      'Yes. A custom website built for performance gives Johannesburg small businesses a competitive advantage. With 60%+ of South African web traffic coming from mobile devices, a fast, mobile-optimized site directly impacts how many visitors become paying customers. Template sites rarely deliver this.',
  },
  {
    question: 'Can you redesign my existing WordPress website?',
    answer:
      'Yes. We can either improve your current WordPress website or rebuild it into a faster, more SEO-focused website. If your current site is slow, outdated, or not bringing enquiries, we start with a website audit and recommend the most practical option for your budget.',
  },
  {
    question: 'Do you offer affordable website design in Johannesburg?',
    answer:
      'Yes. Our starter websites are designed for small businesses that need a professional online presence without overspending. The goal is to give you the essentials first: clear pages, mobile-friendly design, contact form, basic SEO, and analytics.',
  },
]

const pricingPackages = [
  {
    name: 'Starter',
    price: 'R3,500',
    desc: 'A professional 5-page website for startups and freelancers who need a credible online presence fast.',
    features: [
      '5 custom pages',
      'Mobile-responsive design',
      'Contact form',
      'Basic SEO setup',
      'Social media links',
      'Google Maps integration',
      '1 month hosting',
    ],
  },
  {
    name: 'Business',
    price: 'R15,000',
    desc: 'A custom Next.js website for growing businesses that need speed, SEO, and a strong brand presence.',
    features: [
      'Up to 10 custom pages',
      'Next.js framework (90+ Lighthouse)',
      'Advanced SEO optimization',
      'Blog setup',
      'Analytics integration',
      'Custom UI/UX design',
      '3 months hosting',
    ],
    popular: true,
  },
  {
    name: 'E-Commerce',
    price: 'R25,000',
    desc: 'A high-performance online store built to sell, scale, and convert on South African networks.',
    features: [
      'Unlimited products',
      'Payment gateway integration',
      'Shopping cart & checkout',
      'Inventory management',
      'SEO-optimized product pages',
      'Mobile-first design',
      '6 months hosting',
    ],
  },
]

const projects = [
  {
    name: 'Sozim Trading',
    desc: 'Corporate website redesign for a Johannesburg consultancy. 95 Lighthouse score.',
    href: '/projects',
  },
  {
    name: 'Didee Holdings',
    desc: 'Construction company site built in 2 weeks. Indexed for 12+ local search terms.',
    href: '/projects',
  },
  {
    name: 'Jiyology',
    desc: 'Service business website. Contact form generates weekly enquiries from Joburg homeowners.',
    href: '/projects',
  },
]

export default function WebDesignJohannesburg() {
  return (
    <main className="pt-32 pb-20">
      {webDesignSchemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          {/* TL;DR Box — appears at the very top */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                TL;DR
              </p>
              <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
                Nostalgic Studio builds custom websites for Johannesburg
                startups using Next.js — scoring 90–100 on Google Lighthouse
                compared to 40–70 for typical WordPress sites. Rated 5 stars on
                Google with 70+ projects delivered since 2016. Starter sites
                from R3,500; most business projects cost R15,000–R35,000.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web Design <span className="text-gradient">Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              <strong>
                Performance-first websites for Johannesburg businesses that need
                more enquiries from Google, social media, and referrals. We
                build fast, mobile-friendly websites with clear service pages,
                local SEO foundations, and conversion-focused design.
              </strong>
              .
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" /> 5.0
              Google Rating
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" /> 70+ Projects Delivered
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" /> 50+ Happy Clients
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> 13+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Based in Johannesburg
            </span>
          </div>

          <AboutThisPage
            summary="Nostalgic Studio provides professional web design services in Johannesburg, South Africa. We specialise in fast, SEO-optimised Next.js websites for startups and growing businesses. Rated 5 stars on Google. Projects typically cost R3,500–R50,000 and take 4–8 weeks."
            covers={[
              'Web Design Johannesburg',
              'Website Design Cost',
              'Next.js Performance',
              'SEO Optimisation',
              'Startup Websites South Africa',
            ]}
            lastUpdated="June 2026"
          />

          {/* Answer Capsule 1 — Real searcher question as H2 */}
          <section className="mb-16" aria-labelledby="capsule-1">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2
                id="capsule-1"
                className="text-2xl md:text-3xl font-bold mb-4"
              >
                How Much Does Web Design Cost in Johannesburg in 2026?
              </h2>
              <p className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
                Professional web design in Johannesburg ranges from R3,500 for a
                basic starter site to R50,000+ for custom e-commerce platforms.
                Most small business websites cost R3,500–R15,000.
              </p>
              <p className="text-muted-foreground mb-6">
                Price depends on pages, features, and whether you need a custom
                design or a templated build. A custom Next.js website with SEO,
                mobile responsiveness, and performance optimization typically
                costs R15,000–R35,000. You are paying for more than just design
                — you are paying for a site that loads fast and generates leads.
              </p>
              <p className="text-muted-foreground">
                Very cheap websites can work for a simple online presence, but
                they often leave out important growth features such as proper
                page structure, SEO metadata, analytics, fast loading, clear
                calls-to-action, and conversion tracking. For a business that
                wants enquiries from Google, the website should be built as a
                lead-generation asset, not only as a digital brochure.
              </p>
            </div>
          </section>

          {/* Pricing Table */}
          <section className="mb-16" aria-labelledby="pricing-heading">
            <h2
              id="pricing-heading"
              className="text-3xl font-bold mb-10 text-center"
            >
              Web Design Packages for Johannesburg Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`bg-card border rounded-3xl p-8 flex flex-col ${pkg.popular ? 'border-primary ring-1 ring-primary' : 'border-border'}`}
                >
                  {pkg.popular ? (
                    <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {pkg.price}
                    <span className="text-sm font-normal text-muted-foreground">
                      {' '}
                      once-off
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {pkg.desc}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full"
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Website Design for Businesses That Need Leads */}
          <section className="mb-16" aria-labelledby="leads-heading">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2 id="leads-heading" className="text-2xl font-bold mb-4">
                Website Design for Businesses That Need Leads
              </h2>
              <p className="text-muted-foreground mb-6">
                A good website should do more than look professional. It should
                explain what you do, show why people should trust you, and make
                it easy for visitors to take action.
              </p>
              <p className="text-muted-foreground mb-6">
                For service businesses, we focus on:
              </p>
              <ul className="grid gap-3 text-muted-foreground list-disc list-inside marker:text-primary">
                <li>Clear service pages for each main offer</li>
                <li>
                  Strong calls-to-action such as call, WhatsApp, and quote
                  request
                </li>
                <li>
                  Local SEO structure for Johannesburg and surrounding areas
                </li>
                <li>Fast loading on mobile devices</li>
                <li>
                  Trust signals such as reviews, projects, client logos, and
                  case studies
                </li>
                <li>Analytics setup so you can track enquiries</li>
              </ul>
            </div>
          </section>

          <KeyTakeaways
            takeaways={[
              {
                point: 'Rated 5 stars on Google',
                detail: 'with real client reviews from Johannesburg businesses',
              },
              {
                point: 'Next.js specialists',
                detail:
                  'delivering 90–100 Lighthouse scores vs 40–70 for WordPress',
              },
              {
                point: 'Projects from R3,500',
                detail: 'with transparent, once-off pricing — no hidden fees',
              },
              {
                point: '4–8 week delivery',
                detail: 'from strategy and design through to live launch',
              },
              {
                point: 'Founder-managed',
                detail:
                  'Mpho Moipolai oversees every project personally since 2016',
              },
            ]}
          />
        </MotionWrapper>

        {/* Answer Capsule 2 */}
        <section className="mb-16" aria-labelledby="capsule-2">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="capsule-2" className="text-2xl md:text-3xl font-bold mb-4">
              Is a Slow Website Costing You Customers in Johannesburg?
            </h2>
            <p className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
              Yes. A website that takes more than 3 seconds to load loses over
              50% of mobile visitors — and in Johannesburg, most of your traffic
              comes from mobile devices on South African networks.
            </p>
            <p className="text-muted-foreground mb-6">
              Google research shows that 53% of mobile users leave a page that
              takes longer than 3 seconds to load. In South Africa, where 60%+ of web
              traffic is mobile and data costs are high, this problem is
              amplified. A slow WordPress site on cheap hosting is actively
              damaging your business.
            </p>
            <p className="text-muted-foreground">
              This is why Nostalgic Studio builds every site on Next.js. The
              result: sub-1.5-second load times, 90–100 Lighthouse scores, and a
              site that Johannesburg customers actually stay on. We have seen
              businesses double their conversion rate after migrating from a
              slow template site to a custom Next.js build.
            </p>
          </div>
        </section>

        {/* Comparison Table — Next.js vs WordPress */}
        <section className="mb-24" aria-labelledby="comparison-heading">
          <h2
            id="comparison-heading"
            className="text-3xl font-bold mb-10 text-center"
          >
            Next.js vs WordPress: Which Is Better for Your Johannesburg
            Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 text-center">
            WordPress can work well when it is built properly, kept lean, and
            maintained. The problem is that many small business WordPress sites
            become slow because of heavy themes, too many plugins, poor hosting,
            and weak SEO setup.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 text-center">
            For clients who want maximum performance, we often recommend
            Next.js. For clients who prefer easy content editing, we can also
            recommend a lean WordPress setup or a hybrid approach.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">
                    Next.js (Nostalgic Studio)
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                    WordPress (Typical Agency)
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Google Lighthouse Score</td>
                  <td className="py-3 px-4 text-center font-medium text-foreground">
                    90–100
                  </td>
                  <td className="py-3 px-4 text-center">40–70</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Page Load Time (SA mobile)</td>
                  <td className="py-3 px-4 text-center font-medium text-foreground">
                    Under 1.5s
                  </td>
                  <td className="py-3 px-4 text-center">3–6s</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Plugin Security</td>
                  <td className="py-3 px-4 text-center font-medium text-foreground">
                    No plugins — zero exploit risk
                  </td>
                  <td className="py-3 px-4 text-center">
                    Frequent plugin vulnerabilities
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">SEO (server-side rendering)</td>
                  <td className="py-3 px-4 text-center font-medium text-foreground">
                    Built-in SSR — Google reads instantly
                  </td>
                  <td className="py-3 px-4 text-center">
                    Requires plugins + caching setup
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">AI Search / GEO Ready</td>
                  <td className="py-3 px-4 text-center font-medium text-foreground">
                    Optimised for LLM citation
                  </td>
                  <td className="py-3 px-4 text-center">
                    Requires additional configuration
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Ease of content editing</td>
                  <td className="py-3 px-4 text-center">
                    Requires developer for major changes
                  </td>
                  <td className="py-3 px-4 text-center font-medium text-foreground">
                    User-friendly CMS dashboard
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Monthly maintenance</td>
                  <td className="py-3 px-4 text-center font-medium text-foreground">
                    R500–R1,500/month
                  </td>
                  <td className="py-3 px-4 text-center">R1,000–R3,000/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Answer Capsule 3 — with Review */}
        <section className="mb-16" aria-labelledby="capsule-3">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="capsule-3" className="text-2xl md:text-3xl font-bold mb-4">
              What Does a Professional Website Design Process Look Like?
            </h2>
            <p className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
              A professional web design project follows five phases: discovery,
              structure, design, development, and launch. Each phase has clear
              deliverables so there are no surprises.
            </p>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {[
                {
                  step: '1',
                  title: 'Discovery',
                  desc: 'We learn your business, audience, and goals in a 30-minute call.',
                },
                {
                  step: '2',
                  title: 'Structure',
                  desc: 'We map out sitemap, wireframes, and user flow.',
                },
                {
                  step: '3',
                  title: 'Design',
                  desc: 'We design a custom interface that reflects your brand.',
                },
                {
                  step: '4',
                  title: 'Build',
                  desc: 'We develop on Next.js with SEO and speed baked in.',
                },
                {
                  step: '5',
                  title: 'Launch',
                  desc: 'We test, go live, and hand over with training.',
                },
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-2">
                    {phase.step}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{phase.title}</h4>
                  <p className="text-xs text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>

            {/* Google Review */}
            <div className="bg-background border border-border rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
                <span className="text-sm font-medium ml-2">Google Review</span>
              </div>
              <p className="italic text-foreground mb-3">
                &ldquo;Nostalgic Studio has handled my social media, marketing
                material and web design needs, and I have always received
                excellent service. They are professional, creative, responsive,
                and genuinely care about delivering quality work. I highly
                recommend them.&rdquo;
              </p>
              <p className="text-sm font-semibold">— Tanosa Group</p>
            </div>
          </div>
        </section>

        {/* Recent Work / Portfolio */}
        <section className="mb-16" aria-labelledby="work-heading">
          <h2
            id="work-heading"
            className="text-3xl font-bold mb-10 text-center"
          >
            Recent Web Design Projects in Johannesburg
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
              >
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <span className="text-sm font-medium text-primary">
                  View project →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button asChild variant="outline">
              <Link href="/projects">
                View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        <MotionWrapper>
          {/* Answer Capsule 4 */}
          <section className="mb-16" aria-labelledby="capsule-4">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2
                id="capsule-4"
                className="text-2xl md:text-3xl font-bold mb-4"
              >
                Should You Choose a Local Johannesburg Web Design Agency?
              </h2>
              <p className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
                Yes. A Johannesburg-based agency understands the local market,
                South African consumer behaviour, and what it takes to rank in
                Gauteng search results.
              </p>
              <p className="text-muted-foreground mb-6">
                Local agencies build with South African hosting, optimise for
                local networks, and know which payment gateways Johannesburg
                businesses actually need (PayFast, Yoco, Ozow). They also
                understand the competitive landscape — from which suburbs to
                target (Sandton, Randburg, Fourways, Midrand, Rosebank) to how
                local search intent differs from international markets.
              </p>
              <p className="text-muted-foreground">
                Nostalgic Studio is based in Johannesburg, serves clients across
                Gauteng, and has delivered 70+ projects for South African
                businesses since 2016. Every site is built locally, hosted on
                local infrastructure, and optimised for the Johannesburg market.
              </p>
            </div>
          </section>

          {/* Answer Capsule 5 */}
          <section className="mb-16" aria-labelledby="capsule-5">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2
                id="capsule-5"
                className="text-2xl md:text-3xl font-bold mb-4"
              >
                Why Does Nostalgic Studio Use Next.js Instead of WordPress?
              </h2>
              <p className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
                Next.js delivers 90–100 Google Lighthouse scores out of the box
                — nearly double what typical WordPress sites achieve. For
                Johannesburg businesses, this directly translates to more
                customers.
              </p>
              <p className="text-muted-foreground mb-6">
                Google uses Lighthouse scores as a ranking signal. A higher
                score means better visibility on Google. More importantly,
                faster load times mean lower bounce rates — especially on mobile
                devices using South African networks. A Next.js site loads in
                under 1.5 seconds on 3G; an equivalent WordPress site often
                takes 4–6 seconds on the same connection.
              </p>
              <p className="text-muted-foreground">
                The trade-off is content editing. WordPress has an easier CMS
                for non-technical teams. For clients who need that, we build
                hybrid setups — Next.js front-end with a headless CMS for
                content management. This gives you the best of both worlds: 90+
                Lighthouse scores with easy content updates.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mb-16">
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">
                Get a Free Quote <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>

          {/* Answer Capsule 6 */}
          <section className="mb-16" aria-labelledby="capsule-6">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <h2
                id="capsule-6"
                className="text-2xl md:text-3xl font-bold mb-4"
              >
                How Is AI Search Changing Web Design in Johannesburg?
              </h2>
              <p className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
                AI search engines like ChatGPT, Gemini, and Perplexity now
                answer over 40% of local search queries directly. Websites not
                optimised for AI citation are losing visibility, not just
                rankings.
              </p>
              <p className="text-muted-foreground mb-6">
                Generative Engine Optimization (GEO) is the practice of
                structuring your content so AI engines cite it as a trusted
                source. This means clear, quotable answer capsules under
                question-form headings — exactly what this page is built on.
                Every site we build includes structured data, conversational FAQ
                formats, and authoritative content that AI systems can parse and
                cite.
              </p>
              <p className="text-muted-foreground">
                Johannesburg businesses that invest in GEO today gain a
                significant advantage. Most local competitors are still
                optimizing only for Google blue-link rankings, missing the
                fastest-growing discovery channel.
              </p>
            </div>
          </section>

          <FaqSection faqs={webDesignFaqs} />

          {/* Why Choose Us Grid */}
          <section className="mb-24" aria-labelledby="why-heading">
            <h2
              id="why-heading"
              className="text-3xl font-bold mb-10 text-center"
            >
              Why Johannesburg Startups Choose Nostalgic Studio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold text-lg mb-2">5-Star Google Rated</h4>
                <p className="text-muted-foreground">
                  Every client rates us 5/5. Read our reviews from Johannesburg
                  businesses on Google.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold text-lg mb-2">
                  90–100 Lighthouse Scores
                </h4>
                <p className="text-muted-foreground">
                  Every site scores 90+ on Google Lighthouse — nearly double the
                  typical WordPress score.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold text-lg mb-2">
                  13+ Years, 70+ Projects
                </h4>
                <p className="text-muted-foreground">
                  Founded in 2016 by Mpho Moipolai. We have delivered 70+
                  projects across Johannesburg.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold text-lg mb-2">SEO & GEO Built In</h4>
                <p className="text-muted-foreground">
                  Every website is optimised for Google rankings and AI search
                  engine citation from launch.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold text-lg mb-2">Founder-Managed</h4>
                <p className="text-muted-foreground">
                  Mpho personally oversees every project. You will never get
                  handed off to a junior.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold text-lg mb-2">
                  Local Market Expertise
                </h4>
                <p className="text-muted-foreground">
                  We understand Johannesburg — from Sandton to Soweto. Built for
                  SA networks and payment systems.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Web Design Guides & Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/web-design-cost-south-africa-2026-guide"
                className="bg-card p-5 rounded-2xl border border-border hover:border-primary/50 transition-colors"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                  Pricing
                </p>
                <h3 className="font-bold mb-1">
                  Web Design Cost South Africa 2026
                </h3>
                <p className="text-sm text-muted-foreground">
                  Full pricing breakdown from R3,500 to R50,000+.
                </p>
              </Link>
              <Link
                href="/blog/small-business-website-guide-johannesburg"
                className="bg-card p-5 rounded-2xl border border-border hover:border-primary/50 transition-colors"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                  Guide
                </p>
                <h3 className="font-bold mb-1">
                  Small Business Website Guide Johannesburg
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get found online and generate leads without overspending.
                </p>
              </Link>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16" aria-labelledby="related-heading">
            <h2
              id="related-heading"
              className="text-2xl font-bold mb-6 text-center"
            >
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/services/seo-services-johannesburg"
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
              >
                <Search className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-bold mb-1">SEO & AI Search Visibility</h3>
                <p className="text-sm text-muted-foreground">
                  Get found on Google and AI answer engines with SEO and GEO
                  strategies for Johannesburg.
                </p>
              </Link>
              <Link
                href="/services/ux-ui-design"
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
              >
                <Layout className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-bold mb-1">UX/UI Design</h3>
                <p className="text-sm text-muted-foreground">
                  User-centred design that turns Johannesburg visitors into
                  loyal customers.
                </p>
              </Link>
              <Link
                href="/services/nextjs-website-design"
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
              >
                <Zap className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-bold mb-1">Next.js Website Design</h3>
                <p className="text-sm text-muted-foreground">
                  Lightning-fast websites with server-side rendering and 90+
                  Lighthouse scores in SA.
                </p>
              </Link>
            </div>
          </section>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build a Website That Actually Performs?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join 50+ Johannesburg businesses that trust Nostalgic Studio for
              web design that drives results. Free quote, no obligation.
            </p>
            <Button
              asChild
              size="lg"
              variant="heroOutline"
              className="h-14 px-8"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          <div className="mx-auto px-4 max-w-3xl mt-16">
            <AuthorBio />
          </div>
        </MotionWrapper>
      </div>
    </main>
  )
}
