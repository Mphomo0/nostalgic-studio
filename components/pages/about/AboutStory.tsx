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
              Founded in 2016 and based in Johannesburg, South Africa, Nostalgic
              Studio started with a simple belief: exceptional digital design
              should be accessible to startups and growing businesses.
            </p>

            <p>
              Our name reflects our philosophy—blending timeless design
              principles with modern digital innovation to create websites,
              UI/UX, branding, and other digital products that help businesses
              succeed online.
            </p>

            <p>
              Since our founding, we have partnered with over 50+ businesses,
              helping them craft memorable brands, user-friendly websites, and
              engaging digital experiences. Today, we continue to serve clients
              locally and worldwide.
            </p>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
