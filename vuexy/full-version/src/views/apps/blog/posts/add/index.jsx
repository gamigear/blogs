'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'

const BlogPostAddWrapper = () => {
  const router = useRouter()
  const { lang } = useParams()
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    categoryId: '',
    authorName: '',
    authorAvatar: '',
    status: 'draft',
    tags: []
  })

  useEffect(() => {
    fetchCategories()
    fetchTags()
  }, [])

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/blog/categories')
      const data = await res.json()
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const fetchTags = async () => {
    try {
      const res = await fetch('/api/blog/tags')
      const data = await res.json()
      setTags(data || [])
    } catch (error) {
      console.error('Error fetching tags:', error)
    }
  }

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'title' && { slug: generateSlug(value) })
    }))
  }

  const handleTagChange = (event) => {
    const { value } = event.target
    setFormData(prev => ({
      ...prev,
      tags: typeof value === 'string' ? value.split(',') : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/blog/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          categoryId: parseInt(formData.categoryId),
          tags: formData.tags.map(t => parseInt(t))
        })
      })

      if (res.ok) {
        router.push(`/${lang}/apps/blog/posts`)
      } else {
        alert('Có lỗi xảy ra khi tạo bài viết')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      alert('Có lỗi xảy ra')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title='Thêm bài viết mới' />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Tiêu đề'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Slug'
                    name='slug'
                    value={formData.slug}
                    onChange={handleChange}
                    required
                    helperText='URL thân thiện cho bài viết'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Tóm tắt'
                    name='excerpt'
                    value={formData.excerpt}
                    onChange={handleChange}
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Nội dung'
                    name='content'
                    value={formData.content}
                    onChange={handleChange}
                    multiline
                    rows={12}
                    required
                    helperText='Hỗ trợ HTML'
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 4 }}>
            <CardHeader title='Xuất bản' />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label='Trạng thái'
                    name='status'
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <MenuItem value='draft'>Nháp</MenuItem>
                    <MenuItem value='published'>Xuất bản</MenuItem>
                    <MenuItem value='scheduled'>Lên lịch</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type='submit'
                    variant='contained'
                    fullWidth
                    disabled={loading}
                  >
                    {loading ? 'Đang lưu...' : 'Lưu bài viết'}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card sx={{ mb: 4 }}>
            <CardHeader title='Phân loại' />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label='Danh mục'
                    name='categoryId'
                    value={formData.categoryId}
                    onChange={handleChange}
                    required
                  >
                    {categories.map(cat => (
                      <MenuItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Tags</InputLabel>
                    <Select
                      multiple
                      value={formData.tags}
                      onChange={handleTagChange}
                      input={<OutlinedInput label='Tags' />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => {
                            const tag = tags.find(t => t.id === parseInt(value))
                            return <Chip key={value} label={tag?.name || value} size='small' />
                          })}
                        </Box>
                      )}
                    >
                      {tags.map(tag => (
                        <MenuItem key={tag.id} value={tag.id}>
                          {tag.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title='Tác giả & Hình ảnh' />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Tên tác giả'
                    name='authorName'
                    value={formData.authorName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Ảnh đại diện tác giả (URL)'
                    name='authorAvatar'
                    value={formData.authorAvatar}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Ảnh bìa (URL)'
                    name='featuredImage'
                    value={formData.featuredImage}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </form>
  )
}

export default BlogPostAddWrapper
