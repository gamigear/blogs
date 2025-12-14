'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import { useSettings } from '@core/hooks/useSettings'

const BlogListWrapper = ({ mode }) => {
  const { updatePageSettings } = useSettings()
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    return updatePageSettings({ skin: 'default' })
  }, [])

  useEffect(() => {
    fetchPosts()
    fetchCategories()
  }, [page, selectedCategory])

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '6',
        ...(selectedCategory && { category: selectedCategory })
      })
      const res = await fetch(`/api/blog/posts?${params}`)
      const data = await res.json()
      setPosts(data.posts || [])
      setTotalPages(data.pagination?.totalPages || 1)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/blog/categories')
      const data = await res.json()
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Box className='bg-backgroundPaper'>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          py: { xs: 8, md: 12 },
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3 }}>
          <Typography variant='h2' fontWeight='bold' mb={2}>
            Blog Du Lịch
          </Typography>
          <Typography variant='h6' sx={{ opacity: 0.9 }}>
            Khám phá những điểm đến tuyệt vời, ẩm thực độc đáo và mẹo hay cho chuyến đi của bạn
          </Typography>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3, py: 6 }}>
        {/* Categories */}
        <Box sx={{ mb: 4, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Chip
            label='Tất cả'
            onClick={() => { setSelectedCategory(null); setPage(1) }}
            color={!selectedCategory ? 'primary' : 'default'}
            variant={!selectedCategory ? 'filled' : 'outlined'}
          />
          {categories.map(cat => (
            <Chip
              key={cat.id}
              label={`${cat.name} (${cat._count?.posts || 0})`}
              onClick={() => { setSelectedCategory(cat.slug); setPage(1) }}
              color={selectedCategory === cat.slug ? 'primary' : 'default'}
              variant={selectedCategory === cat.slug ? 'filled' : 'outlined'}
            />
          ))}
        </Box>

        {/* Posts Grid */}
        <Grid container spacing={4}>
          {loading ? (
            [...Array(6)].map((_, i) => (
              <Grid item xs={12} md={6} lg={4} key={i}>
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
          ) : posts.length === 0 ? (
            <Grid item xs={12}>
              <Typography textAlign='center' color='text.secondary'>
                Chưa có bài viết nào
              </Typography>
            </Grid>
          ) : (
            posts.map(post => (
              <Grid item xs={12} md={6} lg={4} key={post.id}>
                <Card
                  component={Link}
                  href={`/front-pages/blog/${post.slug}`}
                  sx={{
                    textDecoration: 'none',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardMedia
                    component='div'
                    sx={{
                      height: 200,
                      bgcolor: 'grey.200',
                      backgroundImage: post.featuredImage ? `url(${post.featuredImage})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Chip
                      label={post.category?.name}
                      size='small'
                      color='primary'
                      sx={{ mb: 1 }}
                    />
                    <Typography variant='h6' fontWeight='bold' gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
                      {post.excerpt?.substring(0, 120)}...
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto' }}>
                      <Typography variant='caption' color='text.secondary'>
                        {post.authorName} • {formatDate(post.publishedAt)}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mt: 1, alignItems: 'center' }}>
                      <Typography variant='caption' color='text.secondary' sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <i className='tabler-eye' style={{ fontSize: '14px' }} /> {post.viewCount} lượt xem
                      </Typography>
                      <Typography variant='caption' color='text.secondary' sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <i className='tabler-message' style={{ fontSize: '14px' }} /> {post._count?.comments || 0} bình luận
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              color='primary'
            />
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default BlogListWrapper
