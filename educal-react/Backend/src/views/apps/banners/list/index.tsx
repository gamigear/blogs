'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
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
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'
import CustomAvatar from '@core/components/mui/Avatar'

// Type Imports
import type { BannerType } from '@/types/apps/bannerTypes'

type Props = {
  bannerData?: BannerType[]
}

const BannerList = ({ bannerData }: Props) => {
  const [data, setData] = useState(bannerData || [])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editBanner, setEditBanner] = useState<BannerType | null>(null)
  const [formData, setFormData] = useState<{
    title: string
    subtitle: string
    link: string
    buttonText: string
    position: number
    status: 'active' | 'inactive'
  }>({
    title: '',
    subtitle: '',
    link: '',
    buttonText: '',
    position: 1,
    status: 'active'
  })

  const handleAdd = () => {
    setEditBanner(null)
    setFormData({ title: '', subtitle: '', link: '', buttonText: '', position: data.length + 1, status: 'active' })
    setDialogOpen(true)
  }

  const handleEdit = (banner: BannerType) => {
    setEditBanner(banner)
    setFormData({
      title: banner.title,
      subtitle: banner.subtitle || '',
      link: banner.link || '',
      buttonText: banner.buttonText || '',
      position: banner.position,
      status: banner.status
    })
    setDialogOpen(true)
  }

  const handleSave = () => {
    if (editBanner) {
      setData(data.map(b => b.id === editBanner.id ? { ...b, ...formData } : b))
    } else {
      const newBanner: BannerType = {
        id: data.length + 1,
        ...formData,
        image: '/images/banners/banner-default.jpg',
        createdAt: new Date().toISOString().split('T')[0]
      }
      setData([...data, newBanner])
    }
    setDialogOpen(false)
  }

  const handleDelete = (id: number) => {
    setData(data.filter(b => b.id !== id))
  }

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <Typography variant='h4'>Quản lý Banner/Slider</Typography>
        <Button variant='contained' startIcon={<i className='tabler-plus' />} onClick={handleAdd}>
          Thêm banner
        </Button>
      </div>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vị trí</TableCell>
                <TableCell>Banner</TableCell>
                <TableCell>Link</TableCell>
                <TableCell>Thời gian</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell>Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.sort((a, b) => a.position - b.position).map(banner => (
                <TableRow key={banner.id}>
                  <TableCell>
                    <div className='flex items-center gap-2'>
                      <IconButton size='small'><i className='tabler-arrows-sort' /></IconButton>
                      {banner.position}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <CustomAvatar src={banner.image} size={60} variant='rounded' />
                      <div>
                        <Typography variant='body1' fontWeight={500}>{banner.title}</Typography>
                        <Typography variant='body2' color='text.secondary'>{banner.subtitle}</Typography>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Typography variant='body2'>{banner.link || '-'}</Typography>
                    {banner.buttonText && (
                      <Chip label={banner.buttonText} size='small' variant='outlined' className='mt-1' />
                    )}
                  </TableCell>
                  <TableCell>
                    {banner.startDate && banner.endDate ? (
                      <Typography variant='body2'>
                        {banner.startDate} - {banner.endDate}
                      </Typography>
                    ) : (
                      <Typography variant='body2' color='text.secondary'>Không giới hạn</Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={banner.status === 'active' ? 'Hiển thị' : 'Ẩn'}
                      size='small'
                      color={banner.status === 'active' ? 'success' : 'secondary'}
                      variant='tonal'
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton size='small' onClick={() => handleEdit(banner)}>
                      <i className='tabler-edit text-textSecondary' />
                    </IconButton>
                    <IconButton size='small' onClick={() => handleDelete(banner.id)}>
                      <i className='tabler-trash text-textSecondary' />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth='sm' fullWidth>
        <DialogTitle>{editBanner ? 'Sửa banner' : 'Thêm banner'}</DialogTitle>
        <DialogContent className='flex flex-col gap-4 pt-4'>
          <CustomTextField
            label='Tiêu đề'
            fullWidth
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value })}
          />
          <CustomTextField
            label='Phụ đề'
            fullWidth
            value={formData.subtitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, subtitle: e.target.value })}
          />
          <CustomTextField
            label='Link'
            fullWidth
            value={formData.link}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, link: e.target.value })}
          />
          <CustomTextField
            label='Text nút'
            fullWidth
            value={formData.buttonText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, buttonText: e.target.value })}
          />
          <CustomTextField
            label='Vị trí'
            type='number'
            fullWidth
            value={formData.position}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, position: Number(e.target.value) })}
          />
          <CustomTextField
            select
            fullWidth
            label='Trạng thái'
            value={formData.status}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
          >
            <MenuItem value='active'>Hiển thị</MenuItem>
            <MenuItem value='inactive'>Ẩn</MenuItem>
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

export default BannerList
