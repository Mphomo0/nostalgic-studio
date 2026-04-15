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

        {/* Server-rendered content for SEO word count */}
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

        <section className="mt-16" aria-labelledby="contact-faq-heading">
          <h2 id="contact-faq-heading" className="text-2xl font-bold mb-8">Common Questions</h2>
          <div className="space-y-6 max-w-3xl">
            <div>
              <h3 className="font-semibold mb-2">How much does a website cost in South Africa?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our web design projects start from R5,000 for simple brochure sites and range to R35,000+ for custom e-commerce platforms. During your free consultation, we provide a fixed quote based on your specific requirements. There are no hourly rates — you get a clear, upfront price.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How long does it take to build a website?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most projects are completed within 4–8 weeks from the date of approval. Simple brochure websites can be delivered in as little as 2 weeks. E-commerce platforms and complex custom builds typically take 6–10 weeks. We always agree on a timeline before starting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you work with clients outside Johannesburg?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes. While we are based in Johannesburg, Gauteng, we work with clients across South Africa including Cape Town, Durban, and Pretoria. All project communication happens via video call and email, so location is never a barrier to working together.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What information do I need to provide to get started?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To get a quote, we just need the basics: your business type, what the website needs to do (e.g. generate leads, sell products, showcase services), your target audience, and an approximate budget range. We handle everything else from there.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
