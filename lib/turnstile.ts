/**
 * Server-side Cloudflare Turnstile verification.
 *
 * Environment variables (create the widget in the Cloudflare dashboard under
 * Turnstile, hostname `www.nostalgic-studio.co.za`):
 *  - NEXT_PUBLIC_TURNSTILE_SITE_KEY  public, read by the browser widget
 *  - TURNSTILE_SECRET_KEY            private, read only here
 *
 * For local development Cloudflare publishes dummy keys that work on any host:
 * site key `1x00000000000000000000AA` and secret `1x0000000000000000000000000000000AA`
 * (always pass), or `2x00000000000000000000AB` / `2x0000000000000000000000000000000AA`
 * (always fail).
 *
 * Fails closed: a missing secret or a network error rejects the submission.
 */

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export async function verifyTurnstile(
  token: string | undefined,
  ip?: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY is not set; rejecting submission')
    return false
  }
  if (!token) return false

  const body = new FormData()
  body.append('secret', secret)
  body.append('response', token)
  if (ip && ip !== 'anonymous') body.append('remoteip', ip)

  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      body,
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    })
    const result = (await res.json()) as { success?: boolean }
    return result.success === true
  } catch (error) {
    console.error('Turnstile verification failed:', error)
    return false
  }
}
