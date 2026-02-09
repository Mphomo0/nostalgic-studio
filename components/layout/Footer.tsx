'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { FacebookIcon } from '@/components/ui/facebook'
import { InstagramIcon } from '@/components/ui/instagram'
import { LinkedinIcon } from '@/components/ui/linkedin'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Projects', path: '/projects' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Web Design', path: '/services#web-design' },
      { name: 'UI/UX Design', path: '/services#ui-ux' },
      { name: 'Branding', path: '/services#branding' },
      { name: 'Digital Design', path: '/services#digital' },
    ],
  }

  const socialLinks = [
    {
      icon: FacebookIcon,
      href: 'https://www.facebook.com/webengineers',
      label: 'facebook',
    },
    {
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/company/110356396/',
      label: 'LinkedIn',
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/studionostalgic',
      label: 'Instagram',
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Main Footer */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/logo/Logo.webp"
                alt="Logo"
                width={150}
                height={100}
                className="w-auto h-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We craft digital experiences that help startups and businesses
              stand out and grow.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">
              Start a Project
            </h4>
            <p className="text-muted-foreground text-sm mb-6">
              Ready to bring your vision to life? Let&apos;s create something
              amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              Get in Touch <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Nostalgic Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
