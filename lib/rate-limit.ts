/**
 * Simple in-memory rate limiter for server actions.
 * Note: In serverless environments (Vercel), this is instance-local.
 * For global rate limiting, use Redis (e.g., Upstash).
 */

type RateLimitRecord = {
  timestamps: number[];
};

const cache = new Map<string, RateLimitRecord>();

const WINDOW_SIZE_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3;

/**
 * Checks if a request from the given identifier (e.g., IP address) should be rate limited.
 * Returns true if the request is allowed, false if rate limited.
 */
export function checkRateLimit(id: string): { 
  success: boolean; 
  remaining: number; 
  reset: number 
} {
  const now = Date.now();
  const record = cache.get(id) || { timestamps: [] };

  // Filter timestamps within the current window
  const recentTimestamps = record.timestamps.filter(
    (timestamp) => now - timestamp < WINDOW_SIZE_MS
  );

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldestInWindow = recentTimestamps[0];
    const resetTime = oldestInWindow + WINDOW_SIZE_MS;
    
    return {
      success: false,
      remaining: 0,
      reset: resetTime,
    };
  }

  // Add the new timestamp
  recentTimestamps.push(now);
  cache.set(id, { timestamps: recentTimestamps });

  return {
    success: true,
    remaining: MAX_REQUESTS_PER_WINDOW - recentTimestamps.length,
    reset: now + WINDOW_SIZE_MS,
  };
}

/**
 * Cleanup function to prevent memory leaks.
 * Removes records where all timestamps are older than the window size.
 */
export function cleanupCache() {
  const now = Date.now();
  for (const [id, record] of cache.entries()) {
    const hasRecent = record.timestamps.some(
      (timestamp) => now - timestamp < WINDOW_SIZE_MS
    );
    if (!hasRecent) {
      cache.delete(id);
    }
  }
}

// Periodically cleanup cache every 30 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupCache, 30 * 60 * 1000);
}
