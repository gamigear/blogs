'use client'

import { useState, useEffect } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import TablePagination from '@mui/material/TablePagination'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

const actionColors = {
  LOGIN: 'success',
  LOGIN_FAILED: 'error',
  LOGOUT: 'secondary',
  REGISTER: 'info',
  PASSWORD_CHANGE: 'warning',
  PASSWORD_RESET: 'warning',
  PASSWORD_RESET_REQUEST: 'info',
  PROFILE_UPDATE: 'primary',
  USER_CREATE: 'success',
  USER_UPDATE: 'primary',
  USER_DELETE: 'error',
  USER_UNLOCK: 'warning'
}

const ActivityLogs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [actionFilter, setActionFilter] = useState('')
  const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0 })

  const fetchLogs = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: pagination.page,
        limit: pagination.limit,
        ...(actionFilter && { action: actionFilter })
      })

      const res = await fetch(`/api/admin/activity-logs?${params}`)
      const data = await res.json()

      if (res.ok) {
        setLogs(data.logs)
        setPagination(prev => ({ ...prev, total: data.pagination.total }))
      }
    } catch (err) {
      console.error('Fetch logs error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLogs()
  }, [pagination.page, pagination.limit, actionFilter])

  return (
    <Card>
      <CardHeader title='Nhật ký hoạt động' />
      <Box sx={{ p: 3, display: 'flex', gap: 2 }}>
        <TextField
          select
          size='small'
          value={actionFilter}
          onChange={e => {
            setActionFilter(e.target.value)
            setPagination(prev => ({ ...prev, page: 1 }))
          }}
          sx={{ minWidth: 200 }}
          label='Loại hoạt động'
        >
          <MenuItem value=''>Tất cả</MenuItem>
          <MenuItem value='LOGIN'>Đăng nhập</MenuItem>
          <MenuItem value='LOGIN_FAILED'>Đăng nhập thất bại</MenuItem>
          <MenuItem value='LOGOUT'>Đăng xuất</MenuItem>
          <MenuItem value='REGISTER'>Đăng ký</MenuItem>
          <MenuItem value='PASSWORD_CHANGE'>Đổi mật khẩu</MenuItem>
          <MenuItem value='PASSWORD_RESET'>Đặt lại mật khẩu</MenuItem>
          <MenuItem value='USER_CREATE'>Tạo user</MenuItem>
          <MenuItem value='USER_UPDATE'>Cập nhật user</MenuItem>
          <MenuItem value='USER_DELETE'>Xóa user</MenuItem>
        </TextField>
      </Box>

      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Người dùng</th>
              <th>Hoạt động</th>
              <th>Chi tiết</th>
              <th>IP</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} align='center' style={{ padding: 40 }}>
                  <CircularProgress />
                </td>
              </tr>
            ) : logs.length === 0 ? (
              <tr>
                <td colSpan={5} align='center' style={{ padding: 40 }}>
                  <Typography>Không có dữ liệu</Typography>
                </td>
              </tr>
            ) : (
              logs.map(log => (
                <tr key={log.id}>
                  <td>
                    {log.user ? (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar src={log.user.image} sx={{ width: 32, height: 32 }}>
                          {log.user.name?.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant='body2' fontWeight={500}>
                            {log.user.name}
                          </Typography>
                          <Typography variant='caption' color='text.secondary'>
                            {log.user.email}
                          </Typography>
                        </Box>
                      </Box>
                    ) : (
                      <Typography variant='body2' color='text.secondary'>
                        Không xác định
                      </Typography>
                    )}
                  </td>
                  <td>
                    <Chip
                      label={log.action}
                      color={actionColors[log.action] || 'default'}
                      size='small'
                      variant='tonal'
                    />
                  </td>
                  <td>
                    <Typography variant='body2'>{log.details}</Typography>
                  </td>
                  <td>
                    <Typography variant='body2' color='text.secondary'>
                      {log.ipAddress || '-'}
                    </Typography>
                  </td>
                  <td>
                    <Typography variant='body2'>
                      {new Date(log.createdAt).toLocaleString('vi-VN')}
                    </Typography>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <TablePagination
        component='div'
        count={pagination.total}
        page={pagination.page - 1}
        rowsPerPage={pagination.limit}
        onPageChange={(_, page) => setPagination(prev => ({ ...prev, page: page + 1 }))}
        onRowsPerPageChange={e => setPagination(prev => ({ ...prev, limit: parseInt(e.target.value), page: 1 }))}
        labelRowsPerPage='Số dòng:'
        rowsPerPageOptions={[10, 20, 50, 100]}
      />
    </Card>
  )
}

export default ActivityLogs
