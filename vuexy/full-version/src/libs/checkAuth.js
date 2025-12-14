import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '@/libs/auth'

/**
 * Check authentication and authorization
 * @param {string[]} allowedRoles - Array of allowed roles
 * @returns {Promise<{session: object|null, error: NextResponse|null}>}
 */
export async function checkAuth(allowedRoles = []) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return {
      session: null,
      error: NextResponse.json(
        { message: 'Vui lòng đăng nhập' },
        { status: 401 }
      )
    }
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(session.user.role)) {
    return {
      session: null,
      error: NextResponse.json(
        { message: 'Không có quyền truy cập' },
        { status: 403 }
      )
    }
  }

  return { session, error: null }
}

/**
 * Check if user has admin role
 * @param {object} session - NextAuth session
 * @returns {boolean}
 */
export function isAdmin(session) {
  return ['ADMIN', 'SUPER_ADMIN'].includes(session?.user?.role)
}

/**
 * Check if user is super admin
 * @param {object} session - NextAuth session
 * @returns {boolean}
 */
export function isSuperAdmin(session) {
  return session?.user?.role === 'SUPER_ADMIN'
}
