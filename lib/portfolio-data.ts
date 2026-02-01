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
    title: 'Sozim Trading & Consultancy Website Revamp',
    category: 'Web Design',
    client: 'Sozim Trading & Consultancy',
    timeline: '8 weeks',
    role: 'Web Developer',
    description:
      'Sozim Trading and Consultancy, a South African provider of training, skills development, and accredited learning programmes.',
    image: '/images/projects/sozim.png',
    liveUrl: '#',
    slug: 'fintech-dashboard',
  },
  {
    id: 2,
    title: 'Health & Wellness App',
    category: 'UI/UX Design',
    client: 'ZenLife',
    timeline: '12 weeks',
    role: 'Product Designer',
    description:
      'Mobile app design focused on mental wellness and daily habit tracking.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&h=900&fit=crop',
    liveUrl: '#',
    slug: 'wellness-app',
  },
  {
    id: 3,
    title: 'E-commerce Rebrand',
    category: 'Branding',
    client: 'EcoStyle',
    timeline: '6 weeks',
    role: 'Brand Strategist',
    description:
      'Complete brand overhaul for a sustainable fashion marketplace.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop',
    liveUrl: '#',
    slug: 'ecommerce-rebrand',
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
    title: 'Crypto Exchange',
    category: 'UI/UX Design',
    client: 'CoinFlow',
    timeline: '10 weeks',
    role: 'Product Designer',
    description:
      'User-friendly cryptocurrency trading platform with advanced charting.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&h=900&fit=crop',
    liveUrl: '#',
    slug: 'crypto-exchange',
  },
  {
    id: 6,
    title: 'Restaurant Chain',
    category: 'Branding',
    client: 'The Green Fork',
    timeline: '8 weeks',
    role: 'Creative Director',
    description: 'Brand identity for a modern farm-to-table restaurant chain.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop',
    liveUrl: '#',
    slug: 'restaurant-brand',
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
