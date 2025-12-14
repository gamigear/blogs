// Component Imports
import ProductDetailWrapper from '@views/front-pages/shop/ProductDetail'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export async function generateMetadata({ params }) {
  const { slug } = await params

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shop/products/${slug}`, {
      cache: 'no-store'
    })
    const product = await res.json()

    return {
      title: `${product.name} - Shop Du Lịch`,
      description: product.shortDesc || product.description?.substring(0, 160)
    }
  } catch {
    return {
      title: 'Shop Du Lịch',
      description: 'Sản phẩm du lịch'
    }
  }
}

const ProductDetailPage = async ({ params }) => {
  const { slug } = await params
  const mode = await getServerMode()

  return <ProductDetailWrapper slug={slug} mode={mode} />
}

export default ProductDetailPage
