export interface IndustryInfo {
  slug: string
  name: string
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
}

export const industries: IndustryInfo[] = [
  {
    slug: 'construction',
    name: 'Construction Website Design Johannesburg | Contractor Websites',
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
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
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
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
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
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
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
  },
  {
    slug: 'startups',
    name: 'Startups',
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
    metaTitle: 'Startup Websites for Speed and Growth',
    whyUsPoints: [
      'Launch in days, not months — Next.js gets you to market fast',
      '90+ Lighthouse scores impress investors and users alike',
      'Built to scale — your startup website grows with your business',
    ],
  },
]

export const industrySlugs = industries.map((i) => i.slug)
