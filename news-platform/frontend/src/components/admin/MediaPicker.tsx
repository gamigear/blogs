'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { MediaFile } from '@/types/media';

interface MediaPickerProps {
  onSelect: (file: MediaFile) => void;
  onClose: () => void;
  accept?: string; // 'image/*', 'video/*', etc.
}

export default function MediaPicker({ onSelect, onClose, accept }: MediaPickerProps) {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [convertToWebp, setConvertToWebp] = useState(true);
  const [webpQuality, setWebpQuality] = useState(85);
  const [dragActive, setDragActive] = useState(false);
  const [tab, setTab] = useState<'library' | 'upload'>('library');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const typeFilter = accept?.startsWith('image/') ? 'image/' : 
                     accept?.startsWith('video/') ? 'video/' : '';

  const fetchMedia = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: '18',
      });
      if (typeFilter) params.set('type', typeFilter);

      const res = await fetch(`/api/admin/media?${params}`);
      const data = await res.json();
      setFiles(data.files || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error('Fetch media error:', error);
    } finally {
      setLoading(false);
    }
  }, [page, typeFilter]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  const handleUpload = async (fileList: FileList) => {
    setUploading(true);
    for (const file of Array.from(fileList)) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('convertToWebp', convertToWebp.toString());
      formData.append('quality', webpQuality.toString());
      formData.append('folder', 'media');

      try {
        const res = await fetch('/api/admin/media', { method: 'POST', body: formData });
        const data = await res.json();
        if (data.success && data.file) {
          onSelect(data.file);
          return;
        }
      } catch (error) {
        console.error('Upload error:', error);
      }
    }
    setUploading(false);
    fetchMedia();
    setTab('library');
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleUpload(e.dataTransfer.files);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Chọn Media</h2>
          <button onClick={onClose} className="p-1 hover:bg-slate-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setTab('library')}
            className={`px-4 py-2 text-sm font-medium ${tab === 'library' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-slate-600'}`}
          >
            Thư viện
          </button>
          <button
            onClick={() => setTab('upload')}
            className={`px-4 py-2 text-sm font-medium ${tab === 'upload' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-slate-600'}`}
          >
            Tải lên
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {tab === 'library' ? (
            <>
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
              ) : files.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-slate-500">
                  <p>Chưa có file nào</p>
                  <button
                    onClick={() => setTab('upload')}
                    className="mt-2 text-blue-500 hover:underline"
                  >
                    Tải lên ngay
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {files.map(file => (
                    <div
                      key={file.id}
                      onClick={() => onSelect(file)}
                      className="cursor-pointer border hover:border-blue-500 hover:ring-2 hover:ring-blue-200 transition-all"
                    >
                      <div className="aspect-square bg-slate-100 flex items-center justify-center overflow-hidden">
                        {file.mime_type.startsWith('image/') ? (
                          <img src={file.url} alt={file.alt_text || ''} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-3xl">
                            {file.mime_type.startsWith('video/') ? '🎬' : 
                             file.mime_type.startsWith('audio/') ? '🎵' : '📄'}
                          </span>
                        )}
                      </div>
                      <div className="p-1.5">
                        <p className="text-xs text-slate-600 truncate">{file.original_filename}</p>
                        <p className="text-xs text-slate-400">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-3 py-1 border text-sm disabled:opacity-50"
                  >
                    Trước
                  </button>
                  <span className="px-3 py-1 text-sm">{page} / {totalPages}</span>
                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-3 py-1 border text-sm disabled:opacity-50"
                  >
                    Sau
                  </button>
                </div>
              )}
            </>
          ) : (
            <div>
              {/* Drop Zone */}
              <div
                className={`border-2 border-dashed p-8 text-center mb-4 ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300'}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {uploading ? (
                  <div className="flex flex-col items-center">
                    <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mb-2"></div>
                    <p className="text-slate-600">Đang tải lên...</p>
                  </div>
                ) : (
                  <>
                    <svg className="w-12 h-12 mx-auto text-slate-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-slate-600 mb-2">Kéo thả file vào đây hoặc</p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 bg-blue-500 text-white text-sm font-medium hover:bg-gray-800"
                    >
                      Chọn file
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept={accept || 'image/*,video/*,audio/*,.pdf'}
                      className="hidden"
                      onChange={(e) => e.target.files && handleUpload(e.target.files)}
                    />
                  </>
                )}
              </div>

              {/* WebP Options */}
              <div className="bg-slate-50 p-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={convertToWebp}
                    onChange={(e) => setConvertToWebp(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium">Chuyển đổi JPG/PNG sang WebP</span>
                </label>
                {convertToWebp && (
                  <div className="mt-3 ml-6">
                    <label className="text-sm text-slate-600">Chất lượng: {webpQuality}%</label>
                    <input
                      type="range"
                      min="50"
                      max="100"
                      value={webpQuality}
                      onChange={(e) => setWebpQuality(parseInt(e.target.value))}
                      className="w-full mt-1"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
