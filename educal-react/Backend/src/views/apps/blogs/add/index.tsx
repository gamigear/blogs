'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    tag: '',
    author: '',
    status: 'draft',
    featured: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardHeader title='Thông tin bài viết' />
            <CardContent className='flex flex-col gap-4'>
              <CustomTextField
                label='Tiêu đề'
                fullWidth
                required
                placeholder='Nhập tiêu đề bài viết'
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
              <CustomTextField
                label='Mô tả ngắn'
                fullWidth
                multiline
                rows={2}
                placeholder='Nhập mô tả ngắn'
                value={formData.excerpt}
                onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
              />
              <CustomTextField
                label='Nội dung'
                fullWidth
                multiline
                rows={10}
                placeholder='Nhập nội dung bài viết'
                value={formData.content}
                onChange={e => setFormData({ ...formData, content: e.target.value })}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader title='Xuất bản' />
            <CardContent className='flex flex-col gap-4'>
              <CustomTextField
                select
                fullWidth
                label='Tag'
                value={formData.tag}
                onChange={e => setFormData({ ...formData, tag: e.target.value })}
              >
                <MenuItem value='Liên Quân'>Liên Quân</MenuItem>
                <MenuItem value='Free Fire'>Free Fire</MenuItem>
                <MenuItem value='Genshin'>Genshin</MenuItem>
                <MenuItem value='PUBG Mobile'>PUBG Mobile</MenuItem>
                <MenuItem value='Mobile Legends'>Mobile Legends</MenuItem>
              </CustomTextField>
              <CustomTextField
                label='Tác giả'
                fullWidth
                value={formData.author}
                onChange={e => setFormData({ ...formData, author: e.target.value })}
              />
              <CustomTextField
                select
                fullWidth
                label='Trạng thái'
                value={formData.status}
                onChange={e => setFormData({ ...formData, status: e.target.value })}
              >
                <MenuItem value='draft'>Nháp</MenuItem>
                <MenuItem value='published'>Xuất bản</MenuItem>
                <MenuItem value='archived'>Lưu trữ</MenuItem>
              </CustomTextField>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.featured}
                    onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                  />
                }
                label='Bài viết nổi bật'
              />
              <Button variant='contained' type='submit' fullWidth>
                Xuất bản
              </Button>
              <Button variant='outlined' color='secondary' fullWidth>
                Lưu nháp
              </Button>
            </CardContent>
          </Card>

          <Card className='mt-6'>
            <CardHeader title='Ảnh đại diện' />
            <CardContent>
              <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center'>
                <i className='tabler-photo text-4xl text-gray-400 mb-2' />
                <p className='text-gray-500'>Kéo thả hoặc click để upload</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddBlog
