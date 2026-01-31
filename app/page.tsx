import Hero from '@/components/pages/home/Hero'
import { PortfolioPreview } from '@/components/pages/home/portfolio-preview'
import ServicesPreview from '@/components/pages/home/ServicesPreview'
import Testimonials from '@/components/pages/home/Testimonials'
import CTA from '@/components/pages/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </>
  )
}
