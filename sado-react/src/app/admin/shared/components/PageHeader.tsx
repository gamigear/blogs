"use client"

import React from 'react'
import Link from 'next/link'
import styles from './PageHeader.module.scss'

interface Breadcrumb {
  label: string
  path?: string
}

interface PageHeaderProps {
  title: string
  breadcrumbs?: Breadcrumb[]
  actions?: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, actions }) => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.left}>
        <h1 className={styles.title}>{title}</h1>
        {breadcrumbs && (
          <nav className={styles.breadcrumbs}>
            <Link href="/admin">Dashboard</Link>
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className={styles.separator}>/</span>
                {item.path ? (
                  <Link href={item.path}>{item.label}</Link>
                ) : (
                  <span className={styles.current}>{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  )
}

export default PageHeader
