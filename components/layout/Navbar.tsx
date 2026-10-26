'use client'

import { useState, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ServicesMenu from './ServicesMenu'
import { serviceLinks } from './nav-services'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', dropdown: true },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Nostalgic Studio - Home"
          >
            <Image
              src="/images/logo/Logo.webp"
              alt="Nostalgic Studio - Digital Design Agency Johannesburg"
              width={150}
              height={100}
              sizes="150px"
              priority
              className="w-60 h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <ServicesMenu
                  key={link.path}
                  label={link.name}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm ${
                    pathname.startsWith('/services')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                />
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
              ),
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="hero" size="default">
              <Link href="/free-seo-audit">Get a Free SEO Audit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-background border-b border-border overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
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
                      pathname.startsWith('/services')
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.name}{' '}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`flex flex-col gap-2 pl-4 border-l border-border overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                      isServicesOpen
                        ? 'max-h-125 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <Link
                      href="/services"
                      onClick={() => setIsOpen(false)}
                      className="text-sm py-2 text-primary font-bold"
                    >
                      All Services
                    </Link>
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
                    pathname === link.path
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Button asChild variant="hero" size="lg" className="mt-4">
            <Link href="/free-seo-audit" onClick={() => setIsOpen(false)}>
              Get a Free SEO Audit
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
})

export default Navbar
