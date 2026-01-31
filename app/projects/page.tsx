import PortfolioHeader from '@/components/pages/projects/PortfolioHeader'
import PortfolioGrid from '@/components/pages/projects/PortfolioGrid'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <PortfolioGrid />
    </div>
  )
}
