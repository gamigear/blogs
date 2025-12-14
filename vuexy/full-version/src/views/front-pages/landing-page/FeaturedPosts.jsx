'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog/posts?limit=3&status=published')
      const data = await res.json()
      setPosts(data.posts || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant='h3' fontWeight='bold' gutterBottom>
            Bài Viết Mới Nhất
          </Typography>
          <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 600, mx: 'auto' }}>
            Khám phá những kinh nghiệm du lịch, ẩm thực và văn hóa từ cộng đồng của chúng tôi
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {loading ? (
            [...Array(3)].map((_, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card>
                  <Skeleton variant='rectangular' height={200} />
                  <CardContent>
                    <Skeleton variant='text' height={32} />
                    <Skeleton variant='text' />
                    <Skeleton variant='text' width='60%' />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            posts.map(post => (
              <Grid item xs={12} md={4} key={post.id}>
                <Card
                  component={Link}
                  href={`/front-pages/blog/${post.slug}`}
                  sx={{
                    textDecoration: 'none',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8
                    }
                  }}
                >
                  <CardMedia
                    component='div'
                    sx={{
                      height: 200,
                      bgcolor: 'grey.200',
                      backgroundImage: post.featuredImage ? `url(${post.featuredImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Chip
                      label={post.category?.name}
                      size='small'
                      color='primary'
                      sx={{ mb: 1.5 }}
                    />
                    <Typography variant='h6' fontWeight='bold' gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
                      {post.excerpt?.substring(0, 100)}...
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant='caption' color='text.secondary'>
                        {post.authorName}
                      </Typography>
                      <Typography variant='caption' color='text.secondary'>
                        {formatDate(post.publishedAt)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            href='/front-pages/blog'
            variant='outlined'
            size='large'
          >
            Xem tất cả bài viết
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default FeaturedPosts
