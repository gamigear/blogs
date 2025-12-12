// Component Imports
import CategoryList from '@views/apps/categories/list'

// Data Imports
import { db as categoryData } from '@/fake-db/apps/categories'

const CategoryListPage = () => {
  return <CategoryList categoryData={categoryData} />
}

export default CategoryListPage
