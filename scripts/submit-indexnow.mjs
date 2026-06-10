const BASE_URL = 'https://www.nostalgic-studio.co.za'
const INDEXNOW_KEY = 'd9mwbxbxqfxpndhwhjvqndy82dur7bnb'
const INDEXNOW_URL = 'https://api.indexnow.org/indexnow'

const urls = [
  `${BASE_URL}/`,
  `${BASE_URL}/about`,
  `${BASE_URL}/services`,
  `${BASE_URL}/projects`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/blog`,
  `${BASE_URL}/terms-conditions`,
  `${BASE_URL}/privacy-policy`,
  'web-design-johannesburg',
  'nextjs-website-design',
  'ecommerce-website-development',
  'branding-design',
  'ux-ui-design',
  'seo-services-johannesburg',
  'social-media-marketing',
  'social-media-ads',
  'web-hosting',
  'web-maintenance',
].map((slug) =>
  slug.startsWith('http') ? slug : `${BASE_URL}/services/${slug}`,
)

const projectUrls = [
  'sozim-consultancy',
  'didee-holdings',
  'jiyology-website',
  'az-truck-dealership',
  'bidco-trucks',
  'tanosa-group',
].map((slug) => `${BASE_URL}/projects/${slug}`)

const blogUrls = [
  'what-is-nextjs-seo-2026',
  'website-cost-south-africa-2026',
  '10-signs-business-needs-website-redesign',
  'how-to-choose-web-design-company-johannesburg',
  'what-is-local-seo-south-africa',
  'how-long-to-build-website-2026',
  'social-media-strategy-south-african-businesses',
].map((slug) => `${BASE_URL}/blog/${slug}`)

const allUrls = [...urls, ...projectUrls, ...blogUrls]

async function submitIndexNow() {
  const payload = {
    host: 'www.nostalgic-studio.co.za',
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: allUrls,
  }

  console.log(`Submitting ${allUrls.length} URLs to IndexNow...`)

  try {
    const response = await fetch(INDEXNOW_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      console.log(`IndexNow submission successful (HTTP ${response.status})`)
    } else {
      const body = await response.text()
      console.error(`IndexNow submission failed (HTTP ${response.status}): ${body}`)
      process.exit(1)
    }
  } catch (error) {
    console.error('IndexNow submission error:', error)
    process.exit(1)
  }
}

submitIndexNow()
