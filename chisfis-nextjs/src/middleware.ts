import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key-change-in-production')

// Routes that require authentication
const protectedRoutes = ['/account', '/account-password', '/account-savelists', '/account-billing', '/account-verification', '/account-bookings', '/account-reviews']

// Routes that require admin role
const adminRoutes = ['/admin']

// Routes that should redirect to account if already logged in
const authRoutes = ['/login', '/signup']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('auth-token')?.value

  let user = null

  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET)
      user = payload
    } catch {
      // Invalid token
    }
  }

  // Check protected routes
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!user) {
      const url = new URL('/login', request.url)
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }
  }

  // Check admin routes
  if (adminRoutes.some(route => pathname.startsWith(route))) {
    if (!user) {
      const url = new URL('/login', request.url)
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }
    if (user.role !== 'Admin') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Redirect logged in users away from auth pages
  if (authRoutes.some(route => pathname === route)) {
    if (user) {
      return NextResponse.redirect(new URL('/account', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/account/:path*',
    '/account-password',
    '/account-savelists',
    '/account-billing',
    '/account-verification',
    '/account-bookings',
    '/account-reviews',
    '/admin/:path*',
    '/login',
    '/signup',
  ],
}
