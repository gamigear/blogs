/**
 * Redis Cache Module
 * Requirements: 9.1, 9.2
 */

import Redis from 'ioredis';

// Check if we're in build time or Redis is disabled
const isRedisDisabled = process.env.REDIS_DISABLED === 'true' || process.env.NODE_ENV === 'production' && !process.env.REDIS_URL;
const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build';

let redis: Redis | null = null;

if (!isRedisDisabled && !isBuildTime && process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: 3,
    retryStrategy(times) {
      if (times > 3) return null; // Stop retrying after 3 attempts
      const delay = Math.min(times * 50, 2000);
      return delay;
    },
    lazyConnect: true,
  });

  redis.on('error', (err) => {
    console.error('Redis connection error:', err);
  });

  redis.on('connect', () => {
    console.log('Redis connected');
  });
}

// Cache TTL constants
export const CACHE_TTL = {
  SHORT: 60,        // 1 minute
  MEDIUM: 300,      // 5 minutes
  LONG: 3600,       // 1 hour
  DAY: 86400,       // 24 hours
} as const;

const DEFAULT_TTL = CACHE_TTL.MEDIUM;

/**
 * Get cached value
 */
export async function getCached<T>(key: string): Promise<T | null> {
  if (!redis) return null;
  try {
    const cached = await redis.get(key);
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    console.error('Cache get error:', error);
    return null;
  }
}

/**
 * Set cache value with TTL
 */
export async function setCache<T>(key: string, data: T, ttl: number = DEFAULT_TTL): Promise<void> {
  if (!redis) return;
  try {
    await redis.setex(key, ttl, JSON.stringify(data));
  } catch (error) {
    console.error('Cache set error:', error);
  }
}

/**
 * Delete cache by key
 */
export async function deleteCache(key: string): Promise<void> {
  if (!redis) return;
  try {
    await redis.del(key);
  } catch (error) {
    console.error('Cache delete error:', error);
  }
}

/**
 * Invalidate cache by pattern
 * Requirements: 9.2 - Cache invalidation
 */
export async function invalidateCache(pattern: string): Promise<number> {
  if (!redis) return 0;
  try {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
    }
    return keys.length;
  } catch (error) {
    console.error('Cache invalidation error:', error);
    return 0;
  }
}

/**
 * Get or set cache (cache-aside pattern)
 * Requirements: 9.2 - getOrSet with TTL
 */
export async function getOrSet<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = DEFAULT_TTL
): Promise<T> {
  if (!redis) {
    return fetcher();
  }
  
  const cached = await getCached<T>(key);
  if (cached !== null) {
    return cached;
  }

  const data = await fetcher();
  await setCache(key, data, ttl);
  return data;
}

/**
 * Generate cache key with prefix
 */
export function cacheKey(prefix: string, ...parts: (string | number)[]): string {
  return `${prefix}:${parts.join(':')}`;
}

// Cache key prefixes
export const CACHE_KEYS = {
  ARTICLE: 'article',
  ARTICLES_LIST: 'articles:list',
  CATEGORY: 'category',
  CATEGORIES: 'categories',
  COMMUNITY_POSTS: 'community:posts',
  USER: 'user',
  SEARCH: 'search',
  STATS: 'stats',
} as const;

/**
 * Invalidate article-related caches
 */
export async function invalidateArticleCaches(articleId?: number, slug?: string): Promise<void> {
  const patterns = [
    `${CACHE_KEYS.ARTICLES_LIST}:*`,
    `${CACHE_KEYS.STATS}:*`,
  ];
  
  if (articleId) {
    patterns.push(`${CACHE_KEYS.ARTICLE}:${articleId}`);
  }
  if (slug) {
    patterns.push(`${CACHE_KEYS.ARTICLE}:slug:${slug}`);
  }

  for (const pattern of patterns) {
    await invalidateCache(pattern);
  }
}

/**
 * Invalidate community post caches
 */
export async function invalidateCommunityPostCaches(): Promise<void> {
  await invalidateCache(`${CACHE_KEYS.COMMUNITY_POSTS}:*`);
}

/**
 * Check if Redis is connected
 */
export function isRedisConnected(): boolean {
  return redis?.status === 'ready' || false;
}

export default redis;
