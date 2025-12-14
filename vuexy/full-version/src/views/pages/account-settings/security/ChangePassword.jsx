'use client'

import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { object, string, minLength, pipe, nonEmpty, forward, custom } from 'valibot'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const schema = pipe(
  object({
    currentPassword: pipe(string(), nonEmpty('Vui lòng nhập mật khẩu hiện tại')),
    newPassword: pipe(
      string(),
      nonEmpty('Vui lòng nhập mật khẩu mới'),
      minLength(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    ),
    confirmPassword: pipe(string(), nonEmpty('Vui lòng xác nhận mật khẩu'))
  }),
  forward(
    custom(
      input => input.newPassword === input.confirmPassword,
      'Mật khẩu xác nhận không khớp'
    ),
    ['confirmPassword']
  )
)

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: valibotResolver(schema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  })

  const onSubmit = async data => {
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword
        })
      })

      const result = await res.json()

      if (!res.ok) {
        setMessage({ type: 'error', text: result.message?.[0] || 'Đã xảy ra lỗi' })
        return
      }

      setMessage({ type: 'success', text: 'Đổi mật khẩu thành công' })
      reset()
    } catch (error) {
      setMessage({ type: 'error', text: 'Đã xảy ra lỗi, vui lòng thử lại' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader title='Đổi mật khẩu' />
      <CardContent>
        {message.text && (
          <Alert severity={message.type} sx={{ mb: 3 }}>
            {message.text}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name='currentPassword'
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    fullWidth
                    label='Mật khẩu hiện tại'
                    type={showCurrentPassword ? 'text' : 'password'}
                    error={!!errors.currentPassword}
                    helperText={errors.currentPassword?.message}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            >
                              <i className={showCurrentPassword ? 'tabler-eye-off' : 'tabler-eye'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='newPassword'
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    fullWidth
                    label='Mật khẩu mới'
                    type={showNewPassword ? 'text' : 'password'}
                    error={!!errors.newPassword}
                    helperText={errors.newPassword?.message}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                              <i className={showNewPassword ? 'tabler-eye-off' : 'tabler-eye'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='confirmPassword'
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    fullWidth
                    label='Xác nhận mật khẩu mới'
                    type={showConfirmPassword ? 'text' : 'password'}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              <i className={showConfirmPassword ? 'tabler-eye-off' : 'tabler-eye'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' disabled={loading}>
                {loading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ChangePassword
