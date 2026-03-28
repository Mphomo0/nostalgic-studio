import React from 'react'

interface Takeaway {
  /** Short headline for the takeaway */
  point: string
  /** Optional supporting detail */
  detail?: string
}

interface KeyTakeawaysProps {
  title?: string
  takeaways: Takeaway[]
}

/**
 * KeyTakeaways — GEO-optimised summary block.
 * Renders a numbered list of key facts that AI engines can easily extract
 * and cite. Uses `data-geo-key-takeaways` for AI crawler identification.
 */
export default function KeyTakeaways({
  title = 'Key Takeaways',
  takeaways,
}: KeyTakeawaysProps) {
  return (
    <aside
      data-geo-key-takeaways
      aria-label={title}
      className="my-8 rounded-xl border border-border bg-muted/40 px-6 py-5"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <ol className="space-y-2 text-sm text-foreground">
        {takeaways.map((t, i) => (
          <li key={i} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary"
            >
              {i + 1}
            </span>
            <span>
              <strong className="font-semibold">{t.point}</strong>
              {t.detail && (
                <span className="text-muted-foreground"> — {t.detail}</span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </aside>
  )
}
