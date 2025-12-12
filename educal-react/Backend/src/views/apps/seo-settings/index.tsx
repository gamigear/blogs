'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const SeoSettings = () => {
  const [settings, setSettings] = useState({
    metaTitle: 'GameHub - Tổng hợp Mini Game & Khuyến mãi',
    metaDescription:
      'Website tổng hợp các mini game, code game, khuyến mãi từ Shopee, Lazada, TikTok, Facebook, Zalo, MoMo và nhiều nền tảng khác.',
    metaKeywords: 'mini game, code game, khuyến mãi, shopee, lazada, tiktok, momo, zalo',
    ogTitle: 'GameHub - Tổng hợp Mini Game & Khuyến mãi',
    ogDescription: 'Cập nhật nhanh nhất các mini game hot, code game miễn phí và khuyến mãi hấp dẫn.',
    ogImage: '/images/og-image.jpg',
    googleAnalyticsId: 'G-XXXXXXXXXX',
    googleTagManagerId: 'GTM-XXXXXXX',
    facebookPixelId: '',
    robotsTxt: 'User-agent: *\nAllow: /\nSitemap: https://gamehub.vn/sitemap.xml'
  })

  const handleSave = () => {
    console.log('SEO Settings saved:', settings)
  }

  return (
    <Grid container spacing={6}>
      {/* Meta Tags */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Meta Tags' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='Meta Title'
              fullWidth
              value={settings.metaTitle}
              onChange={e => setSettings({ ...settings, metaTitle: e.target.value })}
              helperText='Tiêu đề hiển thị trên kết quả tìm kiếm (50-60 ký tự)'
            />
            <CustomTextField
              label='Meta Description'
              fullWidth
              multiline
              rows={3}
              value={settings.metaDescription}
              onChange={e => setSettings({ ...settings, metaDescription: e.target.value })}
              helperText='Mô tả hiển thị trên kết quả tìm kiếm (150-160 ký tự)'
            />
            <CustomTextField
              label='Meta Keywords'
              fullWidth
              value={settings.metaKeywords}
              onChange={e => setSettings({ ...settings, metaKeywords: e.target.value })}
              helperText='Các từ khóa cách nhau bởi dấu phẩy'
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Open Graph */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Open Graph (Chia sẻ mạng xã hội)' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='OG Title'
              fullWidth
              value={settings.ogTitle}
              onChange={e => setSettings({ ...settings, ogTitle: e.target.value })}
            />
            <CustomTextField
              label='OG Description'
              fullWidth
              multiline
              rows={2}
              value={settings.ogDescription}
              onChange={e => setSettings({ ...settings, ogDescription: e.target.value })}
            />
            <CustomTextField
              label='OG Image URL'
              fullWidth
              value={settings.ogImage}
              onChange={e => setSettings({ ...settings, ogImage: e.target.value })}
              helperText='Kích thước khuyến nghị: 1200x630px'
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Analytics */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Analytics & Tracking' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='Google Analytics ID'
              fullWidth
              placeholder='G-XXXXXXXXXX'
              value={settings.googleAnalyticsId}
              onChange={e => setSettings({ ...settings, googleAnalyticsId: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-brand-google mr-2' />
              }}
            />
            <CustomTextField
              label='Google Tag Manager ID'
              fullWidth
              placeholder='GTM-XXXXXXX'
              value={settings.googleTagManagerId}
              onChange={e => setSettings({ ...settings, googleTagManagerId: e.target.value })}
            />
            <CustomTextField
              label='Facebook Pixel ID'
              fullWidth
              placeholder='XXXXXXXXXXXXXXX'
              value={settings.facebookPixelId}
              onChange={e => setSettings({ ...settings, facebookPixelId: e.target.value })}
              InputProps={{
                startAdornment: <i className='tabler-brand-facebook mr-2' />
              }}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Robots.txt */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader title='Robots.txt' />
          <CardContent className='flex flex-col gap-4'>
            <CustomTextField
              label='Nội dung robots.txt'
              fullWidth
              multiline
              rows={6}
              value={settings.robotsTxt}
              onChange={e => setSettings({ ...settings, robotsTxt: e.target.value })}
            />
            <Typography variant='body2' color='text.secondary'>
              File robots.txt hướng dẫn các bot tìm kiếm cách crawl website của bạn.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* SEO Tips */}
      <Grid size={{ xs: 12 }}>
        <Card>
          <CardHeader title='Gợi ý SEO' />
          <CardContent>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <i className='tabler-circle-check text-success' />
                <Typography>Meta title có độ dài phù hợp (50-60 ký tự)</Typography>
              </div>
              <div className='flex items-center gap-2'>
                <i className='tabler-circle-check text-success' />
                <Typography>Meta description có độ dài phù hợp (150-160 ký tự)</Typography>
              </div>
              <div className='flex items-center gap-2'>
                <i className='tabler-alert-circle text-warning' />
                <Typography>Chưa cấu hình Facebook Pixel</Typography>
              </div>
              <div className='flex items-center gap-2'>
                <i className='tabler-circle-check text-success' />
                <Typography>Đã cấu hình Google Analytics</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Save Button */}
      <Grid size={{ xs: 12 }}>
        <Divider className='my-4' />
        <div className='flex justify-end gap-4'>
          <Button variant='outlined' color='secondary'>
            Hủy thay đổi
          </Button>
          <Button variant='contained' onClick={handleSave}>
            Lưu cài đặt SEO
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default SeoSettings
