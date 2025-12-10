'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CustomScript {
  id: number;
  name: string;
  position: string;
  code: string;
  is_active: boolean;
  sort_order: number;
  description: string | null;
  created_at: string;
}

const positionLabels: Record<string, string> = {
  header: 'Header Scripts',
  footer: 'Footer Scripts',
  body_top: 'Body Scripts - Top',
  body_bottom: 'Body Scripts - Bottom',
};

const positionColors: Record<string, string> = {
  header: 'bg-blue-100 text-blue-800',
  footer: 'bg-green-100 text-green-800',
  body_top: 'bg-yellow-100 text-yellow-800',
  body_bottom: 'bg-purple-100 text-purple-800',
};

export default function CustomScriptsPage() {
  const [scripts, setScripts] = useState<CustomScript[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchScripts();
  }, []);

  const fetchScripts = async () => {
    try {
      const res = await fetch('/api/admin/custom-scripts');
      if (res.ok) {
        const data = await res.json();
        setScripts(data);
      }
    } catch (error) {
      console.error('Error fetching scripts:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleActive = async (id: number, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/admin/custom-scripts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_active: !currentStatus }),
      });
      if (res.ok) {
        setScripts(scripts.map(s => s.id === id ? { ...s, is_active: !currentStatus } : s));
      }
    } catch (error) {
      console.error('Error toggling script:', error);
    }
  };

  const deleteScript = async (id: number) => {
    if (!confirm('Bạn có chắc muốn xóa script này?')) return;
    
    try {
      const res = await fetch(`/api/admin/custom-scripts/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setScripts(scripts.filter(s => s.id !== id));
      }
    } catch (error) {
      console.error('Error deleting script:', error);
    }
  };

  const filteredScripts = filter === 'all' 
    ? scripts 
    : scripts.filter(s => s.position === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Custom Code</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Quản lý scripts tùy chỉnh cho Header, Footer và Body
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/custom-scripts/css"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            Custom CSS
          </Link>
          <Link
            href="/admin/custom-scripts/new"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Thêm Script
          </Link>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-[#2A85FF] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          Tất cả ({scripts.length})
        </button>
        {Object.entries(positionLabels).map(([key, label]) => {
          const count = scripts.filter(s => s.position === key).length;
          return (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === key
                  ? 'bg-[#2A85FF] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {label} ({count})
            </button>
          );
        })}
      </div>

      {/* Scripts List */}
      {filteredScripts.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center">
          <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Chưa có script nào</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Thêm script để tùy chỉnh website của bạn</p>
          <Link
            href="/admin/custom-scripts/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Thêm Script đầu tiên
          </Link>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Tên
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Vị trí
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Thứ tự
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredScripts.map((script) => (
                <tr key={script.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{script.name}</div>
                      {script.description && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">{script.description}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${positionColors[script.position]}`}>
                      {positionLabels[script.position]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleActive(script.id, script.is_active)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        script.is_active ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          script.is_active ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                    {script.sort_order}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      href={`/admin/custom-scripts/${script.id}/edit`}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => deleteScript(script.id)}
                      className="text-red-600 hover:text-red-800 dark:text-red-400"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
        <h3 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Hướng dẫn sử dụng</h3>
        <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
          <li>• <strong>Header Scripts:</strong> Chèn vào thẻ &lt;head&gt; - dùng cho CSS, meta tags, analytics</li>
          <li>• <strong>Footer Scripts:</strong> Chèn trước thẻ &lt;/body&gt; - dùng cho tracking scripts</li>
          <li>• <strong>Body Top:</strong> Chèn ngay sau thẻ &lt;body&gt; - dùng cho noscript tags, GTM</li>
          <li>• <strong>Body Bottom:</strong> Chèn cuối body - dùng cho chat widgets, popups</li>
        </ul>
      </div>
    </div>
  );
}
