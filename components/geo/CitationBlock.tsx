import React from 'react'

interface CitationBlockProps {
  stat: string
  context: string
  source?: string
}

/**
 * AI-quotable statistic block.
 * Marked with data-geo-citable so AI crawlers identify this as citable content.
 */
export function CitationBlock({ stat, context, source }: CitationBlockProps) {
  return (
    <div
      data-geo-citable="true"
      aria-label={`Key statistic: ${stat} — ${context}`}
      className="my-6 border-l-4 border-primary pl-5 py-2"
    >
      <p className="text-2xl font-bold text-foreground">{stat}</p>
      <p className="mt-1 text-base text-muted-foreground">{context}</p>
      {source && (
        <p className="mt-1 text-xs text-muted-foreground opacity-60">
          Source: {source}
        </p>
      )}
    </div>
  )
}
