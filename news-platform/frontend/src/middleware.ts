import { withAuth } from 'next-auth/middleware';
import { NextResponse, NextRequest } from 'next/server';

/**
 * Add cache headers to response
 * Requirements: 9.1 - Set Cache-Control, ETag headers
 */
function addCacheHeaders(response: NextResponse, path: string): NextResponse {
  // Static assets - long cache
  if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  }

  // Article pages - short cache with revalidation
  if (path.startsWith('/article/')) {
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return response;
  }

  // Category pages - medium cache
  if (path.startsWith('/category/')) {
    response.headers.set('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=600');
    return response;
  }

  // Homepage - short cache
  if (path === '/') {
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
    return response;
  }

  // API routes - no cache by default
  if (path.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    return response;
  }

  // Default - private, no cache
  response.headers.set('Cache-Control', 'private, no-cache');
  return response;
}

/**
 * Add security headers
 */
function addSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  return response;
}

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Protected routes that require authentication
    if (path.startsWith('/community/new') && !token) {
      return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    }

    // Admin routes require moderator/admin role
    if (path.startsWith('/admin')) {
      const roles = (token?.roles as string[]) || [];
      if (!roles.includes('admin') && !roles.includes('moderator')) {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }

    let response = NextResponse.next();
    
    // Add cache headers
    response = addCacheHeaders(response, path);
    
    // Add security headers
    response = addSecurityHeaders(response);

    return response;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;
        
        // Public routes
        if (!path.startsWith('/community/new') && !path.startsWith('/admin')) {
          return true;
        }
        
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    '/',
    '/article/:path*',
    '/category/:path*',
    '/community/:path*',
    '/admin/:path*',
    '/api/:path*',
  ],
};
