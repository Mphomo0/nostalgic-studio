export interface IndustryInfo {
  slug: string
  /**
   * Display label used in headings, links, breadcrumbs, and schema.
   * Keep it to 1-3 words — it renders inline as UI text, so a long
   * keyword string here will overflow narrow viewports.
   * Page titles come from `metaTitle ?? heroTagline`, not from this.
   */
  shortName: string
  description: string
  challenges: string[]
  services: string[]
  examples: string[]
  cta: string
  challengeHeader: string
  heroTagline: string
  metaTitle?: string
  whyUsPoints: string[]
  websiteNeeds?: string[]
  servicePageIdeas?: string[]
  faq: { q: string; a: string }[]
}

export const industries: IndustryInfo[] = [
  {
    slug: 'construction',
    shortName: 'Construction',
    description:
      'Website design for construction companies in Johannesburg and South Africa. Showcase projects, services, certifications, and generate quote enquiries.',
    challenges: [
      'Outdated websites that hurt credibility during tender evaluations',
      'Struggling to showcase completed projects in a compelling way',
      'Difficulty generating qualified B2B leads and tender enquiries',
      'Competing against larger firms with bigger marketing budgets',
      'No mobile access for site-based staff checking materials or contacts',
    ],
    services: [
      'Construction company website design with tender-ready credibility',
      'Project portfolio with before-and-after galleries',
      'Safety certification and compliance badges',
      'Service capability pages for each construction vertical',
      'Testimonial and case study sections from past clients',
      'Local SEO targeting construction companies in Gauteng',
    ],
    examples: [
      'Building contractors',
      'Civil engineering firms',
      'Renovation specialists',
      'Roofing companies',
      'Plumbing and electrical contractors',
    ],
    cta: 'Win more construction tenders with a website that proves your capability before they even call.',
    challengeHeader:
      'Construction Companies Lose Tenders Because of Bad Websites',
    heroTagline: 'Construction Website Design Johannesburg',
    whyUsPoints: [
      'Built Didee Holdings and Jiyology — real construction websites that generate enquiries',
      '90+ Lighthouse scores mean your site loads fast, even on site',
      'Mobile-first design for project managers and estimators on the go',
    ],
    websiteNeeds: [
      'A clear list of services',
      'Separate pages for each major service',
      'Completed project photos',
      'Company profile and experience',
      'Areas served',
      'Certifications or compliance information',
      'Contact form and WhatsApp button',
      'Quote request CTA',
      'Google Maps and local SEO setup',
    ],
    servicePageIdeas: [
      'Building Construction',
      'Renovations',
      'Civil Works',
      'Rib and Block Installation',
      'Plant Hire',
      'Project Management',
      'Maintenance',
    ],
    faq: [
      {
        q: 'How much does a construction company website cost in South Africa?',
        a: 'Starter sites begin at R1,500. Most construction and contracting firms choose the R8,000–R15,000 business package, which covers service pages for each trade, a project gallery, and certification badges. Larger firms with extensive portfolios run higher. Every quote is fixed, with no hourly billing.',
      },
      {
        q: 'Can a website actually help us win more tenders?',
        a: 'It helps you survive the shortlist. Tender evaluators routinely check a contractor\'s website before awarding, and an outdated site raises doubts about whether the business is still active and capable. A current site with completed projects, certifications, and clear capability statements removes that doubt.',
      },
      {
        q: 'How do you showcase completed construction projects?',
        a: 'We build project galleries with before-and-after photography, a short scope summary, and the value or duration where you are comfortable sharing it. Each project gets its own page so it can rank in search on its own. This turns your portfolio into a lead source rather than a slideshow.',
      },
      {
        q: 'Will the site work properly for staff on site?',
        a: 'Yes. We build mobile-first, and our sites score 90+ on Google Lighthouse, so pages load quickly on patchy site connections and limited data. Project managers and estimators can pull up contact details, spec sheets, or material lists from a phone without waiting on a slow page.',
      },
      {
        q: 'Do you have experience with construction clients specifically?',
        a: 'Yes. We built Didee Holdings, a Johannesburg construction firm indexed for 12+ local search terms, and Jiyology, a construction and plumbing company we optimised for local SEO. Both are live case studies you can review before deciding whether we understand the sector.',
      },
    ],
  },
  {
    slug: 'professional-services',
    shortName: 'Professional Services',
    description:
      'Lawyers, accountants, consultants, and financial advisors in South Africa are judged by their website before a prospect ever picks up the phone. We build authoritative, trust-driven sites that position your firm as the obvious choice for high-value clients.',
    challenges: [
      'Prospects judge your credibility by your website before they call',
      'Struggling to communicate complex services without overwhelming visitors',
      'Difficulty generating high-quality leads from the right clients',
      'Competing against large, established firms with bigger teams',
      'No effective way to showcase client results and thought leadership',
    ],
    services: [
      'Professional services website design that builds authority',
      'Partner and team profile pages with personal branding',
      'Service area pages optimised for local SEO',
      'Blog and thought leadership platform',
      'Client testimonial and case study integration',
      'Local SEO targeting professional services in Johannesburg',
    ],
    examples: [
      'Law firms and attorneys',
      'Accounting and tax practices',
      'Management consultants',
      'Financial advisors and wealth managers',
      'Real estate agencies',
    ],
    cta: 'Position your firm as the authority in your field and attract premium clients online.',
    challengeHeader:
      'You Only Get One Chance to Make a First Impression Online',
    heroTagline: 'Authority Websites for Professional Service Firms',
    metaTitle: 'Websites for Professional Services',
    whyUsPoints: [
      'Built Tanosa Group — a consulting website that communicates multi-disciplinary expertise',
      'Under 1.5-second load times keep high-value prospects engaged',
      'Structured data and AI-ready content for generative search visibility',
    ],
    faq: [
      {
        q: 'How much does a website cost for a law or accounting firm?',
        a: 'Starter sites begin at R1,500. Most professional practices choose the R8,000–R15,000 business package, which covers individual practice-area pages, attorney or partner profiles, and enquiry forms. Larger firms with extensive content run higher. Quotes are fixed before work begins.',
      },
      {
        q: 'How do we explain complex services without overwhelming visitors?',
        a: 'We give each practice area its own page with a plain-language summary first and the detail below it. Prospects who want a quick answer get one in the opening lines; those doing deeper diligence keep reading. This structure also helps each service rank for its own search terms.',
      },
      {
        q: 'Can a website help us compete with larger established firms?',
        a: 'Yes, on search. Large firms often have slow, dated sites and neglect local SEO. A fast site with well-structured practice-area pages and consistent Google Business Profile details can outrank a bigger competitor for the specific terms your clients actually search.',
      },
      {
        q: 'Can you help us publish thought leadership and client results?',
        a: 'Yes. Every business package includes a blog or insights section, and we structure case studies so each one is a standalone page that can rank. Published expertise is also what AI search engines cite when someone asks for a recommendation in your field.',
      },
      {
        q: 'How long does a professional services website take to build?',
        a: 'A 5-page starter site takes 1–2 weeks. A full practice website with multiple service pages, team profiles, and an insights section typically takes 3–6 weeks. The main variable is how quickly partner bios and practice-area content come back for review.',
      },
    ],
  },
  {
    slug: 'healthcare',
    shortName: 'Healthcare',
    description:
      'South African patients research healthcare providers online before booking. We build compliant, trustworthy websites for private practices, clinics, and wellness centres — with online booking, practitioner profiles, and local SEO that helps patients find you first.',
    challenges: [
      'Patients choose (or dismiss) your practice based on your website',
      'POPIA compliance and patient data protection requirements',
      'Making it easy for patients to find services, pricing, and book online',
      'Standing out in a competitive local healthcare market',
      'Mobile experience matters — most patients browse on their phones',
    ],
    services: [
      'Healthcare website design with patient-first UX',
      'Online booking and patient portal integration',
      'POPIA-compliant contact and enquiry forms',
      'Doctor and specialist profile pages with credentials',
      'Medical blog and health resource centre',
      'Local SEO for healthcare practices in Johannesburg',
    ],
    examples: [
      'Private medical practices and GP surgeries',
      'Dental clinics and orthodontists',
      'Physiotherapy and rehabilitation centres',
      'Medical spas and aesthetic clinics',
      'Health and wellness coaches',
    ],
    cta: 'Attract more patients with a professional, trustworthy healthcare website.',
    challengeHeader:
      'Patients Judge Your Practice Online Before They Walk Through Your Door',
    heroTagline: 'Healthcare Websites That Build Patient Trust',
    metaTitle: 'Healthcare Websites That Build Trust',
    whyUsPoints: [
      'POPIA-compliant forms and data handling built into every site',
      'Mobile-first design for the 70%+ of patients browsing on phones',
      'Local SEO that helps you rank for "doctor near me" searches',
    ],
    faq: [
      {
        q: 'How much does a medical practice website cost?',
        a: 'Starter sites begin at R1,500. Most practices — GP surgeries, dental clinics, and physiotherapy centres — choose the R8,000–R15,000 business package, which covers service pages, practitioner profiles, and online booking. Multi-practitioner clinics run higher. Every quote is fixed upfront.',
      },
      {
        q: 'How do you handle POPIA compliance and patient data?',
        a: 'We keep patient data collection to a minimum by design. Contact and booking forms capture only what the practice needs, submissions are transmitted over HTTPS, and we do not store clinical information on the website. For booking systems we integrate providers that handle health data properly rather than building our own.',
      },
      {
        q: 'Can patients book appointments through the website?',
        a: 'Yes. We build online booking into healthcare sites so patients can see availability and book without phoning during business hours. This cuts front-desk call volume and captures bookings after hours, which is when a lot of patients actually search for a practice.',
      },
      {
        q: 'Will the site work well on phones?',
        a: 'Yes, and it matters more in healthcare than most sectors. Most patients search for practices on a phone, often urgently. We build mobile-first with click-to-call buttons, visible practice hours, and directions, so someone can reach you in a couple of taps rather than pinching to zoom.',
      },
      {
        q: 'How do we stand out from other practices nearby?',
        a: 'Local SEO. We optimise your Google Business Profile, keep your practice details consistent across health directories, and build service pages targeting the specific treatments you offer. When someone searches for a provider in your suburb, this is what decides whether you appear.',
      },
    ],
  },
  {
    slug: 'e-commerce',
    shortName: 'E-commerce',
    description:
      'South African e-commerce is growing fast, but most online stores lose sales on slow load times, clunky mobile checkout, and poor product pages. We build Next.js-powered stores with local payment gateways that convert visitors into customers.',
    challenges: [
      'Slow load times costing you sales — every second costs 7% of conversions',
      'SA payment gateway headaches — PayFast, Yoco, Ozow integration takes expertise',
      'Mobile checkout abandonment — 70% of SA users shop on phones',
      'Product pages not optimised for Google Shopping or search',
      'Cart abandonment rates above 70% on most SA stores',
    ],
    services: [
      'Custom Next.js e-commerce development for maximum speed',
      'PayFast, Yoco, and Ozow payment gateway integration',
      'SEO-optimised product pages for Google Shopping visibility',
      'Mobile-first shopping experience with fast checkout',
      'Inventory management system integration',
      'Analytics and conversion tracking setup',
    ],
    examples: [
      'Fashion and apparel stores',
      'Home and decor brands',
      'Speciality food and beverage',
      'Health and beauty products',
      'B2B wholesale and bulk ordering platforms',
    ],
    cta: 'Launch a high-converting online store that sells on South African networks.',
    challengeHeader:
      'Most South African E-commerce Stores Lose Sales on Slow Load Times',
    heroTagline: 'Fast E-commerce Stores That Convert on SA Networks',
    metaTitle: 'E-commerce Websites for SA Networks',
    whyUsPoints: [
      'Next.js stores score 90+ Lighthouse on desktop and mobile',
      'Built-in PayFast, Yoco, and Ozow integration',
      'Sub-2-second checkout flow even on 3G connections',
    ],
    faq: [
      {
        q: 'How much does an e-commerce store cost in South Africa?',
        a: 'Online stores run R10,000–R25,000+ depending on catalogue size and complexity. That includes South African payment gateway integration, cart and checkout, inventory management, SEO-optimised product pages, and 6 months hosting. Quotes are fixed, so the number does not move mid-project.',
      },
      {
        q: 'Which South African payment gateways do you integrate?',
        a: 'We integrate PayFast, Yoco, Ozow, and Peach Payments. Which one suits you depends on your transaction volumes, fee structure, and whether you need instant EFT alongside card payments. We will talk through the trade-offs rather than defaulting to whichever is quickest for us to wire up.',
      },
      {
        q: 'Why do fast load times matter so much for an online store?',
        a: 'Because South African shoppers are mostly on mobile data, and every extra second of load time costs conversions. We build on Next.js and score 90–100 on Google Lighthouse, versus 40–70 for a typical WordPress and WooCommerce store. That gap shows up directly in completed checkouts.',
      },
      {
        q: 'How do you reduce mobile checkout abandonment?',
        a: 'We shorten the checkout to the fewest steps that still capture what you need, keep the cart visible, support guest checkout, and make payment options obvious before the final screen. Most abandonment comes from surprise costs and slow forms, so we address both directly.',
      },
      {
        q: 'Will my products show up in Google Shopping and search?',
        a: 'Yes. We build product pages with proper Product schema markup, including price, availability, and reviews, which is what Google Shopping and AI search engines read. Each product gets a unique title, description, and image set rather than duplicated manufacturer copy.',
      },
    ],
  },
  {
    slug: 'startups',
    shortName: 'Startups',
    description:
      'South African startups need a website that launches fast, impresses investors, and starts generating leads from day one — without the bloat of traditional CMS platforms. We build on Next.js for maximum performance, scalability, and SEO from launch.',
    challenges: [
      'Limited budget that needs to make maximum impact quickly',
      'Impress investors and partners with a polished, credible online presence',
      'Launch fast without sacrificing quality or SEO foundation',
      'Build on architecture that scales as the business grows',
      'Generate leads and validation from day one, not months later',
    ],
    services: [
      'Startup website design built for speed and impact',
      'Next.js development for 90+ Lighthouse performance',
      'MVP and landing page creation for rapid market testing',
      'Investor-ready design and brand identity',
      'SEO and analytics foundation from launch',
      'Scalable architecture that grows with your business',
    ],
    examples: [
      'Tech startups and SaaS platforms',
      'Fintech companies',
      'Healthtech platforms',
      'Direct-to-consumer brands',
      'Service-based and marketplace startups',
    ],
    cta: 'Launch fast with a scalable website built for startup growth.',
    challengeHeader: 'Startup Website Challenges (and How We Solve Them)',
    heroTagline: 'Startup Websites Built for Speed and Growth',
    metaTitle: 'Web Design for Startups in Johannesburg',
    whyUsPoints: [
      'Launch in days, not months — Next.js gets you to market fast',
      '90+ Lighthouse scores impress investors and users alike',
      'Built to scale — your startup website grows with your business',
    ],
    faq: [
      {
        q: 'What does a startup website cost?',
        a: 'Starter sites begin at R1,500, which is often enough to validate an idea or support a launch. Most funded startups choose the R8,000–R15,000 business package. Marketplaces and SaaS platforms with custom functionality run higher. Fixed quotes, so you can budget against a real number.',
      },
      {
        q: 'How fast can you launch a startup website?',
        a: 'A 5-page starter site takes 1–2 weeks. A full startup site with custom design, product pages, and SEO foundations typically takes 3–6 weeks. If you are working to a demo day or funding round deadline, tell us the date upfront and we will confirm whether it is realistic.',
      },
      {
        q: 'Will the site scale as we grow, or need rebuilding?',
        a: 'It scales. We build on Next.js and React, the same stack used by companies far larger than you plan to be, hosted on Vercel with a global CDN. Adding pages, a blog, a customer portal, or e-commerce later is an extension of the existing build, not a rewrite.',
      },
      {
        q: 'Does the website matter for investor conversations?',
        a: 'Yes. Investors and prospective partners look you up before meetings, and a thin or slow site undercuts the story you are telling in the room. A credible site with a clear product explanation, team page, and traction signals does quiet work between conversations.',
      },
      {
        q: 'Should we invest in SEO this early?',
        a: 'The foundations, yes — the campaign, maybe not. Getting site structure, page speed, and schema right during the build costs nothing extra and compounds. Ongoing SEO from R1,500/month makes sense once you know which customers convert; before that, spend on validation instead.',
      },
    ],
  },
]

export const industrySlugs = industries.map((i) => i.slug)
