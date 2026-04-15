'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Globe, Search, Zap, ShoppingBag, Palette, Share2, Megaphone, Server, Layout, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const serviceLinks = [
  { title: 'Web Design Johannesburg', href: '/services/web-design-johannesburg', icon: Globe },
  { title: 'SEO Services Johannesburg', href: '/services/seo-services-johannesburg', icon: Search },
  { title: 'Next.js Website Design', href: '/services/nextjs-website-design', icon: Zap },
  { title: 'Ecommerce Development', href: '/services/ecommerce-website-development', icon: ShoppingBag },
  { title: 'Branding Design', href: '/services/branding-design', icon: Palette },
  { title: 'Social Media Marketing', href: '/services/social-media-marketing', icon: Share2 },
  { title: 'Social Media Ads', href: '/services/social-media-ads', icon: Megaphone },
  { title: 'Web Hosting', href: '/services/web-hosting', icon: Server },
  { title: 'UX/UI Design', href: '/services/ux-ui-design', icon: Layout },
  { title: 'Web Maintenance', href: '/services/web-maintenance', icon: Settings },
]

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', dropdown: true },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Nostalgic Studio - Home">
            <Image
              src="/images/logo/Logo.webp"
              alt="Nostalgic Studio - Digital Design Agency Johannesburg"
              width={150}
              height={100}
              loading="eager"
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.path}>
                  <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 outline-none ${
                    pathname.startsWith('/services') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}>
                    {link.name} <ChevronDown size={14} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64 p-2 bg-background/95 backdrop-blur-xl border-border/50">
                    <DropdownMenuItem asChild className="focus:bg-primary/10">
                      <Link href="/services" className="w-full font-bold text-primary">All Services</Link>
                    </DropdownMenuItem>
                    <div className="h-px bg-border/50 my-1" />
                    {serviceLinks.map((service) => (
                      <DropdownMenuItem key={service.href} asChild className="focus:bg-primary/10 cursor-pointer">
                        <Link href={service.href} className="flex items-center gap-3 w-full py-2">
                          <service.icon size={16} className="text-primary" />
                          <span className="text-xs">{service.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`link-underline text-sm font-medium transition-colors duration-300 ${
                    pathname === link.path
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="hero" size="default">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-background border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-wide mx-auto px-4 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.path}>
              {link.dropdown ? (
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center justify-between text-lg font-medium py-2 transition-colors w-full ${
                      pathname.startsWith('/services') ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {link.name} <ChevronDown size={20} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div 
                    className={`flex flex-col gap-2 pl-4 border-l border-border overflow-hidden transition-all duration-300 ease-in-out ${
                      isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <Link href="/services" onClick={() => setIsOpen(false)} className="text-sm py-2 text-primary font-bold">All Services</Link>
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm py-2 text-muted-foreground hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 block transition-colors ${
                    pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Button asChild variant="hero" size="lg" className="mt-4">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Start a Project
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
