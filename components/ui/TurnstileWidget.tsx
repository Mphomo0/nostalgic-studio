'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string
      remove: (widgetId?: string) => void
    }
  }
}

interface TurnstileWidgetProps {
  /** Called with a fresh token, or '' when the token expires or the challenge errors. */
  onToken: (token: string) => void
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

/**
 * Cloudflare Turnstile challenge. The script loads only on pages that mount a
 * form, not site-wide.
 *
 * Tokens are single-use. To get a fresh challenge after a submit attempt that
 * reached the server, remount this component by changing its `key`.
 */
export default function TurnstileWidget({ onToken }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const onTokenRef = useRef(onToken)
  const [scriptReady, setScriptReady] = useState(false)

  useEffect(() => {
    onTokenRef.current = onToken
  }, [onToken])

  const handleReady = useCallback(() => setScriptReady(true), [])

  useEffect(() => {
    if (!scriptReady || !SITE_KEY || !containerRef.current || !window.turnstile) return

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      theme: 'auto',
      callback: (token: string) => onTokenRef.current(token),
      'expired-callback': () => onTokenRef.current(''),
      'error-callback': () => onTokenRef.current(''),
    })

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
      }
      widgetIdRef.current = null
    }
  }, [scriptReady])

  if (!SITE_KEY) {
    return (
      <p className="text-xs text-destructive" role="alert">
        Security check is unavailable. Please email info@nostalgic-studio.co.za.
      </p>
    )
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={handleReady}
      />
      <div ref={containerRef} />
    </>
  )
}
