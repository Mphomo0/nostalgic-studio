'use client'

import { m } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function PortfolioHeader() {
  return (
    <div
      aria-labelledby="portfolio-heading"
      className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12"
    >
      <div>
        <m.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block mb-4 text-sm font-medium tracking-wider uppercase text-primary"
        >
          Our Work
        </m.span>

        <m.h2
          id="portfolio-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold md:text-4xl lg:text-5xl text-foreground"
        >
          What Projects Has Nostalgic Studio Worked On?
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-xl text-muted-foreground"
        >
          Explore websites, brand identities, and digital products we’ve
          designed for startups and growing businesses across different
          industries.
        </m.p>
      </div>

      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Button
          variant="outline"
          size="lg"
          asChild
          className="w-full md:w-auto"
        >
          <Link href="/projects">View All Projects</Link>
        </Button>
      </m.div>
    </div>
  )
}
