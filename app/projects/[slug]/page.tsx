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
    alternates: {
      canonical: `https://www.nostalgic-studio.co.za/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://www.nostalgic-studio.co.za/projects/${project.slug}`,
      siteName: 'Nostalgic Studio',
      type: 'website',
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
      
      <section className="pb-16 md:pb-24">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {project.description}
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">What We Delivered</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Custom website design tailored to brand identity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Responsive layout optimized for all devices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">SEO-optimized structure for better search visibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Fast loading times with optimized performance</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <ProjectCTA />
    </div>
  )
}
