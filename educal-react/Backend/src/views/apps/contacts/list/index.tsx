'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import MenuItem from '@mui/material/MenuItem'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Type Imports
import type { ContactType } from '@/types/apps/contactTypes'

type Props = {
  contactData?: ContactType[]
}

const statusColors: Record<string, 'error' | 'warning' | 'success' | 'secondary'> = {
  new: 'error',
  read: 'warning',
  replied: 'success',
  archived: 'secondary'
}

const statusLabels: Record<string, string> = {
  new: 'Mới',
  read: 'Đã đọc',
  replied: 'Đã trả lời',
  archived: 'Lưu trữ'
}

const ContactList = ({ contactData }: Props) => {
  const [data, setData] = useState(contactData || [])
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [filterStatus, setFilterStatus] = useState('all')

  const handleView = (contact: ContactType) => {
    setSelectedContact(contact)
    setDialogOpen(true)
    // Mark as read
    if (contact.status === 'new') {
      setData(data.map(c => (c.id === contact.id ? { ...c, status: 'read' as const } : c)))
    }
  }

  const handleStatusChange = (id: number, status: ContactType['status']) => {
    setData(data.map(c => (c.id === id ? { ...c, status } : c)))
  }

  const handleDelete = (id: number) => {
    setData(data.filter(c => c.id !== id))
  }

  const filteredData = filterStatus === 'all' ? data : data.filter(c => c.status === filterStatus)
  const newCount = data.filter(c => c.status === 'new').length

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <div className='flex items-center gap-2'>
          <Typography variant='h4'>Tin nhắn liên hệ</Typography>
          {newCount > 0 && <Chip label={`${newCount} mới`} color='error' size='small' />}
        </div>
        <CustomTextField
          select
          value={filterStatus}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterStatus(e.target.value)}
          className='min-w-[150px]'
        >
          <MenuItem value='all'>Tất cả</MenuItem>
          <MenuItem value='new'>Mới</MenuItem>
          <MenuItem value='read'>Đã đọc</MenuItem>
          <MenuItem value='replied'>Đã trả lời</MenuItem>
          <MenuItem value='archived'>Lưu trữ</MenuItem>
        </CustomTextField>
      </div>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Người gửi</TableCell>
                <TableCell>Chủ đề</TableCell>
                <TableCell>Thời gian</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell>Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map(contact => (
                <TableRow
                  key={contact.id}
                  sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}
                  onClick={() => handleView(contact)}
                >
                  <TableCell>
                    <div>
                      <Typography variant='body1' fontWeight={contact.status === 'new' ? 600 : 400}>
                        {contact.name}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {contact.email}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='body1'
                      fontWeight={contact.status === 'new' ? 600 : 400}
                      className='line-clamp-1'
                    >
                      {contact.subject}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='body2'>{contact.createdAt}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={statusLabels[contact.status]}
                      size='small'
                      color={statusColors[contact.status]}
                      variant='tonal'
                    />
                  </TableCell>
                  <TableCell onClick={e => e.stopPropagation()}>
                    <IconButton size='small' onClick={() => handleDelete(contact.id)}>
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
        {selectedContact && (
          <>
            <DialogTitle>
              <div className='flex items-center justify-between'>
                <span>{selectedContact.subject}</span>
                <Chip
                  label={statusLabels[selectedContact.status]}
                  size='small'
                  color={statusColors[selectedContact.status]}
                  variant='tonal'
                />
              </div>
            </DialogTitle>
            <DialogContent>
              <Card variant='outlined' className='mb-4'>
                <CardContent>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-user text-textSecondary' />
                      <Typography>{selectedContact.name}</Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-mail text-textSecondary' />
                      <Typography>{selectedContact.email}</Typography>
                    </div>
                    {selectedContact.phone && (
                      <div className='flex items-center gap-2'>
                        <i className='tabler-phone text-textSecondary' />
                        <Typography>{selectedContact.phone}</Typography>
                      </div>
                    )}
                    <div className='flex items-center gap-2'>
                      <i className='tabler-clock text-textSecondary' />
                      <Typography variant='body2' color='text.secondary'>
                        {selectedContact.createdAt}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Typography variant='body1'>{selectedContact.message}</Typography>
            </DialogContent>
            <DialogActions>
              <Button
                variant='outlined'
                color='secondary'
                onClick={() => handleStatusChange(selectedContact.id, 'archived')}
              >
                Lưu trữ
              </Button>
              <Button
                variant='contained'
                startIcon={<i className='tabler-send' />}
                onClick={() => {
                  handleStatusChange(selectedContact.id, 'replied')
                  setDialogOpen(false)
                }}
              >
                Trả lời
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  )
}

export default ContactList
