"use client"

import React from 'react'
import styles from './Card.module.scss'

interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
  actions?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ title, children, className, actions }) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      {(title || actions) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default Card
