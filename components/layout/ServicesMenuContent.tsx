'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { serviceLinks } from './nav-services'

// Loaded on demand by ServicesMenu so the Radix menu/popper code stays out of
// the initial bundle on every page.
export default function ServicesMenuContent({
  className,
  label,
}: {
  className: string
  label: string
}) {
  return (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger className={className}>
        {label} <ChevronDown size={14} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-64 p-2 bg-background/95 backdrop-blur-xl border-border/50"
      >
        <DropdownMenuItem asChild className="focus:bg-primary/10">
          <Link href="/services" className="w-full font-bold text-primary">
            All Services
          </Link>
        </DropdownMenuItem>
        <div className="h-px bg-border/50 my-1" />
        {serviceLinks.map((service) => (
          <DropdownMenuItem
            key={service.href}
            asChild
            className="focus:bg-primary/10 cursor-pointer"
          >
            <Link
              href={service.href}
              className="flex items-center gap-3 w-full py-2"
            >
              <service.icon size={16} className="text-primary" />
              <span className="text-xs">{service.title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
