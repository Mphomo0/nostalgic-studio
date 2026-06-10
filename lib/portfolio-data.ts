export interface Project {
  id: number
  title: string
  category: string
  client: string
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
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sozim SEO & Digital Marketing Campaign',
    category: 'SEO & Digital Marketing',
    client: 'Sozim Trading & Consultancy',
    timeline: '8 weeks',
    role: 'SEO Specialist',
    description:
      'Sozim delivers accredited skills development across South Africa. A 28-day SEO campaign we managed generated 163+ organic clicks and boosted enquiries.',
    image: '/images/projects/sozim.webp',
    liveUrl: 'https://www.sozim.co.za',
    slug: 'sozim-consultancy',
    challenge:
      'Sozim needed to increase their online visibility and generate more interest from prospective students and corporate clients seeking accredited training programmes. Their previous online presence lacked search engine visibility, clear conversion paths, and failed to connect with their target audience effectively.',
    approach:
      'We implemented a comprehensive digital strategy focused on search visibility and conversion optimization. This included technical SEO improvements using Next.js for server-side rendering and fast load times, on-page SEO with targeted keywords for Bloemfontein and South Africa training markets, clear messaging for prospective students, optimized landing pages with strong calls-to-action, mobile-first design for students on the go, and structured data markup to improve AI search visibility. Every element was designed for both traditional search engines and AI-powered answer engines.',
    results: [
      '163 clicks in 28 days',
      'Improved organic search visibility for training-related keywords in Bloemfontein',
      'Optimized landing pages driving more corporate enquiries',
      'Mobile-friendly experience reaching students on all devices',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Didee Holdings Website Redesign',
    category: 'Web Design',
    client: 'Didee Holdings',
    timeline: '2 weeks',
    role: 'Web Developer',
    description:
      'Didee Holdings is a South African construction and civil engineering company offering building, infrastructure, roads, and earthworks, showcasing projects.',
    image: '/images/projects/didee.webp',
    liveUrl: '#',
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
    title: 'Tanosa Group Website Redesign',
    category: 'Web Design',
    client: 'Tanosa Group',
    timeline: '1 week',
    role: 'Web Developer',
    description:
      'Tanosa Group offers consulting, governance, training, and project management across South Africa. We built their professional, mobile-first business website.',
    image: '/images/projects/tanosa.webp',
    liveUrl: 'https://www.tanosagroup.com',
    slug: 'tanosa-group',
    challenge:
      'Tanosa Group needed a website that could clearly communicate their diverse range of consulting services without overwhelming visitors. Their multidisciplinary approach required careful information architecture.',
    approach:
      'We created a streamlined site architecture with dedicated service sections, a professional leadership page, and clear navigation pathways. The design uses a sophisticated colour palette that conveys trust and expertise.',
    results: [
      'Clear service categorisation improved user navigation by 60%',
      'Professional design enhanced corporate credibility',
      'Site loads in under 1.5 seconds on mobile networks',
      'Google-indexed for consulting services in Johannesburg',
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
    title: 'Jiyology New Website',
    category: 'Web Design',
    client: 'Jiyology Building & Construction',
    timeline: '1 week',
    role: 'Web Developer',
    description:
      'Jiyology is a South African construction and plumbing company offering roofing, tiling, painting, and renovations, showcasing services and projects.',
    image: '/images/projects/jiyology.webp',
    liveUrl: 'https://www.jiyology.co.za',
    slug: 'jiyology-website',
    challenge:
      'Jiyology Building & Construction needed a website to reach homeowners searching for renovation and plumbing services online. They wanted a site that felt approachable and professional for residential clients.',
    approach:
      'We designed a bold, visually-driven website with prominent before-and-after project imagery. Each service category has its own dedicated page optimised for local search terms like "plumber Johannesburg" and "home renovation Gauteng".',
    results: [
      'Visible online presence for residential construction services',
      'Service-specific pages rank for local search queries',
      'Contact form generates weekly enquiry submissions',
      'Mobile-first design serves 65% of their traffic',
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
      'WhatsApp enquiries increased by 3x compared to previous process',
      'Individual truck pages rank for brand-specific search queries',
      'Site handles 500+ monthly visitors with sub-2-second load times',
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
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
]
