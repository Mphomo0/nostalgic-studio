'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(122_85%_50%/0.15)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-wide mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6"
          >
            How Do You Start a Project
            <br />
            <span className="text-gradient">With Nostalgic Studio?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            You can start a project by contacting Nostalgic Studio to discuss
            your website, branding, or UI/UX design needs. We work with startups
            and growing businesses to plan, design, and launch high-quality
            digital products.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="hero"
              size="xl"
              className="animate-pulse-glow w-full sm:w-auto"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project <ArrowRight size={20} />
              </Link>
            </Button>

            <Button
              asChild
              variant="heroOutline"
              size="xl"
              className="w-full sm:w-auto"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
