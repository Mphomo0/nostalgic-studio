import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Users, Share2, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Social Media Marketing Johannesburg | Grow Your Online Community',
  description: 'Expert social media marketing in Johannesburg. We help startups and small businesses build engaged communities and drive sales.',
  keywords: ['Social Media Marketing Johannesburg', 'SMM Agency South Africa', 'Social Media Management Johannesburg', 'Content Marketing South Africa', 'Digital Marketing Agency'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/social-media-marketing',
  },
  openGraph: {
    title: 'Social Media Marketing Johannesburg',
    description: 'Expert social media marketing in Johannesburg. We help startups and small businesses build engaged communities.',
    url: 'https://www.nostalgic-studio.co.za/services/social-media-marketing',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function SocialMediaMarketing() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/services/social-media-marketing/#webpage',
    url: 'https://www.nostalgic-studio.co.za/services/social-media-marketing',
    name: 'Social Media Marketing Johannesburg',
    description: 'Professional social media marketing and management services in Johannesburg, South Africa.',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.nostalgic-studio.co.za/#organization'
    },
    mainEntity: {
      '@type': 'Service',
      name: 'Social Media Marketing',
      areaServed: 'South Africa',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Nostalgic Studio',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Johannesburg',
          addressRegion: 'Gauteng',
          addressCountry: 'ZA'
        }
      }
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which social media platforms do you manage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We specialize in Instagram, Facebook, LinkedIn, and TikTok, tailoring our approach to each platform to reach your specific target audience in Johannesburg.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do you measure social media success?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We track key metrics such as engagement rates, reach, follower growth, and most importantly, conversions and leads generated for your business.'
        }
      }
    ]
  }

  return (
    <main className="pt-32 pb-20">
      <Script id="page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="container-wide mx-auto px-4">
        <MotionWrapper>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Effective <span className="text-gradient">Social Media Marketing Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build a brand people love to follow. Our social media marketing strategies are designed to 
              engage your audience, build trust, and drive meaningful growth for your South African business.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Grow Your Following <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Content That Connects</h2>
            <p className="text-muted-foreground mb-6">
              In the age of scrolling, you need content that stops people in their tracks. 
              We combine creative storytelling with data-driven insights to manage your presence. 
              Our **social media marketing** services include:
            </p>
            <ul className="space-y-4">
              {[
                'Strategic Content Creation & Scheduling',
                'Community Management & Engagement',
                'Influencer Outreach & Partnerships',
                'Platform-Specific Growth Strategies',
                'Monthly Performance Reporting'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-8 rounded-3xl border border-border flex flex-col items-center text-center">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold">Audience Growth</h3>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex flex-col items-center text-center">
              <Share2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold">Viral Reach</h3>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex flex-col items-center text-center">
              <BarChart3 className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold">Data Insights</h3>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex flex-col items-center text-center">
              <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold">Proven ROI</h3>
            </div>
          </div>
        </div>

        <section className="bg-primary/5 rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Social Media FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Do I need to be on every platform?</h3>
              <p className="text-muted-foreground">
                Not necessarily. We help you identify which platforms your target audience in 
                South Africa uses most and focus our efforts where they will have the biggest impact.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">How often will you post?</h3>
              <p className="text-muted-foreground">
                Posting frequency depends on your goals and the specific platform. We'll create a 
                customized content calendar that ensures a consistent and effective presence.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Social?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's create a social media strategy that works as hard as you do.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Start Your Social Strategy</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
