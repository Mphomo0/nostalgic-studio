'use client'

import { Target, Heart, Zap, Users } from 'lucide-react'
import MotionWrapper from '@/components/layout/MotionWrapper'

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure success by your success.',
  },
  {
    icon: Heart,
    title: 'Passion for Craft',
    description: 'Excellence is our standard.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Ahead of trends, grounded in fundamentals.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description: 'Your wins are our wins.',
  },
]

export default function AboutValues() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <MotionWrapper>
            <span className="text-primary text-sm uppercase tracking-wider block mb-4">
              Our Values
            </span>
            <h2 className="text-4xl font-bold">What Drives Us</h2>
          </MotionWrapper>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <MotionWrapper key={value.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition">
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
