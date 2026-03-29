import type { Metadata } from 'next'
import Link from 'next/link'
import { ProjectCTA } from '@/components/pages/projects/Detail/ProjectCTA'
import ProjectHero from '@/components/pages/projects/Detail/ProjectHero'
import { projects } from '@/lib/portfolio-data'
import { breadcrumbSchema } from '@/app/structured-data/schemas'

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
    image: `https://www.nostalgic-studio.co.za${project.image}`,
    author: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      url: 'https://www.nostalgic-studio.co.za',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      url: 'https://www.nostalgic-studio.co.za',
    },
    datePublished: '2024-01-01',
    about: {
      '@type': 'Thing',
      name: project.category,
    },
    associatedMedia: {
      '@type': 'MediaObject',
      contentUrl: `https://www.nostalgic-studio.co.za${project.image}`,
    },
  }

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: project.client, url: `/projects/${project.slug}` },
  ])

  return (
    <div className="min-h-screen bg-background">
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      </>
      <ProjectHero slug={slug} />
      
      <section className="pb-16 md:pb-24">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/projects" className="hover:underline">Projects</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span>{project.client}</span>
            </nav>

            <h2 className="text-2xl font-bold mb-6 text-foreground">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {project.description}
            </p>
            
            {project.challenge && (
              <>
                <h3 className="text-xl font-bold mb-4 text-foreground">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.challenge}
                </p>
              </>
            )}

            {project.approach && (
              <>
                <h3 className="text-xl font-bold mb-4 text-foreground">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.approach}
                </p>
              </>
            )}

            {project.results && project.results.length > 0 ? (
              <>
                <h3 className="text-xl font-bold mb-4 text-foreground">Results</h3>
                <ul className="space-y-3 mb-8">
                  {project.results.map((result) => (
                    <li key={result} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
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
              </>
            )}
            
            <h3 className="text-xl font-bold mb-4 text-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {(project.technologies || ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']).map((tech) => (
                <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 p-6 bg-card border border-border rounded-2xl">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Timeline:</strong> {project.timeline} · <strong className="text-foreground">Client:</strong> {project.client}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ProjectCTA />
    </div>
  )
}
