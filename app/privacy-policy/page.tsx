import type { Metadata } from 'next'
import PrivacyComponent from '@/components/pages/privacy/PrivacyComponent'
import PrivacyHero from '@/components/pages/privacy/PrivacyHero'

export const metadata: Metadata = {
  title: 'Privacy Policy | Nostalgic Studio',
  description: 'Privacy policy for Nostalgic Studio. Learn how we collect, use, and protect your personal information when you use our services.',
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 md:pt-32">
        <PrivacyHero />
        <PrivacyComponent />
      </main>
    </div>
  )
}
