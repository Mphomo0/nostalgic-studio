/**
 * Client-side conversion tracking helpers.
 *
 * Two destinations:
 *  - Google Analytics 4 (`trackEvent`, and `trackLead` via `generate_lead`)
 *  - Meta Pixel (`trackLead`, standard `Lead` event)
 *
 * Both tags load with Next's `lazyOnload` strategy, so a visitor can click or
 * submit before either snippet has run. GA4 events are therefore pushed onto
 * `window.dataLayer`, which gtag.js drains when it loads, so nothing is lost.
 * The Meta Pixel has no such queue before its snippet runs, so `trackLead`
 * retries briefly and gives up quietly if the pixel never arrives (blocked).
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

type EventParams = Record<string, string | number | boolean>

/**
 * Sends a GA4 event. Safe to call before gtag.js has loaded.
 *
 * gtag.js only recognises commands pushed as an `arguments` object (not a
 * plain array), so the fallback mirrors the official snippet exactly.
 */
export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params)
    return
  }

  queueGtagCommand('event', name, params)
}

// Must be a `function` (not an arrow) so `arguments` exists; gtag.js ignores
// commands pushed as plain arrays.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function queueGtagCommand(..._command: unknown[]) {
  window.dataLayer = window.dataLayer || []
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments)
}

/**
 * Records a lead in GA4 (`generate_lead`, a GA4 recommended event) and fires
 * the Meta Pixel standard `Lead` event.
 *
 * `source` distinguishes the site's forms from one another — it becomes the
 * `form_type` parameter in GA4 and `content_name` in Events Manager, so a
 * conversion can target a single form if needed.
 */
export function trackLead(source: string) {
  if (typeof window === 'undefined') return

  trackEvent('generate_lead', { form_type: source })

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
