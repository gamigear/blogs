'use client'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import MenuItem from '@mui/material/MenuItem'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'
import CustomTextField from '@core/components/mui/TextField'

const AnalyticsDashboard = () => {
  const statsData = [
    {
      title: 'Lượt truy cập',
      value: '45,234',
      avatarIcon: 'tabler-users',
      avatarColor: 'primary',
      trend: 'positive',
      trendNumber: '12.5%',
      subtitle: 'So với tuần trước'
    },
    {
      title: 'Trang xem',
      value: '128,456',
      avatarIcon: 'tabler-eye',
      avatarColor: 'success',
      trend: 'positive',
      trendNumber: '8.2%',
      subtitle: 'So với tuần trước'
    },
    {
      title: 'Thời gian TB',
      value: '3m 24s',
      avatarIcon: 'tabler-clock',
      avatarColor: 'warning',
      trend: 'negative',
      trendNumber: '2.1%',
      subtitle: 'So với tuần trước'
    },
    {
      title: 'Tỷ lệ thoát',
      value: '42.3%',
      avatarIcon: 'tabler-door-exit',
      avatarColor: 'error',
      trend: 'positive',
      trendNumber: '5.4%',
      subtitle: 'So với tuần trước'
    }
  ]

  const topPages = [
    { page: '/games/shopee-lac-xu', views: 12500, percentage: 85 },
    { page: '/games/momo-lac-xi', views: 10200, percentage: 70 },
    { page: '/blog/code-lien-quan', views: 8900, percentage: 60 },
    { page: '/events/tet-2025', views: 7500, percentage: 50 },
    { page: '/games/tiktok-deal', views: 6200, percentage: 42 }
  ]

  const trafficSources = [
    { source: 'Google Search', visits: 18500, percentage: 41, color: 'primary' },
    { source: 'Direct', visits: 12300, percentage: 27, color: 'success' },
    { source: 'Facebook', visits: 8900, percentage: 20, color: 'info' },
    { source: 'TikTok', visits: 3200, percentage: 7, color: 'warning' },
    { source: 'Khác', visits: 2300, percentage: 5, color: 'secondary' }
  ]

  const deviceStats = [
    { device: 'Mobile', percentage: 68, icon: 'tabler-device-mobile' },
    { device: 'Desktop', percentage: 28, icon: 'tabler-device-desktop' },
    { device: 'Tablet', percentage: 4, icon: 'tabler-device-tablet' }
  ]

  const topLocations = [
    { city: 'TP. Hồ Chí Minh', visits: 15200 },
    { city: 'Hà Nội', visits: 12800 },
    { city: 'Đà Nẵng', visits: 4500 },
    { city: 'Cần Thơ', visits: 2800 },
    { city: 'Hải Phòng', visits: 2100 }
  ]

  return (
    <Grid container spacing={6}>
      {/* Header */}
      <Grid size={{ xs: 12 }}>
        <div className='flex justify-between items-center'>
          <Typography variant='h4'>Analytics</Typography>
          <CustomTextField select defaultValue='7days' size='small'>
            <MenuItem value='today'>Hôm nay</MenuItem>
            <MenuItem value='7days'>7 ngày qua</MenuItem>
            <MenuItem value='30days'>30 ngày qua</MenuItem>
            <MenuItem value='90days'>90 ngày qua</MenuItem>
          </CustomTextField>
        </div>
      </Grid>

      {/* Stats Cards */}
      {statsData.map((item, index) => (
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}

      {/* Top Pages */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Trang đư���c xem nhiều nhất' />
          <CardContent>
            <div className='flex flex-col gap-4'>
              {topPages.map((page, index) => (
                <div key={index}>
                  <div className='flex justify-between mb-1'>
                    <Typography variant='body2' className='truncate max-w-[200px]'>
                      {page.page}
                    </Typography>
                    <Typography variant='body2' fontWeight={500}>
                      {page.views.toLocaleString()}
                    </Typography>
                  </div>
                  <LinearProgress variant='determinate' value={page.percentage} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Traffic Sources */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Nguồn truy cập' />
          <CardContent>
            <div className='flex flex-col gap-4'>
              {trafficSources.map((source, index) => (
                <div key={index} className='flex items-center gap-4'>
                  <div className='flex-1'>
                    <div className='flex justify-between mb-1'>
                      <Typography variant='body2'>{source.source}</Typography>
                      <Typography variant='body2'>
                        {source.visits.toLocaleString()} ({source.percentage}%)
                      </Typography>
                    </div>
                    <LinearProgress
                      variant='determinate'
                      value={source.percentage}
                      color={source.color as 'primary' | 'success' | 'info' | 'warning' | 'secondary'}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Device Stats */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardHeader title='Thiết bị' />
          <CardContent>
            <div className='flex flex-col gap-4'>
              {deviceStats.map((device, index) => (
                <div key={index} className='flex items-center gap-4'>
                  <div className='flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10'>
                    <i className={`${device.icon} text-primary`} />
                  </div>
                  <div className='flex-1'>
                    <div className='flex justify-between mb-1'>
                      <Typography variant='body2'>{device.device}</Typography>
                      <Typography variant='body2' fontWeight={500}>
                        {device.percentage}%
                      </Typography>
                    </div>
                    <LinearProgress variant='determinate' value={device.percentage} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Top Locations */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardHeader title='Vị trí truy cập' />
          <CardContent>
            <div className='flex flex-col gap-3'>
              {topLocations.map((location, index) => (
                <div key={index} className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Typography variant='body2' color='text.secondary'>
                      {index + 1}.
                    </Typography>
                    <Typography variant='body2'>{location.city}</Typography>
                  </div>
                  <Typography variant='body2' fontWeight={500}>
                    {location.visits.toLocaleString()}
                  </Typography>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Real-time */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardHeader
            title='Thời gian thực'
            subheader='Người dùng đang online'
            action={
              <div className='flex items-center gap-1'>
                <span className='w-2 h-2 rounded-full bg-success animate-pulse' />
                <Typography variant='body2' color='success.main'>
                  Live
                </Typography>
              </div>
            }
          />
          <CardContent>
            <div className='text-center py-4'>
              <Typography variant='h2' color='primary'>
                127
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                người dùng đang truy cập
              </Typography>
            </div>
            <div className='flex justify-around mt-4 pt-4 border-t'>
              <div className='text-center'>
                <Typography variant='h6'>45</Typography>
                <Typography variant='caption' color='text.secondary'>
                  Trang chủ
                </Typography>
              </div>
              <div className='text-center'>
                <Typography variant='h6'>38</Typography>
                <Typography variant='caption' color='text.secondary'>
                  Mini Games
                </Typography>
              </div>
              <div className='text-center'>
                <Typography variant='h6'>44</Typography>
                <Typography variant='caption' color='text.secondary'>
                  Bài viết
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AnalyticsDashboard
