'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'motion/react'

import { FacebookIcon } from '@/components/ui/facebook'
import { InstagramIcon } from '@/components/ui/instagram'
import { LinkedinIcon } from '@/components/ui/linkedin'

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
    value: 'Location available upon request',
    link: '#',
  },
]

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

export default function ContactInfo() {
  return (
    <div className="space-y-4 md:space-y-6">
      {infoItems.map((info, index) => (
        <motion.a
          key={info.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          href={info.link}
          className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <info.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{info.title}</h3>
              <p className="text-muted-foreground text-sm">{info.value}</p>
            </div>
          </div>
        </motion.a>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-2xl bg-card border border-border"
      >
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
