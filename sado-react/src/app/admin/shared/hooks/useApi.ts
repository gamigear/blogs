"use client"

import { useState, useCallback } from 'react'

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void
  onError?: (error: string) => void
}

export function useApi<T = unknown>() {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const request = useCallback(async (
    url: string,
    options?: RequestInit,
    callbacks?: UseApiOptions<T>
  ) => {
    setLoading(true)
    setError(null)
    
    // Ensure trailing slash for API routes
    const apiUrl = url.endsWith('/') ? url : `${url}/`
    
    try {
      const res = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      })
      
      const json = await res.json()
      
      if (!res.ok) {
        throw new Error(json.error || 'Request failed')
      }
      
      setData(json)
      callbacks?.onSuccess?.(json)
      return json
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      setError(message)
      callbacks?.onError?.(message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const get = useCallback((url: string, callbacks?: UseApiOptions<T>) => 
    request(url, { method: 'GET' }, callbacks), [request])

  const post = useCallback((url: string, body: unknown, callbacks?: UseApiOptions<T>) => 
    request(url, { method: 'POST', body: JSON.stringify(body) }, callbacks), [request])

  const put = useCallback((url: string, body: unknown, callbacks?: UseApiOptions<T>) => 
    request(url, { method: 'PUT', body: JSON.stringify(body) }, callbacks), [request])

  const del = useCallback((url: string, callbacks?: UseApiOptions<T>) => 
    request(url, { method: 'DELETE' }, callbacks), [request])

  return { data, loading, error, get, post, put, del, setData }
}

export default useApi
