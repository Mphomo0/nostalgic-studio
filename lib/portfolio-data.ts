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
      'Sozim Trading and Consultancy, a South African provider of training, skills development, and accredited learning programmes.',
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
      'A South African construction and civil engineering company offering building, infrastructure, roads, and earthworks services backed by experienced management professionals.',
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
      'Consulting and professional services firm that provides governance, operational improvement, business development, training, branding, and project management solutions to help organizations — especially municipalities — enhance efficiency and drive growth.',
    image: '/images/projects/tanosa.webp',
    liveUrl: 'www.tanosagroup.com',
    slug: 'tanosa-group',
  },
  {
    id: 4,
    title: 'SaaS Platform',
    category: 'Web Design',
    client: 'CollabWork',
    timeline: '4 months',
    role: 'Lead Designer',
    description:
      'Enterprise project management platform with real-time collaboration.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&h=900&fit=crop',
    liveUrl: '#',
    slug: 'saas-platform',
  },
  {
    id: 5,
    title: 'A-Z Truck Sales Dealership New Website',
    category: 'Web Design',
    client: 'AZ Truck Sales',
    timeline: '6 weeks',
    role: 'Web Developer',
    description:
      'Commercial vehicle dealer in Gauteng specialising in quality pre-owned trucks (rigid trucks from about 1.5 t to 18 t), with in-house servicing and restoration and over 25 years of experience in the industry.',
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
      'South African dealer based in Pretoria that specialises in buying and selling quality second-hand trucks, trailers and plant equipment for transport and construction use, with services and sales extending to several African countries.',
    image: '/images/projects/bidco.webp',
    liveUrl: '#',
    slug: 'bidco-trucks',
  },
  {
    id: 7,
    title: 'Social Media Campaign',
    category: 'Digital Design',
    client: 'TechStart',
    timeline: '4 weeks',
    role: 'Visual Designer',
    description: 'Visual campaign assets for a tech product launch.',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&h=900&fit=crop',
    liveUrl: '#',
    slug: 'social-campaign',
  },
  {
    id: 8,
    title: 'EdTech Platform',
    category: 'Web Design',
    client: 'LearnLogic',
    timeline: '6 months',
    role: 'UX Researcher',
    description: 'Learning management system with gamification elements.',
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&h=900&fit=crop',
    liveUrl: '#',
    slug: 'edtech-platform',
  },
]
