'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-heading"
      className="pb-12 md:pb-20 px-4 md:px-8"
    >
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block"
            >
              About Nostalgic Studio
            </motion.span>

            <motion.h1
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              What Is <span className="text-gradient">Nostalgic Studio?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Nostalgic Studio is a digital design agency based in South Africa
              that helps startups and growing businesses design websites, build
              strong brand identities, and create user-focused digital products
              through web design, UI/UX design, and branding services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                asChild
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Work With Us <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Nostalgic Studio digital design team collaborating on a project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
