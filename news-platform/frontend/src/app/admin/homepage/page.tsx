'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HomepageSection {
  id: number;
  name: string;
  title: string | null;
  section_type: string;
  selection_type: string;
  selection_data: any;
  display_limit: number;
  display_layout: string;
  is_visible: boolean;
  position: string;
  sort_order: number;
}

const SECTION_TYPES: Record<string, string> = {
  hero_slider: 'Slider nổi bật',
  featured_grid: 'Lưới bài viết',
  category_articles: 'Bài theo danh mục',
  latest_articles: 'Bài mới nhất',
  tag_articles: 'Bài theo tag',
  manual_articles: 'Chọn thủ công',
  sidebar_widget: 'Widget sidebar',
  banner: 'Banner quảng cáo',
  custom_html: 'HTML tùy chỉnh',
};

const SELECTION_TYPES: Record<string, string> = {
  auto: 'Tự động (mới nhất)',
  manual: 'Chọn thủ công',
  category: 'Theo danh mục',
  categories: 'Nhiều danh mục',
  tag: 'Theo tag',
  tags: 'Nhiều tags',
  featured: 'Bài nổi bật',
  popular: 'Đọc nhiều',
};

const LAYOUTS: Record<string, string> = {
  grid: 'Lưới',
  list: 'Danh sách',
  slider: 'Slider',
  featured_large: 'Nổi bật lớn',
  sidebar: 'Sidebar',
  compact: 'Thu gọn',
  cards: 'Cards',
  magazine: 'Magazine',
};

export default function HomepageManagementPage() {
  const [sections, setSections] = useState<HomepageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const fetchSections = async () => {
    try {
      const res = await fetch('/api/admin/homepage');
      const data = await res.json();
      setSections(data.sections || []);
    } catch (error) {
      console.error('Error fetching sections:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchSections(); }, []);

  const mainSections = sections.filter(s => s.position === 'main').sort((a, b) => a.sort_order - b.sort_order);
  const sidebarSections = sections.filter(s => s.position === 'sidebar').sort((a, b) => a.sort_order - b.sort_order);

  const handleDragStart = (id: number) => {
    setDraggedItem(id);
  };

  const handleDragOver = (e: React.DragEvent, targetId: number, position: string) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === targetId) return;

    const positionSections = position === 'main' ? mainSections : sidebarSections;
    const draggedIndex = positionSections.findIndex(s => s.id === draggedItem);
    const targetIndex = positionSections.findIndex(s => s.id === targetId);

    if (draggedIndex === -1) return;

    const newSections = [...sections];
    const draggedSection = newSections.find(s => s.id === draggedItem);
    if (draggedSection) {
      draggedSection.position = position;
    }

    // Reorder
    const filtered = newSections.filter(s => s.position === position).sort((a, b) => a.sort_order - b.sort_order);
    const reordered = [...filtered];
    const [removed] = reordered.splice(draggedIndex, 1);
    reordered.splice(targetIndex, 0, removed);
    reordered.forEach((s, i) => { s.sort_order = i + 1; });

    setSections(newSections);
  };

  const handleDragEnd = async () => {
    setDraggedItem(null);
    await saveOrder();
  };

  const saveOrder = async () => {
    setSaving(true);
    try {
      await fetch('/api/admin/homepage', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sections: sections.map(s => ({ id: s.id, sort_order: s.sort_order, position: s.position }))
        }),
      });
    } catch (error) {
      console.error('Error saving order:', error);
    } finally {
      setSaving(false);
    }
  };

  const toggleVisibility = async (id: number) => {
    const section = sections.find(s => s.id === id);
    if (!section) return;

    try {
      await fetch(`/api/admin/homepage/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_visible: !section.is_visible }),
      });
      setSections(sections.map(s => s.id === id ? { ...s, is_visible: !s.is_visible } : s));
    } catch (error) {
      console.error('Error toggling visibility:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bạn có chắc muốn xóa section này?')) return;
    try {
      await fetch(`/api/admin/homepage/${id}`, { method: 'DELETE' });
      setSections(sections.filter(s => s.id !== id));
    } catch (error) {
      alert('Có lỗi xảy ra');
    }
  };

  const SectionCard = ({ section }: { section: HomepageSection }) => (
    <div
      draggable
      onDragStart={() => handleDragStart(section.id)}
      onDragOver={(e) => handleDragOver(e, section.id, section.position)}
      onDragEnd={handleDragEnd}
      className={`p-4 rounded-lg border-2 cursor-move transition-all ${
        draggedItem === section.id ? 'opacity-50 border-blue-500' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
      } ${!section.is_visible ? 'bg-gray-50 dark:bg-gray-800/50 opacity-60' : 'bg-white dark:bg-[#1A1D1F]'}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="text-gray-400 cursor-grab">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{section.title || section.name}</h3>
            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
              <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded">{SECTION_TYPES[section.section_type]}</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">{SELECTION_TYPES[section.selection_type]}</span>
              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">{LAYOUTS[section.display_layout]}</span>
              <span>{section.display_limit} bài</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => toggleVisibility(section.id)}
            className={`p-2 rounded-md transition-colors ${section.is_visible ? 'text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            title={section.is_visible ? 'Đang hiển thị' : 'Đang ẩn'}
          >
            {section.is_visible ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            )}
          </button>
          <Link
            href={`/admin/homepage/${section.id}/edit`}
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </Link>
          <button
            onClick={() => handleDelete(section.id)}
            className="p-2 rounded-md text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quản lý trang chủ</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Tùy chỉnh các section hiển thị trên trang chủ</p>
        </div>
        <div className="flex items-center gap-3">
          {saving && <span className="text-sm text-gray-500 dark:text-gray-400">Đang lưu...</span>}
          <Link
            href="/admin/homepage/new"
            className="flex items-center gap-2 px-5 py-3 rounded-md bg-[#2A85FF] text-white hover:bg-[#2A85FF]/90 transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Thêm section
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center text-gray-500 dark:text-gray-400">Đang tải...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
              </svg>
              Nội dung chính ({mainSections.length})
            </div>
            <div className="space-y-3 min-h-[200px] p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
              {mainSections.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  Kéo thả section vào đây hoặc tạo mới
                </div>
              ) : (
                mainSections.map(section => (
                  <SectionCard key={section.id} section={section} />
                ))
              )}
            </div>
          </div>

          {/* Sidebar area */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Sidebar ({sidebarSections.length})
            </div>
            <div className="space-y-3 min-h-[200px] p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
              {sidebarSections.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  Kéo thả section vào đây
                </div>
              ) : (
                sidebarSections.map(section => (
                  <SectionCard key={section.id} section={section} />
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Preview link */}
      <div className="flex justify-center pt-4">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Xem trang chủ
        </Link>
      </div>
    </div>
  );
}
