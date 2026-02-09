import PrivacyComponent from '@/components/pages/privacy/PrivacyComponent'
import PrivacyHero from '@/components/pages/privacy/PrivacyHero'

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
