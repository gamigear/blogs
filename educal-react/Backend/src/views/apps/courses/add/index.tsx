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

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    author: '',
    lesson: 0,
    videoUrl: '',
    price: 0,
    status: 'draft',
    featured: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: Call API to save
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardHeader title='Thông tin Mini Game' />
            <CardContent className='flex flex-col gap-4'>
              <CustomTextField
                label='Tên Mini Game'
                fullWidth
                required
                placeholder='Nhập tên mini game'
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
              <CustomTextField
                label='Mô tả'
                fullWidth
                multiline
                rows={4}
                placeholder='Nhập mô tả chi tiết'
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              />
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Danh mục'
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                  >
                    <MenuItem value='Facebook'>Facebook</MenuItem>
                    <MenuItem value='TikTok'>TikTok</MenuItem>
                    <MenuItem value='Zalo'>Zalo</MenuItem>
                    <MenuItem value='Shopee'>Shopee</MenuItem>
                    <MenuItem value='Lazada'>Lazada</MenuItem>
                    <MenuItem value='MoMo'>MoMo</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <CustomTextField
                    label='Nhà cung cấp'
                    fullWidth
                    placeholder='Tên nhà cung cấp'
                    value={formData.author}
                    onChange={e => setFormData({ ...formData, author: e.target.value })}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <CustomTextField
                    label='Số bài học'
                    type='number'
                    fullWidth
                    value={formData.lesson}
                    onChange={e => setFormData({ ...formData, lesson: Number(e.target.value) })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <CustomTextField
                    label='Video URL (YouTube ID)'
                    fullWidth
                    placeholder='Ví dụ: dQw4w9WgXcQ'
                    value={formData.videoUrl}
                    onChange={e => setFormData({ ...formData, videoUrl: e.target.value })}
                  />
                </Grid>
              </Grid>
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
                label='Trạng thái'
                value={formData.status}
                onChange={e => setFormData({ ...formData, status: e.target.value })}
              >
                <MenuItem value='draft'>Nháp</MenuItem>
                <MenuItem value='active'>Hoạt động</MenuItem>
                <MenuItem value='inactive'>Tạm dừng</MenuItem>
              </CustomTextField>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.featured}
                    onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                  />
                }
                label='Nổi bật'
              />
              <Button variant='contained' type='submit' fullWidth>
                Lưu Mini Game
              </Button>
              <Button variant='outlined' color='secondary' fullWidth>
                Lưu nháp
              </Button>
            </CardContent>
          </Card>

          <Card className='mt-6'>
            <CardHeader title='Hình ảnh' />
            <CardContent>
              <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center'>
                <i className='tabler-upload text-4xl text-gray-400 mb-2' />
                <p className='text-gray-500'>Kéo thả hoặc click để upload</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddCourse
