"use client"

import React, { useState } from 'react'
import styles from './DataTable.module.scss'

interface Column {
  key: string
  label: string
  render?: (value: any, row: any) => React.ReactNode
}

interface DataTableProps {
  columns: Column[]
  data: any[]
  onEdit?: (row: any) => void
  onDelete?: (row: any) => void
  searchable?: boolean
  pagination?: boolean
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  onEdit,
  onDelete,
  searchable = true,
  pagination = true,
}) => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredData = data.filter((row) =>
    columns.some((col) =>
      String(row[col.key]).toLowerCase().includes(search.toLowerCase())
    )
  )

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = pagination
    ? filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredData

  return (
    <div className={styles.tableWrapper}>
      {searchable && (
        <div className={styles.toolbar}>
          <div className={styles.search}>
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
              {(onEdit || onDelete) && <th>Thao tác</th>}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)} className={styles.empty}>
                  Không có dữ liệu
                </td>
              </tr>
            ) : (
              paginatedData.map((row, idx) => (
                <tr key={idx}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                  {(onEdit || onDelete) && (
                    <td>
                      <div className={styles.actions}>
                        {onEdit && (
                          <button className={styles.editBtn} onClick={() => onEdit(row)}>
                            <i className="ri-edit-line"></i>
                          </button>
                        )}
                        {onDelete && (
                          <button className={styles.deleteBtn} onClick={() => onDelete(row)}>
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination && totalPages > 1 && (
        <div className={styles.pagination}>
          <span className={styles.info}>
            Hiển thị {(currentPage - 1) * itemsPerPage + 1} -{' '}
            {Math.min(currentPage * itemsPerPage, filteredData.length)} / {filteredData.length}
          </span>
          <div className={styles.pages}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={currentPage === page ? styles.active : ''}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DataTable
