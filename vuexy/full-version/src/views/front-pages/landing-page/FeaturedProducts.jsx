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
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

const FeaturedProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/shop/products?limit=4&featured=true&status=published')
      const data = await res.json()
      setProducts(data.products || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }

  return (
    <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
      <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant='h3' fontWeight='bold' gutterBottom>
            Sản Phẩm Nổi Bật
          </Typography>
          <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 600, mx: 'auto' }}>
            Trang bị đầy đủ cho mọi chuyến đi với những sản phẩm chất lượng cao
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {loading ? (
            [...Array(4)].map((_, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Card>
                  <Skeleton variant='rectangular' height={200} />
                  <CardContent>
                    <Skeleton variant='text' />
                    <Skeleton variant='text' width='60%' />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            products.map(product => (
              <Grid item xs={6} md={3} key={product.id}>
                <Card
                  component={Link}
                  href={`/front-pages/shop/${product.slug}`}
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
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component='div'
                      sx={{
                        height: 200,
                        bgcolor: 'grey.100',
                        backgroundImage: product.images?.[0]?.url ? `url(${product.images[0].url})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    {product.salePrice && (
                      <Chip
                        label={`-${Math.round((1 - product.salePrice / product.price) * 100)}%`}
                        color='error'
                        size='small'
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                      />
                    )}
                    <Chip
                      label='Hot'
                      color='warning'
                      size='small'
                      sx={{ position: 'absolute', top: 8, left: 8 }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        minHeight: 48,
                        mb: 1
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                      <Rating value={product.avgRating || 0} size='small' readOnly precision={0.5} />
                      <Typography variant='caption' color='text.secondary'>
                        ({product._count?.reviews || 0})
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant='h6' color='primary' fontWeight='bold'>
                        {formatPrice(product.salePrice || product.price)}
                      </Typography>
                      {product.salePrice && (
                        <Typography
                          variant='body2'
                          color='text.secondary'
                          sx={{ textDecoration: 'line-through' }}
                        >
                          {formatPrice(product.price)}
                        </Typography>
                      )}
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
            href='/front-pages/shop'
            variant='contained'
            size='large'
            sx={{
              background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
              px: 4
            }}
          >
            Xem tất cả sản phẩm
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default FeaturedProducts
