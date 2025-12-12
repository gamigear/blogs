'use client'

// React Imports
import { useEffect, useState, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import TablePagination from '@mui/material/TablePagination'
import type { TextFieldProps } from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import type { RankingInfo } from '@tanstack/match-sorter-utils'

// Type Imports
import type { ThemeColor } from '@core/types'
import type { BlogType, BlogTypeWithAction } from '@/types/apps/blogTypes'
import type { Locale } from '@configs/i18n'

// Component Imports
import AddBlogDrawer from './AddBlogDrawer'
import TablePaginationComponent from '@components/TablePaginationComponent'
import CustomTextField from '@core/components/mui/TextField'
import CustomAvatar from '@core/components/mui/Avatar'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

type BlogStatusType = { [key: string]: ThemeColor }

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)
  addMeta({ itemRank })
  return itemRank.passed
}

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => onChange(value), debounce)
    return () => clearTimeout(timeout)
  }, [value, debounce, onChange])

  return <CustomTextField {...props} value={value} onChange={e => setValue(e.target.value)} />
}

const blogStatusObj: BlogStatusType = {
  published: 'success',
  draft: 'warning',
  archived: 'secondary'
}

const columnHelper = createColumnHelper<BlogTypeWithAction>()


const BlogListTable = ({ tableData }: { tableData?: BlogType[] }) => {
  const [addBlogOpen, setAddBlogOpen] = useState(false)
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(...[tableData])
  const [globalFilter, setGlobalFilter] = useState('')

  const { lang: locale } = useParams()

  const columns = useMemo<ColumnDef<BlogTypeWithAction, any>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        )
      },
      columnHelper.accessor('title', {
        header: 'Bài viết',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <CustomAvatar src={row.original.image} size={40} variant='rounded' />
            <div className='flex flex-col'>
              <Typography color='text.primary' className='font-medium line-clamp-1'>
                {row.original.title}
              </Typography>
              <Chip label={row.original.tag} size='small' variant='tonal' color='primary' />
            </div>
          </div>
        )
      }),
      columnHelper.accessor('author', {
        header: 'Tác giả',
        cell: ({ row }) => (
          <div className='flex items-center gap-2'>
            <CustomAvatar src={row.original.authorAvatar} size={28} />
            <Typography>{row.original.author}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('views', {
        header: 'Lượt xem',
        cell: ({ row }) => (
          <div className='flex items-center gap-1'>
            <i className='tabler-eye text-textSecondary' />
            <Typography>{row.original.views.toLocaleString()}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('publishedAt', {
        header: 'Ngày đăng',
        cell: ({ row }) => (
          <Typography>{row.original.publishedAt || 'Chưa đăng'}</Typography>
        )
      }),
      columnHelper.accessor('status', {
        header: 'Trạng thái',
        cell: ({ row }) => (
          <Chip
            variant='tonal'
            label={row.original.status === 'published' ? 'Đã đăng' : row.original.status === 'draft' ? 'Nháp' : 'Lưu trữ'}
            size='small'
            color={blogStatusObj[row.original.status]}
            className='capitalize'
          />
        )
      }),
      columnHelper.accessor('action', {
        header: 'Thao tác',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <IconButton onClick={() => setData(data?.filter(item => item.id !== row.original.id))}>
              <i className='tabler-trash text-textSecondary' />
            </IconButton>
            <IconButton>
              <Link href={getLocalizedUrl('/apps/blogs/edit/' + row.original.id, locale as Locale)} className='flex'>
                <i className='tabler-edit text-textSecondary' />
              </Link>
            </IconButton>
            <IconButton>
              <i className='tabler-eye text-textSecondary' />
            </IconButton>
          </div>
        ),
        enableSorting: false
      })
    ],
    [data, locale]
  )

  const table = useReactTable({
    data: data as BlogType[],
    columns,
    filterFns: { fuzzy: fuzzyFilter },
    state: { rowSelection, globalFilter },
    initialState: { pagination: { pageSize: 10 } },
    enableRowSelection: true,
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <>
      <Card>
        <CardHeader title='Danh sách bài viết' className='pbe-4' />
        <div className='flex justify-between flex-col items-start md:flex-row md:items-center p-6 border-bs gap-4'>
          <CustomTextField
            select
            value={table.getState().pagination.pageSize}
            onChange={e => table.setPageSize(Number(e.target.value))}
            className='max-sm:is-full sm:is-[70px]'
          >
            <MenuItem value='10'>10</MenuItem>
            <MenuItem value='25'>25</MenuItem>
            <MenuItem value='50'>50</MenuItem>
          </CustomTextField>
          <div className='flex flex-col sm:flex-row max-sm:is-full items-start sm:items-center gap-4'>
            <DebouncedInput
              value={globalFilter ?? ''}
              onChange={value => setGlobalFilter(String(value))}
              placeholder='Tìm kiếm...'
              className='max-sm:is-full'
            />
            <Button
              variant='contained'
              startIcon={<i className='tabler-plus' />}
              onClick={() => setAddBlogOpen(!addBlogOpen)}
              className='max-sm:is-full'
            >
              Thêm bài viết
            </Button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <div
                          className={classnames({
                            'flex items-center': header.column.getIsSorted(),
                            'cursor-pointer select-none': header.column.getCanSort()
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: <i className='tabler-chevron-up text-xl' />,
                            desc: <i className='tabler-chevron-down text-xl' />
                          }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {table.getFilteredRowModel().rows.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                    Không có dữ liệu
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {table.getRowModel().rows.slice(0, table.getState().pagination.pageSize).map(row => (
                  <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            )}
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
      <AddBlogDrawer
        open={addBlogOpen}
        handleClose={() => setAddBlogOpen(!addBlogOpen)}
        blogData={data}
        setData={setData}
      />
    </>
  )
}

export default BlogListTable
