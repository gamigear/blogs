// Next Imports
import { redirect } from 'next/navigation'

// Third-party Imports
import { getServerSession } from 'next-auth'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const GuestOnlyRoute = async ({ children, lang }) => {
  const session = await getServerSession()

  if (session) {
    // Redirect logged-in users to admin dashboard
    redirect(getLocalizedUrl(themeConfig.adminPageUrl || '/dashboards/crm', lang))
  }

  return <>{children}</>
}

export default GuestOnlyRoute
