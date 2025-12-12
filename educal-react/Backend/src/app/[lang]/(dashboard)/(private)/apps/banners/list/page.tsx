// Component Imports
import BannerList from '@views/apps/banners/list'

// Data Imports
import { db as bannerData } from '@/fake-db/apps/banners'

const BannerListPage = () => {
  return <BannerList bannerData={bannerData} />
}

export default BannerListPage
