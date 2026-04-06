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
    pricing: 'From R8,000',
    timeline: '2-4 weeks',
    image: '/images/web-design.webp',
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
    pricing: 'From R15,000',
    timeline: '4-6 weeks',
    image: '/images/ui-ux-design.png',
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
    pricing: 'From R5,000',
    timeline: '1-3 weeks',
    image: '/images/branding.webp',
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
      'Banner design',
    ],
    pricing: 'Custom Quote',
    timeline: '1-2 weeks',
    image: '/images/digital-design.webp',
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
