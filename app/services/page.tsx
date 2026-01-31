import ServicesList from '@/components/pages/services/ServicesList'
import ProcessSection from '@/components/pages/services/ProcessSection'
import CTASection from '@/components/pages/services/CTASection'
import { services, process } from '@/components/pages/services/data'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32">
        <ServicesList services={services} />
        <ProcessSection steps={process} />
        <CTASection />
      </main>
    </div>
  )
}
