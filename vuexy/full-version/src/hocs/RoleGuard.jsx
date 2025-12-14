// Third-party Imports
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

// Lib Imports
import { authOptions } from '@/libs/auth'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

/**
 * Role-based access control guard
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.locale
 * @param {string[]} props.allowedRoles - Array of allowed roles
 */
export default async function RoleGuard({ children, locale, allowedRoles = [] }) {
  const session = await getServerSession(authOptions)

  // Not logged in - redirect to login
  if (!session) {
    redirect(getLocalizedUrl('/login', locale))
  }

  // Check role permission
  if (allowedRoles.length > 0 && !allowedRoles.includes(session.user.role)) {
    redirect(getLocalizedUrl('/not-authorized', locale))
  }

  return <>{children}</>
}
