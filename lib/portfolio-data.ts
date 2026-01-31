export interface Project {
  id: number
  title: string
  category: string
  client: string
  timeline: string
  role: string
  description: string
  challenge: string
  solution: string
  technologies: string[]
  image: string
  gallery: string[]
  liveUrl: string
  slug: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Web Design',
    client: 'FinanceFlow Inc.',
    timeline: '8 weeks',
    role: 'UI/UX Designer',
    description:
      'A comprehensive dashboard for managing investments and tracking financial goals.',
    challenge:
      'The client needed a way to visualize complex financial data in a simple, intuitive interface. Users were struggling to understand their portfolio performance and asset allocation with the previous tabular design.',
    solution:
      'We designed a card-based dashboard with interactive charts and real-time data visualization. We focused on hierarchy and clarity, using color coding to indicate performance trends instantly.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Recharts', 'TypeScript'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    ],
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
    challenge:
      'Users often abandon habit tracking apps after a few weeks. The goal was to create an engaging, non-intrusive experience that gamifies progress without causing anxiety.',
    solution:
      'We introduced a "streak" system with forgiving mechanics and distinct visual themes for different times of day. The interface uses soft colors and fluid animations to maintain a calming atmosphere.',
    technologies: ['Figma', 'Protopie', 'Illustrator', 'React Native'],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1600&h=900&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop',
    ],
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
    challenge:
      'The brand was perceived as "hippie" rather than "modern sustainable". They wanted to appeal to a younger, fashion-forward demographic while maintaining their eco-friendly core values.',
    solution:
      'We created a bold typography-driven identity with a refined earth-tone palette. The new logo and packaging materials emphasize quality and minimalism, positioning sustainability as a premium choice.',
    technologies: ['Adobe Illustrator', 'Photoshop', 'After Effects', 'InDesign'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    ],
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
    challenge:
      'Enterprise tools are often clunky and difficult to navigate. The challenge was to maintain deep functionality while providing a sensation of lightness and speed.',
    solution:
      'We employed a sidebar navigation layout with context-aware headers. We also designed a robust design system for forms and data tables to ensure consistency across hundreds of views.',
    technologies: ['React', 'TypeScript', 'Sass', 'Figma', 'Storybook'],
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&h=900&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    ],
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
    challenge:
      'Crypto exchanges can be overwhelming for beginners. We needed to bridge the gap between simple swapping interfaces and professional trading desks.',
    solution:
      'We designed a "Lite" and "Pro" mode heavily inspired by gaming interfaces rather than traditional banking. The onboarding process includes interactive tutorials to explain key concepts.',
    technologies: ['Figma', 'Principle', 'Cinema 4D', 'Vue.js'],
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&h=900&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
    ],
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
    challenge:
      'The restaurant needed a scalable identity that could work across physical signage, digital menus, and social media for multiple locations.',
    solution:
      'We utilized a flexible logo system and a warm, organic color palette. Custom illustrations were created to highlight their local sourcing partners.',
    technologies: ['Illustrator', 'InDesign', 'Photography', 'Photoshop'],
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    ],
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
    challenge:
      'Cutting through the noise on social media for a B2B product is difficult. We needed eye-catching visuals that still conveyed complex value propositions.',
    solution:
      'We created a series of 3D-rendered abstract shapes interacting with UI elements to visualize the concept of "seamless integration".',
    technologies: ['Blender', 'Photoshop', 'After Effects', 'Cinema 4D'],
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&h=900&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    ],
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
    challenge:
      'Student engagement was low in the existing platform. We needed to rethink how course material was presented and progress was tracked.',
    solution:
      'We implemented a "journey map" visualization for courses and added micro-interactions for completing tasks. User testing showed a 40% increase in course completion rates.',
    technologies: ['Vue.js', 'Nuxt', 'Storybook', 'D3.js', 'TypeScript'],
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&h=900&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    ],
    liveUrl: '#',
    slug: 'edtech-platform',
  },
]
