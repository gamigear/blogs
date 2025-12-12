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
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import MenuItem from '@mui/material/MenuItem'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Type Imports
import type { CategoryType } from '@/types/apps/categoryTypes'

type Props = {
  categoryData?: CategoryType[]
}

const CategoryList = ({ categoryData }: Props) => {
  const [data, setData] = useState(categoryData || [])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editCategory, setEditCategory] = useState<CategoryType | null>(null)
  const [formData, setFormData] = useState<{
    title: string
    description: string
    icon: string
    status: 'active' | 'inactive'
  }>({
    title: '',
    description: '',
    icon: 'tabler-folder',
    status: 'active'
  })

  const handleAdd = () => {
    setEditCategory(null)
    setFormData({ title: '', description: '', icon: 'tabler-folder', status: 'active' })
    setDialogOpen(true)
  }

  const handleEdit = (category: CategoryType) => {
    setEditCategory(category)
    setFormData({
      title: category.title,
      description: category.description || '',
      icon: category.icon || 'tabler-folder',
      status: category.status
    })
    setDialogOpen(true)
  }

  const handleSave = () => {
    if (editCategory) {
      setData(data.map(c => c.id === editCategory.id ? { ...c, ...formData } : c))
    } else {
      const newCategory: CategoryType = {
        id: data.length + 1,
        ...formData,
        coursesCount: 0,
        createdAt: new Date().toISOString().split('T')[0]
      }
      setData([...data, newCategory])
    }
    setDialogOpen(false)
  }

  const handleDelete = (id: number) => {
    setData(data.filter(c => c.id !== id))
  }

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <Typography variant='h4'>Quản lý danh mục</Typography>
        <Button variant='contained' startIcon={<i className='tabler-plus' />} onClick={handleAdd}>
          Thêm danh mục
        </Button>
      </div>

      <Grid container spacing={6}>
        {data.map(category => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.id}>
            <Card>
              <CardContent>
                <div className='flex items-start justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-${category.color}/10`}>
                      <i className={`${category.icon} text-2xl text-${category.color}`} />
                    </div>
                    <div>
                      <Typography variant='h6'>{category.title}</Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {category.coursesCount} mini games
                      </Typography>
                    </div>
                  </div>
                  <Chip
                    label={category.status === 'active' ? 'Hoạt động' : 'Tạm dừng'}
                    size='small'
                    color={category.status === 'active' ? 'success' : 'secondary'}
                    variant='tonal'
                  />
                </div>
                <Typography variant='body2' color='text.secondary' className='mt-3'>
                  {category.description}
                </Typography>
                <div className='flex justify-end gap-2 mt-4'>
                  <IconButton size='small' onClick={() => handleEdit(category)}>
                    <i className='tabler-edit text-textSecondary' />
                  </IconButton>
                  <IconButton size='small' onClick={() => handleDelete(category.id)}>
                    <i className='tabler-trash text-textSecondary' />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth='sm' fullWidth>
        <DialogTitle>{editCategory ? 'Sửa danh mục' : 'Thêm danh mục'}</DialogTitle>
        <DialogContent className='flex flex-col gap-4 pt-4'>
          <CustomTextField
            label='Tên danh mục'
            fullWidth
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value })}
          />
          <CustomTextField
            label='Mô tả'
            fullWidth
            multiline
            rows={2}
            value={formData.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, description: e.target.value })}
          />
          <CustomTextField
            select
            fullWidth
            label='Trạng thái'
            value={formData.status}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
          >
            <MenuItem value='active'>Hoạt động</MenuItem>
            <MenuItem value='inactive'>Tạm dừng</MenuItem>
          </CustomTextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Hủy</Button>
          <Button variant='contained' onClick={handleSave}>Lưu</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CategoryList
