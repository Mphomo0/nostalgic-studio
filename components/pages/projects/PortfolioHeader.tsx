'use client'

import { motion } from 'motion/react'

export default function PortfolioHeader() {
  return (
    <section
      className="pt-24 pb-12 md:pt-32 md:pb-16"
      aria-label="Portfolio header section showcasing featured projects of Nostalgic Studio"
    >
      <div className="container-wide mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-primary text-sm uppercase tracking-wider block mb-4"
          >
            Our Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Featured Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl"
          >
            Explore our portfolio of innovative designs and digital solutions
            that help businesses thrive in the modern world.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
