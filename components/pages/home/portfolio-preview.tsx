import { PortfolioHeader } from './portfolio-header'
import { PortfolioGrid } from './portfolio-grid'

export function PortfolioPreview() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <PortfolioHeader />
        <PortfolioGrid />
      </div>
    </section>
  )
}
