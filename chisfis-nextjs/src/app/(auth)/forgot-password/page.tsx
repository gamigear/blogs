'use client'

import { useState } from 'react'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Field, Label } from '@/shared/fieldset'
import Input from '@/shared/Input'
import Logo from '@/shared/Logo'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [token, setToken] = useState('')
  const [step, setStep] = useState<'email' | 'reset'>('email')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(data.message)
        // In development, show token for testing
        if (data.token) {
          setToken(data.token)
          setStep('reset')
        }
      } else {
        setError(data.error || 'Yêu cầu thất bại')
      }
    } catch {
      setError('Yêu cầu thất bại')
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (newPassword.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password: newPassword }),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess('Đặt lại mật khẩu thành công! Bạn có thể đăng nhập ngay.')
        setStep('email')
        setEmail('')
        setToken('')
        setNewPassword('')
      } else {
        setError(data.error || 'Đặt lại mật khẩu thất bại')
      }
    } catch {
      setError('Đặt lại mật khẩu thất bại')
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
        <h2 className="text-2xl font-semibold text-center text-neutral-900 dark:text-white">
          {step === 'email' ? 'Quên mật khẩu' : 'Đặt lại mật khẩu'}
        </h2>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-3 rounded-lg text-sm">
            {success}
          </div>
        )}

        {step === 'email' ? (
          <form className="grid grid-cols-1 gap-6" onSubmit={handleRequestReset}>
            <Field className="block">
              <Label className="text-neutral-800 dark:text-neutral-200">Email</Label>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
            <ButtonPrimary type="submit" disabled={loading}>
              {loading ? 'Đang xử lý...' : 'Gửi yêu cầu'}
            </ButtonPrimary>
          </form>
        ) : (
          <form className="grid grid-cols-1 gap-6" onSubmit={handleResetPassword}>
            <Field className="block">
              <Label className="text-neutral-800 dark:text-neutral-200">Mật khẩu mới</Label>
              <Input
                type="password"
                placeholder="Ít nhất 6 ký tự"
                className="mt-1"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </Field>
            <ButtonPrimary type="submit" disabled={loading}>
              {loading ? 'Đang xử lý...' : 'Đặt lại mật khẩu'}
            </ButtonPrimary>
          </form>
        )}

        <div className="block text-center text-sm text-neutral-700 dark:text-neutral-300">
          <Link href="/login" className="font-medium underline">
            Quay lại đăng nhập
          </Link>
          {' | '}
          <Link href="/signup" className="font-medium underline">
            Đăng ký tài khoản
          </Link>
        </div>
      </div>
    </div>
  )
}
