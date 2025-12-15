// MUI Imports
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Vuexy - MUI Next.js Admin Dashboard Template',
  description:
    'Vuexy - MUI Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.'
}

const RootLayout = async ({ children }) => {
  const systemMode = await getSystemMode()

  return (
    <html id='__next' lang='en' suppressHydrationWarning>
      <body className='flex is-full min-bs-full flex-auto flex-col' suppressHydrationWarning>
        <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
        <Providers direction='ltr'>
          <BlankLayout systemMode={systemMode}>
            {children}
          </BlankLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
