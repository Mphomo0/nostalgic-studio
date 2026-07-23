'use client'

import { useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const PHONE = '+27824483273'
const WHATSAPP_URL = `https://wa.me/27824483273?text=Hi%20Nostalgic%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project.`
const TEL_URL = `tel:${PHONE}`

function trackEvent(action: string, label: string) {
  window.gtag?.('event', action, { event_category: 'contact', event_label: label })
}

export default function FloatingContact() {
  const [waHovered, setWaHovered] = useState(false)
  const [phHovered, setPhHovered] = useState(false)

  return (
    <div
      aria-label="Quick contact"
      className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3"
    >
      {/* WhatsApp */}
      <div className="flex items-center gap-3">
        {/* Label */}
        <span
          className="text-xs font-medium text-foreground/80 bg-card border border-border px-3 py-1.5 rounded-full shadow-lg pointer-events-none select-none transition-all duration-300"
          style={{
            opacity: waHovered ? 1 : 0,
            transform: waHovered ? 'translateX(0) scale(1)' : 'translateX(8px) scale(0.95)',
          }}
        >
          Chat on WhatsApp
        </span>

        {/* Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Chat with us on WhatsApp"
          onClick={() => trackEvent('whatsapp_click', 'floating_whatsapp')}
          onMouseEnter={() => setWaHovered(true)}
          onMouseLeave={() => setWaHovered(false)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
          style={{
            background: '#25D366',
            boxShadow: waHovered
              ? '0 0 0 0 rgba(37,211,102,0), 0 8px 32px rgba(37,211,102,0.5)'
              : '0 4px 20px rgba(37,211,102,0.35)',
            transform: waHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          {/* Pulse ring */}
          <span
            className="absolute inset-0 rounded-full"
            style={{ animation: 'wa-pulse 2.5s ease-out infinite' }}
          />
          <WhatsAppIcon />
        </a>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3">
        {/* Label */}
        <span
          className="text-xs font-medium text-foreground/80 bg-card border border-border px-3 py-1.5 rounded-full shadow-lg pointer-events-none select-none transition-all duration-300"
          style={{
            opacity: phHovered ? 1 : 0,
            transform: phHovered ? 'translateX(0) scale(1)' : 'translateX(8px) scale(0.95)',
          }}
        >
          Call 082 448 3273
        </span>

        {/* Button */}
        <a
          href={TEL_URL}
          aria-label="Call Nostalgic Studio"
          onClick={() => trackEvent('phone_click', 'floating_phone')}
          onMouseEnter={() => setPhHovered(true)}
          onMouseLeave={() => setPhHovered(false)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          style={{
            background: 'oklch(0.32 0 0)',
            border: '1px solid oklch(0.42 0 0)',
            boxShadow: phHovered
              ? '0 0 0 0 oklch(0.7 0.25 145 / 0), 0 8px 32px oklch(0.7 0.25 145 / 0.35)'
              : '0 4px 20px oklch(0 0 0 / 0.4)',
            transform: phHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <PhoneIcon active={phHovered} />
        </a>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      width="26"
      height="26"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon({ active }: { active: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
      aria-hidden="true"
      style={{
        color: active ? 'oklch(0.7 0.25 145)' : 'oklch(0.85 0 0)',
        transition: 'color 0.2s',
        animation: active ? 'phone-ring 0.5s ease-in-out' : 'none',
      }}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.82 19.79 19.79 0 01.44 2.18 2 2 0 012.42 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}
