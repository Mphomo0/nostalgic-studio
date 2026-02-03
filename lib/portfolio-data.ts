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
    title: 'Jiyology New Website',
    category: 'Web Design',
    client: 'Jiyology Building & Construction',
    timeline: '1 week',
    role: 'Web Developer',
    description:
      'Jiyology is a South African building construction and plumbing company, founded by Vusi and Lerato Jiya, that offers professional services like roofing, plumbing, tiling, painting and home renovations with a focus on quality workmanship and customer care.',
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
]
