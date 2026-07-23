'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'motion/react'

import { FacebookIcon } from '@/components/ui/facebook'
import { InstagramIcon } from '@/components/ui/instagram'
import { LinkedinIcon } from '@/components/ui/linkedin'
import { WhatsAppIcon } from '@/components/ui/whatsapp'
import { Button } from '@/components/ui/button'

const infoItems = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@nostalgic-studio.co.za',
    link: 'mailto:info@nostalgic-studio.co.za',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '082 448 3273',
    link: 'tel:+27824483273',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Serving Johannesburg & Gauteng',
    link: null,
  },
]

const socialLinks = [
  {
    icon: FacebookIcon,
    href: 'https://www.facebook.com/webengineers',
    label: 'Facebook page of Nostalgic Studio',
  },
  {
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/company/110356396/',
    label: 'LinkedIn profile of Nostalgic Studio',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/studionostalgic',
    label: 'Instagram profile of Nostalgic Studio',
  },
]

export default function ContactInfo() {
  return (
    <section
      aria-label="Contact information of Nostalgic Studio"
      className="space-y-4 md:space-y-6"
    >
      <h2 className="sr-only">Contact Nostalgic Studio</h2>

      {infoItems.map((info, index) => {
        const content = (
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <info.icon className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{info.title}</h3>
              <p className="text-muted-foreground text-sm">{info.value}</p>
            </div>
          </div>
        )

        return info.link ? (
          <motion.a
            key={info.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            href={info.link}
            aria-label={info.title}
            className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
          >
            {content}
          </motion.a>
        ) : (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            aria-label={info.title}
            className="block p-6 rounded-2xl bg-card border border-border"
          >
            {content}
          </motion.div>
        )
      })}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: infoItems.length * 0.1 }}
        className="p-6 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <WhatsAppIcon className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">
              Prefer WhatsApp?
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Message us directly for a faster reply.
            </p>
            <Button asChild size="sm" variant="hero">
              <a
                href="https://wa.me/27824483273?text=Hi%2C%20I%27d%20like%20a%20free%20website%20review"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Message Us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-2xl bg-card border border-border"
        aria-label="Social media links for Nostalgic Studio"
      >
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <ul className="flex gap-3">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
              >
                <social.icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
