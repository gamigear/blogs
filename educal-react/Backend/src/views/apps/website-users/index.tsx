'use client'

// React Imports
import { useState, useMemo } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import TablePagination from '@mui/material/TablePagination'
import MenuItem from '@mui/material/MenuItem'

// Third-party Imports
import classnames from 'classnames'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table'

// Component Imports
import TablePaginationComponent from '@components/TablePaginationComponent'
import CustomTextField from '@core/components/mui/TextField'
import CustomAvatar from '@core/components/mui/Avatar'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

type WebsiteUserType = {
  id: number
  name: string
  email: string
  avatar?: string
  role: 'user' | 'subscriber' | 'vip'
  status: 'active' | 'inactive' | 'banned'
  lastLogin: string
  createdAt: string
}

const mockUsers: WebsiteUserType[] = [
  { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@gmail.com', avatar: '/images/avatars/1.png', role: 'vip', status: 'active', lastLogin: '2025-12-12 10:30', createdAt: '2025-01-15' },
  { id: 2, name: 'Trần Thị B', email: 'tranthib@gmail.com', avatar: '/images/avatars/2.png', role: 'subscriber', status: 'active', lastLogin: '2025-12-11 15:45', createdAt: '2025-03-20' },
  { id: 3, name: 'Lê Văn C', email: 'levanc@gmail.com', avatar: '/images/avatars/3.png', role: 'user', status: 'active', lastLogin: '2025-12-10 09:15', createdAt: '2025-06-10' },
  { id: 4, name: 'Phạm Thị D', email: 'phamthid@gmail.com', avatar: '/images/avatars/4.png', role: 'subscriber', status: 'inactive', lastLogin: '2025-11-25 14:20', createdAt: '2025-04-05' },
  { id: 5, name: 'Hoàng Văn E', email: 'hoangvane@gmail.com', avatar: '/images/avatars/5.png', role: 'user', status: 'banned', lastLogin: '2025-10-15 08:00', createdAt: '2025-02-28' },
]

const columnHelper = createColumnHelper<WebsiteUserType>()

const WebsiteUsers = () => {
  const [data] = useState(mockUsers)
  const [globalFilter, setGlobalFilter] = useState('')

  const roleColors: Record<string, 'primary' | 'success' | 'warning'> = {
    user: 'primary',
    subscriber: 'success',
    vip: 'warning'
  }

  const statusColors: Record<string, 'success' | 'secondary' | 'error'> = {
    active: 'success',
    inactive: 'secondary',
    banned: 'error'
  }

  const columns = useMemo<ColumnDef<WebsiteUserType, any>[]>(
    () => [
      columnHelper.accessor('name', {
        header: 'Người dùng',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <CustomAvatar src={row.original.avatar} size={36} />
            <div>
              <Typography fontWeight={500}>{row.original.name}</Typography>
              <Typography variant='body2' color='text.secondary'>{row.original.email}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('role', {
        header: 'Vai trò',
        cell: ({ row }) => (
          <Chip
            label={row.original.role === 'vip' ? 'VIP' : row.original.role === 'subscriber' ? 'Subscriber' : 'User'}
            size='small'
            color={roleColors[row.original.role]}
            variant='tonal'
          />
        )
      }),
      columnHelper.accessor('status', {
        header: 'Trạng thái',
        cell: ({ row }) => (
          <Chip
            label={row.original.status === 'active' ? 'Hoạt động' : row.original.status === 'inactive' ? 'Không hoạt động' : 'Bị cấm'}
            size='small'
            color={statusColors[row.original.status]}
            variant='tonal'
          />
        )
      }),
      columnHelper.accessor('lastLogin', {
        header: 'Đăng nhập cuối',
        cell: ({ row }) => <Typography variant='body2'>{row.original.lastLogin}</Typography>
      }),
      columnHelper.accessor('createdAt', {
        header: 'Ngày tạo',
        cell: ({ row }) => <Typography variant='body2'>{row.original.createdAt}</Typography>
      }),
      {
        id: 'actions',
        header: 'Thao tác',
        cell: () => (
          <div className='flex items-center'>
            <IconButton size='small'><i className='tabler-eye text-textSecondary' /></IconButton>
            <IconButton size='small'><i className='tabler-edit text-textSecondary' /></IconButton>
            <IconButton size='small'><i className='tabler-trash text-textSecondary' /></IconButton>
          </div>
        )
      }
    ],
    []
  )

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter
  })

  return (
    <>
      <Typography variant='h4' className='mb-6'>Quản lý người dùng</Typography>
      
      <Card>
        <CardHeader
          title='Danh sách người dùng'
          action={
            <div className='flex gap-4'>
              <CustomTextField
                size='small'
                placeholder='Tìm kiếm...'
                value={globalFilter}
                onChange={e => setGlobalFilter(e.target.value)}
              />
              <CustomTextField select size='small' defaultValue='all' className='min-w-[120px]'>
                <MenuItem value='all'>Tất cả</MenuItem>
                <MenuItem value='active'>Hoạt động</MenuItem>
                <MenuItem value='inactive'>Không hoạt động</MenuItem>
                <MenuItem value='banned'>Bị cấm</MenuItem>
              </CustomTextField>
            </div>
          }
        />
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <div
                          className={classnames({ 'cursor-pointer select-none': header.column.getCanSort() })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination
          component={() => <TablePaginationComponent table={table} />}
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => table.setPageIndex(page)}
        />
      </Card>
    </>
  )
}

export default WebsiteUsers
