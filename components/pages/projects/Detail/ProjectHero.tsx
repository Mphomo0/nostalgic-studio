'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowLeft, Calendar, User, Tag, Briefcase } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { projects } from '@/lib/portfolio-data'

export default function ProjectHero({ slug }: { slug: string }) {
  const router = useRouter()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!project) return null

  return (
    <section className="relative w-full bg-background pt-16 md:pt-24">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 mt-16"
        >
          <Button
            variant="ghost"
            onClick={() => router.push('/projects')}
            className="px-4 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mb-8 md:mb-12"
        >
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {project.category}
          </span>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] wrap-break-words">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground/90 sm:text-xl lg:text-2xl max-w-2xl leading-relaxed whitespace-normal wrap-break-words">
            {project.description}
          </p>
        </motion.header>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-12 mb-20">
          {/* Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="group relative aspect-16/10 sm:aspect-video w-full overflow-hidden rounded-2xl border bg-muted/30 shadow-2xl transition-all hover:border-primary/50"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Meta */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-1 gap-y-6 gap-x-12 border-t pt-8 sm:grid-cols-2 lg:flex lg:flex-col lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0"
          >
            <MetaItem icon={User} label="Client" value={project.client} />
            <MetaItem
              icon={Calendar}
              label="Timeline"
              value={project.timeline}
            />
            <MetaItem icon={Tag} label="Category" value={project.category} />

            {project.role && (
              <MetaItem icon={Briefcase} label="Role" value={project.role} />
            )}
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3 w-full">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-semibold leading-tight">{value}</p>
      </div>
    </div>
  )
}
