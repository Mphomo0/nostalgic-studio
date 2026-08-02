'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Fires a Meta Pixel PageView on client-side route changes.
 *
 * The inline pixel snippet in app/layout.tsx runs once and fires the PageView
 * for the initial load. App Router navigations are client-side, so that script
 * never re-runs and Meta sees no pageview for any page reached by clicking a
 * link — which also leaves Pixel Helper reporting "no pixels have fired on
 * current page". This re-fires it on each route change, skipping the first
 * render so the initial PageView is not double-counted.
 *
 * Deliberately keyed on pathname only: useSearchParams would require a Suspense
 * boundary and opt pages out of static rendering, which this site relies on.
 */
export default function PixelPageView() {
  const pathname = usePathname()
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  return null
}
