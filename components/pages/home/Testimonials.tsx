'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ohentse Diseko',
    role: 'Marketing Manager, Sozim Trading and Consultancy',
    avatar: '/images/avatar.png',
    content:
      'Wow, thank you for the fantastic 5-star review! I truly loved collaborating with you on your website and am so glad you’re happy with how everything turned out.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Stefan Mills',
    role: 'CEO, A-z Small Movers',
    avatar: '/images/avatar.png',
    content:
      'I am absolutely thrilled with my new website! The design team did an outstanding job — the site looks modern, professional, and exactly how I envisioned it.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Matebogo Dorothy Mokgatla',
    role: 'Founder, InnovateIQ Investments',
    avatar: '/images/avatar.png',
    content:
      'I am very happy with the website services I have received from Mpho. His attention to detail and patience is the best and I will be happy to use his services again.',
    rating: 5,
  },
  {
    id: 4,
    name: 'LM MOLEPO',
    role: 'Founder, MMIH Group',
    avatar: '/images/avatar.png',
    content:
      'Nostalgic Studio helped us design the MMIH Group company website. We now have a functional website and will continue to develop it together.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Eon Smuts',
    role: 'Founder, SomeCandleShop',
    avatar: '/images/avatar.png',
    content: 'Very professional, I&apos;m extremely happy with the work.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container-wide mx-auto mb-12 text-center">
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
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden mask-linear-fade">
        <div className="flex gap-6 w-max animate-marquee hover:pause-animation">
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-87.5 md:w-112.5 p-8 rounded-2xl bg-background border border-border shrink-0"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 line-clamp-4">
                  “{testimonial.content}”
                </p>

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
                    <div className="text-sm text-muted-foreground truncate max-w-50">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Add custom CSS for marquee if not in globals */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
        .mask-linear-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  )
}
