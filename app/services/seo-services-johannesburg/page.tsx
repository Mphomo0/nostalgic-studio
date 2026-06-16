import type { Metadata } from 'next'

export const dynamic = 'force-static'
import { ArrowRight, CheckCircle2, TrendingUp, Search, Globe, BarChart3, Target, Zap, Clock, Users, Shield, Layers, FileText, Link2, MessageSquare, DollarSign, Star, HelpCircle, Settings, Palette, Megaphone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import lazyLoad from 'next/dynamic'
const MotionWrapper = lazyLoad(() => import('@/components/layout/MotionWrapper'))
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'
import AuthorBio from '@/components/geo/AuthorBio'
import { serviceSchema, breadcrumbSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'SEO & AI Search Visibility Johannesburg',

  description:
    'SEO & AI search visibility services in Johannesburg. Technical SEO, local SEO, content strategy, and AI-ready optimisation. Free audit available.',

  keywords: [
    'SEO Services Johannesburg',
    'Search Engine Optimization Johannesburg',
    'SEO Agency South Africa',
    'Local SEO Johannesburg',
    'Next.js SEO Experts',
    'Google Ranking Services South Africa',
    'Technical SEO Johannesburg',
    'Digital Marketing SEO South Africa',
    'SEO Company Johannesburg',
    'Affordable SEO South Africa',
    'SEO Consultant Johannesburg',
    'SEO Specialist South Africa',
  ],

  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/seo-services-johannesburg',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/services/seo-services-johannesburg',
      'x-default': 'https://www.nostalgic-studio.co.za/services/seo-services-johannesburg',
    },
  },

  openGraph: {
    title: 'SEO & AI Search Visibility Johannesburg | Nostalgic Studio',
    description:
      'SEO & AI search visibility services in Johannesburg. Technical SEO, local SEO, content strategy, and AI-ready optimisation. Free audit available.',
    url: 'https://www.nostalgic-studio.co.za/services/seo-services-johannesburg',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [{
      url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'SEO Services Johannesburg — Nostalgic Studio',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'SEO & AI Search Visibility Johannesburg | Nostalgic Studio',
    description:
      'SEO & AI search visibility services in Johannesburg. Technical SEO, local SEO, content strategy, and AI-ready optimisation. Free audit available.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

const faqs = [
  {
    question: 'What are the benefits of SEO for my Johannesburg business?',
    answer: 'SEO increases your visibility in local search results, driving more organic traffic to your website and helping you reach potential customers in Johannesburg and across South Africa. 75% of users never scroll past the first page of Google results, and 46% of all Google searches have local intent.'
  },
  {
    question: 'How does Next.js improve SEO?',
    answer: 'Next.js provides superior SEO through server-side rendering (SSR) and static site generation (SSG), making it easier for search engine bots to crawl and index your content quickly. Next.js sites typically achieve 90–100 Lighthouse scores compared to 40–70 for WordPress.'
  },
  {
    question: 'How long does SEO take to show results?',
    answer: 'SEO is a long-term strategy. Initial improvements appear in 3–4 months, with significant results typically achieved after 6–12 months of consistent optimization. However, technical SEO fixes can show improvements in 2–4 weeks.'
  },
  {
    question: 'What is local SEO?',
    answer: 'Local SEO optimizes your online presence to attract more customers from local searches. It includes Google Business Profile optimization, local keywords, location-specific content, and local citation building. For Johannesburg businesses, local SEO is critical for appearing in "near me" searches and Google Maps.'
  },
  {
    question: 'How much does SEO cost in South Africa?',
    answer: 'SEO services in South Africa typically range from R3,000–R15,000 per month depending on competitiveness, scope, and goals. Nostalgic Studio offers tailored packages starting from R1,500/month for basic SEO and R5,000–R15,000/month for comprehensive SEO campaigns.'
  },
  {
    question: 'Do you focus on local Johannesburg search?',
    answer: 'Yes, our local SEO strategies are specifically designed to help businesses in Johannesburg, Sandton, Midrand, Pretoria, and surrounding areas rank for location-based search terms. We optimize Google Business Profiles and build local citations specific to Gauteng.'
  },
  {
    question: 'What technical SEO do you offer?',
    answer: 'We offer comprehensive technical SEO including site speed optimization, XML sitemaps, robots.txt configuration, schema markup, canonical tags, Core Web Vitals improvement, mobile responsiveness, and structured data implementation for Next.js websites.'
  },
  {
    question: 'Do you guarantee Google rankings?',
    answer: 'No ethical SEO provider can guarantee specific rankings. We promise transparent reporting, white-hat techniques, and measurable improvements in traffic, keyword rankings, and conversions. We focus on sustainable, long-term SEO strategies.'
  },
  {
    question: 'What is Generative Engine Optimization (GEO)?',
    answer: 'Generative Engine Optimization (GEO) is the practice of optimizing content for AI-powered search engines like ChatGPT, Gemini, Claude, and Perplexity. It involves structuring content with clear definitions, entity signals, data points, and semantic HTML that AI engines can easily parse and cite. When combined with classic SEO, GEO ensures your business is visible in both traditional search results and AI-generated answers.'
  },
  {
    question: 'How is GEO different from traditional SEO?',
    answer: 'Traditional SEO optimizes for search engine result pages (SERPs) with keywords and backlinks. GEO optimizes for AI answer engines by focusing on entity authority, structured data, direct answers, authoritative citations, and content that AI models can confidently reference as source material. They complement each other — classic SEO drives Google traffic, GEO drives AI citation visibility.'
  },
]

const seoSchemas = [
  serviceSchema({
    id: 'seo-services-johannesburg',
    name: 'SEO Services Johannesburg',
    description:
      'Expert search engine optimisation services in Johannesburg, South Africa. Technical SEO, local SEO, keyword research, generative engine optimization, and content strategy for startups and SMEs.',
    url: '/services/seo-services-johannesburg',
    areaServed: 'Johannesburg, South Africa',
    priceRange: 'R1500-R15000',
  }),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'SEO & AI Search Visibility', url: '/services/seo-services-johannesburg' },
  ]),
]

const seoProcess = [
    { icon: Search, title: 'Audit & Research', description: 'We analyse your current website, competitors, and target keywords — plus assess your GEO readiness and AI citation potential — to build a dual SEO + AI search strategy.' },
    { icon: Target, title: 'On-Page + AI Content', description: 'We optimise title tags, meta descriptions, headings, and content for both Google ranking and AI answer extraction. Structured Q&A, entity signals, and citation-worthy copy built in.' },
    { icon: Shield, title: 'Technical + Structured Data', description: 'We fix crawl errors, improve site speed, implement JSON-LD schema, optimise Core Web Vitals, and add AI-friendly structured data that helps models understand and cite your content.' },
    { icon: Link2, title: 'Off-Page, Local & GEO', description: 'We build high-quality backlinks, optimise your Google Business Profile, manage citations — and build entity authority across the web so AI engines trust and reference your brand.' },
    { icon: BarChart3, title: 'Reporting & Refinement', description: 'We provide monthly reports showing keyword rankings, organic traffic, conversions, and AI citation metrics. We continuously refine both classic SEO and GEO strategy based on data.' },
  ]

const localIndustries = [
  { name: 'Service Businesses', description: 'SEO for plumbers, electricians, cleaners, and home service providers targeting Johannesburg suburbs.' },
  { name: 'Construction Companies', description: 'Rank for building, renovation, and construction keywords in Gauteng and surrounding provinces.' },
  { name: 'Trades Businesses', description: 'Local SEO for painters, carpenters, roofers, and tradespeople across Johannesburg and Pretoria.' },
  { name: 'Professional Services', description: 'Lawyers, accountants, consultants, and financial advisors targeting high-intent local searches.' },
  { name: 'Healthcare Providers', description: 'SEO for doctors, dentists, physiotherapists, and wellness practitioners in Johannesburg.' },
  { name: 'E-Commerce Stores', description: 'Technical SEO and content optimisation for online stores selling to South African customers.' },
]

const geoFeatures = [
  { icon: MessageSquare, title: 'ChatGPT Visibility', description: 'Optimise content so ChatGPT cites your business as a trusted source for SEO services in South Africa.' },
  { icon: Zap, title: 'Gemini & Claude Ready', description: 'Structure data for Google Gemini and Anthropic Claude to extract and attribute your expertise.' },
  { icon: Globe, title: 'Perplexity Optimised', description: 'Create authoritative, citation-worthy content that Perplexity surfaces in AI-generated answers.' },
  { icon: Layers, title: 'Entity Signals', description: 'Build entity authority through structured data, topic clusters, and consistent NAP information across the web.' },
]

const commonMistakes = [
  'Keyword stuffing instead of natural, valuable content',
  'Ignoring local SEO and Google Business Profile optimization',
  'Focusing only on rankings without considering conversion rate optimization',
  'Using black-hat techniques like link farms and PBNs',
  'Neglecting mobile optimization and Core Web Vitals',
  'Not tracking or measuring SEO performance properly',
  'Expecting overnight results and abandoning strategy too early',
  'Copying competitor strategies without understanding context',
  'Ignoring AI search — no structured data or GEO optimisation for ChatGPT and Gemini',
]

export default function SEOServicesJohannesburg() {
  return (
    <main className="pt-32 pb-20">
      {seoSchemas.map((s, i) => (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container-wide mx-auto px-4">
        {/* Hero Section */}
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">SEO & AI Search Visibility</span> Johannesburg
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              <strong>Classic SEO meets AI search optimisation. Nostalgic Studio helps Johannesburg businesses rank on Google and get cited by ChatGPT, Gemini, Claude and Perplexity — from R1,500/month.</strong>{' '}
              Search is no longer just blue links. We combine proven technical SEO, local SEO and content strategy with Generative Engine Optimization (GEO) so your business is visible wherever customers search — traditional search engines and AI answer engines alike.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8">
                <Link href="/contact">Get Your Free SEO Audit <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
                <Link href="#pricing">View SEO Pricing</Link>
              </Button>
            </div>
          </div>
        </MotionWrapper>

        {/* AboutThisPage - GEO */}
        <AboutThisPage
          summary="Nostalgic Studio provides classic SEO + AI search visibility services in Johannesburg, South Africa — combining technical SEO, local SEO, content strategy, and Generative Engine Optimization (GEO). We help businesses rank on Google and get cited by ChatGPT, Gemini, Claude, and Perplexity."
          covers={['Technical SEO Johannesburg', 'Local SEO', 'GEO Optimization', 'Keyword Research', 'Content Strategy', 'Google Business Profile', 'Link Building', 'SEO Audits']}
          lastUpdated="June 2026"
        />

        {/* What Is SEO in the AI Era */}
        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              What Is SEO in the AI Era?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                Search today means two things: <strong>classic search engine optimisation</strong> (ranking on Google, Bing, Yahoo) and <strong>AI search visibility</strong> (being cited by ChatGPT, Gemini, Claude and Perplexity). Both matter, and both require deliberate strategy.
              </p>
              <p>
                <strong>Classic SEO</strong> encompasses technical SEO, on-page content optimisation, off-page link building, and local SEO designed to improve a website&apos;s ranking in search engine results pages (SERPs). It&apos;s the foundation — site speed, crawlability, keyword targeting, and backlinks that have driven organic traffic for two decades.
              </p>
              <p>
                <strong>AI Search / GEO</strong> (Generative Engine Optimization) optimises your content for AI answer engines. These models pull from structured data, entity signals, authoritative citations, and clear answer-focused content to generate responses. Being cited by ChatGPT or appearing in Google AI Overviews is the new frontier of discoverability.
              </p>
              <p>
                <strong>Why it matters for Johannesburg businesses:</strong> 75% of users never scroll past the first page of Google results. 46% of all Google searches have local intent. Meanwhile, ChatGPT processes over 1 billion queries daily. Your business needs visibility in both worlds to capture every potential customer.
              </p>
            </div>
          </div>
        </section>

        {/* Classic SEO + AI Search Optimization */}
        <section className="mb-16" aria-labelledby="geo-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="geo-heading" className="text-2xl font-bold mb-4">
              Classic SEO + AI Search Optimization (GEO)
            </h2>
            <p className="text-muted-foreground mb-6">
              Search is evolving beyond blue links. AI-powered answer engines like ChatGPT, Google Gemini, Anthropic Claude, and Perplexity are changing how people find information — while Google remains the dominant traffic source. Your business needs to be optimised for both channels through a combined SEO + GEO strategy.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {geoFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4 p-4 rounded-xl bg-background border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h3>How We Optimise for AI Search</h3>
              <ul>
                <li><strong>Entity optimisation:</strong> We build entity authority through structured data (JSON-LD), topic clusters, and consistent NAP information that AI engines use to verify your business.</li>
                <li><strong>Answer-focused content:</strong> We create clear, authoritative answers to common questions in your industry, structured for AI extraction and citation.</li>
                <li><strong>Structured data implementation:</strong> Schema markup helps AI models understand your content context, making it more likely to be referenced in AI-generated answers.</li>
                <li><strong>Citation-worthy authority:</strong> We build your reputation through expert author bios, original research, and comprehensive guides that AI models trust as source material.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Snippet - GEO */}
        <section className="mb-16" aria-labelledby="snippet-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="snippet-heading" className="text-2xl font-bold mb-4">
              What is the Best SEO & AI Search Agency in Johannesburg?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nostalgic Studio is a leading <strong>SEO and AI search agency in Johannesburg</strong>, specializing in 
              technical SEO, local SEO, Generative Engine Optimization (GEO), and <strong>Next.js website optimization</strong> for businesses 
              across South Africa. Our dual approach combines proven classic SEO strategies with cutting-edge GEO techniques to deliver measurable results. We help businesses increase organic traffic, improve 
              Google rankings, get cited by AI answer engines, and grow their online presence through comprehensive search solutions tailored to the South African market.
            </p>
          </div>
        </section>

        {/* Trust Signals / Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '70+', label: 'Projects Delivered', icon: Star },
              { number: '13+', label: 'Years Experience', icon: Clock },
              { number: '50+', label: 'Happy Clients', icon: Users },
              { number: '100%', label: 'Client Satisfaction', icon: TrendingUp },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-6 rounded-2xl border border-border text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why SEO + AI Search Matters */}
        <section className="mb-16" aria-labelledby="why-seo-heading">
          <h2 id="why-seo-heading" className="text-3xl font-bold mb-8 text-center">
            Why SEO + AI Search Matters for Your Johannesburg Business
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Search, title: 'Organic + AI Traffic', description: 'Classic SEO drives sustainable Google traffic. GEO adds AI answer engine visibility. Together they capture customers across every search surface — from traditional SERPs to ChatGPT, Gemini and Perplexity.' },
              { icon: Target, title: 'Local Visibility', description: '46% of Google searches have local intent. Johannesburg customers searching for "near me" services are ready to buy. Local SEO puts your business in front of them in both maps and AI answers.' },
              { icon: TrendingUp, title: 'Competitive Advantage', description: 'Most Johannesburg businesses invest little in SEO and almost none in GEO. A dual strategy gives you a significant edge over competitors relying on outdated methods.' },
              { icon: DollarSign, title: 'Cost-Effective Growth', description: 'SEO delivers 5:1 ROI on average. Organic traffic costs 80% less per acquisition than PPC over 12 months. GEO amplifies this by earning AI citations at no extra ad cost.' },
              { icon: Globe, title: 'Brand Credibility', description: 'Ranking on Google and being cited by AI engines signals trust and authority. Customers trust businesses that appear at the top of both search results and AI answers.' },
              { icon: BarChart3, title: 'Measurable Results', description: 'Track classic metrics — keyword rankings, organic traffic, conversions — alongside AI citation frequency and visibility in ChatGPT, Gemini, and Perplexity responses.' },
            ].map((item) => (
              <div key={item.title} className="bg-card p-6 rounded-2xl border border-border">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our SEO Process */}
        <section className="mb-16" aria-labelledby="process-heading">
          <h2 id="process-heading" className="text-3xl font-bold mb-8 text-center">
            Our SEO & AI Search Process
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            We follow a proven, data-driven process that combines classic SEO with AI search optimisation — designed to deliver sustainable visibility across Google and AI answer engines for Johannesburg businesses.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {seoProcess.map((step, index) => (
              <div key={step.title} className="bg-card p-6 rounded-2xl border border-border relative">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <step.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Types - Details */}
        <section className="mb-16" aria-labelledby="seo-types-heading">
          <h2 id="seo-types-heading" className="text-3xl font-bold mb-8 text-center">
            Our SEO & AI Search Services in Detail
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Settings, title: 'Technical SEO', items: ['Site speed optimisation & Core Web Vitals', 'XML sitemap & robots.txt configuration', 'Schema markup & structured data', 'Canonical tags & redirect management', 'Mobile-first indexing readiness', 'Crawl budget optimisation', 'HTTPS & security optimization'] },
              { icon: FileText, title: 'On-Page SEO', items: ['Keyword research & gap analysis', 'Title tag & meta description optimisation', 'Heading structure optimisation', 'Content optimisation & creation', 'Internal linking strategy', 'Image optimisation with alt tags', 'URL structure optimisation'] },
              { icon: Link2, title: 'Off-Page SEO', items: ['White-hat link building', 'Guest posting & contributor content', 'Digital PR & brand mentions', 'Competitor backlink analysis', 'Broken link building', 'Industry directory submissions', 'Social signal optimization'] },
              { icon: Globe, title: 'Local SEO', items: ['Google Business Profile optimisation', 'Local citation building & management', 'Local keyword strategy', 'Review generation & management', 'Local content creation', 'Google Maps optimisation', 'NAP consistency across web'] },
              { icon: BarChart3, title: 'SEO Reporting', items: ['Monthly ranking reports', 'Organic traffic analytics', 'Conversion & goal tracking', 'Competitor benchmarking', 'Keyword rank tracking', 'SEO ROI calculation', 'Quarterly strategy reviews'] },
              { icon: Zap, title: 'GEO / AI Search', items: ['Entity authority building', 'Answer-focused content creation', 'Structured data for AI models', 'Citation-worthy source material', 'Topic cluster development', 'Author E-E-A-T optimization', 'AI search ranking monitoring'] },
            ].map((service) => (
              <div key={service.title} className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Local SEO for Johannesburg Businesses */}
        <section className="mb-16" aria-labelledby="local-seo-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="local-seo-heading" className="text-2xl font-bold mb-4">
              Local SEO for Johannesburg Businesses
            </h2>
            <p className="text-muted-foreground mb-6">
              Johannesburg is a competitive market with diverse suburbs and business districts. Effective local SEO ensures your business appears when potential customers search for your services in specific areas — whether they search on Google, ask ChatGPT, or use AI Overviews.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {localIndustries.map((industry) => (
                <div key={industry.name} className="p-4 rounded-xl bg-background border border-border">
                  <h3 className="font-bold mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              We optimise for Johannesburg-specific search terms, including suburb-level keywords (Sandton, Midrand, Soweto, Randburg, Roodepoort), 
              landmark references (Maboneng, Rosebank, Fourways), and service-area targeting for businesses that serve specific parts of Gauteng.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10 md:p-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Rank on Google & AI Search?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free SEO + GEO audit and discover exactly what your website needs to rank higher in Google and appear in AI answers across ChatGPT, Gemini, and Perplexity.
            </p>
            <Button asChild size="lg" className="h-14 px-10">
              <Link href="/contact">Claim Your Free SEO Audit <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </section>

        {/* SEO Pricing & Timeline */}
        <section className="mb-16" id="pricing" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="text-3xl font-bold mb-8 text-center">
            SEO & AI Search Pricing & Timeline
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-2">Starter SEO</h3>
              <div className="text-3xl font-bold text-primary mb-4">R1,500<span className="text-sm text-muted-foreground">/mo</span></div>
              <p className="text-sm text-muted-foreground mb-6">Perfect for startups and small businesses looking to establish online presence.</p>
              <ul className="space-y-2 mb-8">
                {['Keyword research (10 keywords)', 'On-page optimisation (5 pages)', 'Monthly performance report', 'Technical SEO audit', 'Basic local SEO setup'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">Popular</div>
              <h3 className="text-xl font-bold mb-2">Growth SEO</h3>
              <div className="text-3xl font-bold text-primary mb-4">R5,000<span className="text-sm text-muted-foreground">/mo</span></div>
              <p className="text-sm text-muted-foreground mb-6">For growing businesses ready to dominate their market.</p>
              <ul className="space-y-2 mb-8">
                {['Keyword research (30 keywords)', 'On-page optimisation (15 pages)', 'Weekly performance reports', 'Technical SEO fixes', 'Local SEO + GBP management', 'Content strategy (2 posts/mo)', 'Link building outreach', 'GEO / AI search optimization'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-2">Enterprise SEO</h3>
              <div className="text-3xl font-bold text-primary mb-4">R10K+<span className="text-sm text-muted-foreground">/mo</span></div>
              <p className="text-sm text-muted-foreground mb-6">Comprehensive SEO for established businesses and competitive markets.</p>
              <ul className="space-y-2 mb-8">
                {['Unlimited keyword tracking', 'Full site optimisation', 'Dedicated SEO manager', 'Weekly strategy calls', 'Advanced technical SEO', 'Content creation (4 posts/mo)', 'Premium link building', 'Full GEO/AI search strategy', 'Quarterly competitor reviews'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">SEO & AI Search Timeline: What to Expect</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-bold text-primary mb-2">Month 1-3</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Technical SEO audit & fixes</li>
                  <li>Keyword research & strategy</li>
                  <li>Google Business Profile optimisation</li>
                  <li>Initial on-page improvements</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-primary mb-2">Month 4-6</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Content creation & optimisation</li>
                  <li>Link building begins</li>
                  <li>Local citation building</li>
                  <li>Traffic growth visible</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-primary mb-2">Month 7-12</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Significant ranking improvements</li>
                  <li>Consistent organic traffic growth</li>
                  <li>Lead & revenue attribution</li>
                  <li>Competitive market positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common SEO Mistakes */}
        <section className="mb-16" aria-labelledby="mistakes-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="mistakes-heading" className="text-2xl font-bold mb-4">
              Common SEO Mistakes to Avoid
            </h2>
            <p className="text-muted-foreground mb-6">
              Many businesses waste time and money on SEO strategies that don&apos;t work. Here are the most common mistakes we see Johannesburg businesses make — including the new ones that hurt AI search visibility:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {commonMistakes.map((mistake) => (
                <div key={mistake} className="flex items-start gap-3 p-3 rounded-xl bg-background border border-border">
                  <HelpCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section 2 */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Nostalgic Studio for SEO & AI Search?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8 mb-8 text-left">
              <div className="p-4">
                <h3 className="font-bold mb-2">Experience & Expertise</h3>
                <p className="text-sm text-muted-foreground">Since 2016, we&apos;ve delivered 70+ web projects. Our team combines technical SEO expertise with deep knowledge of the Johannesburg market.</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Next.js SEO Specialists</h3>
                <p className="text-sm text-muted-foreground">As Next.js experts, we build SEO advantages into your website architecture — server-side rendering, sub-2s load times, and perfect Lighthouse scores.</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Transparent & Ethical</h3>
                <p className="text-sm text-muted-foreground">We use only white-hat SEO techniques. No shortcuts, no black-hat tricks — just sustainable strategies that build lasting authority for your brand.</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Data-Driven Decisions</h3>
                <p className="text-sm text-muted-foreground">Every strategy is backed by data. We track keyword rankings, organic traffic, conversions, and ROI. You get monthly reports with actionable insights.</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">AI-First Approach</h3>
                <p className="text-sm text-muted-foreground">We don&apos;t just optimise for Google. Our GEO strategies ensure your business is visible in ChatGPT, Gemini, Claude, and Perplexity — the fastest-growing search surfaces.</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Full-Service Agency</h3>
                <p className="text-sm text-muted-foreground">SEO doesn&apos;t exist in isolation. We also offer web design, branding, content creation, and social media — everything works together seamlessly.</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Local Market Knowledge</h3>
                <p className="text-sm text-muted-foreground">We understand Johannesburg&apos;s competitive landscape. From Sandton to Soweto, our local SEO strategies are tailored to the South African market.</p>
              </div>
            </div>
            <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
              <Link href="/about">Learn More About Our Agency</Link>
            </Button>
          </div>
        </section>

        {/* Key Takeaways */}
        <KeyTakeaways
          takeaways={[
            { point: 'Classic SEO + AI Search', detail: 'optimised for Google, ChatGPT, Gemini, Claude and Perplexity — dual visibility across every search surface' },
            { point: 'Technical SEO first', detail: 'site speed, crawlability, and Core Web Vitals directly impact rankings and user experience' },
            { point: 'Local SEO specialists', detail: 'Google Business Profile and Johannesburg-specific optimisations that drive foot traffic and local leads' },
            { point: 'Long-term results', detail: 'organic traffic compounds over time unlike paid ads that stop when budgets do' },
            { point: 'Transparent reporting', detail: 'monthly reports with keyword rankings, traffic growth, conversions, and AI citation metrics' },
            { point: 'White-hat only', detail: 'ethical SEO techniques that build lasting authority without risk of Google penalties' },
          ]}
        />

        {/* FAQ Section */}
        <FaqSection faqs={faqs} title="SEO Services — Frequently Asked Questions" />

        {/* Author Bio - EEAT */}
        <div className="mx-auto px-4 max-w-3xl">
          <AuthorBio />
        </div>

        {/* Internal Links */}
        <section className="mb-16" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-bold mb-6 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/web-design-johannesburg" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Globe className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Design Johannesburg</h3>
              <p className="text-sm text-muted-foreground">SEO-optimised, AI-friendly websites built with Next.js for maximum performance.</p>
            </Link>
            <Link href="/services/social-media-ads" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Megaphone className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Social Media & Paid Ads</h3>
              <p className="text-sm text-muted-foreground">Paid campaigns that complement your organic SEO strategy for full-funnel growth.</p>
            </Link>
            <Link href="/services/branding-design" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Palette className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Branding Design</h3>
              <p className="text-sm text-muted-foreground">Build a brand that customers trust and remember.</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Own Search — Classic & AI?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a tailored SEO + GEO strategy that drives real business growth across Google, ChatGPT, Gemini, and Perplexity. Free, no-obligation consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Get Your Free SEO Audit</Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
              <Link href="tel:+27824483273">Call Us: 082 448 3273</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
