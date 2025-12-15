// MUI Imports
import Button from '@mui/material/Button'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

// Component Imports
import LandingPageWrapper from '@views/front-pages/landing-page'
import FrontLayout from '@components/layout/front-pages'
import ScrollToTop from '@core/components/scroll-to-top'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const HomePage = async () => {
  const mode = await getServerMode()

  return (
    <IntersectionProvider>
      <FrontLayout>
        <LandingPageWrapper mode={mode} />
        <ScrollToTop className='mui-fixed'>
          <Button
            variant='contained'
            className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'
          >
            <i className='tabler-arrow-up' />
          </Button>
        </ScrollToTop>
      </FrontLayout>
    </IntersectionProvider>
  )
}

export default HomePage
