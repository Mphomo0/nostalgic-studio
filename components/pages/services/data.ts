import { Service, ProcessStep } from './types'

export const services: Service[] = [
  {
    id: 'web-design',
    icon: 'layout',
    title: 'Web Design',
    description:
      'Custom websites that captivate visitors and drive conversions. We build fast, responsive, and SEO-optimized sites tailored to your business goals.',
    features: [
      'Custom responsive design',
      'Mobile-first approach',
      'SEO optimization',
      'Performance focused',
      'API integration',
      'Analytics setup',
    ],
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
  },
  {
    id: 'ui-ux',
    icon: 'sparkles',
    title: 'UI/UX Design',
    description:
      'Intuitive interfaces and seamless user journeys that delight users and achieve business objectives. We blend aesthetics with functionality.',
    features: [
      'User research & testing',
      'Wireframing & prototyping',
      'Interactive design systems',
      'Usability optimization',
      'Mobile app design',
      'Design handoff',
    ],
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
  },
  {
    id: 'branding',
    icon: 'palette',
    title: 'Branding',
    description:
      'Memorable brand identities that tell your story and connect with your target audience. We craft brands that stand out and stand the test of time.',
    features: [
      'Logo design',
      'Brand strategy',
      'Visual identity systems',
      'Brand guidelines',
      'Marketing collateral',
      'Brand positioning',
    ],
    image:
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop',
  },
  {
    id: 'digital',
    icon: 'monitor',
    title: 'Digital Design',
    description:
      'From presentations to social media, we create cohesive digital assets that maintain brand consistency across all touchpoints.',
    features: [
      'Social media graphics',
      'Email templates',
      'Presentation design',
      'Digital ads',
      'Infographics',
      'Motion graphics',
    ],
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
  },
]

export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We dive deep into your business, audience, and goals to understand what makes you unique.',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'Based on our findings, we develop a tailored approach to achieve your objectives.',
  },
  {
    step: '03',
    title: 'Design',
    description:
      'Our team crafts stunning visuals and intuitive experiences that align with your brand.',
  },
  {
    step: '04',
    title: 'Delivery',
    description:
      'We launch your project with thorough testing and provide ongoing support.',
  },
]
