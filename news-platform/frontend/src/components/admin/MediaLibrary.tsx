'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { MediaFile } from '@/types/media';

interface MediaLibraryProps {
  onSelect?: (file: MediaFile) => void;
  selectable?: boolean;
  multiple?: boolean;
}

export default function MediaLibrary({ onSelect, selectable = false, multiple = false }: MediaLibraryProps) {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [folders, setFolders] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentFolder, setCurrentFolder] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [detailFile, setDetailFile] = useState<MediaFile | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [convertToWebp, setConvertToWebp] = useState(true);
  const [webpQuality, setWebpQuality] = useState(85);
  const [dragActive, setDragActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newFolderName, setNewFolderName] = useState('');
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);
  const [showMoveModal, setShowMoveModal] = useState(false);
  const [selectMode, setSelectMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchMedia = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: '24',
      });
      if (currentFolder) params.set('folder', currentFolder);
      if (typeFilter) params.set('type', typeFilter);
      if (searchQuery) params.set('search', searchQuery);

      const res = await fetch(`/api/admin/media?${params}`);
      const data = await res.json();
      setFiles(data.files || []);
      setFolders(data.folders || []);
      setTotalPages(data.totalPages || 1);
      setTotal(data.total || 0);
    } catch (error) {
      console.error('Fetch media error:', error);
    } finally {
      setLoading(false);
    }
  }, [page, currentFolder, typeFilter, searchQuery]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  const handleUpload = async (fileList: FileList) => {
    setUploading(true);
    setUploadProgress(0);
    const totalFiles = fileList.length;
    let uploaded = 0;

    for (const file of Array.from(fileList)) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('convertToWebp', convertToWebp.toString());
      formData.append('quality', webpQuality.toString());
      formData.append('folder', currentFolder || 'media');

      try {
        await fetch('/api/admin/media', { method: 'POST', body: formData });
        uploaded++;
        setUploadProgress(Math.round((uploaded / totalFiles) * 100));
      } catch (error) {
        console.error('Upload error:', error);
      }
    }

    setUploading(false);
    setShowUploadModal(false);
    fetchMedia();
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

  const handleDelete = async () => {
    if (selectedFiles.length === 0) return;
    if (!confirm(`Xóa ${selectedFiles.length} file đã chọn?`)) return;

    try {
      await fetch('/api/admin/media', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedFiles }),
      });
      setSelectedFiles([]);
      setSelectMode(false);
      fetchMedia();
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleMoveToFolder = async (targetFolder: string) => {
    if (selectedFiles.length === 0) return;

    try {
      await fetch('/api/admin/media/move', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedFiles, folder: targetFolder }),
      });
      setSelectedFiles([]);
      setSelectMode(false);
      setShowMoveModal(false);
      fetchMedia();
    } catch (error) {
      console.error('Move error:', error);
    }
  };

  const selectAll = () => {
    if (selectedFiles.length === files.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(files.map(f => f.id));
    }
  };

  const toggleSelect = (id: number) => {
    // Khi ở selectMode hoặc multiple mode, cho phép chọn nhiều
    if (selectMode || multiple) {
      setSelectedFiles(prev => 
        prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
      );
    } else {
      setSelectedFiles(prev => prev.includes(id) ? [] : [id]);
    }
  };

  const handleSelectFile = (file: MediaFile) => {
    if (selectable && onSelect) {
      onSelect(file);
    } else {
      setDetailFile(file);
    }
  };

  const updateFileMetadata = async (id: number, data: { alt_text?: string; caption?: string }) => {
    try {
      const res = await fetch(`/api/admin/media/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const updated = await res.json();
      setFiles(prev => prev.map(f => f.id === id ? updated : f));
      setDetailFile(updated);
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType.startsWith('image/')) return '🖼️';
    if (mimeType.startsWith('video/')) return '🎬';
    if (mimeType.startsWith('audio/')) return '🎵';
    if (mimeType === 'application/pdf') return '📄';
    return '📁';
  };

  const isImage = (mimeType: string) => mimeType.startsWith('image/');

  return (
    <div className="bg-white min-h-[600px]">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 border-b bg-slate-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowUploadModal(true)}
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium hover:bg-gray-800 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Tải lên
          </button>
          {showNewFolderInput ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                placeholder="ten-thu-muc"
                className="px-3 py-2 border text-sm w-40"
                autoFocus
              />
              <button
                onClick={() => {
                  if (newFolderName) {
                    setCurrentFolder(newFolderName);
                    setFolders(prev => prev.includes(newFolderName) ? prev : [...prev, newFolderName]);
                  }
                  setShowNewFolderInput(false);
                  setNewFolderName('');
                }}
                className="px-3 py-2 bg-green-500 text-white text-sm hover:bg-green-600"
              >
                OK
              </button>
              <button
                onClick={() => { setShowNewFolderInput(false); setNewFolderName(''); }}
                className="px-3 py-2 border text-sm hover:bg-slate-100"
              >
                Hủy
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowNewFolderInput(true)}
              className="px-4 py-2 border text-sm font-medium hover:bg-slate-100 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Thư mục mới
            </button>
          )}
          {/* Select Mode Toggle */}
          <button
            onClick={() => { setSelectMode(!selectMode); if (selectMode) setSelectedFiles([]); }}
            className={`px-4 py-2 border text-sm font-medium flex items-center gap-2 ${selectMode ? 'bg-blue-100 border-blue-500 text-blue-700' : 'hover:bg-slate-100'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            {selectMode ? 'Hủy chọn' : 'Chọn nhiều'}
          </button>
          {selectMode && (
            <>
              <button
                onClick={selectAll}
                className="px-3 py-2 border text-sm hover:bg-slate-100"
              >
                {selectedFiles.length === files.length ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
              </button>
              {selectedFiles.length > 0 && (
                <>
                  <button
                    onClick={() => setShowMoveModal(true)}
                    className="px-4 py-2 bg-green-500 text-white text-sm font-medium hover:bg-green-600 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    Di chuyển ({selectedFiles.length})
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-500 text-white text-sm font-medium hover:bg-red-600 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Xóa ({selectedFiles.length})
                  </button>
                </>
              )}
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
              placeholder="Tìm kiếm..."
              className="pl-9 pr-3 py-2 border text-sm bg-white w-48"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select
            value={currentFolder}
            onChange={(e) => { setCurrentFolder(e.target.value); setPage(1); }}
            className="px-3 py-2 border text-sm bg-white"
          >
            <option value="">Tất cả thư mục</option>
            {folders.map(f => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          <select
            value={typeFilter}
            onChange={(e) => { setTypeFilter(e.target.value); setPage(1); }}
            className="px-3 py-2 border text-sm bg-white"
          >
            <option value="">Tất cả loại</option>
            <option value="image/">Hình ảnh</option>
            <option value="video/">Video</option>
            <option value="audio/">Audio</option>
            <option value="application/pdf">PDF</option>
          </select>
          <div className="flex border">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-slate-200' : 'hover:bg-slate-100'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-slate-200' : 'hover:bg-slate-100'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex">
        {/* File Grid/List */}
        <div className={`flex-1 p-4 ${detailFile ? 'border-r' : ''}`}>
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          ) : files.length === 0 ? (
            <div 
              className={`flex flex-col items-center justify-center h-64 border-2 border-dashed ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300'}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <svg className="w-16 h-16 text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-slate-500">Chưa có file nào. Kéo thả hoặc click để tải lên.</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div 
              className={`flex flex-wrap gap-3 ${dragActive ? 'opacity-50' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {files.map(file => (
                <div
                  key={file.id}
                  className={`relative group cursor-pointer border bg-white ${selectedFiles.includes(file.id) ? 'ring-2 ring-blue-500' : 'hover:border-blue-400'}`}
                  style={{ width: 130 }}
                  onClick={() => handleSelectFile(file)}
                >
                  <div className="w-[128px] h-[128px] bg-slate-50 flex items-center justify-center overflow-hidden">
                    {isImage(file.mime_type) ? (
                      <img 
                        src={file.thumbnail_url || file.url} 
                        alt={file.alt_text || file.filename} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="text-4xl">{getFileIcon(file.mime_type)}</span>
                    )}
                  </div>
                  <div className="p-1.5">
                    <p className="text-xs text-slate-700 truncate" title={file.original_filename}>{file.original_filename}</p>
                    <p className="text-[10px] text-slate-400">{formatFileSize(file.size)}</p>
                  </div>
                  {/* Checkbox */}
                  <div 
                    className={`absolute top-1.5 left-1.5 ${selectMode || selectedFiles.includes(file.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    onClick={(e) => { e.stopPropagation(); toggleSelect(file.id); }}
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shadow-sm ${selectedFiles.includes(file.id) ? 'bg-blue-500 border-blue-500' : 'bg-white border-slate-300'}`}>
                      {selectedFiles.includes(file.id) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="w-8 p-3"></th>
                  <th className="text-left p-3 text-sm font-medium text-slate-600">File</th>
                  <th className="text-left p-3 text-sm font-medium text-slate-600">Loại</th>
                  <th className="text-left p-3 text-sm font-medium text-slate-600">Kích thước</th>
                  <th className="text-left p-3 text-sm font-medium text-slate-600">Ngày tải</th>
                </tr>
              </thead>
              <tbody>
                {files.map(file => (
                  <tr 
                    key={file.id} 
                    className={`border-b hover:bg-slate-50 cursor-pointer ${selectedFiles.includes(file.id) ? 'bg-blue-50' : ''}`}
                    onClick={() => handleSelectFile(file)}
                  >
                    <td className="p-3" onClick={(e) => { e.stopPropagation(); toggleSelect(file.id); }}>
                      <div className={`w-5 h-5 border-2 flex items-center justify-center ${selectedFiles.includes(file.id) ? 'bg-blue-500 border-blue-500' : 'border-slate-300'}`}>
                        {selectedFiles.includes(file.id) && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 flex items-center justify-center overflow-hidden">
                          {isImage(file.mime_type) ? (
                            <img 
                              src={file.thumbnail_url || file.url} 
                              alt="" 
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <span className="text-lg">{getFileIcon(file.mime_type)}</span>
                          )}
                        </div>
                        <span className="text-sm">{file.original_filename}</span>
                      </div>
                    </td>
                    <td className="p-3 text-sm text-slate-600">{file.mime_type}</td>
                    <td className="p-3 text-sm text-slate-600">{formatFileSize(file.size)}</td>
                    <td className="p-3 text-sm text-slate-600">{new Date(file.created_at).toLocaleDateString('vi-VN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <p className="text-sm text-slate-600">Tổng: {total} files</p>
              <div className="flex gap-1">
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
            </div>
          )}
        </div>

        {/* Detail Panel */}
        {detailFile && (
          <DetailPanel 
            file={detailFile} 
            onClose={() => setDetailFile(null)}
            onUpdate={updateFileMetadata}
            formatFileSize={formatFileSize}
          />
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal
          onClose={() => setShowUploadModal(false)}
          onUpload={handleUpload}
          uploading={uploading}
          uploadProgress={uploadProgress}
          convertToWebp={convertToWebp}
          setConvertToWebp={setConvertToWebp}
          webpQuality={webpQuality}
          setWebpQuality={setWebpQuality}
          fileInputRef={fileInputRef}
        />
      )}

      {/* Move to Folder Modal */}
      {showMoveModal && (
        <MoveToFolderModal
          folders={folders}
          selectedCount={selectedFiles.length}
          onMove={handleMoveToFolder}
          onClose={() => setShowMoveModal(false)}
        />
      )}
    </div>
  );
}


// Detail Panel Component
function DetailPanel({ 
  file, 
  onClose, 
  onUpdate,
  formatFileSize 
}: { 
  file: MediaFile; 
  onClose: () => void;
  onUpdate: (id: number, data: { alt_text?: string; caption?: string }) => void;
  formatFileSize: (bytes: number) => string;
}) {
  const [altText, setAltText] = useState(file.alt_text || '');
  const [caption, setCaption] = useState(file.caption || '');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setAltText(file.alt_text || '');
    setCaption(file.caption || '');
  }, [file]);

  const copyUrl = () => {
    navigator.clipboard.writeText(file.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    onUpdate(file.id, { alt_text: altText, caption });
  };

  return (
    <div className="w-80 p-4 bg-slate-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Chi tiết file</h3>
        <button onClick={onClose} className="p-1 hover:bg-slate-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Preview */}
      <div className="mb-4 bg-white border">
        {file.mime_type.startsWith('image/') ? (
          <img src={file.url} alt={file.alt_text || ''} className="w-full" />
        ) : file.mime_type.startsWith('video/') ? (
          <video src={file.url} controls className="w-full" />
        ) : file.mime_type.startsWith('audio/') ? (
          <audio src={file.url} controls className="w-full p-4" />
        ) : (
          <div className="h-32 flex items-center justify-center text-4xl">📄</div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-3 text-sm">
        <div>
          <label className="text-slate-500">Tên file</label>
          <p className="font-medium break-all">{file.original_filename}</p>
        </div>
        <div>
          <label className="text-slate-500">Loại</label>
          <p>{file.mime_type}</p>
        </div>
        <div className="flex gap-4">
          <div>
            <label className="text-slate-500">Kích thước</label>
            <p>{formatFileSize(file.size)}</p>
          </div>
          {file.width && file.height && (
            <div>
              <label className="text-slate-500">Kích thước ảnh</label>
              <p>{file.width} × {file.height}</p>
            </div>
          )}
        </div>
        <div>
          <label className="text-slate-500">Ngày tải lên</label>
          <p>{new Date(file.created_at).toLocaleString('vi-VN')}</p>
        </div>
        {file.uploaded_by_name && (
          <div>
            <label className="text-slate-500">Người tải</label>
            <p>{file.uploaded_by_name}</p>
          </div>
        )}

        {/* URL */}
        <div>
          <label className="text-slate-500">URL</label>
          <div className="flex gap-2 mt-1">
            <input 
              type="text" 
              value={file.url} 
              readOnly 
              className="flex-1 px-2 py-1 border text-xs bg-white"
            />
            <button 
              onClick={copyUrl}
              className="px-2 py-1 border hover:bg-slate-100 text-xs"
            >
              {copied ? '✓' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Alt Text */}
        <div>
          <label className="text-slate-500">Alt Text</label>
          <input
            type="text"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            className="w-full px-2 py-1 border mt-1"
            placeholder="Mô tả hình ảnh..."
          />
        </div>

        {/* Caption */}
        <div>
          <label className="text-slate-500">Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full px-2 py-1 border mt-1 resize-none"
            rows={2}
            placeholder="Chú thích..."
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full py-2 bg-blue-500 text-white text-sm font-medium hover:bg-gray-800"
        >
          Lưu thay đổi
        </button>
      </div>
    </div>
  );
}

// Upload Modal Component
function UploadModal({
  onClose,
  onUpload,
  uploading,
  uploadProgress,
  convertToWebp,
  setConvertToWebp,
  webpQuality,
  setWebpQuality,
  fileInputRef,
}: {
  onClose: () => void;
  onUpload: (files: FileList) => void;
  uploading: boolean;
  uploadProgress: number;
  convertToWebp: boolean;
  setConvertToWebp: (v: boolean) => void;
  webpQuality: number;
  setWebpQuality: (v: number) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}) {
  const [dragActive, setDragActive] = useState(false);

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
      onUpload(e.dataTransfer.files);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg mx-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Tải lên Media</h2>
          <button onClick={onClose} className="p-1 hover:bg-slate-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          {/* Drop Zone */}
          <div
            className={`border-2 border-dashed p-8 text-center mb-4 ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300'}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
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
              multiple
              accept="image/*,video/*,audio/*,.pdf"
              className="hidden"
              onChange={(e) => e.target.files && onUpload(e.target.files)}
            />
            <p className="text-xs text-slate-400 mt-2">Hỗ trợ: JPG, PNG, WebP, GIF, MP4, PDF (tối đa 50MB)</p>
          </div>

          {/* WebP Conversion Options */}
          <div className="bg-slate-50 p-4 mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={convertToWebp}
                onChange={(e) => setConvertToWebp(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm font-medium">Chuyển đổi JPG/PNG sang WebP</span>
            </label>
            <p className="text-xs text-slate-500 mt-1 ml-6">WebP giúp giảm dung lượng file đáng kể mà vẫn giữ chất lượng</p>
            
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
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Nhỏ hơn</span>
                  <span>Chất lượng cao</span>
                </div>
              </div>
            )}
          </div>

          {/* Upload Progress */}
          {uploading && (
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Đang tải lên...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="h-2 bg-slate-200">
                <div 
                  className="h-full bg-blue-500 transition-all"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Move to Folder Modal Component
function MoveToFolderModal({
  folders,
  selectedCount,
  onMove,
  onClose,
}: {
  folders: string[];
  selectedCount: number;
  onMove: (folder: string) => void;
  onClose: () => void;
}) {
  const [selectedFolder, setSelectedFolder] = useState('');
  const [newFolder, setNewFolder] = useState('');
  const [isNewFolder, setIsNewFolder] = useState(false);

  const handleMove = () => {
    const targetFolder = isNewFolder ? newFolder : selectedFolder;
    if (!targetFolder) return;
    onMove(targetFolder);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Di chuyển {selectedCount} file</h2>
          <button onClick={onClose} className="p-1 hover:bg-slate-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Existing Folders */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="folderType"
                checked={!isNewFolder}
                onChange={() => setIsNewFolder(false)}
              />
              <span className="text-sm font-medium">Chọn thư mục có sẵn</span>
            </label>
            <select
              value={selectedFolder}
              onChange={(e) => setSelectedFolder(e.target.value)}
              disabled={isNewFolder}
              className="w-full px-3 py-2 border text-sm bg-white disabled:opacity-50"
            >
              <option value="">-- Chọn thư mục --</option>
              {folders.map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* New Folder */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="folderType"
                checked={isNewFolder}
                onChange={() => setIsNewFolder(true)}
              />
              <span className="text-sm font-medium">Tạo thư mục mới</span>
            </label>
            <input
              type="text"
              value={newFolder}
              onChange={(e) => setNewFolder(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
              disabled={!isNewFolder}
              placeholder="ten-thu-muc-moi"
              className="w-full px-3 py-2 border text-sm disabled:opacity-50"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 p-4 border-t bg-slate-50">
          <button
            onClick={onClose}
            className="px-4 py-2 border text-sm hover:bg-slate-100"
          >
            Hủy
          </button>
          <button
            onClick={handleMove}
            disabled={isNewFolder ? !newFolder : !selectedFolder}
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium hover:bg-gray-800 disabled:opacity-50"
          >
            Di chuyển
          </button>
        </div>
      </div>
    </div>
  );
}
