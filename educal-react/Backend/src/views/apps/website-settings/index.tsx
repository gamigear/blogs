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
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const WebsiteSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'GameHub - Tổng hợp Mini Game',
    siteDescription: 'Website tổng hợp các mini game, khuyến mãi từ các nền tảng lớn',
    contactEmail: 'contact@gamehub.vn',
    contactPhone: '0123 456 789',
    facebookUrl: 'https://facebook.com/gamehub',
    youtubeUrl: 'https://youtube.com/gamehub',
    tiktokUrl: 'https://tiktok.com/@gamehub',
    enableNotifications: true,
    enableComments: true,
    maintenanceMode: false
  })

  const handleSave = () => {
    console.log('Settings saved:', settings)
    // TODO: Call API to save settings
  }

  return (
    <Grid container spacing={6}>
      {/* General Settings */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Cài đặt chung' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='Tên website'
              fullWidth
              value={settings.siteName}
              onChange={e => setSettings({ ...settings, siteName: e.target.value })}
            />
            <CustomTextField
              label='Mô tả website'
              fullWidth
              multiline
              rows={3}
              value={settings.siteDescription}
              onChange={e => setSettings({ ...settings, siteDescription: e.target.value })}
            />
            <Divider />
            <FormControlLabel
              control={
                <Switch
                  checked={settings.maintenanceMode}
                  onChange={e => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                />
              }
              label='Chế độ bảo trì'
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Contact Settings */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Thông tin liên hệ' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='Email liên hệ'
              fullWidth
              type='email'
              value={settings.contactEmail}
              onChange={e => setSettings({ ...settings, contactEmail: e.target.value })}
            />
            <CustomTextField
              label='Số điện thoại'
              fullWidth
              value={settings.contactPhone}
              onChange={e => setSettings({ ...settings, contactPhone: e.target.value })}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Social Media */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Mạng xã hội' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='Facebook URL'
              fullWidth
              value={settings.facebookUrl}
              onChange={e => setSettings({ ...settings, facebookUrl: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-brand-facebook mr-2 text-blue-600' />
              }}
            />
            <CustomTextField
              label='YouTube URL'
              fullWidth
              value={settings.youtubeUrl}
              onChange={e => setSettings({ ...settings, youtubeUrl: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-brand-youtube mr-2 text-red-600' />
              }}
            />
            <CustomTextField
              label='TikTok URL'
              fullWidth
              value={settings.tiktokUrl}
              onChange={e => setSettings({ ...settings, tiktokUrl: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-brand-tiktok mr-2' />
              }}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Feature Settings */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Tính năng' />
          <CardContent className='flex flex-col gap-4'>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.enableNotifications}
                  onChange={e => setSettings({ ...settings, enableNotifications: e.target.checked })}
                />
              }
              label='Bật thông báo push'
            />
            <FormControlLabel
              control={
                <Switch
                  checked={settings.enableComments}
                  onChange={e => setSettings({ ...settings, enableComments: e.target.checked })}
                />
              }
              label='Cho phép bình luận'
            />
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
            Lưu cài đặt
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default WebsiteSettings
