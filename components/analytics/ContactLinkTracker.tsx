'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/tracking'

/**
 * Tracks clicks on every phone, email and WhatsApp link site-wide with a
 * single delegated listener, so the many server-rendered pages that contain
 * `tel:` / `mailto:` / `wa.me` links need no per-link wiring.
 *
 * Events: `phone_click`, `email_click`, `whatsapp_click`.
 * `link_location` is `data-track-location` on the link if set (e.g. the
 * floating buttons), otherwise the page path the click happened on.
 */
export default function ContactLinkTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest('a')
      const href = link?.getAttribute('href')
      if (!link || !href) return

      let name: string | null = null
      if (href.startsWith('tel:')) name = 'phone_click'
      else if (href.startsWith('mailto:')) name = 'email_click'
      else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
        name = 'whatsapp_click'
      }
      if (!name) return

      trackEvent(name, {
        link_location:
          link.getAttribute('data-track-location') ?? window.location.pathname,
        page_path: window.location.pathname,
      })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
