import AboutCTA from '@/components/pages/about/AboutCTA'
import AboutHero from '@/components/pages/about/AboutHero'
import AboutStory from '@/components/pages/about/AboutStory'
import AboutValues from '@/components/pages/about/AboutValues'
import AboutTeam from '@/components/pages/about/AboutTeam'
import Testimonials from '@/components/pages/home/Testimonials'

export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <Testimonials />
        <AboutCTA />
      </main>
    </div>
  )
}
