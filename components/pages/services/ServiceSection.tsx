'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Check, Layout, Sparkles, Palette, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Service } from './types'

interface Props {
  service: Service
  reverse?: boolean
}

const ICON_MAP = {
  layout: Layout,
  sparkles: Sparkles,
  palette: Palette,
  monitor: Monitor,
}

const ServiceSection = ({ service, reverse }: Props) => {
  const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Layout

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reverse ? 'lg:grid-flow-col-dense' : ''
      }`}
    >
      {/* Content */}
      <div className={reverse ? 'lg:col-start-2' : ''}>
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>

        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          {service.description}
        </p>

        <ul className="grid grid-cols-2 gap-3 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button asChild size="lg">
          <Link href="/contact" className="flex items-center gap-2">
            Get Started <ArrowRight size={18} />
          </Link>
        </Button>
      </div>

      {/* Image */}
      <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
        <div className="aspect-3/2 rounded-2xl overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
      </div>
    </motion.div>
  )
}

export default ServiceSection
