"use client"

import { createContext, useContext } from 'react'

interface AdminContextType {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

export const AdminContext = createContext<AdminContextType>({
  sidebarOpen: true,
  setSidebarOpen: () => {},
  darkMode: false,
  setDarkMode: () => {},
})

export const useAdmin = () => useContext(AdminContext)
