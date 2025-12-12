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

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    status: 'upcoming',
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
            <CardHeader title='Thông tin sự kiện' />
            <CardContent className='flex flex-col gap-4'>
              <CustomTextField
                label='Tên sự kiện'
                fullWidth
                required
                placeholder='Nhập tên sự kiện'
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
              <CustomTextField
                label='Mô tả'
                fullWidth
                multiline
                rows={4}
                placeholder='Nhập mô tả sự kiện'
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              />
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <CustomTextField
                    label='Ngày'
                    type='date'
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <CustomTextField
                    label='Giờ bắt đầu'
                    type='time'
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={formData.startTime}
                    onChange={e => setFormData({ ...formData, startTime: e.target.value })}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <CustomTextField
                    label='Giờ kết thúc'
                    type='time'
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={formData.endTime}
                    onChange={e => setFormData({ ...formData, endTime: e.target.value })}
                  />
                </Grid>
              </Grid>
              <CustomTextField
                label='Địa điểm'
                fullWidth
                placeholder='Nhập địa điểm tổ chức'
                value={formData.location}
                onChange={e => setFormData({ ...formData, location: e.target.value })}
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
                label='Trạng thái'
                value={formData.status}
                onChange={e => setFormData({ ...formData, status: e.target.value })}
              >
                <MenuItem value='upcoming'>Sắp diễn ra</MenuItem>
                <MenuItem value='active'>Đang diễn ra</MenuItem>
                <MenuItem value='ended'>Đã kết thúc</MenuItem>
                <MenuItem value='cancelled'>Đã hủy</MenuItem>
              </CustomTextField>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.featured}
                    onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                  />
                }
                label='Sự kiện nổi bật'
              />
              <Button variant='contained' type='submit' fullWidth>
                Tạo sự kiện
              </Button>
              <Button variant='outlined' color='secondary' fullWidth>
                Lưu nháp
              </Button>
            </CardContent>
          </Card>

          <Card className='mt-6'>
            <CardHeader title='Ảnh sự kiện' />
            <CardContent>
              <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center'>
                <i className='tabler-calendar-event text-4xl text-gray-400 mb-2' />
                <p className='text-gray-500'>Kéo thả hoặc click để upload</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddEvent
