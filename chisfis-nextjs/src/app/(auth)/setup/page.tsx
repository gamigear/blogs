'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Field, Label } from '@/shared/fieldset'
import Input from '@/shared/Input'
import Logo from '@/shared/Logo'

export default function SetupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: 'Admin',
    email: 'admin@chisfis.com',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    if (formData.password.length < 6) {
      setMessage({ type: 'error', text: 'Mật khẩu phải có ít nhất 6 ký tự' })
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/admin/create-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setMessage({ type: 'success', text: `${data.message}. Đang chuyển hướng...` })
        setTimeout(() => router.push('/login'), 2000)
      } else {
        setMessage({ type: 'error', text: data.error || 'Tạo admin thất bại' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Tạo admin thất bại' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="my-16 flex justify-center">
        <Logo className="w-32" />
      </div>

      <div className="mx-auto max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Thiết lập ban đầu</h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Tạo tài khoản Admin để quản trị hệ thống
          </p>
        </div>

        {message.text && (
          <div className={`p-3 rounded-lg text-sm ${
            message.type === 'success' 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
              : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
          }`}>
            {message.text}
          </div>
        )}

        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <Field className="block">
            <Label className="text-neutral-800 dark:text-neutral-200">Tên Admin</Label>
            <Input
              type="text"
              className="mt-1"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </Field>
          <Field className="block">
            <Label className="text-neutral-800 dark:text-neutral-200">Email</Label>
            <Input
              type="email"
              className="mt-1"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </Field>
          <Field className="block">
            <Label className="text-neutral-800 dark:text-neutral-200">Mật khẩu</Label>
            <Input
              type="password"
              className="mt-1"
              placeholder="Ít nhất 6 ký tự"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </Field>
          <ButtonPrimary type="submit" disabled={loading}>
            {loading ? 'Đang xử lý...' : 'Tạo tài khoản Admin'}
          </ButtonPrimary>
        </form>

        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          Trang này chỉ nên sử dụng một lần khi thiết lập hệ thống lần đầu
        </p>
      </div>
    </div>
  )
}
