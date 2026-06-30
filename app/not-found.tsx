import Link from 'next/link'
import { ArrowRight, Home, Search, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Page Not Found | Nostalgic Studio',
  description: 'The page you are looking for does not exist. Return to the Nostalgic Studio homepage or explore our web design and SEO services.',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="container-wide mx-auto px-4 text-center max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">404 — Page Not Found</p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          This page does not exist.
        </h1>

        <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          The URL may have changed, been removed, or never existed. Try one of the links below.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="heroOutline" className="h-12 px-8">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-left">
          <Link
            href="/services/seo-services-johannesburg"
            className="bg-card border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors"
          >
            <Search className="w-5 h-5 text-primary mb-3" />
            <h2 className="font-bold mb-1 text-sm">SEO Services</h2>
            <p className="text-xs text-muted-foreground">Rank on Google and AI search engines.</p>
          </Link>
          <Link
            href="/services/web-design-johannesburg"
            className="bg-card border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors"
          >
            <Briefcase className="w-5 h-5 text-primary mb-3" />
            <h2 className="font-bold mb-1 text-sm">Web Design</h2>
            <p className="text-xs text-muted-foreground">Fast, SEO-optimised Next.js websites.</p>
          </Link>
          <Link
            href="/projects"
            className="bg-card border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors"
          >
            <ArrowRight className="w-5 h-5 text-primary mb-3" />
            <h2 className="font-bold mb-1 text-sm">Our Work</h2>
            <p className="text-xs text-muted-foreground">See what we have built for clients.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
