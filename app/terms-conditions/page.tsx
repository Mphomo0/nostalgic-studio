import type { Metadata } from 'next'
import TermsAndConditions from '@/components/pages/terms/termsandconditions'
import TermsHero from '@/components/pages/terms/TermsHero'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions for Nostalgic Studio digital design services. Read our service agreement and client responsibilities.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/terms-conditions',
  },
  openGraph: {
title: 'Terms and Conditions',
    description: 'Terms and conditions for Nostalgic Studio digital design services.',
    url: 'https://www.nostalgic-studio.co.za/terms-conditions',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 md:pt-32">
        <TermsHero />
        
        <section className="container-wide mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-3xl font-bold mb-8">Our Service Partnership</h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Nostalgic Studio, we view every project as a strategic partnership. Our Terms and Conditions are designed to ensure clarity, fairness, and mutual respect throughout the creative and technical process. Whether we are building a complex Next.js application or crafting a new brand identity, these guidelines provide the framework for successful project delivery in the South African digital landscape.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16 not-prose">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2">Transparency & Ethics</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in honest communication and transparent pricing. All project scopes and deliverables are clearly defined to ensure there are no surprises during the engagement.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2">Legal Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Our service agreements are structured to comply with South African law, providing a secure and professional foundation for businesses operating across the country.
                </p>
              </div>
            </div>
            
            <TermsAndConditions />
          </div>
        </section>
      </main>
    </div>
  )
}
