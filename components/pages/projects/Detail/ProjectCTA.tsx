'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ProjectCTA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

      <div className="relative px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="
            mb-4 sm:mb-6
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold tracking-tight text-foreground
          "
        >
          Like What You See?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="
            mx-auto mb-10 sm:mb-12
            
            text-base sm:text-lg md:text-xl
            leading-relaxed text-muted-foreground
          "
        >
          Let&apos;s create something amazing together.
          <br className="hidden sm:block" />
          Reach out to start your project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <Button
            asChild
            className="w-full sm:w-auto min-w-50 px-10 h-14 text-lg font-semibold rounded-full hover-glow"
          >
            <Link href="/contact">Start a Project</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
