import { PortfolioCard } from './portfolio-card'

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    slug: 'fintech-dashboard',
  },
  {
    id: 2,
    title: 'Health & Wellness App',
    category: 'UI/UX Design',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    slug: 'wellness-app',
  },
  {
    id: 3,
    title: 'E-commerce Rebrand',
    category: 'Branding',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    slug: 'ecommerce-rebrand',
  },
  {
    id: 4,
    title: 'SaaS Platform',
    category: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    slug: 'saas-platform',
  },
]

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <PortfolioCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  )
}
