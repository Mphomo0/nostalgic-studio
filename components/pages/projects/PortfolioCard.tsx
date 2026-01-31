'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'

interface PortfolioCardProps {
  project: Project
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300
          hover:border-primary/50
          hover:shadow-[0_0_70px_hsl(122_85%_50%/0.5)]"
      >
        {/* Image container */}
        <div className="relative h-full min-h-80">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={900}
            className="w-ful h-full object-cover transition-transform duration-700 group-hover:scale-[1.15]"
            priority
          />

          {/* Hover gradient */}
          <div className="absolute inset-0 bg-linear-150-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Floating button (top-right) */}
          <div className="absolute right-4 top-4 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-full transition-transform group-hover:scale-105 bg-primary text-black shadow-[0_0_25px_hsl(122_85%_50%/0.75)]">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          {/* Hover content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-primary text-xs uppercase tracking-wider">
              {project.category}
            </span>

            <h3 className="mt-2 mb-2 text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mb-4 text-sm text-muted-foreground line-clamp-2 max-w-[90%]">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
