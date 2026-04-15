import type { Metadata } from 'next'
import PrivacyComponent from '@/components/pages/privacy/PrivacyComponent'
import PrivacyHero from '@/components/pages/privacy/PrivacyHero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Nostalgic Studio. Learn how we collect, use, and protect your personal information when you use our services.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/privacy-policy',
  },
  openGraph: {
title: 'Privacy Policy',
    description: 'Privacy policy for Nostalgic Studio. Learn how we collect, use, and protect your personal information.',
    url: 'https://www.nostalgic-studio.co.za/privacy-policy',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 md:pt-32">
        <PrivacyHero />
        
        <section className="container-wide mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-3xl font-bold mb-8">Our Commitment to Your Privacy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Nostalgic Studio, we believe that transparency is the foundation of digital trust. As a South African digital agency, we are fully committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA) and international best practices for data security.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16 not-prose">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2">POPIA Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  We adhere to the eight conditions for lawful processing of personal information as set out in South Africa&apos;s POPIA, ensuring your data is handled with the utmost care.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2">Data Security</h3>
                <p className="text-sm text-muted-foreground">
                  Our infrastructure uses industry-standard encryption and high-security hosting environments to protect your digital assets and interactions.
                </p>
              </div>
            </div>
            
            <PrivacyComponent />
          </div>
        </section>
      </main>
    </div>
  )
}
