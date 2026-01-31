'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ohentse Diseko',
    role: 'Marketing Manager, Sozim Trading and Consultancy',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content:
      'Wow, thank you for the fantastic 5-star review! I truly loved collaborating with you on your website and am so glad you’re happy with how everything turned out.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Stefan Mills',
    role: 'CEO, A-z Small Movers',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    content:
      'I am absolutely thrilled with my new website! The design team did an outstanding job — the site looks modern, professional, and exactly how I envisioned it. They were attentive to my needs, easy to communicate with, and delivered everything on time.. Highly recommended to anyone looking for a reliable and creative web design team!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Matebogo Dorothy Mokgatla',
    role: 'Founder, InnovateIQ Investments',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content:
      'I am very happy with the website services I have received from Mpho. His attention to deal and patience is the best and I will be happy to use his services again.',
    rating: 5,
  },
  {
    id: 4,
    name: 'LM MOLEPO',
    role: 'Founder, MMIH Group',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content:
      'Nostalgic Studio helped us design the MMIH Group company website. We now have a functional website and will continue to develop it together. Their customer service is unmatched. I highly recommend them.',
    rating: 5,
  },
  {
    id: 5,
    name: 'LM MOLEPO',
    role: 'Founder, MMIH Group',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: 'Very professional, I&lsquo;m extremely happy with the work.',
    rating: 5,
  },
]

export default function Testimonials() {
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
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Trusted by Innovators
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to
            say.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                “{testimonial.content}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
