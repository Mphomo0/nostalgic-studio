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
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sozim Trading & Consultancy Website Redesign',
    category: 'Web Design',
    client: 'Sozim Trading & Consultancy',
    timeline: '8 weeks',
    role: 'Web Developer',
    description:
      'Sozim Trading and Consultancy is a leading South African provider of training, skills development, and accredited learning programmes. We designed and developed a modern, responsive website that showcases their comprehensive training services, accreditations, and course offerings. The project included custom UI design, SEO optimization, and a content management system for easy updates.',
    image: '/images/projects/sozim.webp',
    liveUrl: 'www.sozim.co.za',
    slug: 'sozim-consultancy',
  },
  {
    id: 2,
    title: 'Didee Holdings Website Redesign',
    category: 'Web Design',
    client: 'Didee Holdings',
    timeline: '2 weeks',
    role: 'Web Developer',
    description:
      'Didee Holdings is a prominent South African construction and civil engineering company offering building, infrastructure, roads and earthworks services. We created a professional website that highlights their extensive portfolio of completed projects, safety certifications, and service capabilities. The design emphasizes trust and professionalism with clean layouts and intuitive navigation.',
    image: '/images/projects/didee.webp',
    liveUrl: '#',
    slug: 'didee-holdings',
  },
  {
    id: 3,
    title: 'Tanosa Group Website Redesign',
    category: 'Web Design',
    client: 'Tanosa Group',
    timeline: '1 week',
    role: 'Web Developer',
    description:
      'Tanosa Group provides comprehensive consulting, governance, business development, training, branding and project management solutions for organizations across South Africa. We developed a sleek, professional website that effectively communicates their multidisciplinary services and expertise. The site features optimized performance and mobile-first design.',
    image: '/images/projects/tanosa.webp',
    liveUrl: 'www.tanosagroup.com',
    slug: 'tanosa-group',
  },
  {
    id: 4,
    title: 'Jiyology New Website',
    category: 'Web Design',
    client: 'Jiyology Building & Construction',
    timeline: '1 week',
    role: 'Web Developer',
    description:
      'Jiyology is a South African building construction and plumbing company offering roofing, plumbing, tiling, painting and comprehensive home renovations. We built an engaging website that showcases their diverse service offerings and completed projects. The design features bold imagery, clear service categorization, and easy contact options for potential clients.',
    image: '/images/projects/jiyology.webp',
    liveUrl: 'www.jiyology.co.za',
    slug: 'jiyology-website',
  },
  {
    id: 5,
    title: 'A-Z Truck Sales Dealership New Website',
    category: 'Web Design',
    client: 'AZ Truck Sales',
    timeline: '6 weeks',
    role: 'Web Developer',
    description:
      'A-Z Truck Sales is a Gauteng commercial vehicle dealer specializing in quality pre-owned trucks with in-house servicing capabilities. We designed a comprehensive dealership website featuring inventory listings, detailed vehicle specifications, financing options, and service booking functionality. The site drives lead generation through strategic CTAs and contact forms.',
    image: '/images/projects/aztrucks.webp',
    liveUrl: 'www.a-ztrucksales.com',
    slug: 'az-truck-dealership',
  },
  {
    id: 6,
    title: 'Bidco Trucks New Website',
    category: 'Web Design',
    client: 'Bidco Trucks',
    timeline: '8 weeks',
    role: 'Web Developer',
    description:
      'Bidco Trucks is a Pretoria-based dealer specializing in quality second-hand trucks, trailers and plant equipment across Africa. We developed a robust website platform with inventory management, detailed equipment listings, and inquiry systems. The project focused on showcasing their extensive stock and facilitating easy communication between buyers and the dealership.',
    image: '/images/projects/bidco.webp',
    liveUrl: '#',
    slug: 'bidco-trucks',
  },
]
