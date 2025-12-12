'use client'

import { useState } from 'react'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import { Field, Label } from '@/shared/fieldset'
import Input from '@/shared/Input'

export default function AccountPasswordPage() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'Mật khẩu xác nhận không khớp' })
      return
    }

    if (newPassword.length < 6) {
      setMessage({ type: 'error', text: 'Mật khẩu mới phải có ít nhất 6 ký tự' })
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldPassword, newPassword }),
      })

      const data = await res.json()

      if (data.success) {
        setMessage({ type: 'success', text: 'Đổi mật khẩu thành công!' })
        setOldPassword('')
        setNewPassword('')
        setConfirmPassword('')
      } else {
        setMessage({ type: 'error', text: data.error || 'Đổi mật khẩu thất bại' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Đổi mật khẩu thất bại' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">Đổi mật khẩu</h1>
      <Divider className="my-8 w-14!" />

      {message.text && (
        <div className={`mb-6 p-3 rounded-lg text-sm max-w-xl ${
          message.type === 'success' 
            ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
            : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
        <Field>
          <Label>Mật khẩu hiện tại</Label>
          <Input
            type="password"
            className="mt-1.5"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </Field>
        <Field>
          <Label>Mật khẩu mới</Label>
          <Input
            type="password"
            className="mt-1.5"
            placeholder="Ít nhất 6 ký tự"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </Field>
        <Field>
          <Label>Xác nhận mật khẩu mới</Label>
          <Input
            type="password"
            className="mt-1.5"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Field>
        <div className="pt-4">
          <ButtonPrimary type="submit" disabled={loading}>
            {loading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
          </ButtonPrimary>
        </div>
      </form>
    </div>
  )
}
