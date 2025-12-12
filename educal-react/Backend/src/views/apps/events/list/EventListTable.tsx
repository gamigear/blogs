'use client'

// React Imports
import { useEffect, useState, useMemo } from 'react'

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
import type { EventType, EventTypeWithAction } from '@/types/apps/eventTypes'

// Component Imports
import AddEventDrawer from './AddEventDrawer'
import TablePaginationComponent from '@components/TablePaginationComponent'
import CustomTextField from '@core/components/mui/TextField'
import CustomAvatar from '@core/components/mui/Avatar'

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

type EventStatusType = { [key: string]: ThemeColor }

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

const eventStatusObj: EventStatusType = {
  upcoming: 'warning',
  active: 'success',
  ended: 'secondary',
  cancelled: 'error'
}

const columnHelper = createColumnHelper<EventTypeWithAction>()


const EventListTable = ({ tableData }: { tableData?: EventType[] }) => {
  const [addEventOpen, setAddEventOpen] = useState(false)
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(...[tableData])
  const [globalFilter, setGlobalFilter] = useState('')

  const columns = useMemo<ColumnDef<EventTypeWithAction, any>[]>(
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
        header: 'Sự kiện',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <CustomAvatar src={row.original.image} size={40} variant='rounded' />
            <div className='flex flex-col'>
              <Typography color='text.primary' className='font-medium'>
                {row.original.title}
              </Typography>
              <Typography variant='body2' className='line-clamp-1'>
                {row.original.description}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('date', {
        header: 'Ngày',
        cell: ({ row }) => <Typography>{row.original.date}</Typography>
      }),
      columnHelper.accessor('startTime', {
        header: 'Thời gian',
        cell: ({ row }) => (
          <Typography>{row.original.startTime} - {row.original.endTime}</Typography>
        )
      }),
      columnHelper.accessor('location', {
        header: 'Địa điểm',
        cell: ({ row }) => (
          <div className='flex items-center gap-1'>
            <i className='tabler-map-pin text-textSecondary' />
            <Typography>{row.original.location}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('status', {
        header: 'Trạng thái',
        cell: ({ row }) => (
          <Chip
            variant='tonal'
            label={
              row.original.status === 'upcoming' ? 'Sắp diễn ra' :
              row.original.status === 'active' ? 'Đang diễn ra' :
              row.original.status === 'ended' ? 'Đã kết thúc' : 'Đã hủy'
            }
            size='small'
            color={eventStatusObj[row.original.status]}
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
              <i className='tabler-edit text-textSecondary' />
            </IconButton>
            <IconButton>
              <i className='tabler-eye text-textSecondary' />
            </IconButton>
          </div>
        ),
        enableSorting: false
      })
    ],
    [data]
  )

  const table = useReactTable({
    data: data as EventType[],
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
        <CardHeader title='Danh sách sự kiện' className='pbe-4' />
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
              onClick={() => setAddEventOpen(!addEventOpen)}
              className='max-sm:is-full'
            >
              Thêm sự kiện
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
      <AddEventDrawer
        open={addEventOpen}
        handleClose={() => setAddEventOpen(!addEventOpen)}
        eventData={data}
        setData={setData}
      />
    </>
  )
}

export default EventListTable
