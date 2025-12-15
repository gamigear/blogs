// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'
import CustomChip from '@core/components/mui/Chip'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Config Imports
import { i18n } from '@configs/i18n'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const AdminVerticalMenu = ({ dictionary, scrollMenu }) => {
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()

  // Use default locale
  const locale = i18n.defaultLocale

  const { isBreakpointReached, transitionDuration } = verticalNavOptions
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
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
          <MenuItem href='/front-pages/blog' target='_blank'>
            Blog
          </MenuItem>
          <MenuItem href='/front-pages/shop' target='_blank'>
            Shop
          </MenuItem>
        </SubMenu>

        <MenuSection label={dictionary['navigation'].appsPages}>
          {/* eCommerce */}
          <SubMenu label={dictionary['navigation'].eCommerce} icon={<i className='tabler-shopping-cart' />}>
            <MenuItem href={`/${locale}/apps/ecommerce/dashboard`}>{dictionary['navigation'].dashboard}</MenuItem>
            <SubMenu label={dictionary['navigation'].products}>
              <MenuItem href={`/${locale}/apps/ecommerce/products/list`}>{dictionary['navigation'].list}</MenuItem>
              <MenuItem href={`/${locale}/apps/ecommerce/products/add`}>{dictionary['navigation'].add}</MenuItem>
              <MenuItem href={`/${locale}/apps/ecommerce/products/category`}>
                {dictionary['navigation'].category}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].orders}>
              <MenuItem href={`/${locale}/apps/ecommerce/orders/list`}>{dictionary['navigation'].list}</MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].customers}>
              <MenuItem href={`/${locale}/apps/ecommerce/customers/list`}>{dictionary['navigation'].list}</MenuItem>
            </SubMenu>
          </SubMenu>

          {/* User Management */}
          <SubMenu label={dictionary['navigation'].user} icon={<i className='tabler-user' />}>
            <MenuItem href={`/${locale}/apps/user/list`}>{dictionary['navigation'].list}</MenuItem>
          </SubMenu>

          {/* Roles & Permissions */}
          <SubMenu label={dictionary['navigation'].rolesPermissions} icon={<i className='tabler-lock' />}>
            <MenuItem href={`/${locale}/apps/roles`}>{dictionary['navigation'].roles}</MenuItem>
            <MenuItem href={`/${locale}/apps/permissions`}>{dictionary['navigation'].permissions}</MenuItem>
          </SubMenu>

          {/* Pages */}
          <SubMenu label={dictionary['navigation'].pages} icon={<i className='tabler-file' />}>
            <MenuItem href={`/${locale}/pages/account-settings`}>{dictionary['navigation'].accountSettings}</MenuItem>
            <MenuItem href={`/${locale}/pages/faq`}>{dictionary['navigation'].faq}</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
    </ScrollWrapper>
  )
}

export default AdminVerticalMenu
