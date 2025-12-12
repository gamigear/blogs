// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { BlogType } from '@/types/apps/blogTypes'

// Component Imports
import BlogListTable from './BlogListTable'
import BlogListCards from './BlogListCards'

const BlogList = ({ blogData }: { blogData?: BlogType[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <BlogListCards />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <BlogListTable tableData={blogData} />
      </Grid>
    </Grid>
  )
}

export default BlogList
