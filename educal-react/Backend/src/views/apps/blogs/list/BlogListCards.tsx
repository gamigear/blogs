'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

const BlogListCards = () => {
  const data = [
    {
      title: 'Tổng bài viết',
      value: '156',
      avatarIcon: 'tabler-article',
      avatarColor: 'primary',
      trend: 'positive',
      trendNumber: '15%',
      subtitle: 'Tổng số bài viết'
    },
    {
      title: 'Đã xuất bản',
      value: '120',
      avatarIcon: 'tabler-check',
      avatarColor: 'success',
      trend: 'positive',
      trendNumber: '10%',
      subtitle: 'Bài viết published'
    },
    {
      title: 'Bản nháp',
      value: '36',
      avatarIcon: 'tabler-file-text',
      avatarColor: 'warning',
      trend: 'negative',
      trendNumber: '5%',
      subtitle: 'Bài viết draft'
    },
    {
      title: 'Lượt xem',
      value: '45.2K',
      avatarIcon: 'tabler-eye',
      avatarColor: 'info',
      trend: 'positive',
      trendNumber: '32%',
      subtitle: 'Tổng lượt xem'
    }
  ]

  return (
    <Grid container spacing={6}>
      {data.map((item, index) => (
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default BlogListCards
