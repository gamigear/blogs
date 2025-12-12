'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Type Imports
import type { CourseType } from '@/types/apps/courseTypes'

type Props = {
  open: boolean
  handleClose: () => void
  courseData?: CourseType[]
  setData: (data: CourseType[]) => void
}

const AddCourseDrawer = ({ open, handleClose, courseData, setData }: Props) => {
  const initialData = {
    title: '',
    category: '',
    author: '',
    lesson: 0,
    videoUrl: '',
    price: 0,
    status: 'draft' as const
  }

  const [formData, setFormData] = useState(initialData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newCourse: CourseType = {
      id: (courseData?.length || 0) + 1,
      ...formData,
      image: '/images/courses/course-1.jpg',
      categoryClass: 'primary',
      ratingAve: 0,
      ratingCount: 0,
      authorAvatar: '/images/avatars/1.png',
      oldPrice: 0,
      featured: false,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setData([...(courseData ?? []), newCourse])
    handleClose()
    setFormData(initialData)
  }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between plb-5 pli-6'>
        <Typography variant='h5'>Thêm Mini Game</Typography>
        <IconButton onClick={handleReset}>
          <i className='tabler-x text-textPrimary' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <CustomTextField
            label='Tên Mini Game'
            fullWidth
            placeholder='Nhập tên mini game'
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
          />
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
          <CustomTextField
            label='Nhà cung cấp'
            fullWidth
            placeholder='Nhập tên nhà cung cấp'
            value={formData.author}
            onChange={e => setFormData({ ...formData, author: e.target.value })}
          />
          <CustomTextField
            label='Số bài học'
            type='number'
            fullWidth
            value={formData.lesson}
            onChange={e => setFormData({ ...formData, lesson: Number(e.target.value) })}
          />
          <CustomTextField
            label='Video URL'
            fullWidth
            placeholder='YouTube video ID'
            value={formData.videoUrl}
            onChange={e => setFormData({ ...formData, videoUrl: e.target.value })}
          />
          <CustomTextField
            select
            fullWidth
            label='Trạng thái'
            value={formData.status}
            onChange={e => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' | 'draft' })}
          >
            <MenuItem value='active'>Hoạt động</MenuItem>
            <MenuItem value='inactive'>Tạm dừng</MenuItem>
            <MenuItem value='draft'>Nháp</MenuItem>
          </CustomTextField>
          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Thêm
            </Button>
            <Button variant='tonal' color='error' type='reset' onClick={handleReset}>
              Hủy
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddCourseDrawer
