'use client'

import { motion } from 'motion/react'

export default function ServicesHero() {
  return (
    <section
      className="pb-20 px-4 md:px-8"
      aria-label="Hero section introducing Nostalgic Studio services and design solutions"
    >
      <div className="container-wide mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block"
        >
          Our Services
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
        >
          Design Solutions That
          <br />
          <span className="text-gradient">Drive Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          We offer comprehensive digital solutions tailored for startups and
          growing businesses. Every service is designed to help you succeed.
        </motion.p>
      </div>
    </section>
  )
}
