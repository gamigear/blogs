// MUI Imports
import Button from '@mui/material/Button'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'
import HorizontalLayout from '@layouts/HorizontalLayout'

// Component Imports
import Providers from '@components/Providers'
import AdminNavigation from '@components/layout/admin/Navigation'
import Header from '@components/layout/horizontal/Header'
import Navbar from '@components/layout/vertical/Navbar'
import VerticalFooter from '@components/layout/vertical/Footer'
import HorizontalFooter from '@components/layout/horizontal/Footer'
import Customizer from '@core/components/customizer'
import ScrollToTop from '@core/components/scroll-to-top'
import AuthGuard from '@/hocs/AuthGuard'

// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { getDictionary } from '@/utils/getDictionary'
import { getMode, getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Admin Dashboard - Vuexy',
  description: 'Admin Dashboard'
}

const AdminLayout = async ({ children }) => {
  // Default to English
  const lang = i18n.defaultLocale
  const direction = i18n.langDirection[lang]
  const dictionary = await getDictionary(lang)
  const mode = await getMode()
  const systemMode = await getSystemMode()

  return (
    <html id='__next' lang={lang} dir={direction} suppressHydrationWarning>
      <body className='flex is-full min-bs-full flex-auto flex-col' suppressHydrationWarning>
        <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
        <Providers direction={direction}>
          <AuthGuard locale={lang}>
            <LayoutWrapper
              systemMode={systemMode}
              verticalLayout={
                <VerticalLayout
                  navigation={<AdminNavigation dictionary={dictionary} mode={mode} />}
                  navbar={<Navbar />}
                  footer={<VerticalFooter />}
                >
                  {children}
                </VerticalLayout>
              }
              horizontalLayout={
                <HorizontalLayout header={<Header dictionary={dictionary} />} footer={<HorizontalFooter />}>
                  {children}
                </HorizontalLayout>
              }
            />
            <ScrollToTop className='mui-fixed'>
              <Button
                variant='contained'
                className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'
              >
                <i className='tabler-arrow-up' />
              </Button>
            </ScrollToTop>
            <Customizer dir={direction} />
          </AuthGuard>
        </Providers>
      </body>
    </html>
  )
}

export default AdminLayout
