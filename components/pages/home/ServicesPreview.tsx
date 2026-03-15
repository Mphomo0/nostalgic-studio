'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowUpRight, Palette, Layout, Sparkles, Monitor } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Web Design Johannesburg',
    description:
      'Custom Next.js websites built for performance, speed, and high conversion rates in the South African market.',
    link: '/services#web-design',
  },
  {
    icon: Sparkles,
    title: 'UI/UX Design Agency',
    description:
      'User-centric interfaces and seamless digital experiences that drive engagement and business growth.',
    link: '/services#ui-ux',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description:
      'Iconic brand identities, logos, and visual systems that make your business memorable and trustworthy.',
    link: '/services#branding',
  },
  {
    icon: Monitor,
    title: 'Digital Marketing & SEO',
    description:
      'Dominating search results in Johannesburg with technical SEO, content strategy, and social media ads.',
    link: '/services#digital',
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block"
          >
            Our Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Digital Services That Drive Growth in South Africa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We offer premium digital solutions tailored for startups and established businesses 
            looking to scale in Johannesburg and beyond.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={service.link}
                className="group block p-8 md:p-10 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-glow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Explore All Services <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
