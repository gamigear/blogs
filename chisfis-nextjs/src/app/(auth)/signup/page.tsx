'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Field, Label } from '@/shared/fieldset'
import Input from '@/shared/Input'
import Logo from '@/shared/Logo'
import Link from 'next/link'

const socials = [
  {
    name: 'Tiếp tục với Facebook',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Tiếp tục với Google',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
]

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp')
      return
    }

    if (password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(data.message || 'Đăng ký thành công!')
        setTimeout(() => router.push('/account'), 2000)
      } else {
        setError(data.error || 'Đăng ký thất bại')
      }
    } catch {
      setError('Đăng ký thất bại')
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
        <h2 className="text-2xl font-semibold text-center text-neutral-900 dark:text-white">Đăng ký tài khoản</h2>

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

        <div className="grid gap-3">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex w-full rounded-lg bg-primary-50 px-4 py-3 transition-transform hover:translate-y-0.5 dark:bg-neutral-800"
            >
              <item.icon className="size-5 shrink-0" />
              <h3 className="grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300">{item.name}</h3>
            </Link>
          ))}
        </div>

        <div className="relative text-center">
          <span className="relative z-10 inline-block bg-white px-4 text-sm font-medium dark:bg-neutral-900 dark:text-neutral-400">
            HOẶC
          </span>
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 transform border border-neutral-100 dark:border-neutral-800"></div>
        </div>

        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <Field className="block">
            <Label className="text-neutral-800 dark:text-neutral-200">Họ và tên</Label>
            <Input
              type="text"
              placeholder="Nguyễn Văn A"
              className="mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Field>
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
          <Field className="block">
            <Label className="text-neutral-800 dark:text-neutral-200">Mật khẩu</Label>
            <Input
              type="password"
              className="mt-1"
              placeholder="Ít nhất 6 ký tự"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Field>
          <Field className="block">
            <Label className="text-neutral-800 dark:text-neutral-200">Xác nhận mật khẩu</Label>
            <Input
              type="password"
              className="mt-1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Field>
          <ButtonPrimary type="submit" disabled={loading}>
            {loading ? 'Đang xử lý...' : 'Đăng ký'}
          </ButtonPrimary>
        </form>

        <div className="block text-center text-sm text-neutral-700 dark:text-neutral-300">
          Đã có tài khoản?{' '}
          <Link href="/login" className="font-medium underline">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  )
}
