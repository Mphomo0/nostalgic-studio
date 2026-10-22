'use client'

import { m } from 'motion/react'
import { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function MotionWrapper({
  children,
  delay = 0,
  className,
}: MotionWrapperProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </m.div>
  )
}
