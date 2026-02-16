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
      'Nostalgic Studio designed our website and delivered a professional, high-quality result. The collaboration was smooth and the final website exceeded expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Stefan Mills',
    role: 'CEO, A-z Small Movers',
    avatar: '/images/avatar.png',
    content:
      'The Nostalgic Studio team created a modern, professional website that matches our brand perfectly. The design quality and attention to detail were outstanding.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Matebogo Dorothy Mokgatla',
    role: 'Founder, InnovateIQ Investments',
    avatar: '/images/avatar.png',
    content:
      'Nostalgic Studio provided excellent website design services. The process was patient, detailed, and professional, and I would happily work with them again.',
    rating: 5,
  },
  {
    id: 4,
    name: 'LM MOLEPO',
    role: 'Founder, MMIH Group',
    avatar: '/images/avatar.png',
    content:
      'Nostalgic Studio designed our company website and delivered a functional, well-structured digital presence that we continue to grow.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Eon Smuts',
    role: 'Founder, SomeCandleShop',
    avatar: '/images/avatar.png',
    content:
      'Very professional digital design service. I am extremely happy with the final website.',
    rating: 5,
  },
]

export default function Testimonials() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://nostalgic-studio.co.za/#business',
        name: 'Nostalgic Studio',
        url: 'https://nostalgic-studio.co.za',
        logo: 'https://nostalgic-studio.co.za/images/logo/Logo.webp',
        image: 'https://nostalgic-studio.co.za/images/og-image.jpg',
        description:
          'Nostalgic Studio is a Johannesburg-based digital design agency crafting high-performing websites, branding, and UI/UX design for startups and growing businesses across South Africa.',
        telephone: '+27-82-448-3273',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Johannesburg',
          addressRegion: 'Gauteng',
          addressCountry: 'ZA',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Johannesburg',
          },
          {
            '@type': 'City',
            name: 'Bloemfontein',
          },
          {
            '@type': 'Country',
            name: 'South Africa',
          },
        ],
        sameAs: [
          'https://www.facebook.com/webengineers',
          'https://www.linkedin.com/company/110356396',
          'https://www.instagram.com/studionostalgic',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: testimonials.length.toString(),
          bestRating: '5',
          worstRating: '1',
        },
      },

      ...testimonials.map((t, index) => ({
        '@type': 'Review',
        '@id': `https://nostalgic-studio.co.za/#review-${index + 1}`,
        itemReviewed: {
          '@id': 'https://nostalgic-studio.co.za/#business',
        },
        author: {
          '@type': 'Person',
          name: t.name,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: t.rating.toString(),
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: t.content,
      })),
    ],
  }

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-padding bg-card overflow-hidden"
    >
      {/* JSON-LD Reviews Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="container-wide mx-auto mb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block"
        >
          Client Reviews
        </motion.span>

        <motion.h2
          id="testimonials-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
        >
          Do Clients Trust Nostalgic Studio?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-2xl mx-auto text-muted-foreground"
        >
          Startups and growing businesses trust Nostalgic Studio for web design,
          branding, and UI/UX design. Here’s what our clients say about working
          with us.
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden mask-linear-fade">
        <div className="flex gap-6 w-max animate-marquee hover:pause-animation">
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <article
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
              </article>
            ),
          )}
        </div>
      </div>

      {/* Marquee CSS */}
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
