'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ImageAdd02Icon } from '@/components/Icons'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import { Field, Label } from '@/shared/fieldset'
import Input from '@/shared/Input'
import Select from '@/shared/Select'
import Textarea from '@/shared/Textarea'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
  avatar?: string
  phone?: string
  address?: string
  bio?: string
  gender?: string
  date_of_birth?: string
  email_verified: boolean
  phone_verified: boolean
  identity_verified: boolean
}

export default function AccountPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    bio: '',
    gender: '',
    date_of_birth: '',
  })
  const [uploadingAvatar, setUploadingAvatar] = useState(false)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const res = await fetch('/api/auth/me')
      const data = await res.json()
      if (data.user) {
        setUser(data.user)
        setFormData({
          name: data.user.name || '',
          phone: data.user.phone || '',
          address: data.user.address || '',
          bio: data.user.bio || '',
          gender: data.user.gender || '',
          date_of_birth: data.user.date_of_birth || '',
        })
      } else {
        router.push('/login')
      }
    } catch {
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    try {
      const res = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setMessage({ type: 'success', text: 'Cập nhật thông tin thành công!' })
        setUser(prev => prev ? { ...prev, ...formData } : null)
      } else {
        setMessage({ type: 'error', text: data.error || 'Cập nhật thất bại' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Cập nhật thất bại' })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-500">Đang tải...</div>
      </div>
    )
  }

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Vui lòng chọn file ảnh' })
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'Kích thước ảnh tối đa 5MB' })
      return
    }

    setUploadingAvatar(true)
    setMessage({ type: '', text: '' })

    try {
      const formData = new FormData()
      formData.append('avatar', file)

      const res = await fetch('/api/auth/avatar', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (data.success) {
        setUser(prev => prev ? { ...prev, avatar: data.url } : null)
        setMessage({ type: 'success', text: 'Cập nhật ảnh đại diện thành công!' })
      } else {
        setMessage({ type: 'error', text: data.error || 'Cập nhật ảnh thất bại' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Cập nhật ảnh thất bại' })
    } finally {
      setUploadingAvatar(false)
    }
  }

  if (!user) return null

  return (
    <div>
      <h1 className="text-3xl font-semibold">Thông tin tài khoản</h1>
      <Divider className="my-8 w-14!" />

      {message.text && (
        <div className={`mb-6 p-3 rounded-lg text-sm ${
          message.type === 'success' 
            ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
            : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
        }`}>
          {message.text}
        </div>
      )}

      {/* Verification Status */}
      <div className="mb-8 p-4 bg-gray-50 dark:bg-neutral-800 rounded-xl">
        <h3 className="font-medium mb-3">Trạng thái xác minh</h3>
        <div className="flex flex-wrap gap-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm ${
            user.email_verified 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
          }`}>
            {user.email_verified ? '✓' : '○'} Email
          </span>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm ${
            user.phone_verified 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
          }`}>
            {user.phone_verified ? '✓' : '○'} Số điện thoại
          </span>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm ${
            user.identity_verified 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
          }`}>
            {user.identity_verified ? '✓' : '○'} Danh tính
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <div className="flex shrink-0 items-start">
          <div className="relative flex overflow-hidden rounded-full">
            {user.avatar ? (
              <Image src={user.avatar} alt={user.name} width={128} height={128} className="h-32 w-32 object-cover rounded-full" />
            ) : (
              <div className="h-32 w-32 bg-gray-200 dark:bg-neutral-700 flex items-center justify-center text-4xl text-gray-400 rounded-full">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className={`absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-black/60 text-neutral-50 rounded-full ${uploadingAvatar ? 'opacity-100' : ''}`}>
              {uploadingAvatar ? (
                <span className="text-xs">Đang tải...</span>
              ) : (
                <>
                  <ImageAdd02Icon className="h-6 w-6" />
                  <span className="mt-1 text-xs">Đổi ảnh</span>
                </>
              )}
            </div>
            <input
              type="file"
              className="absolute inset-0 cursor-pointer opacity-0"
              accept="image/*"
              onChange={handleAvatarChange}
              disabled={uploadingAvatar}
            />
          </div>
        </div>

        <div className="mt-10 max-w-3xl grow space-y-6 md:mt-0 md:ps-16">
          <Field>
            <Label>Họ và tên</Label>
            <Input
              className="mt-1.5"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </Field>

          <Field>
            <Label>Giới tính</Label>
            <Select
              className="mt-1.5"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <option value="">Chọn giới tính</option>
              <option value="Male">Nam</option>
              <option value="Female">Nữ</option>
              <option value="Other">Khác</option>
            </Select>
          </Field>

          <Field>
            <Label>Email</Label>
            <Input className="mt-1.5" value={user.email} disabled />
            <p className="text-xs text-gray-500 mt-1">Email không thể thay đổi</p>
          </Field>

          <Field className="max-w-lg">
            <Label>Ngày sinh</Label>
            <Input
              className="mt-1.5"
              type="date"
              value={formData.date_of_birth}
              onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
            />
          </Field>

          <Field>
            <Label>Địa chỉ</Label>
            <Input
              className="mt-1.5"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </Field>

          <Field>
            <Label>Số điện thoại</Label>
            <Input
              className="mt-1.5"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </Field>

          <Field>
            <Label>Giới thiệu bản thân</Label>
            <Textarea
              className="mt-1.5"
              rows={4}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />
          </Field>

          <div className="pt-4">
            <ButtonPrimary type="submit" disabled={saving}>
              {saving ? 'Đang lưu...' : 'Cập nhật thông tin'}
            </ButtonPrimary>
          </div>
        </div>
      </form>
    </div>
  )
}
