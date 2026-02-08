'use client'

import { Target, Heart, Zap, Users } from 'lucide-react'
import MotionWrapper from '@/components/layout/MotionWrapper'

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description:
      'We measure success by your business growth, conversions, and customer satisfaction.',
  },
  {
    icon: Heart,
    title: 'Passion for Craft',
    description:
      'We bring dedication and attention to detail to every website, UI/UX, and branding project.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description:
      'We combine creative thinking with cutting-edge digital tools to keep your brand ahead.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description:
      'We work closely with startups and growing businesses, ensuring their vision guides every decision.',
  },
]

export default function AboutValues() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <MotionWrapper>
            <span className="text-primary text-sm uppercase tracking-wider block mb-4">
              Our Values
            </span>
            <h2 className="text-4xl font-bold">
              What Drives Nostalgic Studio?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              These core principles guide how we help startups and businesses
              create digital experiences that convert, inspire, and grow.
            </p>
          </MotionWrapper>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <MotionWrapper key={value.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
