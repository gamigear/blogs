'use client'

// Component Imports
import AdminHorizontalNavigation from './HorizontalNavigation'
import NavbarContent from '@components/layout/horizontal/NavbarContent'
import Navbar from '@layouts/components/horizontal/Navbar'
import LayoutHeader from '@layouts/components/horizontal/Header'

// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

const AdminHeader = ({ dictionary }) => {
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <>
      <LayoutHeader>
        <Navbar>
          <NavbarContent />
        </Navbar>
        {!isBreakpointReached && <AdminHorizontalNavigation dictionary={dictionary} />}
      </LayoutHeader>
      {isBreakpointReached && <AdminHorizontalNavigation dictionary={dictionary} />}
    </>
  )
}

export default AdminHeader
