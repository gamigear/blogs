"use client"

import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './shared/redux/store'
import { AdminContext } from './shared/context'
import Sidebar from './shared/components/Sidebar'
import Header from './shared/components/Header'
import './globals.scss'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedDarkMode = localStorage.getItem('adminDarkMode')
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('adminDarkMode', JSON.stringify(darkMode))
      if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
      }
    }
  }, [darkMode, mounted])

  if (!mounted) {
    return null
  }

  return (
    <Provider store={store}>
      <AdminContext.Provider value={{ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }}>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet" />
        <div className={`admin-wrapper ${darkMode ? 'dark-mode' : ''}`}>
          <Sidebar />
          <div className={`admin-main ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
            <Header />
            <main className="admin-content">
              {children}
            </main>
          </div>
        </div>
      </AdminContext.Provider>
    </Provider>
  )
}

export default AdminLayout
