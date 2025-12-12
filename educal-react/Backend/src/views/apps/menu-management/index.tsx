'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import MenuItem from '@mui/material/MenuItem'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

type MenuItemType = {
  id: number
  title: string
  url: string
  icon?: string
  target: '_self' | '_blank'
  isActive: boolean
  children?: MenuItemType[]
}

const initialMenuItems: MenuItemType[] = [
  { id: 1, title: 'Trang chủ', url: '/', icon: 'tabler-home', target: '_self', isActive: true },
  { id: 2, title: 'Mini Games', url: '/games', icon: 'tabler-device-gamepad-2', target: '_self', isActive: true },
  { id: 3, title: 'Bài viết', url: '/blog', icon: 'tabler-article', target: '_self', isActive: true },
  { id: 4, title: 'Sự kiện', url: '/events', icon: 'tabler-calendar-event', target: '_self', isActive: true },
  { id: 5, title: 'Liên hệ', url: '/contact', icon: 'tabler-mail', target: '_self', isActive: true },
  { id: 6, title: 'Giới thiệu', url: '/about', icon: 'tabler-info-circle', target: '_self', isActive: true }
]

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState(initialMenuItems)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editItem, setEditItem] = useState<MenuItemType | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    icon: '',
    target: '_self' as '_self' | '_blank',
    isActive: true
  })

  const handleAdd = () => {
    setEditItem(null)
    setFormData({ title: '', url: '', icon: '', target: '_self', isActive: true })
    setDialogOpen(true)
  }

  const handleEdit = (item: MenuItemType) => {
    setEditItem(item)
    setFormData({
      title: item.title,
      url: item.url,
      icon: item.icon || '',
      target: item.target,
      isActive: item.isActive
    })
    setDialogOpen(true)
  }

  const handleSave = () => {
    if (editItem) {
      setMenuItems(menuItems.map(m => (m.id === editItem.id ? { ...m, ...formData } : m)))
    } else {
      const newItem: MenuItemType = {
        id: menuItems.length + 1,
        ...formData
      }
      setMenuItems([...menuItems, newItem])
    }
    setDialogOpen(false)
  }

  const handleDelete = (id: number) => {
    setMenuItems(menuItems.filter(m => m.id !== id))
  }

  const handleToggleActive = (id: number) => {
    setMenuItems(menuItems.map(m => (m.id === id ? { ...m, isActive: !m.isActive } : m)))
  }

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newItems = [...menuItems]
    const newIndex = direction === 'up' ? index - 1 : index + 1

    if (newIndex >= 0 && newIndex < newItems.length) {
      ;[newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]]
      setMenuItems(newItems)
    }
  }

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <Typography variant='h4'>Quản lý Menu</Typography>
        <Button variant='contained' startIcon={<i className='tabler-plus' />} onClick={handleAdd}>
          Thêm menu
        </Button>
      </div>

      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardHeader title='Menu chính' subheader='Kéo thả để sắp xếp thứ tự menu' />
            <CardContent>
              <List>
                {menuItems.map((item, index) => (
                  <ListItem
                    key={item.id}
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      mb: 1,
                      opacity: item.isActive ? 1 : 0.5
                    }}
                    secondaryAction={
                      <div className='flex items-center gap-1'>
                        <IconButton size='small' onClick={() => moveItem(index, 'up')} disabled={index === 0}>
                          <i className='tabler-arrow-up' />
                        </IconButton>
                        <IconButton
                          size='small'
                          onClick={() => moveItem(index, 'down')}
                          disabled={index === menuItems.length - 1}
                        >
                          <i className='tabler-arrow-down' />
                        </IconButton>
                        <Switch checked={item.isActive} onChange={() => handleToggleActive(item.id)} size='small' />
                        <IconButton size='small' onClick={() => handleEdit(item)}>
                          <i className='tabler-edit' />
                        </IconButton>
                        <IconButton size='small' onClick={() => handleDelete(item.id)}>
                          <i className='tabler-trash' />
                        </IconButton>
                      </div>
                    }
                  >
                    <ListItemIcon>
                      <i className={item.icon || 'tabler-link'} />
                    </ListItemIcon>
                    <ListItemText primary={item.title} secondary={item.url} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader title='Xem trước' />
            <CardContent>
              <div className='bg-gray-100 rounded-lg p-4'>
                <div className='flex flex-wrap gap-4'>
                  {menuItems
                    .filter(m => m.isActive)
                    .map(item => (
                      <div key={item.id} className='flex items-center gap-1 text-sm'>
                        <i className={item.icon || 'tabler-link'} />
                        <span>{item.title}</span>
                      </div>
                    ))}
                </div>
              </div>
              <Typography variant='body2' color='text.secondary' className='mt-4'>
                Đây là cách menu sẽ hiển thị trên website.
              </Typography>
            </CardContent>
          </Card>

          <Card className='mt-6'>
            <CardHeader title='Hướng dẫn' />
            <CardContent>
              <div className='flex flex-col gap-2 text-sm'>
                <div className='flex items-center gap-2'>
                  <i className='tabler-arrows-sort text-primary' />
                  <span>Dùng mũi tên để sắp xếp thứ tự</span>
                </div>
                <div className='flex items-center gap-2'>
                  <i className='tabler-toggle-right text-success' />
                  <span>Bật/tắt để ẩn/hiện menu</span>
                </div>
                <div className='flex items-center gap-2'>
                  <i className='tabler-edit text-warning' />
                  <span>Click để chỉnh sửa menu</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth='sm' fullWidth>
        <DialogTitle>{editItem ? 'Sửa menu' : 'Thêm menu'}</DialogTitle>
        <DialogContent className='flex flex-col gap-4 pt-4'>
          <CustomTextField
            label='Tiêu đề'
            fullWidth
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value })}
          />
          <CustomTextField
            label='URL'
            fullWidth
            placeholder='/path hoặc https://...'
            value={formData.url}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, url: e.target.value })}
          />
          <CustomTextField
            label='Icon (Tabler Icons)'
            fullWidth
            placeholder='tabler-home'
            value={formData.icon}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, icon: e.target.value })}
            helperText='Xem danh sách icon tại tabler-icons.io'
          />
          <CustomTextField
            select
            fullWidth
            label='Mở trong'
            value={formData.target}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, target: e.target.value as '_self' | '_blank' })
            }
          >
            <MenuItem value='_self'>Cùng tab</MenuItem>
            <MenuItem value='_blank'>Tab mới</MenuItem>
          </CustomTextField>
          <FormControlLabel
            control={
              <Switch checked={formData.isActive} onChange={e => setFormData({ ...formData, isActive: e.target.checked })} />
            }
            label='Hiển thị menu'
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

export default MenuManagement
