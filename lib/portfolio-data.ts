export interface Project {
  id: number
  title: string
  category: string
  client: string
  industry?: string
  location?: string
  timeline: string
  role: string
  description: string
  image: string
  liveUrl: string
  slug: string
  challenge?: string
  approach?: string
  results?: string[]
  technologies?: string[]
  services?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sozim Consultancy Case Study',
    category: 'SEO & Digital Marketing',
    client: 'Sozim Trading & Consultancy',
    industry: 'Education & Training',
    location: 'Bloemfontein, Free State',
    timeline: '8 weeks',
    role: 'SEO Specialist',
    description:
      'See how Nostalgic Studio delivered branding and digital strategy for Sozim Consultancy in Johannesburg — real project results, real process, real outcome.',
    image: '/images/projects/sozim.webp',
    liveUrl: 'https://www.sozim.co.za',
    slug: 'sozim-consultancy-case-study',
    challenge:
      'Sozim needed to increase their online visibility and generate more interest from prospective students and corporate clients seeking accredited training programmes. Their previous online presence lacked search engine visibility, clear conversion paths, and failed to connect with their target audience effectively.',
    approach:
      'We implemented a comprehensive digital strategy focused on search visibility and conversion optimization. This included technical SEO improvements using Next.js for server-side rendering and fast load times, on-page SEO with targeted keywords for Bloemfontein and South Africa training markets, clear messaging for prospective students, optimized landing pages with strong calls-to-action, mobile-first design for students on the go, and structured data markup to improve AI search visibility. Every element was designed for both traditional search engines and AI-powered answer engines.',
    results: [
      '163+ organic clicks in 28 days',
      '0 to 946 impressions for new keywords (e.g. "library assistant") in 28 days',
      'Average CTR of 3.95% on targeted keywords',
      '3 enquiries per day from organic traffic',
      'Optimized landing pages driving more corporate enquiries',
      'Mobile-friendly experience reaching students on all devices',
    ],
    services: [
      'Technical SEO & site audit',
      'Keyword research & strategy',
      'On-page SEO optimization',
      'Content strategy & landing page design',
      'Structured data markup',
      'Performance optimization',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Didee Holdings Website Redesign',
    category: 'Web Design',
    client: 'Didee Holdings',
    industry: 'Construction & Civil Engineering',
    location: 'Centurion, Gauteng',
    timeline: '2 weeks',
    role: 'Web Developer',
    description:
      'Didee Holdings is a South African construction and civil engineering company offering building, infrastructure, roads, and earthworks, showcasing projects.',
    image: '/images/projects/didee.webp',
    liveUrl: 'https://www.dideeholdings.co.za',
    slug: 'didee-holdings',
    challenge:
      'Didee Holdings needed a website that could position them as a credible, established player in South African construction while showcasing their civil engineering portfolio. Their previous site failed to communicate safety standards or project experience, which hurt their tender applications.',
    approach:
      'We delivered a clean, trust-focused design in just 2 weeks. The site emphasises safety certifications, completed project gallery, and clear service categories. Every page is optimised for local SEO targeting Johannesburg construction companies.',
    results: [
      'Established professional web presence within 2 weeks',
      'Indexed for 12+ construction-related search terms in Gauteng',
      'Professional image supports tender and RFP submissions',
      '90+ Lighthouse performance score from launch',
    ],
    services: [
      'Website redesign & UX',
      'Local SEO optimization',
      'Project gallery & portfolio layout',
      'Mobile-first responsive design',
      'Performance optimization',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    id: 3,
    title: 'Tanosa Group Case Study',
    category: 'Web Design',
    client: 'Tanosa Group',
    industry: 'Consulting & Professional Services',
    location: 'Bloemfontein, Free State',
    timeline: '1 week',
    role: 'Full-Stack Developer & SEO Strategist',
    description:
      'Tanosa Group is a Bloemfontein-based accounting and business consulting firm. We transformed their digital presence from a basic website into a trusted authority platform that actively vets and converts high-intent clients.',
    image: '/images/projects/tanosa.webp',
    liveUrl: 'https://www.tanosagroup.com',
    slug: 'tanosa-group-case-study',
    challenge:
      'Tanosa Group needed more than visibility — they needed digital authority in the Bloemfontein financial services market. In an industry where trust is the primary purchase driver, the challenge was to move beyond generic traffic and cultivate long-term credibility through high-value content: detailed tax guides, service-specific information, and a site that signals the same professional meticulousness their clients expect from an accounting firm.',
    approach:
      "We implemented an authority-building content and SEO strategy, optimising deep-content pages — including tax guides and service descriptions — to capture high-intent traffic from users actively researching financial and consulting services. A technical audit eliminated 404 errors and resolved crawlability issues, ensuring the site reflects the firm's professional standards. We also restructured the user journey to bridge the gap between educational reading and client consultation, creating a clear path from content to conversion.",
    results: [
      '127 total views from 44 unique users in June 2026',
      'Average engagement time of 1 minute 9 seconds — well above industry benchmarks for professional services',
      'Accounting, Tax & Business Services page achieved a 2-minute average engagement time, confirming the content strategy is effectively vetting high-intent leads',
      'About page held a 52-second engagement time, reinforcing brand trust and reliability',
      'Technical audit resolved 404 errors and improved site crawlability',
    ],
    services: [
      'Information architecture & UX design',
      'Website redesign',
      'Mobile-first responsive design',
      'Performance optimization',
      'Local SEO setup',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    id: 4,
    title: 'Jiyology Construction SEO Case Study',
    category: 'SEO & Digital Marketing',
    client: 'Jiyology Building & Construction',
    industry: 'Construction & Plumbing',
    location: 'Johannesburg, Gauteng',
    timeline: '1 week',
    role: 'Full-Stack Developer & SEO Strategist',
    description:
      'Jiyology is a Soweto-based construction and plumbing company. We built their website and implemented a service-led SEO strategy that turned it into a high-intent lead generation asset.',
    image: '/images/projects/jiyology.webp',
    liveUrl: 'https://www.jiyology.co.za',
    slug: 'jiyology-construction-plumbing-seo-optimization-case-study',
    challenge:
      'Jiyology Construction & Plumbing needed to increase local visibility in Soweto for specific construction and plumbing services. Generic traffic was not enough — the goal was to attract high-intent leads actively searching for their services, not just passive visitors.',
    approach:
      'We implemented a service-led SEO and AEO strategy, building and optimising dedicated landing pages for the specific services local homeowners search for. A full technical audit identified and resolved broken paths causing 404 errors, and we restructured the user journey to create a clear path from each service landing page directly to the Contact Us page — reducing friction and improving conversion.',
    results: [
      '145 total views and 46 unique active users in June 2026',
      'Construction & Plumbing Services page drove 36.5% of all site traffic — the top-performing asset',
      'Contact Us ranked as the second most visited page, confirming strong user intent and a working conversion funnel',
      'Technical audit resolved 404 errors and improved crawlability',
      'Service-led SEO strategy shifted traffic from generic to high-intent local searches',
    ],
    services: [
      'Website design & development',
      'Service-specific landing pages',
      'Local SEO optimization',
      'Before/after project gallery',
      'Contact & enquiry flow setup',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    id: 5,
    title: 'A-Z Truck Sales Dealership New Website',
    category: 'Web Design',
    client: 'AZ Truck Sales',
    industry: 'Automotive & Truck Sales',
    location: 'Gauteng',
    timeline: '6 weeks',
    role: 'Web Developer',
    description:
      'A-Z Truck Sales is a Gauteng dealer of quality pre-owned trucks, offering inventory, specs, financing, spare parts, and a website built to drive leads.',
    image: '/images/projects/aztrucks.webp',
    liveUrl: 'https://www.a-ztrucksales.com',
    slug: 'az-truck-dealership',
    challenge:
      'AZ Truck Sales needed a website that could showcase their truck inventory with detailed specifications, handle financing enquiries, and compete with larger dealerships in Gauteng. They needed lead generation, not just a brochure site.',
    approach:
      'We built a feature-rich dealership platform with individual vehicle listing pages, filterable inventory, financing calculator integration, and WhatsApp quick-enquiry buttons. Each truck listing is optimised for search terms like "used trucks Gauteng" and "pre-owned [brand] trucks South Africa".',
    results: [
      '30+ vehicle listings with detailed specifications and photos',
      '308 mobile clicks with 14,618 impressions from organic search',
      'Individual truck pages rank for brand-specific search queries',
      'Site handles 500+ monthly visitors with sub-2-second load times',
    ],
    services: [
      'Website design & development',
      'Inventory management system',
      'Vehicle listing pages with SEO',
      'Financing calculator integration',
      'WhatsApp enquiry integration',
      'Performance optimization',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    id: 6,
    title: 'Bidco Trucks New Website',
    category: 'Web Design',
    client: 'Bidco Trucks',
    industry: 'Automotive & Truck Sales',
    location: 'Pretoria, Gauteng',
    timeline: '8 weeks',
    role: 'Web Developer',
    description:
      'Bidco Trucks is a Pretoria dealer of quality used trucks, trailers, and plant equipment, with a website featuring inventory, listings, and inquiries.',
    image: '/images/projects/bidco.webp',
    liveUrl: '#',
    slug: 'bidco-trucks',
    challenge:
      'Bidco Trucks serves clients across Africa and needed a website that could handle large inventory volumes, international enquiries, and showcase their extensive range of trucks, trailers, and plant equipment.',
    approach:
      'We built a comprehensive inventory platform with category filtering, detailed equipment pages with multiple photos and specifications, and an integrated enquiry system. The site architecture supports SEO for both South African and broader African search markets.',
    results: [
      '100+ equipment listings with full specifications',
      'Enquiry system streamlined buyer communication',
      'Pan-African search visibility for truck and equipment queries',
      'Scalable architecture handles growing inventory needs',
    ],
    services: [
      'Website design & development',
      'Inventory management system',
      'Equipment listing pages with SEO',
      'Multi-language & pan-African SEO readiness',
      'Enquiry system integration',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    id: 7,
    title: 'Ribbons Collection Website Rebuild & SEO',
    category: 'Web Design',
    client: 'Ribbons Collection',
    industry: 'E-commerce & Footwear',
    location: 'South Africa',
    timeline: '3 weeks',
    role: 'Web Developer & SEO Strategist',
    description:
      'Ribbons Collection sells handcrafted, genuine leather footwear made in South Africa. We rebuilt their broken WordPress store and optimised it for search engines and AI discoverability.',
    image: '/images/projects/ribbonscollection.webp',
    liveUrl: 'https://ribbonscollection.co.za',
    slug: 'ribbons-collection-website-redesign',
    challenge:
      "Ribbons Collection's WordPress store had become unusable. The page builder was broken, the theme was throwing errors across key pages, and — critically — customers could not remove items from their shopping cart, a checkout-blocking bug that was actively costing sales. On top of the technical failures, the site had no meaningful SEO foundation and zero presence in AI-driven search tools, leaving a genuine South African leather goods brand invisible to the customers actively searching for exactly what they sell.",
    approach:
      "We rebuilt the site from the ground up rather than patch a failing page builder and theme, fixing the broken cart flow so customers could add, edit, and remove items without errors. Alongside the rebuild, we ran a full SEO overhaul — clean on-page structure, optimised product and category pages, technical fixes for crawlability, and structured data to help search engines understand the catalogue. We also optimised the site for AI discoverability (GEO), ensuring product and brand content is structured so AI answer engines like ChatGPT, Perplexity, and Google AI Overviews can accurately surface and cite Ribbons Collection when users ask about South African leather shoes.",
    results: [
      'Resolved the cart bug preventing customers from removing items — restoring a working checkout flow',
      'Replaced a broken page builder and theme with a stable, fast-loading storefront',
      'Full technical and on-page SEO implementation across products and categories',
      'Structured data and content optimisation to improve visibility in AI search tools',
      'Site now fully functional and positioned for organic and AI-driven discovery',
    ],
    services: [
      'WordPress website rebuild & bug fixes',
      'E-commerce cart & checkout repair',
      'Technical SEO & on-page optimization',
      'Structured data implementation',
      'AI search / GEO optimization',
      'Performance optimization',
    ],
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
  },
]
