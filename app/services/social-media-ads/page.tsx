import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Target, MousePointer2, Rocket } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/layout/MotionWrapper'
import Script from 'next/script'
import { FaqSection } from '@/components/geo/FaqSection'
import KeyTakeaways from '@/components/geo/KeyTakeaways'
import AboutThisPage from '@/components/geo/AboutThisPage'

export const metadata: Metadata = {
  title: 'Social Media Ads Johannesburg | High-ROI Advertising',
  description: 'Scale your business with expert social media ads in Johannesburg. We specialize in Meta and LinkedIn advertising.',
  keywords: ['Social Media Ads Johannesburg', 'Facebook Ads South Africa', 'Instagram Advertising Johannesburg', 'LinkedIn Ads Agency South Africa', 'Paid Social Media Marketing'],
  alternates: {
    canonical: 'https://www.nostalgic-studio.co.za/services/social-media-ads',
  },
  openGraph: {
    title: 'Social Media Ads Johannesburg',
    description: 'Scale your business with expert social media ads in Johannesburg. We specialize in Meta and LinkedIn advertising.',
    url: 'https://www.nostalgic-studio.co.za/services/social-media-ads',
    siteName: 'Nostalgic Studio',
    type: 'website',
  },
}

export default function SocialMediaAds() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.nostalgic-studio.co.za/services/social-media-ads/#webpage',
    url: 'https://www.nostalgic-studio.co.za/services/social-media-ads',
    name: 'Social Media Ads Johannesburg',
    description: 'Professional social media advertising services in Johannesburg, South Africa.',
    publisher: {
      '@type': 'Organization',
      name: 'Nostalgic Studio',
      '@id': 'https://www.nostalgic-studio.co.za/#organization'
    },
    mainEntity: {
      '@type': 'Service',
      name: 'Social Media Advertising',
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
        name: 'What budget do I need for social media ads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The budget depends on your industry and goals. We work with startups to establish a starting budget that allows for effective testing and scaling in the Johannesburg market.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do you track the success of ad campaigns?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use advanced tracking tools, including the Meta Pixel and LinkedIn Insight Tag, to monitor conversions, cost-per-lead, and overall return on ad spend (ROAS).'
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
              Targeted <span className="text-gradient">Social Media Ads Johannesburg</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stop wasting money on ads that don't convert. We create highly-targeted social media advertising 
              campaigns that reach your ideal customers and drive measurable growth for your South African startup.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link href="/contact">Start Scaling Now <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">Precision Advertising for Real Results</h2>
            <p className="text-muted-foreground mb-6">
              In Johannesburg's competitive digital landscape, you need more than just "likes". 
              Our ad campaigns are built on deep audience research and continuous optimization. 
              Our **social media ads** services include:
            </p>
            <ul className="space-y-4">
              {[
                'Strategic Meta (FB & IG) Ad Campaigns',
                'B2B LinkedIn Advertising Strategy',
                'Advanced Audience Targeting & Retargeting',
                'Creative Ad Copy & Visual Design',
                'Conversion Tracking & ROI Analysis'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Target className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hyper-Targeting</h3>
                <p className="text-muted-foreground text-sm">Reach the right people based on demographics, interests, and online behavior in South Africa.</p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MousePointer2 className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Conversion Focus</h3>
                <p className="text-muted-foreground text-sm">Every ad is designed with a clear call-to-action to drive leads, sign-ups, or sales.</p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Rocket className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scalable Growth</h3>
                <p className="text-muted-foreground text-sm">We find what works and scale it to maximize your reach and return on investment.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-primary/5 rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Social Ads FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">How soon will I see results from ads?</h3>
              <p className="text-muted-foreground">
                Unlike organic SEO, social media ads can drive traffic and leads almost instantly once 
                the campaign is launched and the learning phase is complete.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Do you handle the ad creative?</h3>
              <p className="text-muted-foreground">
                Yes, we handle everything from ad copy to visual design, ensuring your ads are 
                on-brand and optimized for the highest engagement.
              </p>
            </div>
          </div>
        </section>

        <KeyTakeaways
          takeaways={[
            { point: 'Immediate results', detail: 'social media ads drive traffic and leads almost instantly once campaigns launch' },
            { point: 'Meta and LinkedIn specialists', detail: 'ideal for reaching consumers and B2B decision-makers in South Africa' },
            { point: 'Advanced targeting', detail: 'hyper-targeted audiences based on demographics, interests, and behavior' },
            { point: 'Full creative service', detail: 'ad copy and visual design handled from brief through to publication' },
            { point: 'Tracked ROI', detail: 'Meta Pixel and LinkedIn Insight Tag measure conversions and return on ad spend' },
          ]}
        />

        <AboutThisPage
          summary="This page covers Nostalgic Studio's social media advertising services in Johannesburg. We manage paid Meta and LinkedIn campaigns for startups and businesses across Gauteng."
          covers={['Facebook Ads', 'Instagram Advertising', 'LinkedIn Ads', 'Audience Targeting', 'Conversion Tracking']}
          lastUpdated="March 2026"
        />

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Ads?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get your brand in front of the people who matter most. Let's build a high-performance ad strategy.
          </p>
          <Button asChild size="lg" variant="heroOutline" className="h-14 px-8">
            <Link href="/contact">Book an Ad Strategy Session</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
