import React from 'react'

interface AboutThisPageProps {
  /** One or two sentence plain-English summary AI engines can lift verbatim */
  summary: string
  /** Optional list of topics / entities this page covers */
  covers?: string[]
  /** Last updated date string, e.g. "March 2025" */
  lastUpdated?: string
}

/**
 * AboutThisPage — AI-visibility summary block.
 *
 * Placed near the top of a page it gives AI crawlers (Perplexity, ChatGPT,
 * Gemini) an unambiguous, quotable summary of what the page is about.
 * Uses `data-geo-summary` so it can be targeted by crawlers.
 */
export default function AboutThisPage({
  summary,
  covers,
  lastUpdated,
}: AboutThisPageProps) {
  return (
    <section
      data-geo-summary
      aria-label="About this page"
      className="mx-auto mb-8 max-w-3xl rounded-xl border border-border bg-muted/30 px-6 py-5"
    >
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        About This Page
      </p>
      <p className="text-sm leading-relaxed text-foreground">{summary}</p>

      {covers && covers.length > 0 && (
        <ul
          aria-label="Topics covered"
          className="mt-3 flex flex-wrap gap-2"
        >
          {covers.map((topic) => (
            <li
              key={topic}
              className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary"
            >
              {topic}
            </li>
          ))}
        </ul>
      )}

      {lastUpdated && (
        <p className="mt-3 text-[11px] text-muted-foreground">
          Last updated: {lastUpdated}
        </p>
      )}
    </section>
  )
}
