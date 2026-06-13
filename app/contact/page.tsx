import type { Metadata } from 'next'

export const dynamic = 'force-static'

import ContactForm from '@/components/pages/contact/ContactForm'
import ContactInfo from '@/components/pages/contact/ContactInfo'
import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Clock, MapPin, Phone, Mail, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { breadcrumbSchema, faqPageSchema } from '@/app/structured-data/schemas'

export const metadata: Metadata = {
  title: 'Get a Free Quote | Web Design & SEO Agency Johannesburg',

  description:
    'Free consultation for web design, SEO & branding in Johannesburg. Fast 24h response. Startups from R3,500. Get your project started today.',

  keywords: [
    'contact Nostalgic Studio',
    'get a quote web design',
    'hire digital design agency',
    'startup web design consultation',
    'contact form South Africa',
    'web design quote Johannesburg',
    'free web design consultation Johannesburg',
    'SEO consultation South Africa',
  ],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/contact',
    languages: {
      'en-ZA': 'https://www.nostalgic-studio.co.za/contact',
      'x-default': 'https://www.nostalgic-studio.co.za/contact',
    },
  },
  openGraph: {
    title: 'Get a Free Quote | Web Design & SEO Agency Johannesburg',
    description: 'Free consultation for web design, SEO & branding in Johannesburg. Fast 24h response. Based in South Africa. Start from R3,500.',
    url: 'https://www.nostalgic-studio.co.za/contact',
    siteName: 'Nostalgic Studio',
    type: 'website',
    images: [{ url: 'https://www.nostalgic-studio.co.za/images/og-image.jpg', width: 1200, height: 630, alt: 'Free Web Design Quote Johannesburg — Nostalgic Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@studionostalgic',
    creator: '@studionostalgic',
    title: 'Get a Free Quote | Web Design & SEO Agency Johannesburg',
    description: 'Free consultation for web design, SEO & branding in Johannesburg. Fast 24h response. Start from R3,500.',
    images: ['https://www.nostalgic-studio.co.za/images/og-image.jpg'],
  },
}

export default function ContactPage() {
  const contactFaqs = [
    {
      question: 'How much does a website cost in South Africa?',
      answer: 'Our web design projects start from R3,500 for simple brochure sites and range to R35,000+ for custom e-commerce platforms. During your free consultation, we provide a fixed quote based on your specific requirements. There are no hourly rates — you get a clear, upfront price.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Most projects are completed within 4–8 weeks from the date of approval. Simple brochure websites can be delivered in as little as 2 weeks. E-commerce platforms and complex custom builds typically take 6–10 weeks. We always agree on a timeline before starting.'
    },
    {
      question: 'Do you work with clients outside Johannesburg?',
      answer: 'Yes. While we are based in Johannesburg, Gauteng, we work with clients across South Africa including Cape Town, Durban, and Pretoria. All project communication happens via video call and email, so location is never a barrier to working together.'
    },
    {
      question: 'What information do I need to provide to get started?',
      answer: 'To get a quote, we just need the basics: your business type, what the website needs to do (e.g. generate leads, sell products, showcase services), your target audience, and an approximate budget range. We handle everything else from there.'
    },
    {
      question: 'Do you offer SEO services in Johannesburg?',
      answer: 'Yes, we offer comprehensive SEO services including technical SEO, local SEO, content strategy, and GEO (Generative Engine Optimization) for businesses in Johannesburg and across South Africa.'
    },
    {
      question: 'How quickly do you respond to enquiries?',
      answer: 'We respond to all enquiries within 24 hours, usually much sooner. For urgent projects, we recommend calling us directly at 082 448 3273 for an immediate response.'
    },
  ]

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': 'https://www.nostalgic-studio.co.za/contact',
      url: 'https://www.nostalgic-studio.co.za/contact',
      name: 'Get a Free Quote | Web Design & SEO Agency Johannesburg',
      description: 'Free consultation for web design, SEO & branding in Johannesburg. Fast 24h response. Start from R3,500.',
      isPartOf: { '@id': 'https://www.nostalgic-studio.co.za/#website' },
      publisher: { '@id': 'https://www.nostalgic-studio.co.za/#organization' },
    },
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]),
    faqPageSchema(contactFaqs),
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-12 md:pt-32 md:pb-20 container mx-auto px-4 md:px-8">
        <>
          {schemas.map((s, i) => (
            <Script key={i} id={`schema-contact-${i}`} type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
          ))}
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
            and we&apos;ll get back to you within 24 hours. Free, no-obligation consultation.
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

        {/* Service Areas & Business Info - Server rendered for SEO */}
        <section className="mt-20 border-t border-border pt-16" aria-labelledby="info-heading">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 id="info-heading" className="text-2xl font-bold mb-6">Our Service Areas</h2>
              <p className="text-muted-foreground mb-6">
                Based in Johannesburg, we serve clients across South Africa. Our team works remotely with clients
                throughout Gauteng and beyond via video calls, email, and project management tools.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Johannesburg', 'Sandton', 'Midrand', 'Pretoria',
                  'Cape Town', 'Durban', 'Randburg', 'Soweto',
                  'Roodepoort', 'Centurion', 'Fourways', 'Bryanston',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Business Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">Monday – Friday: 08:00 – 17:00</p>
                    <p className="text-sm text-muted-foreground">Saturday – Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+27824483273" className="text-sm text-muted-foreground hover:text-primary transition-colors">082 448 3273</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:info@nostalgic-studio.co.za" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@nostalgic-studio.co.za</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Google Business Profile</h3>
                    <a href="https://www.google.com/search?q=Nostalgic+Studio+Johannesburg" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Find us on Google
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mt-16" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="text-xl font-bold mb-6 text-center">Why Choose Nostalgic Studio?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: CheckCircle2, text: '70+ Projects Delivered' },
              { icon: CheckCircle2, text: '13+ Years Experience' },
              { icon: CheckCircle2, text: 'Fixed-Price Quotes' },
              { icon: CheckCircle2, text: 'Based in Johannesburg' },
            ].map((item) => (
              <div key={item.text} className="p-4 bg-card rounded-xl border border-border text-center">
                <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-semibold text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mt-20 border-t border-border pt-16" aria-labelledby="process-heading">
          <h2 id="process-heading" className="text-3xl font-bold text-center mb-12">
            How We Work With You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Discovery Call</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We start with a free 30-minute consultation to understand your business goals, target audience, and project requirements. There is no obligation — just a focused conversation about what you want to achieve online.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Proposal & Quote</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Within 24 hours of your enquiry, we send a detailed project proposal outlining the scope of work, timeline, deliverables, and a fixed price. No hidden fees — you know exactly what you are paying for before we begin.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Design & Launch</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Once approved, we move into design and development. Most websites launch within 4–8 weeks. You receive regular progress updates and have full input at every stage. After launch, we provide 30-day post-launch support at no additional cost.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema */}
        <section className="mt-16" aria-labelledby="contact-faq-heading">
          <h2 id="contact-faq-heading" className="text-2xl font-bold mb-8">Common Questions</h2>
          <div className="space-y-6 max-w-3xl">
            {contactFaqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Call?</h2>
          <p className="text-muted-foreground mb-6">
            Speak directly with our team. We&apos;re available Monday–Friday, 08:00–17:00.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <a href="tel:+27824483273">Call 082 448 3273</a>
          </Button>
          <div className="mt-6 text-sm text-muted-foreground">
            <Link href="/services/seo-services-johannesburg" className="underline hover:text-primary transition-colors">SEO Services Johannesburg</Link>
            <span className="mx-2">|</span>
            <Link href="/services/web-design-johannesburg" className="underline hover:text-primary transition-colors">Web Design Johannesburg</Link>
            <span className="mx-2">|</span>
            <Link href="/services/branding-design" className="underline hover:text-primary transition-colors">Branding Design</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
