// Component Imports
import BlogList from '@views/apps/blogs/list'

// Data Imports
import { db as blogData } from '@/fake-db/apps/blogs'

const BlogListPage = () => {
  return <BlogList blogData={blogData} />
}

export default BlogListPage
