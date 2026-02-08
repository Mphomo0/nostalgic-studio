import type { Metadata } from 'next'
import { ProjectCTA } from '@/components/pages/projects/Detail/ProjectCTA'
import ProjectHero from '@/components/pages/projects/Detail/ProjectHero'
import { projects } from '@/lib/portfolio-data'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Nostalgic Studio`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <ProjectHero slug={slug} />
        <ProjectCTA />
      </div>
    )
  }

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: `https://nostalgic-studio.co.za${project.image}`,
    author: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      url: 'https://nostalgic-studio.co.za',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      url: 'https://nostalgic-studio.co.za',
    },
    datePublished: '2024-01-01',
    about: {
      '@type': 'Thing',
      name: project.category,
    },
    associatedMedia: {
      '@type': 'MediaObject',
      contentUrl: `https://nostalgic-studio.co.za${project.image}`,
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
      </>
      <ProjectHero slug={slug} />
      <ProjectCTA />
    </div>
  )
}
