'use client'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Component Imports
import HorizontalNav, { Menu, SubMenu, MenuItem } from '@menu/horizontal-menu'
import VerticalNavContent from './VerticalNavContent'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Config Imports
import { i18n } from '@configs/i18n'

// Styled Component Imports
import StyledHorizontalNavExpandIcon from '@menu/styles/horizontal/StyledHorizontalNavExpandIcon'
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/horizontal/menuItemStyles'
import menuRootStyles from '@core/styles/horizontal/menuRootStyles'
import verticalMenuItemStyles from '@core/styles/vertical/menuItemStyles'
import verticalNavigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'

const RenderExpandIcon = ({ level }) => (
  <StyledHorizontalNavExpandIcon level={level}>
    <i className='tabler-chevron-right' />
  </StyledHorizontalNavExpandIcon>
)

const RenderVerticalExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const AdminHorizontalNavigation = ({ dictionary }) => {
  const verticalNavOptions = useVerticalNav()
  const theme = useTheme()
  const { settings } = useSettings()

  // Use default locale
  const locale = i18n.defaultLocale

  const { transitionDuration } = verticalNavOptions

  return (
    <HorizontalNav
      switchToVertical
      verticalNavContent={VerticalNavContent}
      verticalNavProps={{
        customStyles: verticalNavigationCustomStyles(verticalNavOptions, theme),
        backgroundColor: 'var(--mui-palette-background-paper)'
      }}
    >
      <Menu
        rootStyles={menuRootStyles(theme)}
        renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
        menuItemStyles={menuItemStyles(theme, 'tabler-circle')}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 14 : 12),
          alignmentAxis: 0
        }}
        verticalMenuProps={{
          menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme),
          renderExpandIcon: ({ open }) => (
            <RenderVerticalExpandIcon open={open} transitionDuration={transitionDuration} />
          ),
          renderExpandedMenuItemIcon: { icon: <i className='tabler-circle text-xs' /> }
        }}
      >
        {/* Dashboard */}
        <MenuItem href='/admin' icon={<i className='tabler-smart-home' />}>
          {dictionary['navigation'].dashboards}
        </MenuItem>

        {/* Front Pages */}
        <SubMenu label={dictionary['navigation'].frontPages} icon={<i className='tabler-files' />}>
          <MenuItem href='/' target='_blank'>
            {dictionary['navigation'].landing}
          </MenuItem>
          <MenuItem href='/front-pages/pricing' target='_blank'>
            {dictionary['navigation'].pricing}
          </MenuItem>
        </SubMenu>

        {/* eCommerce */}
        <SubMenu label={dictionary['navigation'].eCommerce} icon={<i className='tabler-shopping-cart' />}>
          <MenuItem href={`/${locale}/apps/ecommerce/dashboard`}>{dictionary['navigation'].dashboard}</MenuItem>
          <MenuItem href={`/${locale}/apps/ecommerce/products/list`}>{dictionary['navigation'].products}</MenuItem>
          <MenuItem href={`/${locale}/apps/ecommerce/orders/list`}>{dictionary['navigation'].orders}</MenuItem>
        </SubMenu>

        {/* User */}
        <SubMenu label={dictionary['navigation'].user} icon={<i className='tabler-user' />}>
          <MenuItem href={`/${locale}/apps/user/list`}>{dictionary['navigation'].list}</MenuItem>
        </SubMenu>

        {/* Settings */}
        <MenuItem href={`/${locale}/pages/account-settings`} icon={<i className='tabler-settings' />}>
          {dictionary['navigation'].settings}
        </MenuItem>
      </Menu>
    </HorizontalNav>
  )
}

export default AdminHorizontalNavigation
