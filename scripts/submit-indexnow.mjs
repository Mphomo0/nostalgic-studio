/**
 * Pings IndexNow (Bing, Yandex, Seznam, Naver) so they recrawl changed pages.
 *
 * URLs are read from the live sitemap rather than a hand-maintained list. The
 * previous hardcoded list had drifted to 32 of 59 URLs, silently omitting every
 * location and industry page — the same staleness that affected llms.txt.
 *
 * The key must be the hex key whose .txt file is served from the site root.
 * An earlier non-hex key returned 403 UserForbiddedToAccessSite on every build.
 */

const BASE_URL = 'https://www.nostalgic-studio.co.za'
const INDEXNOW_KEY = '6017f70986854a2c82e65c1c7263a178'
const INDEXNOW_URL = 'https://api.indexnow.org/indexnow'
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`

async function readSitemapUrls() {
  const response = await fetch(SITEMAP_URL)
  if (!response.ok) {
    throw new Error(`Could not fetch sitemap (HTTP ${response.status})`)
  }
  const xml = await response.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  // IndexNow rejects the whole batch if any URL is off-host.
  return urls.filter((u) => u.startsWith(`${BASE_URL}/`) || u === BASE_URL)
}

async function submitIndexNow() {
  let urlList
  try {
    urlList = await readSitemapUrls()
  } catch (error) {
    console.warn(`IndexNow: ${error.message} — skipping, continuing build.`)
    return
  }

  if (urlList.length === 0) {
    console.warn('IndexNow: sitemap returned no usable URLs — skipping.')
    return
  }

  console.log(`Submitting ${urlList.length} URLs to IndexNow...`)

  try {
    const response = await fetch(INDEXNOW_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.nostalgic-studio.co.za',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    })

    if (response.ok) {
      console.log(`IndexNow submission successful (HTTP ${response.status})`)
    } else {
      const body = await response.text()
      console.warn(`IndexNow submission failed (HTTP ${response.status}): ${body}`)
      console.warn('Skipping IndexNow — continuing build.')
    }
  } catch (error) {
    console.warn('IndexNow submission error:', error.message)
    console.warn('Skipping IndexNow — continuing build.')
  }
}

submitIndexNow()
