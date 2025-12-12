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
import type { BlogType } from '@/types/apps/blogTypes'

type Props = {
  open: boolean
  handleClose: () => void
  blogData?: BlogType[]
  setData: (data: BlogType[]) => void
}

const AddBlogDrawer = ({ open, handleClose, blogData, setData }: Props) => {
  const initialData = {
    title: '',
    excerpt: '',
    tag: '',
    author: '',
    status: 'draft' as const
  }

  const [formData, setFormData] = useState(initialData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newBlog: BlogType = {
      id: (blogData?.length || 0) + 1,
      ...formData,
      content: '',
      image: '/images/blogs/blog-1.jpg',
      tagClass: 'primary',
      authorAvatar: '/images/avatars/1.png',
      featured: false,
      views: 0,
      publishedAt: formData.status === 'published' ? new Date().toISOString().split('T')[0] : null,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setData([...(blogData ?? []), newBlog])
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
        <Typography variant='h5'>Thêm bài viết</Typography>
        <IconButton onClick={handleReset}>
          <i className='tabler-x text-textPrimary' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <CustomTextField
            label='Tiêu đề'
            fullWidth
            placeholder='Nhập tiêu đề bài viết'
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
          />
          <CustomTextField
            label='Mô tả ngắn'
            fullWidth
            multiline
            rows={3}
            placeholder='Nhập mô tả ngắn'
            value={formData.excerpt}
            onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
          />
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
            <MenuItem value='Honkai'>Honkai</MenuItem>
          </CustomTextField>
          <CustomTextField
            label='Tác giả'
            fullWidth
            placeholder='Nhập tên tác giả'
            value={formData.author}
            onChange={e => setFormData({ ...formData, author: e.target.value })}
          />
          <CustomTextField
            select
            fullWidth
            label='Trạng thái'
            value={formData.status}
            onChange={e => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' | 'archived' })}
          >
            <MenuItem value='draft'>Nháp</MenuItem>
            <MenuItem value='published'>Xuất bản</MenuItem>
            <MenuItem value='archived'>Lưu trữ</MenuItem>
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

export default AddBlogDrawer
