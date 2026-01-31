'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function PortfolioHeader() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block mb-4 text-sm font-medium tracking-wider uppercase text-primary"
        >
          Featured Work
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold md:text-4xl lg:text-5xl text-foreground"
        >
          Projects We&apos;re Proud Of
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Button variant="outline" size="lg" asChild>
          <Link href="/portfolio">View All Projects</Link>
        </Button>
      </motion.div>
    </div>
  )
}
