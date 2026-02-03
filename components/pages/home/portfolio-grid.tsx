'use client'

import { projects } from '@/lib/portfolio-data'
import { PortfolioCard } from './portfolio-card'

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.slice(0, 4).map((project, index) => (
        <PortfolioCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  )
}
