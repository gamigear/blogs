'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminThemeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  toggleDarkMode: () => void;
}

const AdminThemeContext = createContext<AdminThemeContextType | undefined>(undefined);

export function AdminThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false); // Default: light mode

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('admin-dark-mode');
    if (saved !== null) {
      setDarkMode(saved === 'true');
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('admin-dark-mode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <AdminThemeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </AdminThemeContext.Provider>
  );
}

export function useAdminTheme() {
  const context = useContext(AdminThemeContext);
  if (context === undefined) {
    throw new Error('useAdminTheme must be used within an AdminThemeProvider');
  }
  return context;
}
