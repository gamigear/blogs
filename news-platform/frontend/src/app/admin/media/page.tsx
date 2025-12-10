'use client';

import MediaLibrary from '@/components/admin/MediaLibrary';

export default function MediaPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Thư viện Media</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Quản lý hình ảnh, video và các file media</p>
      </div>
      <MediaLibrary />
    </div>
  );
}
