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
          <h2 className="text-4xl font-bold mb-6">
            Let&apos;s Create Something
            <br />
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you&apos;re starting from scratch or leveling up, we&apos;re here to
            help.
          </p>

          <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
            <Link href="/contact" className="flex items-center gap-2">
              Start a Conversation <ArrowRight size={20} />
            </Link>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  )
}
