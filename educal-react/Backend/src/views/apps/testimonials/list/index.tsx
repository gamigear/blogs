'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import Rating from '@mui/material/Rating'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'
import CustomAvatar from '@core/components/mui/Avatar'

// Type Imports
import type { TestimonialType } from '@/types/apps/testimonialTypes'

type Props = {
  testimonialData?: TestimonialType[]
}

const TestimonialList = ({ testimonialData }: Props) => {
  const [data, setData] = useState(testimonialData || [])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editItem, setEditItem] = useState<TestimonialType | null>(null)
  const [formData, setFormData] = useState<{
    name: string
    title: string
    content: string
    rating: number
    status: 'active' | 'inactive'
    featured: boolean
  }>({
    name: '',
    title: '',
    content: '',
    rating: 5,
    status: 'active',
    featured: false
  })

  const handleAdd = () => {
    setEditItem(null)
    setFormData({ name: '', title: '', content: '', rating: 5, status: 'active', featured: false })
    setDialogOpen(true)
  }

  const handleEdit = (item: TestimonialType) => {
    setEditItem(item)
    setFormData({
      name: item.name,
      title: item.title || '',
      content: item.content,
      rating: item.rating,
      status: item.status,
      featured: item.featured
    })
    setDialogOpen(true)
  }

  const handleSave = () => {
    if (editItem) {
      setData(data.map(t => (t.id === editItem.id ? { ...t, ...formData } : t)))
    } else {
      const newItem: TestimonialType = {
        id: data.length + 1,
        ...formData,
        avatar: '/images/avatars/1.png',
        createdAt: new Date().toISOString().split('T')[0]
      }
      setData([...data, newItem])
    }
    setDialogOpen(false)
  }

  const handleDelete = (id: number) => {
    setData(data.filter(t => t.id !== id))
  }

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <Typography variant='h4'>Quản lý đánh giá</Typography>
        <Button variant='contained' startIcon={<i className='tabler-plus' />} onClick={handleAdd}>
          Thêm đánh giá
        </Button>
      </div>

      <Grid container spacing={6}>
        {data.map(item => (
          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
            <Card>
              <CardContent>
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <CustomAvatar src={item.avatar} size={48} />
                    <div>
                      <Typography variant='h6'>{item.name}</Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {item.title}
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    {item.featured && <Chip label='Nổi bật' size='small' color='warning' variant='tonal' />}
                    <Chip
                      label={item.status === 'active' ? 'Hiển thị' : 'Ẩn'}
                      size='small'
                      color={item.status === 'active' ? 'success' : 'secondary'}
                      variant='tonal'
                    />
                  </div>
                </div>
                <Rating value={item.rating} readOnly size='small' className='mb-2' />
                <Typography variant='body2' color='text.secondary' className='italic'>
                  "{item.content}"
                </Typography>
                <div className='flex justify-end gap-2 mt-4'>
                  <IconButton size='small' onClick={() => handleEdit(item)}>
                    <i className='tabler-edit text-textSecondary' />
                  </IconButton>
                  <IconButton size='small' onClick={() => handleDelete(item.id)}>
                    <i className='tabler-trash text-textSecondary' />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth='sm' fullWidth>
        <DialogTitle>{editItem ? 'Sửa đánh giá' : 'Thêm đánh giá'}</DialogTitle>
        <DialogContent className='flex flex-col gap-4 pt-4'>
          <CustomTextField
            label='Họ tên'
            fullWidth
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
          />
          <CustomTextField
            label='Chức danh'
            fullWidth
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value })}
          />
          <CustomTextField
            label='Nội dung đánh giá'
            fullWidth
            multiline
            rows={3}
            value={formData.content}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
          <div>
            <Typography variant='body2' className='mb-1'>
              Đánh giá
            </Typography>
            <Rating
              value={formData.rating}
              onChange={(_, newValue) => setFormData({ ...formData, rating: newValue || 5 })}
            />
          </div>
          <CustomTextField
            select
            fullWidth
            label='Trạng thái'
            value={formData.status}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })
            }
          >
            <MenuItem value='active'>Hiển thị</MenuItem>
            <MenuItem value='inactive'>Ẩn</MenuItem>
          </CustomTextField>
          <FormControlLabel
            control={
              <Switch
                checked={formData.featured}
                onChange={e => setFormData({ ...formData, featured: e.target.checked })}
              />
            }
            label='Đánh giá nổi bật'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Hủy</Button>
          <Button variant='contained' onClick={handleSave}>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default TestimonialList
