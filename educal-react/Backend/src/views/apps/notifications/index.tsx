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
import Chip from '@mui/material/Chip'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
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

type NotificationType = {
  id: number
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  target: 'all' | 'subscribers' | 'members'
  status: 'draft' | 'sent' | 'scheduled'
  scheduledAt?: string
  sentAt?: string
  readCount: number
  createdAt: string
}

const mockNotifications: NotificationType[] = [
  {
    id: 1,
    title: 'Sự kiện Tết 2025 sắp bắt đầu!',
    message: 'Tham gia ngay sự kiện Tết Nguyên Đán 2025 để nhận nhiều phần quà hấp dẫn.',
    type: 'info',
    target: 'all',
    status: 'sent',
    sentAt: '2025-12-10 10:00',
    readCount: 1250,
    createdAt: '2025-12-10'
  },
  {
    id: 2,
    title: 'Code game mới cập nhật',
    message: 'Đã cập nhật 10 code Liên Quân mới nhất tháng 12/2025.',
    type: 'success',
    target: 'subscribers',
    status: 'sent',
    sentAt: '2025-12-11 14:30',
    readCount: 890,
    createdAt: '2025-12-11'
  },
  {
    id: 3,
    title: 'Flash Sale 12.12',
    message: 'Đừng bỏ lỡ Flash Sale 12.12 với hàng ngàn voucher giảm giá!',
    type: 'warning',
    target: 'all',
    status: 'scheduled',
    scheduledAt: '2025-12-12 00:00',
    readCount: 0,
    createdAt: '2025-12-11'
  }
]

const NotificationManagement = () => {
  const [notifications, setNotifications] = useState(mockNotifications)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    type: 'info' as NotificationType['type'],
    target: 'all' as NotificationType['target'],
    isScheduled: false,
    scheduledAt: ''
  })

  const [settings, setSettings] = useState({
    enablePush: true,
    enableEmail: false,
    enableInApp: true
  })

  const handleAdd = () => {
    setFormData({
      title: '',
      message: '',
      type: 'info',
      target: 'all',
      isScheduled: false,
      scheduledAt: ''
    })
    setDialogOpen(true)
  }

  const handleSend = () => {
    const newNotification: NotificationType = {
      id: notifications.length + 1,
      title: formData.title,
      message: formData.message,
      type: formData.type,
      target: formData.target,
      status: formData.isScheduled ? 'scheduled' : 'sent',
      scheduledAt: formData.isScheduled ? formData.scheduledAt : undefined,
      sentAt: formData.isScheduled ? undefined : new Date().toISOString().replace('T', ' ').slice(0, 16),
      readCount: 0,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setNotifications([newNotification, ...notifications])
    setDialogOpen(false)
  }

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const typeColors: Record<string, 'info' | 'success' | 'warning' | 'error'> = {
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error'
  }

  const statusColors: Record<string, 'success' | 'warning' | 'secondary'> = {
    sent: 'success',
    scheduled: 'warning',
    draft: 'secondary'
  }

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <Typography variant='h4'>Quản lý thông báo</Typography>
        <Button variant='contained' startIcon={<i className='tabler-bell-plus' />} onClick={handleAdd}>
          Tạo thông báo
        </Button>
      </div>

      <Grid container spacing={6}>
        {/* Settings */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader title='Cài đặt thông báo' />
            <CardContent className='flex flex-col gap-2'>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.enablePush}
                    onChange={e => setSettings({ ...settings, enablePush: e.target.checked })}
                  />
                }
                label='Push Notification'
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.enableEmail}
                    onChange={e => setSettings({ ...settings, enableEmail: e.target.checked })}
                  />
                }
                label='Email Notification'
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.enableInApp}
                    onChange={e => setSettings({ ...settings, enableInApp: e.target.checked })}
                  />
                }
                label='In-App Notification'
              />
            </CardContent>
          </Card>

          <Card className='mt-6'>
            <CardHeader title='Thống kê' />
            <CardContent>
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                  <Typography>Tổng đã gửi</Typography>
                  <Typography fontWeight={600}>{notifications.filter(n => n.status === 'sent').length}</Typography>
                </div>
                <div className='flex justify-between'>
                  <Typography>Đang chờ</Typography>
                  <Typography fontWeight={600}>{notifications.filter(n => n.status === 'scheduled').length}</Typography>
                </div>
                <div className='flex justify-between'>
                  <Typography>Tổng lượt đọc</Typography>
                  <Typography fontWeight={600}>{notifications.reduce((sum, n) => sum + n.readCount, 0)}</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Notifications List */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardHeader title='Danh sách thông báo' />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Thông báo</TableCell>
                    <TableCell>Loại</TableCell>
                    <TableCell>Đối tượng</TableCell>
                    <TableCell>Trạng thái</TableCell>
                    <TableCell>Lượt đọc</TableCell>
                    <TableCell>Thao tác</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {notifications.map(notification => (
                    <TableRow key={notification.id}>
                      <TableCell>
                        <Typography fontWeight={500}>{notification.title}</Typography>
                        <Typography variant='body2' color='text.secondary' className='line-clamp-1'>
                          {notification.message}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={notification.type}
                          size='small'
                          color={typeColors[notification.type]}
                          variant='tonal'
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant='body2'>
                          {notification.target === 'all'
                            ? 'Tất cả'
                            : notification.target === 'subscribers'
                              ? 'Subscribers'
                              : 'Members'}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={
                            notification.status === 'sent'
                              ? 'Đã gửi'
                              : notification.status === 'scheduled'
                                ? 'Đã lên lịch'
                                : 'Nháp'
                          }
                          size='small'
                          color={statusColors[notification.status]}
                          variant='tonal'
                        />
                      </TableCell>
                      <TableCell>{notification.readCount.toLocaleString()}</TableCell>
                      <TableCell>
                        <IconButton size='small' onClick={() => handleDelete(notification.id)}>
                          <i className='tabler-trash text-textSecondary' />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>

      {/* Create Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth='sm' fullWidth>
        <DialogTitle>Tạo thông báo mới</DialogTitle>
        <DialogContent className='flex flex-col gap-4 pt-4'>
          <CustomTextField
            label='Tiêu đề'
            fullWidth
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value })}
          />
          <CustomTextField
            label='Nội dung'
            fullWidth
            multiline
            rows={3}
            value={formData.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, message: e.target.value })}
          />
          <CustomTextField
            select
            fullWidth
            label='Loại thông báo'
            value={formData.type}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, type: e.target.value as NotificationType['type'] })
            }
          >
            <MenuItem value='info'>Thông tin</MenuItem>
            <MenuItem value='success'>Thành công</MenuItem>
            <MenuItem value='warning'>Cảnh báo</MenuItem>
            <MenuItem value='error'>Lỗi</MenuItem>
          </CustomTextField>
          <CustomTextField
            select
            fullWidth
            label='Đối tượng'
            value={formData.target}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, target: e.target.value as NotificationType['target'] })
            }
          >
            <MenuItem value='all'>Tất cả người dùng</MenuItem>
            <MenuItem value='subscribers'>Subscribers</MenuItem>
            <MenuItem value='members'>Members</MenuItem>
          </CustomTextField>
          <FormControlLabel
            control={
              <Switch
                checked={formData.isScheduled}
                onChange={e => setFormData({ ...formData, isScheduled: e.target.checked })}
              />
            }
            label='Lên lịch gửi'
          />
          {formData.isScheduled && (
            <CustomTextField
              label='Thời gian gửi'
              type='datetime-local'
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.scheduledAt}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, scheduledAt: e.target.value })
              }
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Hủy</Button>
          <Button variant='contained' onClick={handleSend}>
            {formData.isScheduled ? 'Lên lịch' : 'Gửi ngay'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default NotificationManagement
