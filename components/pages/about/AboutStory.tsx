'use client'

import MotionWrapper from '@/components/layout/MotionWrapper'

export default function AboutStory() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <MotionWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
          </MotionWrapper>

          <MotionWrapper
            delay={0.1}
            className="space-y-6 text-xl text-muted-foreground"
          >
            <p>
              Founded in 2016, Nostalgic Studio began with a simple belief:
              great design should be accessible to businesses of all sizes.
            </p>
            <p>
              Our name reflects our approach—combining timeless principles with
              modern digital innovation.
            </p>
            <p>
              Today, we&apos;ve helped over 150 businesses transform their digital
              presence. And we&apos;re just getting started.
            </p>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
