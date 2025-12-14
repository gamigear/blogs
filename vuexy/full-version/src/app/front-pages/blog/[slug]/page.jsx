// Component Imports
import BlogDetailWrapper from '@views/front-pages/blog/BlogDetail'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export async function generateMetadata({ params }) {
  const { slug } = await params

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/posts/${slug}`, {
      cache: 'no-store'
    })
    const post = await res.json()

    return {
      title: `${post.title} - Blog Du Lịch`,
      description: post.excerpt
    }
  } catch {
    return {
      title: 'Blog Du Lịch',
      description: 'Bài viết du lịch'
    }
  }
}

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params
  const mode = await getServerMode()

  return <BlogDetailWrapper slug={slug} mode={mode} />
}

export default BlogDetailPage
