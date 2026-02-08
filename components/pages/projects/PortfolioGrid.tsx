'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import PortfolioCard from './PortfolioCard'
import { projects } from '@/lib/portfolio-data'

const categories = [
  'All',
  'Web Design',
  'UI/UX Design',
  'Branding',
  'Digital Design',
]

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section
      className="pb-12 md:pb-20"
      aria-label="Portfolio projects grid with category filters for Nostalgic Studio"
    >
      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Filter Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-12"
          role="tablist"
          aria-label="Filter portfolio projects by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(122_85%_50%/0.3)]'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.ul
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <li key={project.id}>
                <PortfolioCard project={project} />
              </li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
