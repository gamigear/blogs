'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import TablePagination from '@mui/material/TablePagination'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'
import tableStyles from '@core/styles/table.module.css'

const columnHelper = createColumnHelper()

const statusObj = {
  published: { color: 'success', label: 'Đã xuất bản' },
  draft: { color: 'warning', label: 'Nháp' },
  scheduled: { color: 'info', label: 'Đã lên lịch' }
}

const BlogPostsListWrapper = () => {
  const { lang } = useParams()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [globalFilter, setGlobalFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [statusFilter])

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        limit: '100',
        ...(statusFilter && { status: statusFilter })
      })
      const res = await fetch(`/api/blog/posts?${params}`)
      const data = await res.json()
      setPosts(data.posts || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return
    try {
      await fetch(`/api/blog/posts/${id}`, { method: 'DELETE' })
      fetchPosts()
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  const columns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Tiêu đề',
        cell: ({ row }) => (
          <div className='flex flex-col'>
            <Typography fontWeight={500}>{row.original.title}</Typography>
            <Typography variant='caption' color='text.secondary'>
              {row.original.category?.name}
            </Typography>
          </div>
        )
      }),
      columnHelper.accessor('authorName', {
        header: 'Tác giả',
        cell: ({ row }) => <Typography>{row.original.authorName}</Typography>
      }),
      columnHelper.accessor('status', {
        header: 'Trạng thái',
        cell: ({ row }) => {
          const status = statusObj[row.original.status] || statusObj.draft
          return <Chip label={status.label} color={status.color} size='small' />
        }
      }),
      columnHelper.accessor('viewCount', {
        header: 'Lượt xem',
        cell: ({ row }) => <Typography>{row.original.viewCount}</Typography>
      }),
      columnHelper.accessor('publishedAt', {
        header: 'Ngày đăng',
        cell: ({ row }) => (
          <Typography>
            {row.original.publishedAt
              ? new Date(row.original.publishedAt).toLocaleDateString('vi-VN')
              : '-'}
          </Typography>
        )
      }),
      columnHelper.accessor('actions', {
        header: 'Thao tác',
        cell: ({ row }) => (
          <div className='flex gap-1'>
            <IconButton
              component={Link}
              href={`/${lang}/apps/blog/posts/edit/${row.original.id}`}
              size='small'
            >
              <i className='tabler-edit text-lg' />
            </IconButton>
            <IconButton
              size='small'
              color='error'
              onClick={() => handleDelete(row.original.id)}
            >
              <i className='tabler-trash text-lg' />
            </IconButton>
          </div>
        )
      })
    ],
    [lang]
  )

  const table = useReactTable({
    data: posts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter
  })

  return (
    <Card>
      <CardHeader
        title='Quản lý bài viết'
        action={
          <Button
            component={Link}
            href={`/${lang}/apps/blog/posts/add`}
            variant='contained'
            startIcon={<i className='tabler-plus' />}
          >
            Thêm bài viết
          </Button>
        }
      />
      <div className='flex flex-wrap gap-4 p-6'>
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
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          sx={{ minWidth: 150 }}
          label='Trạng thái'
        >
          <MenuItem value=''>Tất cả</MenuItem>
          <MenuItem value='published'>Đã xuất bản</MenuItem>
          <MenuItem value='draft'>Nháp</MenuItem>
          <MenuItem value='scheduled'>Đã lên lịch</MenuItem>
        </TextField>
      </div>
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
                <td colSpan={columns.length} className='text-center p-4'>
                  Đang tải...
                </td>
              </tr>
            ) : table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className='text-center p-4'>
                  Không có bài viết nào
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
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => table.setPageIndex(page)}
        onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
      />
    </Card>
  )
}

export default BlogPostsListWrapper
