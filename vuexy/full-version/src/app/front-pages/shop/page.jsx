// Component Imports
import ShopListWrapper from '@views/front-pages/shop/ShopList'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata = {
  title: 'Shop Du Lịch - Đồ dùng & Phụ kiện',
  description: 'Mua sắm đồ dùng du lịch, phụ kiện cắm trại, vali, balo và nhiều sản phẩm chất lượng khác.'
}

const ShopPage = async () => {
  const mode = await getServerMode()

  return <ShopListWrapper mode={mode} />
}

export default ShopPage
