'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-20 md:min-h-screen"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.25_145/0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(oklch(1_0_0/0.02)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="container-wide mx-auto px-4 md:px-8 relative z-10 py-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Digital Design Agency for Startups
            </span>
          </motion.div>

          {/* AEO-First H1 */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            What Is Nostalgic Studio?
            <br />
            <span className="text-gradient">A Digital Design Agency</span> for
            Startups
          </motion.h1>

          {/* Direct Answer Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Nostalgic Studio is a digital design agency based in South Africa
            that helps startups and growing businesses design high-converting
            websites, strong brand identities, and user-focused digital
            products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              variant="hero"
              size="lg"
              className="w-full sm:w-auto md:h-14 md:px-8"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start a Project <ArrowRight size={20} />
              </Link>
            </Button>

            <Button
              asChild
              variant="heroOutline"
              size="lg"
              className="w-full sm:w-auto md:h-14 md:px-8"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </motion.div>

          {/* Credibility Signals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
          >
            {[
              { value: '70+', label: 'Projects Completed' },
              { value: '50+', label: 'Clients Worldwide' },
              { value: '13+', label: 'Years of Experience' },
              { value: '3+', label: 'Team Members' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
