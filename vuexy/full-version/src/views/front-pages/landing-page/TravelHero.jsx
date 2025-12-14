'use client'

import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const TravelHero = () => {
  const features = [
    { icon: 'tabler-plane', title: 'Khám phá', desc: 'Điểm đến mới' },
    { icon: 'tabler-building', title: 'Lưu trú', desc: 'Đặt phòng dễ dàng' },
    { icon: 'tabler-backpack', title: 'Phụ kiện', desc: 'Đồ dùng du lịch' },
    { icon: 'tabler-book', title: 'Kinh nghiệm', desc: 'Blog chia sẻ' }
  ]

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: 8
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)'
        }}
      />

      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, maxWidth: 1200, px: 3 }}>
        <Grid container spacing={6} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h1'
              sx={{
                color: 'white',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                mb: 3
              }}
            >
              Khám Phá Thế Giới
              <br />
              <Box component='span' sx={{ color: '#ffd700' }}>
                Cùng Chúng Tôi
              </Box>
            </Typography>
            <Typography
              variant='h6'
              sx={{
                color: 'rgba(255,255,255,0.9)',
                mb: 4,
                fontWeight: 400,
                lineHeight: 1.8
              }}
            >
              Chia sẻ kinh nghiệm du lịch, khám phá những điểm đến tuyệt vời và trang bị đầy đủ cho mọi chuyến đi của bạn.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href='/front-pages/blog'
                variant='contained'
                size='large'
                sx={{
                  bgcolor: 'white',
                  color: '#667eea',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)'
                  }
                }}
              >
                Đọc Blog
              </Button>
              <Button
                component={Link}
                href='/front-pages/shop'
                variant='outlined'
                size='large'
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Mua Sắm
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={6} key={index}>
                  <Card
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                      <i
                        className={feature.icon}
                        style={{ fontSize: '3rem', marginBottom: '8px', color: 'white' }}
                      />
                      <Typography
                        variant='h6'
                        sx={{ color: 'white', fontWeight: 600, mb: 0.5 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{ color: 'rgba(255,255,255,0.8)' }}
                      >
                        {feature.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default TravelHero
