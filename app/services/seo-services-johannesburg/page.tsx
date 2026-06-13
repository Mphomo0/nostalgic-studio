import type { Metadata } from 'next'

export const dynamic = 'force-static'
import { ArrowRight, CheckCircle2, TrendingUp, Search, Globe, BarChart3, Target, Zap, Clock, Users, Shield, Layers, FileText, Link2, MessageSquare, DollarSign, Star, HelpCircle, Settings, Palette } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'
import AuthorBio from '@/components/geo/AuthorBio'
import { serviceSchema, breadcrumbSchema, faqPageSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'SEO Services Johannesburg | Local & Technical SEO Agency',

  description:
    'Top SEO agency in Johannesburg offering technical SEO, local SEO & content strategy. Free audit available. Plans from R1,500/month. Rank #1 on Google.',

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
    title: 'SEO Services Johannesburg | Technical & Local SEO | Nostalgic Studio',
    description:
      'Rank higher on Google with expert SEO services in Johannesburg. Technical SEO, local SEO, and content optimisation for South African businesses. Free audit.',
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
    title: 'SEO Services Johannesburg | Local & Technical SEO Agency',
    description:
      'Rank #1 on Google with expert SEO services in Johannesburg. Technical SEO, local SEO & content strategy. Free audit from R1,500/month.',
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
    answer: 'Generative Engine Optimization (GEO) is the practice of optimizing content for AI-powered search engines like ChatGPT, Gemini, Claude, and Perplexity. It involves structuring content with clear definitions, entity signals, data points, and semantic HTML that AI engines can easily parse and cite.'
  },
  {
    question: 'How is GEO different from traditional SEO?',
    answer: 'Traditional SEO optimizes for search engine result pages (SERPs) with keywords and backlinks. GEO optimizes for AI answer engines by focusing on entity authority, structured data, direct answers, authoritative citations, and content that AI models can confidently reference as source material.'
  },
]

export default function SEOServicesJohannesburg() {
  const schemas = [
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
      { name: 'SEO Services Johannesburg', url: '/services/seo-services-johannesburg' },
    ]),
    faqPageSchema(faqs),
  ]

  const seoProcess = [
    { icon: Search, title: 'Audit & Research', description: 'We analyse your current website, competitors, and target keywords to identify opportunities and develop a data-driven SEO strategy.' },
    { icon: Target, title: 'On-Page Optimisation', description: 'We optimise title tags, meta descriptions, headings, content, images, and internal links to align with target keywords and search intent.' },
    { icon: Shield, title: 'Technical SEO', description: 'We fix crawl errors, improve site speed, implement structured data, optimise Core Web Vitals, and ensure mobile-first indexing readiness.' },
    { icon: Link2, title: 'Off-Page & Local SEO', description: 'We build high-quality backlinks, optimise your Google Business Profile, manage local citations, and build local authority signals for Johannesburg.' },
    { icon: BarChart3, title: 'Reporting & Refinement', description: 'We provide monthly reports showing keyword rankings, organic traffic, conversions, and ROI metrics. We continuously refine the strategy based on data.' },
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
  ]

  return (
    <main className="pt-32 pb-20">
      {schemas.map((s, i) => (
        <Script key={i} id={`schema-${i}`} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="container-wide mx-auto px-4">
        {/* Hero Section */}
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert <span className="text-gradient">SEO Services Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Rank higher on Google, drive more organic traffic, and grow your business with South Africa&apos;s leading SEO agency. We combine technical SEO expertise with local market intelligence to deliver measurable results for Johannesburg businesses.
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
          summary="Nostalgic Studio is a leading SEO agency in Johannesburg, South Africa, specialising in technical SEO, local SEO, content strategy, and Generative Engine Optimization (GEO) for startups and SMEs. We help businesses rank higher on Google and become visible in AI-powered search engines like ChatGPT, Gemini, and Perplexity."
          covers={['Technical SEO Johannesburg', 'Local SEO', 'GEO Optimization', 'Keyword Research', 'Content Strategy', 'Google Business Profile', 'Link Building', 'SEO Audits']}
          lastUpdated="June 2026"
        />

        {/* What Is SEO - Expanded */}
        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              What Is SEO?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                SEO (Search Engine Optimization) is the practice of optimising a website to rank higher 
                in search engine results pages (SERPs), increasing organic (non-paid) traffic. It encompasses 
                technical SEO, on-page content optimisation, off-page link building, and local SEO strategies 
                designed to improve a website&apos;s visibility to search engines like Google, Bing, and Yahoo.
              </p>
              <p>
                <strong>Why SEO matters for Johannesburg businesses:</strong> 75% of users never scroll past the first page of Google results. 
                46% of all Google searches have local intent. Businesses in the Google Local Pack receive 42% of all local search clicks. 
                For Johannesburg-based companies, ranking on the first page means capturing high-intent customers actively searching for your services.
              </p>
              <p>
                SEO is not just about keywords — it&apos;s about creating a comprehensive digital presence that search engines trust. This includes 
                technical infrastructure (site speed, mobile-friendliness, crawlability), content authority (relevant, valuable information), 
                and external validation (backlinks, citations, reviews).
              </p>
            </div>
          </div>
        </section>

        {/* GEO & AI Search Optimization Section */}
        <section className="mb-16" aria-labelledby="geo-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="geo-heading" className="text-2xl font-bold mb-4">
              AI Search Optimization (GEO)
            </h2>
            <p className="text-muted-foreground mb-6">
              Search is evolving beyond blue links. AI-powered answer engines like ChatGPT, Google Gemini, Anthropic Claude, and Perplexity are changing how people find information. Your business needs to be optimised for these new discovery channels through Generative Engine Optimization (GEO).
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
              What is the Best SEO Agency in Johannesburg?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nostalgic Studio is a leading <strong>SEO agency in Johannesburg</strong>, specializing in 
              technical SEO, local SEO, Generative Engine Optimization (GEO), and <strong>Next.js website optimization</strong> for businesses 
              across South Africa. Our data-driven approach combines proven SEO strategies with cutting-edge 
              technology to deliver measurable results. We help businesses increase organic traffic, improve 
              Google rankings, and grow their online presence through comprehensive SEO solutions tailored to the South African market.
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

        {/* Why SEO Matters - Expanded */}
        <section className="mb-16" aria-labelledby="why-seo-heading">
          <h2 id="why-seo-heading" className="text-3xl font-bold mb-8 text-center">
            Why SEO Matters for Your Johannesburg Business
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Search, title: 'Organic Traffic', description: 'SEO drives sustainable, cost-effective traffic. Unlike paid ads that stop when your budget does, organic traffic compounds over time, delivering ongoing ROI.' },
              { icon: Target, title: 'Local Visibility', description: '46% of Google searches have local intent. Johannesburg customers searching for "near me" services are ready to buy. Local SEO puts your business in front of them.' },
              { icon: TrendingUp, title: 'Competitive Advantage', description: 'Most Johannesburg businesses invest little in SEO. A well-optimised website gives you a significant edge over competitors who rely on outdated websites and word-of-mouth.' },
              { icon: DollarSign, title: 'Cost-Effective Growth', description: 'SEO delivers 5:1 ROI on average. Compared to PPC advertising, organic traffic costs 80% less per acquisition over a 12-month period.' },
              { icon: Globe, title: 'Brand Credibility', description: 'Ranking on the first page of Google signals trust and authority. Customers trust businesses that appear at the top of search results.' },
              { icon: BarChart3, title: 'Measurable Results', description: 'SEO provides complete visibility into performance. Track keyword rankings, organic traffic, conversions, and revenue attributed to search.' },
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
            Our SEO Process
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            We follow a proven, data-driven SEO process designed to deliver sustainable results for Johannesburg businesses.
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
            Our SEO Services in Detail
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
              Johannesburg is a competitive market with diverse suburbs and business districts. Effective local SEO ensures your business appears when potential customers search for your services in specific areas.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Rank #1 on Google?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and discover exactly what your website needs to rank higher in Johannesburg and beyond.
            </p>
            <Button asChild size="lg" className="h-14 px-10">
              <Link href="/contact">Claim Your Free SEO Audit <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </section>

        {/* SEO Pricing & Timeline */}
        <section className="mb-16" id="pricing" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="text-3xl font-bold mb-8 text-center">
            SEO Pricing & Timeline Expectations
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
            <h3 className="text-xl font-bold mb-4">SEO Timeline: What to Expect</h3>
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
              Many businesses waste time and money on SEO strategies that don&apos;t work. Here are the most common mistakes we see Johannesburg businesses make:
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Nostalgic Studio for SEO?</h2>
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
            { point: 'Technical SEO first', detail: 'site speed, crawlability, and Core Web Vitals directly impact rankings and user experience' },
            { point: 'Local SEO specialists', detail: 'Google Business Profile and Johannesburg-specific optimisations that drive foot traffic and local leads' },
            { point: 'GEO / AI Search ready', detail: 'optimised for ChatGPT, Gemini, Claude, and Perplexity — the future of search discovery' },
            { point: 'Long-term results', detail: 'organic traffic compounds over time unlike paid ads that stop when budgets do' },
            { point: 'Transparent reporting', detail: 'monthly reports with keyword rankings, traffic growth, conversions, and ROI metrics' },
            { point: 'White-hat only', detail: 'ethical SEO techniques that build lasting authority without risk of Google penalties' },
          ]}
        />

        {/* FAQ Section */}
        <FaqSection faqs={faqs} title="SEO Services — Frequently Asked Questions" />

        {/* Author Bio - EEAT */}
        <AuthorBio />

        {/* Internal Links */}
        <section className="mb-16" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-bold mb-6 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/web-design-johannesburg" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Globe className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Web Design Johannesburg</h3>
              <p className="text-sm text-muted-foreground">SEO-optimised websites built with Next.js for maximum performance.</p>
            </Link>
            <Link href="/services/nextjs-website-design" className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <Zap className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Next.js Website Design</h3>
              <p className="text-sm text-muted-foreground">Lightning-fast websites with server-side rendering and 90+ Lighthouse scores.</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Dominate Search?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a tailored SEO strategy that drives real business growth for your South African business. Free, no-obligation consultation.
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
