'use client'

import React, { useState } from 'react'

export interface FAQ {
  question: string
  answer: string
}

interface FaqSectionProps {
  faqs: FAQ[]
  title?: string
}

/**
 * Reusable FAQ accordion with built-in FAQPage JSON-LD schema injection.
 * Renders accessible <details>/<summary> markup for AEO answer-box eligibility.
 */
export function FaqSection({ faqs, title = 'Frequently Asked Questions' }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto" aria-label={title}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2 className="text-3xl font-bold text-foreground mb-8">{title}</h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                id={`faq-btn-${index}`}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 font-medium text-foreground hover:bg-muted/50 transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`text-muted-foreground transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
                hidden={!isOpen}
                className="px-6 pb-5 pt-1 text-muted-foreground text-sm leading-relaxed"
              >
                {faq.answer}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
