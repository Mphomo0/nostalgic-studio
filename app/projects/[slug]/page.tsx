import { ProjectCTA } from '@/components/pages/projects/Detail/ProjectCTA'
import ProjectHero from '@/components/pages/projects/Detail/ProjectHero'
import { projects } from '@/lib/portfolio-data'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <ProjectHero slug={slug} />
  }

  return (
    <div className="min-w-lvh bg-background">
      <ProjectHero slug={slug} />
      {/* <ProjectInfo project={project} /> */}
      <ProjectCTA />
    </div>
  )
}
