'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

type MediaItem = {
  id: number
  name: string
  url: string
  type: 'image' | 'video' | 'document'
  size: string
  uploadedAt: string
}

const mockMedia: MediaItem[] = [
  { id: 1, name: 'banner-1.jpg', url: '/images/banners/banner-1.jpg', type: 'image', size: '245 KB', uploadedAt: '2025-12-10' },
  { id: 2, name: 'course-1.jpg', url: '/images/courses/course-1.jpg', type: 'image', size: '180 KB', uploadedAt: '2025-12-09' },
  { id: 3, name: 'blog-1.jpg', url: '/images/blogs/blog-1.jpg', type: 'image', size: '156 KB', uploadedAt: '2025-12-08' },
  { id: 4, name: 'avatar-1.png', url: '/images/avatars/1.png', type: 'image', size: '45 KB', uploadedAt: '2025-12-07' },
  { id: 5, name: 'event-1.jpg', url: '/images/events/event-1.jpg', type: 'image', size: '320 KB', uploadedAt: '2025-12-06' },
  { id: 6, name: 'product-1.png', url: '/images/products/product-1.png', type: 'image', size: '89 KB', uploadedAt: '2025-12-05' },
]

const MediaLibrary = () => {
  const [media, setMedia] = useState(mockMedia)
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
  const [detailDialogOpen, setDetailDialogOpen] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [tabValue, setTabValue] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSelect = (id: number) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    if (selectedItems.length === media.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(media.map(m => m.id))
    }
  }

  const handleDelete = () => {
    setMedia(media.filter(m => !selectedItems.includes(m.id)))
    setSelectedItems([])
  }

  const handleViewDetail = (item: MediaItem) => {
    setSelectedMedia(item)
    setDetailDialogOpen(true)
  }

  const filteredMedia = media.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <Typography variant='h4'>Thư viện Media</Typography>
        <div className='flex gap-2'>
          {selectedItems.length > 0 && (
            <Button variant='outlined' color='error' startIcon={<i className='tabler-trash' />} onClick={handleDelete}>
              Xóa ({selectedItems.length})
            </Button>
          )}
          <Button variant='contained' startIcon={<i className='tabler-upload' />} onClick={() => setUploadDialogOpen(true)}>
            Upload
          </Button>
        </div>
      </div>

      <Card className='mb-6'>
        <CardContent>
          <div className='flex items-center justify-between gap-4'>
            <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)}>
              <Tab label='Tất cả' />
              <Tab label='Hình ảnh' />
              <Tab label='Video' />
              <Tab label='Tài liệu' />
            </Tabs>
            <TextField
              size='small'
              placeholder='Tìm kiếm...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <i className='tabler-search' />
                  </InputAdornment>
                )
              }}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className='flex items-center gap-2 mb-4'>
            <Checkbox
              checked={selectedItems.length === media.length && media.length > 0}
              indeterminate={selectedItems.length > 0 && selectedItems.length < media.length}
              onChange={handleSelectAll}
            />
            <Typography variant='body2'>
              {selectedItems.length > 0 ? `Đã chọn ${selectedItems.length} file` : 'Chọn tất cả'}
            </Typography>
          </div>

          <Grid container spacing={4}>
            {filteredMedia.map(item => (
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={item.id}>
                <Card
                  variant='outlined'
                  sx={{
                    cursor: 'pointer',
                    border: selectedItems.includes(item.id) ? '2px solid' : '1px solid',
                    borderColor: selectedItems.includes(item.id) ? 'primary.main' : 'divider'
                  }}
                >
                  <div className='relative'>
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelect(item.id)}
                      sx={{ position: 'absolute', top: 4, left: 4, zIndex: 1 }}
                    />
                    <div
                      className='aspect-square bg-gray-100 flex items-center justify-center overflow-hidden'
                      onClick={() => handleViewDetail(item)}
                    >
                      {item.type === 'image' ? (
                        <img src={item.url} alt={item.name} className='w-full h-full object-cover' />
                      ) : (
                        <i className={`tabler-${item.type === 'video' ? 'video' : 'file'} text-4xl text-gray-400`} />
                      )}
                    </div>
                  </div>
                  <CardContent className='p-2'>
                    <Typography variant='body2' className='truncate' title={item.name}>
                      {item.name}
                    </Typography>
                    <Typography variant='caption' color='text.secondary'>
                      {item.size}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Upload Dialog */}
      <Dialog open={uploadDialogOpen} onClose={() => setUploadDialogOpen(false)} maxWidth='sm' fullWidth>
        <DialogTitle>Upload Media</DialogTitle>
        <DialogContent>
          <div className='border-2 border-dashed border-gray-300 rounded-lg p-12 text-center'>
            <i className='tabler-cloud-upload text-6xl text-gray-400 mb-4' />
            <Typography variant='h6' className='mb-2'>Kéo thả file vào đây</Typography>
            <Typography variant='body2' color='text.secondary' className='mb-4'>
              hoặc click để chọn file
            </Typography>
            <Button variant='outlined'>Chọn file</Button>
            <Typography variant='caption' display='block' color='text.secondary' className='mt-4'>
              Hỗ trợ: JPG, PNG, GIF, MP4, PDF (tối đa 10MB)
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setUploadDialogOpen(false)}>Đóng</Button>
        </DialogActions>
      </Dialog>

      {/* Detail Dialog */}
      <Dialog open={detailDialogOpen} onClose={() => setDetailDialogOpen(false)} maxWidth='md' fullWidth>
        {selectedMedia && (
          <>
            <DialogTitle>
              <div className='flex items-center justify-between'>
                <span>{selectedMedia.name}</span>
                <IconButton onClick={() => setDetailDialogOpen(false)}>
                  <i className='tabler-x' />
                </IconButton>
              </div>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 8 }}>
                  <div className='bg-gray-100 rounded-lg overflow-hidden'>
                    <img src={selectedMedia.url} alt={selectedMedia.name} className='w-full' />
                  </div>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant='subtitle2' className='mb-1'>Tên file</Typography>
                  <Typography variant='body2' className='mb-3'>{selectedMedia.name}</Typography>
                  
                  <Typography variant='subtitle2' className='mb-1'>Kích thước</Typography>
                  <Typography variant='body2' className='mb-3'>{selectedMedia.size}</Typography>
                  
                  <Typography variant='subtitle2' className='mb-1'>Ngày upload</Typography>
                  <Typography variant='body2' className='mb-3'>{selectedMedia.uploadedAt}</Typography>
                  
                  <Typography variant='subtitle2' className='mb-1'>URL</Typography>
                  <TextField
                    size='small'
                    fullWidth
                    value={selectedMedia.url}
                    InputProps={{
                      readOnly: true,
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton size='small'>
                            <i className='tabler-copy' />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button color='error' startIcon={<i className='tabler-trash' />}>Xóa</Button>
              <Button variant='contained' startIcon={<i className='tabler-download' />}>Tải xuống</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  )
}

export default MediaLibrary
