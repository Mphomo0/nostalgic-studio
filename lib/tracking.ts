/**
 * Client-side conversion tracking helpers.
 *
 * The Meta Pixel is initialised in app/layout.tsx with Next's
 * `afterInteractive` strategy, so `window.fbq` exists shortly after hydration.
 * A form can still be submitted before the snippet has run — on a slow
 * connection, or with the pixel blocked entirely — so `trackLead` retries
 * briefly rather than dropping the event, and gives up quietly if the pixel
 * never arrives.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Fires the Meta Pixel standard `Lead` event.
 *
 * `source` distinguishes the site's forms from one another in Events Manager,
 * so a Facebook custom conversion can target a single form if needed.
 */
export function trackLead(source: string) {
  if (typeof window === 'undefined') return

  const fire = () => {
    window.fbq?.('track', 'Lead', {
      content_name: source,
      content_category: 'Lead Generation',
    })
  }

  if (typeof window.fbq === 'function') {
    fire()
    return
  }

  // fbq not ready yet — retry briefly instead of dropping the event.
  let attempts = 0
  const interval = setInterval(() => {
    attempts++

    if (typeof window.fbq === 'function') {
      fire()
      clearInterval(interval)
    } else if (attempts > 20) {
      clearInterval(interval) // ~10s, give up quietly
    }
  }, 500)
}
