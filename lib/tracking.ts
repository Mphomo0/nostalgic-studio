/**
 * Client-side conversion tracking helpers.
 *
 * The Meta Pixel is initialised in app/layout.tsx. It loads with Next's
 * `lazyOnload` strategy, so `window.fbq` only exists after the window load
 * event — by the time a user submits a form it is there, but the guard below
 * keeps a blocked or still-loading pixel from throwing.
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
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return

  window.fbq('track', 'Lead', {
    content_name: source,
    content_category: 'Lead Generation',
  })
}
