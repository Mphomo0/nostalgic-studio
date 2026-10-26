'use client'

import { lazy, Suspense, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const loadMenu = () => import('./ServicesMenuContent')
const ServicesMenuContent = lazy(loadMenu)

/**
 * Desktop "Services" dropdown. Renders a plain button until the visitor shows
 * intent (hover / focus / touch preloads the Radix chunk; click or ArrowDown
 * opens the menu), so the dropdown library isn't part of every page's JS.
 */
export default function ServicesMenu({
  className,
  label,
}: {
  className: string
  label: string
}) {
  const [requested, setRequested] = useState(false)

  const trigger = (
    <button
      type="button"
      className={className}
      aria-haspopup="menu"
      aria-expanded="false"
      onPointerEnter={loadMenu}
      onFocus={loadMenu}
      onTouchStart={loadMenu}
      onClick={() => setRequested(true)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setRequested(true)
        }
      }}
    >
      {label} <ChevronDown size={14} />
    </button>
  )

  if (!requested) return trigger

  return (
    <Suspense fallback={trigger}>
      <ServicesMenuContent className={className} label={label} />
    </Suspense>
  )
}
