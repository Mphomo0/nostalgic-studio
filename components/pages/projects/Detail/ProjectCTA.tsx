'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ProjectCTA() {
  return (
    <section className="relative py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

      <div className="relative container-wide mx-auto px-4 md:px-8 text-center py-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight"
        >
          Like What You See?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Let&apos;s create something amazing together.
          <br className="hidden sm:block" />
          &nbsp;Reach out to start your project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center py-8"
        >
          <Button
            asChild
            size="lg"
            variant="hero"
            className="px-8 h-12 text-base font-semibold
              shadow-[0_0_40px_hsl(var(--primary)/0.45)]
              hover:shadow-[0_0_60px_hsl(var(--primary)/0.7)]
              transition-shadow"
          >
            <Link href="/contact">Start a Project</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
