'use client'

import { useSession } from 'next-auth/react'

/**
 * Custom hook for authentication state and role checking
 */
export function useAuth() {
  const { data: session, status, update } = useSession()

  const isAuthenticated = status === 'authenticated'
  const isLoading = status === 'loading'
  const user = session?.user || null

  const hasRole = (roles) => {
    if (!user?.role) return false
    if (typeof roles === 'string') return user.role === roles
    return roles.includes(user.role)
  }

  const isAdmin = () => hasRole(['ADMIN', 'SUPER_ADMIN'])
  const isSuperAdmin = () => hasRole('SUPER_ADMIN')
  const isEditor = () => hasRole(['EDITOR', 'ADMIN', 'SUPER_ADMIN'])

  return {
    user,
    session,
    status,
    isAuthenticated,
    isLoading,
    hasRole,
    isAdmin,
    isSuperAdmin,
    isEditor,
    updateSession: update
  }
}
