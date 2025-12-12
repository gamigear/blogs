'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

const CourseListCards = () => {
  const data = [
    {
      title: 'Tổng Mini Game',
      value: '24',
      avatarIcon: 'tabler-device-gamepad-2',
      avatarColor: 'primary',
      trend: 'positive',
      trendNumber: '12%',
      subtitle: 'Tổng số mini game'
    },
    {
      title: 'Đang hoạt động',
      value: '18',
      avatarIcon: 'tabler-check',
      avatarColor: 'success',
      trend: 'positive',
      trendNumber: '8%',
      subtitle: 'Mini game active'
    },
    {
      title: 'Nổi bật',
      value: '6',
      avatarIcon: 'tabler-star',
      avatarColor: 'warning',
      trend: 'positive',
      trendNumber: '5%',
      subtitle: 'Mini game featured'
    },
    {
      title: 'Lượt xem',
      value: '12.5K',
      avatarIcon: 'tabler-eye',
      avatarColor: 'info',
      trend: 'positive',
      trendNumber: '25%',
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

export default CourseListCards
