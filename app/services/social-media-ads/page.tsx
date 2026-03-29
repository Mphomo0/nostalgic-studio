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

  const faqs = [
    {
      question: 'What budget do I need for social media ads?',
      answer: 'The minimum recommended ad spend for effective social media advertising in South Africa is R3,000–R5,000 per month per platform. This allows sufficient data collection during the learning phase and enough reach for meaningful results.',
    },
    {
      question: 'How do you track the success of ad campaigns?',
      answer: 'We use advanced tracking tools, including the Meta Pixel and LinkedIn Insight Tag, to monitor conversions, cost-per-lead, and overall return on ad spend (ROAS). You receive detailed monthly reports with clear ROI breakdowns.',
    },
    {
      question: 'How soon will I see results from ads?',
      answer: 'Unlike organic SEO, social media ads can drive traffic and leads almost instantly once the campaign is launched. Most campaigns enter the learning phase for 3–7 days, after which performance stabilises and optimisation begins.',
    },
    {
      question: 'Do you handle the ad creative?',
      answer: 'Yes, we handle everything from ad copywriting to visual design, ensuring your ads are on-brand and optimised for the highest engagement. We also A/B test multiple creative variations to find the best performers.',
    },
    {
      question: 'Which platforms should I advertise on?',
      answer: 'For B2C businesses in South Africa, Meta (Facebook and Instagram) typically delivers the best ROI. For B2B companies, LinkedIn advertising reaches decision-makers more effectively. We recommend starting with one platform and expanding once profitable.',
    },
  ]

  return (
    <main className="pt-32 pb-20">
      <Script id="page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      
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

        {/* Definition Block - GEO Optimised */}
        <section className="mb-16" aria-labelledby="definition-heading">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h2 id="definition-heading" className="text-2xl font-bold mb-4">
              What Is Social Media Advertising?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Social media advertising is the practice of placing paid ads on platforms like Facebook, Instagram, 
              and LinkedIn to reach specific audiences based on demographics, interests, and behaviours. 
              It provides measurable ROI and faster results than organic marketing.
            </p>
            <p className="text-muted-foreground">
              The average cost-per-click for Facebook ads in South Africa is R2–R8, significantly lower than 
              Google Ads at R10–R30. Social media advertising delivers an average ROI of 200–400% 
              when campaigns are properly targeted and optimised.
            </p>
          </div>
        </section>

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

        <FaqSection faqs={faqs} title="Social Media Ads FAQ" />

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
