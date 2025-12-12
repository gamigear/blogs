'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

const EventListCards = () => {
  const data = [
    {
      title: 'Tổng sự kiện',
      value: '12',
      avatarIcon: 'tabler-calendar-event',
      avatarColor: 'primary',
      trend: 'positive',
      trendNumber: '8%',
      subtitle: 'Tổng số sự kiện'
    },
    {
      title: 'Đang diễn ra',
      value: '3',
      avatarIcon: 'tabler-player-play',
      avatarColor: 'success',
      trend: 'positive',
      trendNumber: '12%',
      subtitle: 'Sự kiện active'
    },
    {
      title: 'Sắp diễn ra',
      value: '5',
      avatarIcon: 'tabler-clock',
      avatarColor: 'warning',
      trend: 'positive',
      trendNumber: '5%',
      subtitle: 'Sự kiện upcoming'
    },
    {
      title: 'Đã kết thúc',
      value: '4',
      avatarIcon: 'tabler-check',
      avatarColor: 'secondary',
      trend: 'negative',
      trendNumber: '3%',
      subtitle: 'Sự kiện ended'
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

export default EventListCards
