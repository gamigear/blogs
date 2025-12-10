/**
 * Security Module
 * Requirements: 10.4, 10.5
 */

import { NextRequest, NextResponse } from 'next/server';

// ============================================
// INPUT SANITIZATION
// Requirements: 10.4
// ============================================

/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(input: string): string {
  if (!input) return '';
  
  return input
    // Remove script tags and content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove event handlers
    .replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/\s*on\w+\s*=\s*[^\s>]*/gi, '')
    // Remove javascript: URLs
    .replace(/javascript:/gi, '')
    // Remove data: URLs (potential XSS vector)
    .replace(/data:/gi, 'data-blocked:')
    // Escape remaining HTML entities
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * Sanitize input for safe database storage
 * Note: pg library handles SQL injection via parameterized queries
 * This is additional sanitization for content
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  return input
    .trim()
    // Remove null bytes
    .replace(/\0/g, '')
    // Normalize unicode
    .normalize('NFC');
}

/**
 * Validate and sanitize email
 */
export function sanitizeEmail(email: string): string | null {
  const sanitized = email.toLowerCase().trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(sanitized) ? sanitized : null;
}

/**
 * Sanitize slug
 */
export function sanitizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// ============================================
// RATE LIMITING
// Requirements: 10.5
// ============================================

import redis from './redis';

interface RateLimitConfig {
  windowMs: number;      // Time window in milliseconds
  maxRequests: number;   // Max requests per window
  keyPrefix?: string;    // Redis key prefix
}

const DEFAULT_RATE_LIMIT: RateLimitConfig = {
  windowMs: 60 * 1000,   // 1 minute
  maxRequests: 100,      // 100 requests per minute
  keyPrefix: 'ratelimit',
};

// In-memory rate limit store (fallback when Redis unavailable)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

/**
 * Check rate limit for a key using Redis
 * Falls back to in-memory store if Redis unavailable
 */
export async function checkRateLimitAsync(
  key: string,
  config: Partial<RateLimitConfig> = {}
): Promise<{ allowed: boolean; remaining: number; resetAt: number }> {
  const { windowMs, maxRequests, keyPrefix } = { ...DEFAULT_RATE_LIMIT, ...config };
  const fullKey = `${keyPrefix}:${key}`;
  const windowSec = Math.ceil(windowMs / 1000);

  try {
    // Use Redis INCR with EXPIRE for atomic rate limiting
    const count = await redis.incr(fullKey);
    
    if (count === 1) {
      // First request in window, set expiry
      await redis.expire(fullKey, windowSec);
    }

    const ttl = await redis.ttl(fullKey);
    const resetAt = Date.now() + (ttl > 0 ? ttl * 1000 : windowMs);
    const allowed = count <= maxRequests;
    const remaining = Math.max(0, maxRequests - count);

    return { allowed, remaining, resetAt };
  } catch (error) {
    // Fallback to in-memory if Redis fails
    console.warn('Redis rate limit failed, using in-memory fallback:', error);
    return checkRateLimit(key, config);
  }
}

/**
 * Check rate limit for a key (synchronous, in-memory)
 * Returns true if request is allowed, false if rate limited
 */
export function checkRateLimit(
  key: string,
  config: Partial<RateLimitConfig> = {}
): { allowed: boolean; remaining: number; resetAt: number } {
  const { windowMs, maxRequests, keyPrefix } = { ...DEFAULT_RATE_LIMIT, ...config };
  const fullKey = `${keyPrefix}:${key}`;
  const now = Date.now();

  let entry = rateLimitStore.get(fullKey);

  // Reset if window expired
  if (!entry || entry.resetAt <= now) {
    entry = { count: 0, resetAt: now + windowMs };
    rateLimitStore.set(fullKey, entry);
  }

  entry.count++;

  const allowed = entry.count <= maxRequests;
  const remaining = Math.max(0, maxRequests - entry.count);

  return { allowed, remaining, resetAt: entry.resetAt };
}

/**
 * Rate limit middleware for API routes (uses Redis)
 */
export function withRateLimit(
  handler: (req: NextRequest) => Promise<NextResponse>,
  config?: Partial<RateLimitConfig>
) {
  return async (req: NextRequest): Promise<NextResponse> => {
    // Use IP address as rate limit key
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
               req.headers.get('x-real-ip') || 
               'unknown';

    const { allowed, remaining, resetAt } = await checkRateLimitAsync(ip, config);

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(config?.maxRequests || DEFAULT_RATE_LIMIT.maxRequests),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(resetAt / 1000)),
            'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)),
          },
        }
      );
    }

    const response = await handler(req);

    // Add rate limit headers to response
    response.headers.set('X-RateLimit-Limit', String(config?.maxRequests || DEFAULT_RATE_LIMIT.maxRequests));
    response.headers.set('X-RateLimit-Remaining', String(remaining));
    response.headers.set('X-RateLimit-Reset', String(Math.ceil(resetAt / 1000)));

    return response;
  };
}

// ============================================
// IP ALLOWLIST
// Requirements: 10.3
// ============================================

const ADMIN_IP_ALLOWLIST = process.env.ADMIN_IP_ALLOWLIST?.split(',') || [];

export function isIpAllowed(ip: string): boolean {
  // If no allowlist configured, allow all (development mode)
  if (ADMIN_IP_ALLOWLIST.length === 0) return true;
  
  return ADMIN_IP_ALLOWLIST.includes(ip) || 
         ADMIN_IP_ALLOWLIST.includes('*') ||
         ip === '127.0.0.1' ||
         ip === '::1';
}

/**
 * Admin IP check middleware
 */
export function withAdminIpCheck(
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  return async (req: NextRequest): Promise<NextResponse> => {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
               req.headers.get('x-real-ip') || 
               'unknown';

    if (!isIpAllowed(ip)) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      );
    }

    return handler(req);
  };
}

// ============================================
// CSRF PROTECTION
// ============================================

export function generateCsrfToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

export function validateCsrfToken(token: string, storedToken: string): boolean {
  if (!token || !storedToken) return false;
  return token === storedToken;
}

// ============================================
// CONTENT SECURITY
// ============================================

export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

/**
 * Add security headers to response
 */
export function addSecurityHeaders(response: NextResponse): NextResponse {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

// ============================================
// PASSWORD HASHING & VALIDATION
// ============================================

import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 12;

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Validate password strength
 */
export function validatePassword(password: string): { valid: boolean; message?: string } {
  if (password.length < 8) {
    return { valid: false, message: 'Mật khẩu phải có ít nhất 8 ký tự' };
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: 'Mật khẩu phải chứa ít nhất một chữ hoa' };
  }
  if (!/[a-z]/.test(password)) {
    return { valid: false, message: 'Mật khẩu phải chứa ít nhất một chữ thường' };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, message: 'Mật khẩu phải chứa ít nhất một số' };
  }

  return { valid: true };
}


// ============================================
// AUDIT LOGGING
// ============================================

import { execute } from './db';

/**
 * Log an audit action to the database
 */
export async function logAuditAction(
  userId: number,
  action: string,
  resourceType: string,
  resourceId: number | null,
  details: Record<string, any> = {},
  ipAddress?: string,
  userAgent?: string
): Promise<void> {
  try {
    await execute(`
      INSERT INTO audit_logs (user_id, action, resource_type, resource_id, details, ip_address, user_agent)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `, [
      userId,
      action,
      resourceType,
      resourceId,
      JSON.stringify(details),
      ipAddress || null,
      userAgent || null,
    ]);
  } catch (error) {
    console.error('Failed to log audit action:', error);
    // Don't throw - audit logging should not break the main flow
  }
}
