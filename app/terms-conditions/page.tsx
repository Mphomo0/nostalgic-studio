import TermsAndConditions from '@/components/pages/terms/termsandconditions'
import TermsHero from '@/components/pages/terms/TermsHero'

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
