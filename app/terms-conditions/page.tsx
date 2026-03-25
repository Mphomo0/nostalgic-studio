import type { Metadata } from 'next'
import TermsAndConditions from '@/components/pages/terms/termsandconditions'
import TermsHero from '@/components/pages/terms/TermsHero'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Nostalgic Studio',
  description: 'Terms and conditions for Nostalgic Studio digital design services. Read our service agreement, refund policy, and client responsibilities.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/terms-conditions',
  },
}

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 md:pt-32">
        <TermsHero />
        <TermsAndConditions />
      </main>
    </div>
  )
}
