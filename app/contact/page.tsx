import type { Metadata } from 'next'
import ContactForm from '@/components/pages/contact/ContactForm'
import ContactInfo from '@/components/pages/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Quote',
  description: 'Contact Nostalgic Studio for a free consultation on web design, SEO, and branding services. Based in Johannesburg, South Africa.',
  keywords: [
    'contact Nostalgic Studio',
    'get a quote web design',
    'hire digital design agency',
    'startup web design consultation',
    'contact form South Africa',
    'web design quote Johannesburg',
  ],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/contact',
  },
  openGraph: {
    title: 'Contact Nostalgic Studio | Get a Free Quote',
    description: 'Ready to transform your digital presence? Contact us for a free consultation on web design and digital services.',
    url: 'https://www.nostalgic-studio.co.za/contact',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Nostalgic Studio',
    description: 'Get in touch with Nostalgic Studio for web design, branding, and digital design services.',
    url: 'https://nostalgic-studio.co.za/contact',
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-12 md:pt-32 md:pb-20 container mx-auto px-4 md:px-8">
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
          />
        </>
<header className="text-center mb-10 md:mb-16">
        <span className="text-primary font-medium text-sm uppercase tracking-tighter mb-4 block">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Let&apos;s Start Your <span className="text-primary">Project</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Ready to transform your digital presence? Fill out the form below
          and we&apos;ll get back to you within 24 hours.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
          <div className="p-4 bg-card rounded-xl border border-border">
            <p className="text-2xl font-bold text-foreground">24h</p>
            <p className="text-sm text-muted-foreground">Response Time</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <p className="text-2xl font-bold text-foreground">Free</p>
            <p className="text-sm text-muted-foreground">Consultation</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <p className="text-2xl font-bold text-foreground">100%</p>
            <p className="text-sm text-muted-foreground">Satisfaction</p>
          </div>
        </div>
      </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}
