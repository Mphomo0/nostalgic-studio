'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CTASection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-background border border-primary/20 p-12 md:p-16 text-center overflow-hidden glow-box"
        >
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-125 h-75 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>

            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <Link href="/contact" className="flex items-center gap-2">
                Get a Free Quote <ArrowUpRight size={20} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
