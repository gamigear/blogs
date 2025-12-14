'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Rating from '@mui/material/Rating'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { useSettings } from '@core/hooks/useSettings'

const ShopListWrapper = ({ mode }) => {
  const { updatePageSettings } = useSettings()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [search, setSearch] = useState('')

  useEffect(() => {
    return updatePageSettings({ skin: 'default' })
  }, [])

  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, [page, selectedCategory, sortBy])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '12',
        sortBy,
        sortOrder: sortBy === 'price' ? 'asc' : 'desc',
        ...(selectedCategory && { category: selectedCategory }),
        ...(search && { search })
      })
      const res = await fetch(`/api/shop/products?${params}`)
      const data = await res.json()
      setProducts(data.products || [])
      setTotalPages(data.pagination?.totalPages || 1)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/shop/categories')
      const data = await res.json()
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setPage(1)
      fetchProducts()
    }
  }

  return (
    <Box className='bg-backgroundPaper'>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
          py: { xs: 8, md: 12 },
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3 }}>
          <Typography variant='h2' fontWeight='bold' mb={2}>
            Shop Du Lịch
          </Typography>
          <Typography variant='h6' sx={{ opacity: 0.9 }}>
            Trang bị đầy đủ cho mọi chuyến đi của bạn
          </Typography>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ maxWidth: 1200, px: 3, py: 6 }}>
        {/* Filters */}
        <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <TextField
            placeholder='Tìm kiếm sản phẩm...'
            size='small'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            sx={{ minWidth: 250 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <i className='tabler-search' />
                </InputAdornment>
              )
            }}
          />
          <FormControl size='small' sx={{ minWidth: 180 }}>
            <InputLabel>Danh mục</InputLabel>
            <Select
              value={selectedCategory}
              label='Danh mục'
              onChange={(e) => { setSelectedCategory(e.target.value); setPage(1) }}
            >
              <MenuItem value=''>Tất cả</MenuItem>
              {categories.map(cat => (
                <MenuItem key={cat.id} value={cat.slug}>
                  {cat.name} ({cat._count?.products || 0})
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size='small' sx={{ minWidth: 150 }}>
            <InputLabel>Sắp xếp</InputLabel>
            <Select
              value={sortBy}
              label='Sắp xếp'
              onChange={(e) => { setSortBy(e.target.value); setPage(1) }}
            >
              <MenuItem value='createdAt'>Mới nhất</MenuItem>
              <MenuItem value='price'>Giá thấp đến cao</MenuItem>
              <MenuItem value='name'>Tên A-Z</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={3}>
          {loading ? (
            [...Array(8)].map((_, i) => (
              <Grid item xs={6} sm={4} md={3} key={i}>
                <Card>
                  <Skeleton variant='rectangular' height={200} />
                  <CardContent>
                    <Skeleton variant='text' />
                    <Skeleton variant='text' width='60%' />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : products.length === 0 ? (
            <Grid item xs={12}>
              <Typography textAlign='center' color='text.secondary'>
                Không tìm thấy sản phẩm
              </Typography>
            </Grid>
          ) : (
            products.map(product => (
              <Grid item xs={6} sm={4} md={3} key={product.id}>
                <Card
                  component={Link}
                  href={`/front-pages/shop/${product.slug}`}
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
                    {product.featured && (
                      <Chip
                        label='Hot'
                        color='warning'
                        size='small'
                        sx={{ position: 'absolute', top: 8, left: 8 }}
                      />
                    )}
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant='caption' color='text.secondary'>
                      {product.category?.name}
                    </Typography>
                    <Typography
                      variant='body1'
                      fontWeight='bold'
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        minHeight: 48
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, my: 1 }}>
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
                    {product.stock <= 5 && product.stock > 0 && (
                      <Typography variant='caption' color='warning.main'>
                        Chỉ còn {product.stock} sản phẩm
                      </Typography>
                    )}
                    {product.stock === 0 && (
                      <Typography variant='caption' color='error'>
                        Hết hàng
                      </Typography>
                    )}
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

export default ShopListWrapper
