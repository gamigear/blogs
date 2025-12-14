'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Skeleton from '@mui/material/Skeleton'
import { useSettings } from '@core/hooks/useSettings'

const ProductDetailWrapper = ({ slug, mode }) => {
  const { updatePageSettings } = useSettings()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    return updatePageSettings({ skin: 'default' })
  }, [])

  useEffect(() => {
    fetchProduct()
  }, [slug])

  const fetchProduct = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/shop/products/${slug}`)
      const data = await res.json()
      setProduct(data)
    } catch (error) {
      console.error('Error fetching product:', error)
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Skeleton variant='rectangular' height={400} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skeleton variant='text' height={40} />
            <Skeleton variant='text' />
            <Skeleton variant='text' width='60%' />
          </Grid>
        </Grid>
      </Container>
    )
  }

  if (!product) {
    return (
      <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3, py: 6, textAlign: 'center' }}>
        <Typography variant='h4'>Không tìm thấy sản phẩm</Typography>
        <Link href='/front-pages/shop'>Quay lại cửa hàng</Link>
      </Container>
    )
  }

  const currentPrice = product.salePrice || product.price
  const discount = product.salePrice ? Math.round((1 - product.salePrice / product.price) * 100) : 0

  return (
    <Box className='bg-backgroundPaper'>
      <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3, py: 4 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link href='/front-pages/landing-page' style={{ textDecoration: 'none', color: 'inherit' }}>
            Trang chủ
          </Link>
          <Link href='/front-pages/shop' style={{ textDecoration: 'none', color: 'inherit' }}>
            Shop
          </Link>
          <Typography color='text.primary'>{product.name}</Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          {/* Product Images */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 400,
                bgcolor: 'grey.100',
                borderRadius: 2,
                backgroundImage: product.images?.[selectedImage]?.url
                  ? `url(${product.images[selectedImage].url})`
                  : 'none',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                mb: 2
              }}
            />
            {product.images?.length > 1 && (
              <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto' }}>
                {product.images.map((img, index) => (
                  <Box
                    key={img.id}
                    onClick={() => setSelectedImage(index)}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 1,
                      bgcolor: 'grey.100',
                      backgroundImage: `url(${img.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer',
                      border: selectedImage === index ? '2px solid' : '2px solid transparent',
                      borderColor: selectedImage === index ? 'primary.main' : 'transparent'
                    }}
                  />
                ))}
              </Box>
            )}
          </Grid>

          {/* Product Info */}
          <Grid item xs={12} md={6}>
            <Chip label={product.category?.name} size='small' sx={{ mb: 1 }} />
            <Typography variant='h4' fontWeight='bold' gutterBottom>
              {product.name}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Rating value={product.avgRating || 0} readOnly precision={0.5} />
              <Typography variant='body2' color='text.secondary'>
                ({product.reviewCount || 0} đánh giá)
              </Typography>
              <Divider orientation='vertical' flexItem />
              <Typography variant='body2' color='text.secondary'>
                SKU: {product.sku}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 3 }}>
              <Typography variant='h3' color='primary' fontWeight='bold'>
                {formatPrice(currentPrice)}
              </Typography>
              {product.salePrice && (
                <>
                  <Typography
                    variant='h5'
                    color='text.secondary'
                    sx={{ textDecoration: 'line-through' }}
                  >
                    {formatPrice(product.price)}
                  </Typography>
                  <Chip label={`-${discount}%`} color='error' size='small' />
                </>
              )}
            </Box>

            <Typography variant='body1' color='text.secondary' sx={{ mb: 3 }}>
              {product.shortDesc}
            </Typography>

            {/* Stock Status */}
            <Box sx={{ mb: 3 }}>
              {product.stock > 10 ? (
                <Chip label='Còn hàng' color='success' size='small' />
              ) : product.stock > 0 ? (
                <Chip label={`Chỉ còn ${product.stock} sản phẩm`} color='warning' size='small' />
              ) : (
                <Chip label='Hết hàng' color='error' size='small' />
              )}
            </Box>

            {/* Quantity */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Typography>Số lượng:</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <IconButton
                  size='small'
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </IconButton>
                <Typography sx={{ px: 2, minWidth: 40, textAlign: 'center' }}>{quantity}</Typography>
                <IconButton
                  size='small'
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  +
                </IconButton>
              </Box>
            </Box>

            {/* Actions */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Button
                variant='contained'
                size='large'
                fullWidth
                disabled={product.stock === 0}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button
                variant='outlined'
                size='large'
              >
                <i className='tabler-heart' />
              </Button>
            </Box>

            {/* Brand */}
            {product.brand && (
              <Typography variant='body2' color='text.secondary'>
                Thương hiệu: <strong>{product.brand}</strong>
              </Typography>
            )}
          </Grid>
        </Grid>

        {/* Tabs */}
        <Box sx={{ mt: 6 }}>
          <Tabs value={activeTab} onChange={(_, v) => setActiveTab(v)}>
            <Tab label='Mô tả sản phẩm' />
            <Tab label={`Đánh giá (${product.reviewCount || 0})`} />
          </Tabs>
          <Divider />

          {activeTab === 0 && (
            <Box sx={{ py: 3 }}>
              <Typography sx={{ whiteSpace: 'pre-line' }}>
                {product.description}
              </Typography>
            </Box>
          )}

          {activeTab === 1 && (
            <Box sx={{ py: 3 }}>
              {product.reviews?.length > 0 ? (
                product.reviews.map(review => (
                  <Card key={review.id} sx={{ mb: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Avatar src={review.avatar}>{review.name?.charAt(0)}</Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography fontWeight='bold'>{review.name}</Typography>
                          <Rating value={review.rating} size='small' readOnly />
                        </Box>
                        <Typography variant='caption' color='text.secondary'>
                          {formatDate(review.createdAt)}
                        </Typography>
                      </Box>
                      {review.title && (
                        <Typography fontWeight='bold' gutterBottom>{review.title}</Typography>
                      )}
                      <Typography>{review.content}</Typography>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Typography color='text.secondary'>Chưa có đánh giá nào</Typography>
              )}
            </Box>
          )}
        </Box>

        {/* Related Products */}
        {product.relatedProducts?.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography variant='h5' fontWeight='bold' mb={3}>
              Sản phẩm liên quan
            </Typography>
            <Grid container spacing={3}>
              {product.relatedProducts.map(related => (
                <Grid item xs={6} sm={3} key={related.id}>
                  <Card
                    component={Link}
                    href={`/front-pages/shop/${related.slug}`}
                    sx={{ textDecoration: 'none' }}
                  >
                    <CardMedia
                      component='div'
                      sx={{
                        height: 150,
                        bgcolor: 'grey.100',
                        backgroundImage: related.images?.[0]?.url ? `url(${related.images[0].url})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <CardContent>
                      <Typography variant='body2' noWrap>{related.name}</Typography>
                      <Typography color='primary' fontWeight='bold'>
                        {formatPrice(related.salePrice || related.price)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default ProductDetailWrapper
