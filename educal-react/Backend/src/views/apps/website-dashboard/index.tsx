'use client'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

const WebsiteDashboard = () => {
  const statsData = [
    {
      title: 'Tổng Mini Games',
      value: '24',
      avatarIcon: 'tabler-device-gamepad-2',
      avatarColor: 'primary',
      trend: 'positive',
      trendNumber: '12%',
      subtitle: 'So với tháng trước'
    },
    {
      title: 'Bài viết',
      value: '156',
      avatarIcon: 'tabler-article',
      avatarColor: 'success',
      trend: 'positive',
      trendNumber: '8%',
      subtitle: 'So với tháng trước'
    },
    {
      title: 'Sự kiện',
      value: '12',
      avatarIcon: 'tabler-calendar-event',
      avatarColor: 'warning',
      trend: 'positive',
      trendNumber: '15%',
      subtitle: 'So với tháng trước'
    },
    {
      title: 'Lượt truy cập',
      value: '45.2K',
      avatarIcon: 'tabler-users',
      avatarColor: 'info',
      trend: 'positive',
      trendNumber: '25%',
      subtitle: 'So với tháng trước'
    }
  ]

  const recentActivities = [
    { icon: 'tabler-device-gamepad-2', color: 'primary', title: 'Mini Game mới được thêm', time: '2 phút trước' },
    { icon: 'tabler-article', color: 'success', title: 'Bài viết "Code Liên Quân" được xuất bản', time: '15 phút trước' },
    { icon: 'tabler-calendar-event', color: 'warning', title: 'Sự kiện Tết 2025 được cập nhật', time: '1 giờ trước' },
    { icon: 'tabler-user-plus', color: 'info', title: '50 người dùng mới đăng ký', time: '3 giờ trước' }
  ]

  const topGames = [
    { name: 'Shopee Lắc Xu', views: 12500, progress: 85 },
    { name: 'MoMo Lắc Xì', views: 10200, progress: 70 },
    { name: 'TikTok Shop Deal', views: 8900, progress: 60 },
    { name: 'Zalo Pay Quay số', views: 7500, progress: 50 }
  ]

  return (
    <Grid container spacing={6}>
      {/* Stats Cards */}
      {statsData.map((item, index) => (
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}

      {/* Recent Activities */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardContent>
            <div className='flex items-center justify-between mb-4'>
              <Typography variant='h5'>Hoạt động gần đây</Typography>
              <Button size='small'>Xem tất cả</Button>
            </div>
            <div className='flex flex-col gap-4'>
              {recentActivities.map((activity, index) => (
                <div key={index} className='flex items-center gap-4'>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-${activity.color}/10`}>
                    <i className={`${activity.icon} text-${activity.color}`} />
                  </div>
                  <div className='flex-1'>
                    <Typography variant='body1'>{activity.title}</Typography>
                    <Typography variant='body2' color='text.secondary'>{activity.time}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Top Games */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardContent>
            <div className='flex items-center justify-between mb-4'>
              <Typography variant='h5'>Mini Games phổ biến</Typography>
              <Button size='small'>Xem tất cả</Button>
            </div>
            <div className='flex flex-col gap-4'>
              {topGames.map((game, index) => (
                <div key={index}>
                  <div className='flex items-center justify-between mb-1'>
                    <Typography variant='body1'>{game.name}</Typography>
                    <Typography variant='body2' color='text.secondary'>{game.views.toLocaleString()} lượt xem</Typography>
                  </div>
                  <LinearProgress variant='determinate' value={game.progress} color='primary' />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Quick Actions */}
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent>
            <Typography variant='h5' className='mb-4'>Thao tác nhanh</Typography>
            <div className='flex flex-wrap gap-4'>
              <Button variant='contained' startIcon={<i className='tabler-plus' />}>
                Thêm Mini Game
              </Button>
              <Button variant='contained' color='success' startIcon={<i className='tabler-article' />}>
                Viết bài mới
              </Button>
              <Button variant='contained' color='warning' startIcon={<i className='tabler-calendar-plus' />}>
                Tạo sự kiện
              </Button>
              <Button variant='outlined' startIcon={<i className='tabler-settings' />}>
                Cài đặt website
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default WebsiteDashboard
