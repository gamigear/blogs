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
import Alert from '@mui/material/Alert'
import LinearProgress from '@mui/material/LinearProgress'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

type BackupType = {
  id: number
  name: string
  size: string
  type: 'full' | 'database' | 'media'
  status: 'completed' | 'failed' | 'in_progress'
  createdAt: string
}

const mockBackups: BackupType[] = [
  { id: 1, name: 'backup_2025-12-12_full.zip', size: '256 MB', type: 'full', status: 'completed', createdAt: '2025-12-12 03:00' },
  { id: 2, name: 'backup_2025-12-11_db.sql', size: '45 MB', type: 'database', status: 'completed', createdAt: '2025-12-11 03:00' },
  { id: 3, name: 'backup_2025-12-10_media.zip', size: '180 MB', type: 'media', status: 'completed', createdAt: '2025-12-10 03:00' },
  { id: 4, name: 'backup_2025-12-09_full.zip', size: '248 MB', type: 'full', status: 'completed', createdAt: '2025-12-09 03:00' },
]

const BackupRestore = () => {
  const [backups, setBackups] = useState(mockBackups)
  const [backupDialogOpen, setBackupDialogOpen] = useState(false)
  const [restoreDialogOpen, setRestoreDialogOpen] = useState(false)
  const [selectedBackup, setSelectedBackup] = useState<BackupType | null>(null)
  const [isBackingUp, setIsBackingUp] = useState(false)
  const [backupProgress, setBackupProgress] = useState(0)
  const [backupOptions, setBackupOptions] = useState({
    database: true,
    media: true,
    settings: true
  })

  const handleCreateBackup = () => {
    setIsBackingUp(true)
    setBackupProgress(0)
    
    const interval = setInterval(() => {
      setBackupProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsBackingUp(false)
          setBackupDialogOpen(false)
          
          const newBackup: BackupType = {
            id: backups.length + 1,
            name: `backup_${new Date().toISOString().split('T')[0]}_full.zip`,
            size: '260 MB',
            type: 'full',
            status: 'completed',
            createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16)
          }
          setBackups([newBackup, ...backups])
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  const handleRestore = (backup: BackupType) => {
    setSelectedBackup(backup)
    setRestoreDialogOpen(true)
  }

  const handleDelete = (id: number) => {
    setBackups(backups.filter(b => b.id !== id))
  }

  const typeLabels: Record<string, string> = {
    full: 'Đầy đủ',
    database: 'Database',
    media: 'Media'
  }

  const typeColors: Record<string, 'primary' | 'success' | 'info'> = {
    full: 'primary',
    database: 'success',
    media: 'info'
  }

  return (
    <>
      <Typography variant='h4' className='mb-6'>Sao lưu & Khôi phục</Typography>

      <Grid container spacing={6}>
        {/* Quick Actions */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader title='Tạo bản sao lưu' />
            <CardContent>
              <Typography variant='body2' color='text.secondary' className='mb-4'>
                Tạo bản sao lưu để bảo vệ dữ liệu website của bạn.
              </Typography>
              <Button
                variant='contained'
                fullWidth
                startIcon={<i className='tabler-database-export' />}
                onClick={() => setBackupDialogOpen(true)}
              >
                Tạo backup ngay
              </Button>
            </CardContent>
          </Card>

          <Card className='mt-6'>
            <CardHeader title='Thông tin lưu trữ' />
            <CardContent>
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                  <Typography variant='body2'>Dung lượng đã dùng</Typography>
                  <Typography variant='body2' fontWeight={500}>729 MB</Typography>
                </div>
                <LinearProgress variant='determinate' value={36} />
                <Typography variant='caption' color='text.secondary'>
                  729 MB / 2 GB (36%)
                </Typography>
                <div className='flex justify-between mt-2'>
                  <Typography variant='body2'>Số bản backup</Typography>
                  <Typography variant='body2' fontWeight={500}>{backups.length}</Typography>
                </div>
                <div className='flex justify-between'>
                  <Typography variant='body2'>Backup gần nhất</Typography>
                  <Typography variant='body2' fontWeight={500}>{backups[0]?.createdAt || 'Chưa có'}</Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='mt-6'>
            <CardHeader title='Lịch backup tự động' />
            <CardContent>
              <Alert severity='info' className='mb-4'>
                Backup tự động chạy lúc 3:00 AM mỗi ngày
              </Alert>
              <Button variant='outlined' fullWidth startIcon={<i className='tabler-settings' />}>
                Cài đặt lịch
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Backup List */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardHeader title='Danh sách bản sao lưu' />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Tên file</TableCell>
                    <TableCell>Loại</TableCell>
                    <TableCell>Kích thước</TableCell>
                    <TableCell>Thời gian</TableCell>
                    <TableCell>Thao tác</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {backups.map(backup => (
                    <TableRow key={backup.id}>
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          <i className='tabler-file-zip text-primary' />
                          <Typography variant='body2'>{backup.name}</Typography>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={typeLabels[backup.type]}
                          size='small'
                          color={typeColors[backup.type]}
                          variant='tonal'
                        />
                      </TableCell>
                      <TableCell>{backup.size}</TableCell>
                      <TableCell>{backup.createdAt}</TableCell>
                      <TableCell>
                        <IconButton size='small' title='Tải xuống'>
                          <i className='tabler-download text-textSecondary' />
                        </IconButton>
                        <IconButton size='small' title='Khôi phục' onClick={() => handleRestore(backup)}>
                          <i className='tabler-refresh text-textSecondary' />
                        </IconButton>
                        <IconButton size='small' title='Xóa' onClick={() => handleDelete(backup.id)}>
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

      {/* Create Backup Dialog */}
      <Dialog open={backupDialogOpen} onClose={() => !isBackingUp && setBackupDialogOpen(false)} maxWidth='sm' fullWidth>
        <DialogTitle>Tạo bản sao lưu</DialogTitle>
        <DialogContent>
          {isBackingUp ? (
            <div className='py-4'>
              <Typography className='mb-2'>Đang tạo backup...</Typography>
              <LinearProgress variant='determinate' value={backupProgress} />
              <Typography variant='body2' color='text.secondary' className='mt-2'>
                {backupProgress}% hoàn thành
              </Typography>
            </div>
          ) : (
            <div className='flex flex-col gap-2 pt-2'>
              <Typography variant='body2' color='text.secondary' className='mb-2'>
                Chọn dữ liệu cần sao lưu:
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={backupOptions.database}
                    onChange={e => setBackupOptions({ ...backupOptions, database: e.target.checked })}
                  />
                }
                label='Database (bài viết, sự kiện, người dùng...)'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={backupOptions.media}
                    onChange={e => setBackupOptions({ ...backupOptions, media: e.target.checked })}
                  />
                }
                label='Media (hình ảnh, video...)'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={backupOptions.settings}
                    onChange={e => setBackupOptions({ ...backupOptions, settings: e.target.checked })}
                  />
                }
                label='Cài đặt website'
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBackupDialogOpen(false)} disabled={isBackingUp}>
            Hủy
          </Button>
          <Button variant='contained' onClick={handleCreateBackup} disabled={isBackingUp}>
            Tạo backup
          </Button>
        </DialogActions>
      </Dialog>

      {/* Restore Dialog */}
      <Dialog open={restoreDialogOpen} onClose={() => setRestoreDialogOpen(false)} maxWidth='sm' fullWidth>
        <DialogTitle>Khôi phục dữ liệu</DialogTitle>
        <DialogContent>
          <Alert severity='warning' className='mb-4'>
            Cảnh báo: Khôi phục sẽ ghi đè toàn bộ dữ liệu hiện tại!
          </Alert>
          {selectedBackup && (
            <div className='flex flex-col gap-2'>
              <Typography>
                <strong>File:</strong> {selectedBackup.name}
              </Typography>
              <Typography>
                <strong>Kích thước:</strong> {selectedBackup.size}
              </Typography>
              <Typography>
                <strong>Thời gian tạo:</strong> {selectedBackup.createdAt}
              </Typography>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRestoreDialogOpen(false)}>Hủy</Button>
          <Button variant='contained' color='warning'>
            Xác nhận khôi phục
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default BackupRestore
