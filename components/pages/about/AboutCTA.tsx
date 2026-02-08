'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MotionWrapper from '@/components/layout/MotionWrapper'
import { Button } from '@/components/ui/button'

export default function AboutCTA() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto text-center">
        <MotionWrapper>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Start Your Digital Journey with
            <br />
            <span className="text-gradient">Nostalgic Studio</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We help startups and growing businesses create stunning websites,
            seamless user experiences, and memorable brand identities.
            Let&apos;s work together to transform your ideas into impactful
            digital products.
          </p>

          <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
            <Link href="/contact" className="flex items-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </Link>
          </Button>

          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            Got questions? Chat with us or explore our portfolio to see how we
            turn concepts into results.
          </p>
        </MotionWrapper>
      </div>
    </section>
  )
}
