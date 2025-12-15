'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Skeleton from '@mui/material/Skeleton'
import { useSettings } from '@core/hooks/useSettings'

const BlogDetailWrapper = ({ slug, mode }) => {
  const { updatePageSettings } = useSettings()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return updatePageSettings({ skin: 'default' })
  }, [])

  useEffect(() => {
    fetchPost()
  }, [slug])

  const fetchPost = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/blog/posts/${slug}`)
      const data = await res.json()
      setPost(data)
    } catch (error) {
      console.error('Error fetching post:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3, py: 6 }}>
        <Skeleton variant='text' width={300} height={40} />
        <Skeleton variant='rectangular' height={400} sx={{ my: 3 }} />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' width='80%' />
      </Container>
    )
  }

  if (!post) {
    return (
      <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3, py: 6, textAlign: 'center' }}>
        <Typography variant='h4'>Không tìm thấy bài viết</Typography>
        <Link href='/front-pages/blog'>Quay lại danh sách</Link>
      </Container>
    )
  }

  return (
    <Box className='bg-backgroundPaper'>
      {/* Hero Image */}
      <Box
        sx={{
          height: { xs: 250, md: 400 },
          bgcolor: 'grey.300',
          backgroundImage: post.featuredImage ? `url(${post.featuredImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            p: 4,
            color: 'white'
          }}
        >
          <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3 }}>
            <Chip label={post.category?.name} color='primary' sx={{ mb: 2 }} />
            <Typography variant='h3' fontWeight='bold'>
              {post.title}
            </Typography>
          </Container>
        </Box>
      </Box>

      <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3, py: 4 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            Trang chủ
          </Link>
          <Link href='/front-pages/blog' style={{ textDecoration: 'none', color: 'inherit' }}>
            Blog
          </Link>
          <Typography color='text.primary'>{post.title}</Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            {/* Author Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Avatar src={post.authorAvatar} alt={post.authorName}>
                {post.authorName?.charAt(0)}
              </Avatar>
              <Box>
                <Typography fontWeight='bold'>{post.authorName}</Typography>
                <Typography variant='body2' color='text.secondary'>
                  {formatDate(post.publishedAt)} • {post.viewCount} lượt xem
                </Typography>
              </Box>
            </Box>

            {/* Tags */}
            {post.tags?.length > 0 && (
              <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                {post.tags.map(({ tag }) => (
                  <Chip key={tag.id} label={tag.name} size='small' variant='outlined' />
                ))}
              </Box>
            )}

            {/* Content */}
            <Box
              sx={{
                '& h2': { mt: 4, mb: 2, fontWeight: 'bold' },
                '& h3': { mt: 3, mb: 1.5, fontWeight: 'bold' },
                '& p': { mb: 2, lineHeight: 1.8 },
                '& ul, & ol': { mb: 2, pl: 3 },
                '& li': { mb: 1 },
                '& img': { maxWidth: '100%', borderRadius: 2, my: 2 }
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <Divider sx={{ my: 4 }} />

            {/* Comments */}
            <Typography variant='h5' fontWeight='bold' mb={3}>
              Bình luận ({post.comments?.length || 0})
            </Typography>
            {post.comments?.length > 0 ? (
              post.comments.map(comment => (
                <Card key={comment.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                      <Avatar>{comment.name?.charAt(0)}</Avatar>
                      <Box>
                        <Typography fontWeight='bold'>{comment.name}</Typography>
                        <Typography variant='caption' color='text.secondary'>
                          {formatDate(comment.createdAt)}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography>{comment.content}</Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography color='text.secondary'>Chưa có bình luận nào</Typography>
            )}
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Card sx={{ position: 'sticky', top: 100 }}>
              <CardContent>
                <Typography variant='h6' fontWeight='bold' mb={2}>
                  Bài viết liên quan
                </Typography>
                <Typography color='text.secondary' variant='body2'>
                  Đang cập nhật...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default BlogDetailWrapper
