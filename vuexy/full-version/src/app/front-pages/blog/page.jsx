// Component Imports
import BlogListWrapper from '@views/front-pages/blog/BlogList'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata = {
  title: 'Blog Du Lịch - Chia sẻ kinh nghiệm & Khám phá',
  description: 'Khám phá các bài viết về du lịch, ẩm thực, văn hóa và mẹo hay cho chuyến đi của bạn.'
}

const BlogPage = async () => {
  const mode = await getServerMode()

  return <BlogListWrapper mode={mode} />
}

export default BlogPage
