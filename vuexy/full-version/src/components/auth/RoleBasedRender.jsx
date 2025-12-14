'use client'

import { useAuth } from '@/hooks/useAuth'

/**
 * Conditionally render children based on user role
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string[]} props.allowedRoles - Array of allowed roles
 * @param {React.ReactNode} props.fallback - Fallback component if not authorized
 */
export default function RoleBasedRender({ children, allowedRoles = [], fallback = null }) {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return null
  }

  if (!user) {
    return fallback
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return fallback
  }

  return <>{children}</>
}
