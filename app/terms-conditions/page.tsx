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
        <TermsAndConditions />
      </main>
    </div>
  )
}
