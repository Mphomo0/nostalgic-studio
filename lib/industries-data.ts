export interface IndustryInfo {
  slug: string
  name: string
  description: string
  challenges: string[]
  services: string[]
  examples: string[]
  cta: string
}

export const industries: IndustryInfo[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description: 'Healthcare providers in South Africa need websites that inspire trust, comply with regulations, and make it easy for patients to book appointments, find information, and access services online.',
    challenges: ['Building patient trust through professional design', 'HIPAA/ POPIA compliance and data privacy', 'Clear service and practitioner information', 'Online booking and patient portal integration', 'Mobile-first design for on-the-go patients'],
    services: ['Custom healthcare website design', 'Patient booking system integration', 'POPIA-compliant contact forms', 'Doctor and specialist profile pages', 'Medical blog and health resource center', 'Local SEO for healthcare practices'],
    examples: ['Private medical practices', 'Dental clinics', 'Physiotherapy centers', 'Medical spas', 'Health and wellness coaches'],
    cta: 'Attract more patients with a professional, trustworthy healthcare website.',
  },
  {
    slug: 'construction',
    name: 'Construction',
    description: 'Construction companies in Johannesburg and across South Africa need project-focused websites that showcase completed works, attract new clients, and generate qualified leads for tenders and contracts.',
    challenges: ['Showcasing past projects effectively', 'Generating qualified B2B leads', 'Competing with established construction firms', 'Mobile access for site-based staff', 'Clear service and capability presentation'],
    services: ['Construction company website design', 'Project portfolio with before/after galleries', 'Service capability pages', 'Testimonial and case study sections', 'Lead generation contact forms', 'Local SEO for construction companies'],
    examples: ['Building contractors', 'Civil engineering firms', 'Renovation specialists', 'Roofing companies', 'Interior design-build firms'],
    cta: 'Win more construction contracts with a website that showcases your expertise.',
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    description: 'South African e-commerce businesses need fast, secure online stores with local payment gateways, mobile-optimized checkout, and SEO-optimized product pages that drive sales.',
    challenges: ['SA payment gateway integration (PayFast, Yoco, Ozow)', 'Mobile checkout optimization', 'Product page SEO for Google Shopping', 'Inventory and order management', 'Cart abandonment reduction'],
    services: ['Custom Next.js e-commerce development', 'PayFast, Yoco, and Ozow integration', 'SEO-optimized product pages', 'Mobile-first shopping experience', 'Inventory management systems', 'Analytics and conversion tracking'],
    examples: ['Fashion and apparel stores', 'Home and decor brands', 'Specialty food and beverage', 'Health and beauty products', 'B2B wholesale platforms'],
    cta: 'Launch a high-converting online store that sells on South African networks.',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    description: 'Lawyers, accountants, consultants, and financial advisors need authoritative websites that build credibility, showcase expertise, and convert high-value client enquiries.',
    challenges: ['Establishing authority and credibility', 'Generating high-quality leads', 'Communicating complex services clearly', 'Competing with large established firms', 'Client testimonial and case study presentation'],
    services: ['Professional services website design', 'Partner and team profile pages', 'Service area pages with SEO', 'Blog and thought leadership platform', 'Client testimonial integration', 'Local SEO for professional firms'],
    examples: ['Law firms and attorneys', 'Accounting and tax practices', 'Management consultants', 'Financial advisors', 'Real estate agencies'],
    cta: 'Position your firm as an authority and attract premium clients online.',
  },
  {
    slug: 'startups',
    name: 'Startups',
    description: 'South African startups need fast, scalable websites that can grow with the business, impress investors, and start generating leads from day one — without the bloat of traditional CMS platforms.',
    challenges: ['Limited budget for maximum impact', 'Need for fast deployment', 'Scalable architecture for growth', 'Investor-ready design and messaging', 'SEO foundation from launch'],
    services: ['Startup website design and development', 'Next.js for maximum performance', 'MVP and landing page creation', 'Investor deck and brand identity', 'SEO and analytics setup', 'Scalable architecture planning'],
    examples: ['Tech startups and SaaS', 'Fintech companies', 'Healthtech platforms', 'E-commerce startups', 'Service-based startups'],
    cta: 'Launch fast with a scalable website built for startup growth.',
  },
]

export const industrySlugs = industries.map(i => i.slug)
