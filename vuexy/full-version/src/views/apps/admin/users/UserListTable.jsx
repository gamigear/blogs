'use client'

import { useState, useEffect, useMemo } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import TablePagination from '@mui/material/TablePagination'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Alert from '@mui/material/Alert'

// Third-party Imports
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

const columnHelper = createColumnHelper()

const roleColors = {
  SUPER_ADMIN: 'error',
  ADMIN: 'warning',
  EDITOR: 'info',
  USER: 'primary'
}

const statusColors = {
  ACTIVE: 'success',
  INACTIVE: 'secondary',
  SUSPENDED: 'error',
  PENDING_VERIFICATION: 'warning'
}

const UserListTable = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [globalFilter, setGlobalFilter] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0 })
  const [editDialog, setEditDialog] = useState({ open: false, user: null })
  const [deleteDialog, setDeleteDialog] = useState({ open: false, user: null })
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [saving, setSaving] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: pagination.page,
        limit: pagination.limit,
        ...(globalFilter && { search: globalFilter }),
        ...(roleFilter && { role: roleFilter }),
        ...(statusFilter && { status: statusFilter })
      })

      const res = await fetch(`/api/admin/users?${params}`)
      const data = await res.json()

      if (res.ok) {
        setUsers(data.users)
        setPagination(prev => ({ ...prev, total: data.pagination.total }))
      }
    } catch (err) {
      console.error('Fetch users error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [pagination.page, pagination.limit, roleFilter, statusFilter])

  useEffect(() => {
    const timer = setTimeout(() => {
      setPagination(prev => ({ ...prev, page: 1 }))
      fetchUsers()
    }, 500)
    return () => clearTimeout(timer)
  }, [globalFilter])

  const handleEdit = (user) => {
    setFormData({
      name: user.name || '',
      email: user.email || '',
      role: user.role || 'USER',
      status: user.status || 'ACTIVE',
      phone: user.phone || '',
      password: ''
    })
    setEditDialog({ open: true, user })
    setError(null)
  }

  const handleSave = async () => {
    setSaving(true)
    setError(null)

    try {
      const payload = { ...formData }
      if (!payload.password) delete payload.password

      const res = await fetch(`/api/admin/users/${editDialog.user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message)
        return
      }

      setEditDialog({ open: false, user: null })
      fetchUsers()
    } catch (err) {
      setError('Đã xảy ra lỗi')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/users/${deleteDialog.user.id}`, {
        method: 'DELETE'
      })

      if (res.ok) {
        setDeleteDialog({ open: false, user: null })
        fetchUsers()
      }
    } catch (err) {
      console.error('Delete error:', err)
    } finally {
      setSaving(false)
    }
  }

  const handleUnlock = async (userId) => {
    try {
      await fetch(`/api/admin/users/${userId}/unlock`, { method: 'POST' })
      fetchUsers()
    } catch (err) {
      console.error('Unlock error:', err)
    }
  }

  const columns = useMemo(() => [
    columnHelper.accessor('name', {
      header: 'Người dùng',
      cell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src={row.original.image} alt={row.original.name}>
            {row.original.name?.charAt(0)}
          </Avatar>
          <Box>
            <Typography fontWeight={500}>{row.original.name}</Typography>
            <Typography variant='body2' color='text.secondary'>
              {row.original.email}
            </Typography>
          </Box>
        </Box>
      )
    }),
    columnHelper.accessor('role', {
      header: 'Vai trò',
      cell: ({ row }) => (
        <Chip
          label={row.original.role}
          color={roleColors[row.original.role] || 'default'}
          size='small'
          variant='tonal'
        />
      )
    }),
    columnHelper.accessor('status', {
      header: 'Trạng thái',
      cell: ({ row }) => (
        <Chip
          label={row.original.status}
          color={statusColors[row.original.status] || 'default'}
          size='small'
          variant='tonal'
        />
      )
    }),
    columnHelper.accessor('lastLoginAt', {
      header: 'Đăng nhập cuối',
      cell: ({ row }) => (
        <Typography variant='body2'>
          {row.original.lastLoginAt
            ? new Date(row.original.lastLoginAt).toLocaleString('vi-VN')
            : 'Chưa đăng nhập'}
        </Typography>
      )
    }),
    columnHelper.accessor('actions', {
      header: 'Thao tác',
      cell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size='small' onClick={() => handleEdit(row.original)}>
            <i className='tabler-edit text-textSecondary' />
          </IconButton>
          {row.original.lockedUntil && new Date(row.original.lockedUntil) > new Date() && (
            <IconButton size='small' color='warning' onClick={() => handleUnlock(row.original.id)}>
              <i className='tabler-lock-open' />
            </IconButton>
          )}
          <IconButton size='small' color='error' onClick={() => setDeleteDialog({ open: true, user: row.original })}>
            <i className='tabler-trash' />
          </IconButton>
        </Box>
      )
    })
  ], [])

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    pageCount: Math.ceil(pagination.total / pagination.limit)
  })

  return (
    <>
      <Card>
        <CardHeader
          title='Quản lý người dùng'
          action={
            <Button variant='contained' startIcon={<i className='tabler-plus' />}>
              Thêm mới
            </Button>
          }
        />
        <Box sx={{ p: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            size='small'
            placeholder='Tìm kiếm...'
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            sx={{ minWidth: 200 }}
          />
          <TextField
            select
            size='small'
            value={roleFilter}
            onChange={e => setRoleFilter(e.target.value)}
            sx={{ minWidth: 150 }}
            label='Vai trò'
          >
            <MenuItem value=''>Tất cả</MenuItem>
            <MenuItem value='SUPER_ADMIN'>Super Admin</MenuItem>
            <MenuItem value='ADMIN'>Admin</MenuItem>
            <MenuItem value='EDITOR'>Editor</MenuItem>
            <MenuItem value='USER'>User</MenuItem>
          </TextField>
          <TextField
            select
            size='small'
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            sx={{ minWidth: 150 }}
            label='Trạng thái'
          >
            <MenuItem value=''>Tất cả</MenuItem>
            <MenuItem value='ACTIVE'>Active</MenuItem>
            <MenuItem value='INACTIVE'>Inactive</MenuItem>
            <MenuItem value='SUSPENDED'>Suspended</MenuItem>
          </TextField>
        </Box>

        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={columns.length} align='center' style={{ padding: 40 }}>
                    <CircularProgress />
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} align='center' style={{ padding: 40 }}>
                    <Typography>Không có dữ liệu</Typography>
                  </td>
                </tr>
              ) : (
                table.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
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
        />
      </Card>

      {/* Edit Dialog */}
      <Dialog open={editDialog.open} onClose={() => setEditDialog({ open: false, user: null })} maxWidth='sm' fullWidth>
        <DialogTitle>Chỉnh sửa người dùng</DialogTitle>
        <DialogContent>
          {error && <Alert severity='error' sx={{ mb: 2 }}>{error}</Alert>}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label='Họ tên'
              value={formData.name || ''}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              fullWidth
            />
            <TextField
              label='Email'
              value={formData.email || ''}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              fullWidth
            />
            <TextField
              label='Số điện thoại'
              value={formData.phone || ''}
              onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              fullWidth
            />
            <TextField
              select
              label='Vai trò'
              value={formData.role || 'USER'}
              onChange={e => setFormData(prev => ({ ...prev, role: e.target.value }))}
              fullWidth
            >
              <MenuItem value='USER'>User</MenuItem>
              <MenuItem value='EDITOR'>Editor</MenuItem>
              <MenuItem value='ADMIN'>Admin</MenuItem>
              <MenuItem value='SUPER_ADMIN'>Super Admin</MenuItem>
            </TextField>
            <TextField
              select
              label='Trạng thái'
              value={formData.status || 'ACTIVE'}
              onChange={e => setFormData(prev => ({ ...prev, status: e.target.value }))}
              fullWidth
            >
              <MenuItem value='ACTIVE'>Active</MenuItem>
              <MenuItem value='INACTIVE'>Inactive</MenuItem>
              <MenuItem value='SUSPENDED'>Suspended</MenuItem>
            </TextField>
            <TextField
              label='Mật khẩu mới (để trống nếu không đổi)'
              type='password'
              value={formData.password || ''}
              onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialog({ open: false, user: null })}>Hủy</Button>
          <Button variant='contained' onClick={handleSave} disabled={saving}>
            {saving ? 'Đang lưu...' : 'Lưu'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, user: null })}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <Typography>
            Bạn có chắc muốn xóa người dùng <strong>{deleteDialog.user?.email}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, user: null })}>Hủy</Button>
          <Button variant='contained' color='error' onClick={handleDelete} disabled={saving}>
            {saving ? 'Đang xóa...' : 'Xóa'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default UserListTable
