'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface PortfolioCardProps {
  project: {
    title: string
    category: string
    image: string
    slug: string
  }
  index: number
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group relative block overflow-hidden rounded-2xl bg-card"
      >
        {/* Image */}
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex items-end justify-between">
            <div>
              <span className="block mb-2 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold md:text-2xl text-foreground">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center justify-center w-12 h-12 scale-75 rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
