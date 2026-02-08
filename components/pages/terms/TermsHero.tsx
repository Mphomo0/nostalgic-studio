'use client'

import { motion } from 'motion/react'

export default function TermsHero() {
  return (
    <section
      className="pb-20 px-4 md:px-8"
      aria-label="Terms and Conditions introduction"
    >
      <div className="container-wide mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block"
        >
          Legal Information
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
        >
          Terms &amp; Conditions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          These Terms and Conditions govern the use of Nostalgic Studio Web
          Design&lsquo;s services and outline the rights, responsibilities, and
          obligations of both the Company and the Client.
        </motion.p>
      </div>
    </section>
  )
}
