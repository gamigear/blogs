'use client'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Component Imports
import { Menu, SubMenu, MenuItem } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Config Imports
import { i18n } from '@configs/i18n'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalNavContent = () => {
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const { transitionDuration } = verticalNavOptions

  // Use default locale
  const locale = i18n.defaultLocale

  return (
    <Menu
      menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
      renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
      renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
    >
      <MenuItem href='/admin' icon={<i className='tabler-smart-home' />}>
        Dashboard
      </MenuItem>
      <SubMenu label='Front Pages' icon={<i className='tabler-files' />}>
        <MenuItem href='/' target='_blank'>
          Landing
        </MenuItem>
        <MenuItem href='/front-pages/pricing' target='_blank'>
          Pricing
        </MenuItem>
      </SubMenu>
      <SubMenu label='eCommerce' icon={<i className='tabler-shopping-cart' />}>
        <MenuItem href={`/${locale}/apps/ecommerce/dashboard`}>Dashboard</MenuItem>
        <MenuItem href={`/${locale}/apps/ecommerce/products/list`}>Products</MenuItem>
        <MenuItem href={`/${locale}/apps/ecommerce/orders/list`}>Orders</MenuItem>
      </SubMenu>
      <SubMenu label='User' icon={<i className='tabler-user' />}>
        <MenuItem href={`/${locale}/apps/user/list`}>List</MenuItem>
      </SubMenu>
      <MenuItem href={`/${locale}/pages/account-settings`} icon={<i className='tabler-settings' />}>
        Settings
      </MenuItem>
    </Menu>
  )
}

export default VerticalNavContent
