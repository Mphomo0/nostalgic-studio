'use client'

import { motion } from 'motion/react'
import { ProcessStep } from './types'

interface Props {
  steps: ProcessStep[]
}

const ProcessSection = ({ steps }: Props) => {
  return (
    <section
      className="section-padding"
      aria-label="Step-by-step process of how Nostalgic Studio works"
    >
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm uppercase tracking-wider mb-4 block"
          >
            Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            How We Work
          </motion.h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div
                className="text-6xl font-bold text-primary/20 mb-4"
                aria-hidden="true"
              >
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProcessSection
