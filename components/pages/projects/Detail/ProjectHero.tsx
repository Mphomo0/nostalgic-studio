'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Tag,
  Briefcase,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/portfolio-data'

interface PageProps {
  slug: string
}

export default function ProjectHero({ slug }: PageProps) {
  const router = useRouter()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <main className="py-96 md:py-128">
          <div className="container-wide mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <section className="min-h-dvw py-12 bg-background">
      <div className="container-wide mx-auto px-4 md:px-8 py-12">
        {/* Back Button */}
        <div className="py-18">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Button
              variant="ghost"
              onClick={() => router.push('/projects')}
              className="h-10 px-4 py-2 inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span className="leading-none">Back to Projects</span>
            </Button>
          </motion.div>
        </div>

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm uppercase block mb-4"
            >
              {project.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            <div>
              <User className="w-4 h-4 mb-2 text-primary/40" />
              <div className="text-sm text-muted-foreground">Client</div>
              <div className="font-medium">{project.client}</div>
            </div>

            <div>
              <Tag className="w-4 h-4 mb-2 text-primary" />
              <div className="text-sm text-muted-foreground">Category</div>
              <div className="font-medium">{project.category}</div>
            </div>

            <div>
              <Calendar className="w-4 h-4 mb-2 text-primary" />
              <div className="text-sm text-muted-foreground">Timeline</div>
              <div className="font-medium">{project.timeline}</div>
            </div>

            {project.role && (
              <div>
                <Briefcase className="w-4 h-4 mb-2 text-primary" />
                <div className="text-sm text-muted-foreground">My Role</div>
                <div className="font-medium">{project.role}</div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
