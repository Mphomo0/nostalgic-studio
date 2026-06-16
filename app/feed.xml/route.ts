import { NextResponse } from 'next/server'

const BASE_URL = 'https://www.nostalgic-studio.co.za'

const posts = [
  {
    slug: 'social-media-strategy-south-african-businesses',
    title: 'Social Media Strategy for South African Businesses (2026)',
    description: 'Stop wasting money on social media. Learn the most effective social media strategies for South African businesses in 2026. WhatsApp, TikTok, and LinkedIn insights.',
    date: '2026-05-28',
    category: 'Marketing',
  },
  {
    slug: 'how-long-to-build-website-2026',
    title: 'How Long Does it Take to Build a Website? (2026 Timeline)',
    description: 'From discovery to launch: A realistic breakdown of how long it takes to build a professional website in South Africa. Timeline for brochure, business, and e-commerce sites.',
    date: '2026-05-20',
    category: 'Process',
  },
  {
    slug: 'what-is-local-seo-south-africa',
    title: 'What is Local SEO? A Guide for South African Businesses (2026)',
    description: 'Learn how to dominate local search in Johannesburg and South Africa. Everything you need to know about Google Maps, local citations, and geo-targeted content.',
    date: '2026-05-13',
    category: 'SEO',
  },
  {
    slug: 'how-to-choose-web-design-company-johannesburg',
    title: 'How to Choose a Web Design Company in Johannesburg (2026 Guide)',
    description: "Don't get scammed. Learn the 7 critical questions to ask before hiring a web design agency in Johannesburg. Portfolio, tech stack, and SEO expertise explained.",
    date: '2026-05-06',
    category: 'Strategy',
  },
  {
    slug: '10-signs-business-needs-website-redesign',
    title: '10 Signs Your Business Website Needs a Redesign',
    description: "Is your website hurting your conversions? Here are 10 clear signals it's time to invest in a professional redesign.",
    date: '2026-03-24',
    category: 'Strategy',
  },
  {
    slug: 'website-cost-south-africa-2026',
    title: 'How Much Does a Website Cost in South Africa? (2026 Guide)',
    description: 'A transparent breakdown of web design pricing in South Africa — from R5,000 brochure sites to R50,000+ e-commerce platforms.',
    date: '2026-03-22',
    category: 'Pricing',
  },
  {
    slug: 'what-is-nextjs-seo-2026',
    title: 'Why Next.js Is the Best Framework for SEO in 2026',
    description: 'Server-side rendering, static generation, and Core Web Vitals — learn why Next.js websites consistently outrank traditional CMS sites on Google.',
    date: '2026-03-20',
    category: 'Web Development',
  },
]

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nostalgic Studio Blog — Web Design &amp; Digital Marketing</title>
    <link>${BASE_URL}/blog</link>
    <description>Expert articles on web design, Next.js development, SEO, and digital marketing from the Nostalgic Studio team in Johannesburg, South Africa.</description>
    <language>en-za</language>
    <managingEditor>hello@nostalgic-studio.co.za (Nostalgic Studio)</managingEditor>
    <webMaster>hello@nostalgic-studio.co.za (Nostalgic Studio)</webMaster>
    <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE_URL}/images/logo/Logo.webp</url>
      <title>Nostalgic Studio</title>
      <link>${BASE_URL}/blog</link>
    </image>
${posts
  .map(
    (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
      <author>hello@nostalgic-studio.co.za (Mpho Moipolai)</author>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
