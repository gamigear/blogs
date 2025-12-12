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
import type { EventType } from '@/types/apps/eventTypes'

type Props = {
  open: boolean
  handleClose: () => void
  eventData?: EventType[]
  setData: (data: EventType[]) => void
}

const AddEventDrawer = ({ open, handleClose, eventData, setData }: Props) => {
  const initialData = {
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    status: 'upcoming' as const
  }

  const [formData, setFormData] = useState(initialData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newEvent: EventType = {
      id: (eventData?.length || 0) + 1,
      ...formData,
      image: '/images/events/event-1.jpg',
      featured: false,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setData([...(eventData ?? []), newEvent])
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
        <Typography variant='h5'>Thêm sự kiện</Typography>
        <IconButton onClick={handleReset}>
          <i className='tabler-x text-textPrimary' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <CustomTextField
            label='Tên sự kiện'
            fullWidth
            placeholder='Nhập tên sự kiện'
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
          />
          <CustomTextField
            label='Mô tả'
            fullWidth
            multiline
            rows={3}
            placeholder='Nhập mô tả sự kiện'
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
          />
          <CustomTextField
            label='Ngày'
            type='date'
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.date}
            onChange={e => setFormData({ ...formData, date: e.target.value })}
          />
          <div className='flex gap-4'>
            <CustomTextField
              label='Giờ bắt đầu'
              type='time'
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.startTime}
              onChange={e => setFormData({ ...formData, startTime: e.target.value })}
            />
            <CustomTextField
              label='Giờ kết thúc'
              type='time'
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.endTime}
              onChange={e => setFormData({ ...formData, endTime: e.target.value })}
            />
          </div>
          <CustomTextField
            label='Địa điểm'
            fullWidth
            placeholder='Nhập địa điểm'
            value={formData.location}
            onChange={e => setFormData({ ...formData, location: e.target.value })}
          />
          <CustomTextField
            select
            fullWidth
            label='Trạng thái'
            value={formData.status}
            onChange={e => setFormData({ ...formData, status: e.target.value as EventType['status'] })}
          >
            <MenuItem value='upcoming'>Sắp diễn ra</MenuItem>
            <MenuItem value='active'>Đang diễn ra</MenuItem>
            <MenuItem value='ended'>Đã kết thúc</MenuItem>
            <MenuItem value='cancelled'>Đã hủy</MenuItem>
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

export default AddEventDrawer
