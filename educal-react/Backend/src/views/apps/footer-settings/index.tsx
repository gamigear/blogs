'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const FooterSettings = () => {
  const [settings, setSettings] = useState({
    companyName: 'GameHub',
    companyDescription: 'Website tổng hợp các mini game, code game, khuyến mãi từ các nền tảng lớn nhất Việt Nam.',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    phone: '0123 456 789',
    email: 'contact@gamehub.vn',
    workingHours: 'Thứ 2 - Thứ 6: 8:00 - 17:00',
    copyrightText: '© 2025 GameHub. All rights reserved.',
    facebookUrl: 'https://facebook.com/gamehub',
    youtubeUrl: 'https://youtube.com/gamehub',
    tiktokUrl: 'https://tiktok.com/@gamehub',
    zaloUrl: 'https://zalo.me/gamehub',
    telegramUrl: ''
  })

  const handleSave = () => {
    console.log('Footer settings saved:', settings)
  }

  return (
    <Grid container spacing={6}>
      {/* Company Info */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Thông tin công ty' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='Tên công ty/Website'
              fullWidth
              value={settings.companyName}
              onChange={e => setSettings({ ...settings, companyName: e.target.value })}
            />
            <CustomTextField
              label='Mô tả ngắn'
              fullWidth
              multiline
              rows={3}
              value={settings.companyDescription}
              onChange={e => setSettings({ ...settings, companyDescription: e.target.value })}
            />
            <CustomTextField
              label='Địa chỉ'
              fullWidth
              value={settings.address}
              onChange={e => setSettings({ ...settings, address: e.target.value })}
            />
            <CustomTextField
              label='Giờ làm việc'
              fullWidth
              value={settings.workingHours}
              onChange={e => setSettings({ ...settings, workingHours: e.target.value })}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Contact Info */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Thông tin liên hệ' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='Số điện thoại'
              fullWidth
              value={settings.phone}
              onChange={e => setSettings({ ...settings, phone: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-phone mr-2' />
              }}
            />
            <CustomTextField
              label='Email'
              fullWidth
              type='email'
              value={settings.email}
              onChange={e => setSettings({ ...settings, email: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-mail mr-2' />
              }}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Social Links */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Liên kết mạng xã hội' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='Facebook'
              fullWidth
              value={settings.facebookUrl}
              onChange={e => setSettings({ ...settings, facebookUrl: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-brand-facebook mr-2 text-blue-600' />
              }}
            />
            <CustomTextField
              label='YouTube'
              fullWidth
              value={settings.youtubeUrl}
              onChange={e => setSettings({ ...settings, youtubeUrl: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-brand-youtube mr-2 text-red-600' />
              }}
            />
            <CustomTextField
              label='TikTok'
              fullWidth
              value={settings.tiktokUrl}
              onChange={e => setSettings({ ...settings, tiktokUrl: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-brand-tiktok mr-2' />
              }}
            />
            <CustomTextField
              label='Zalo'
              fullWidth
              value={settings.zaloUrl}
              onChange={e => setSettings({ ...settings, zaloUrl: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-message-circle mr-2 text-blue-500' />
              }}
            />
            <CustomTextField
              label='Telegram'
              fullWidth
              value={settings.telegramUrl}
              onChange={e => setSettings({ ...settings, telegramUrl: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-brand-telegram mr-2 text-blue-400' />
              }}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Copyright */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Bản quyền' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='Text bản quyền'
              fullWidth
              value={settings.copyrightText}
              onChange={e => setSettings({ ...settings, copyrightText: e.target.value })}
              helperText='Hiển thị ở cuối footer'
            />
          </CardContent>
        </Card>

        {/* Preview */}
        <Card className='mt-6'>
          <CardHeader title='Xem trước Footer' />
          <CardContent>
            <div className='bg-gray-800 text-white p-4 rounded-lg text-sm'>
              <div className='mb-3'>
                <strong>{settings.companyName}</strong>
              </div>
              <div className='text-gray-400 mb-3'>{settings.companyDescription}</div>
              <div className='flex gap-3 mb-3'>
                {settings.facebookUrl && <i className='tabler-brand-facebook' />}
                {settings.youtubeUrl && <i className='tabler-brand-youtube' />}
                {settings.tiktokUrl && <i className='tabler-brand-tiktok' />}
                {settings.zaloUrl && <i className='tabler-message-circle' />}
              </div>
              <Divider sx={{ borderColor: 'gray', my: 2 }} />
              <div className='text-gray-500 text-xs'>{settings.copyrightText}</div>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Save Button */}
      <Grid size={{ xs: 12 }}>
        <div className='flex justify-end gap-4'>
          <Button variant='outlined' color='secondary'>
            Hủy thay đổi
          </Button>
          <Button variant='contained' onClick={handleSave}>
            Lưu cài đặt Footer
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default FooterSettings
