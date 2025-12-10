'use client';

import { useState, useMemo } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  disabled?: boolean;
  placeholder?: string;
  onMediaInsert?: () => void;
}

export default function RichTextEditor({ 
  value, 
  onChange, 
  disabled = false, 
  placeholder = 'Viết nội dung bài viết...',
  onMediaInsert
}: RichTextEditorProps) {
  const [isSourceMode, setIsSourceMode] = useState(false);

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }, { 'align': [] }],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],
        ['clean']
      ],
    },
    clipboard: {
      matchVisual: false,
    },
  }), []);

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'list', 'bullet', 'indent',
    'direction', 'align',
    'blockquote', 'code-block',
    'link', 'image', 'video'
  ];

  if (isSourceMode) {
    return (
      <div className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={() => setIsSourceMode(false)}
            className="px-3 py-1.5 text-sm font-medium rounded bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
          >
            Visual
          </button>
          <button
            type="button"
            className="px-3 py-1.5 text-sm font-medium rounded bg-[#2A85FF] text-white"
          >
            Code
          </button>
          {onMediaInsert && (
            <button
              type="button"
              onClick={onMediaInsert}
              className="ml-auto px-3 py-1.5 text-sm font-medium rounded bg-[#2A85FF] text-white flex items-center gap-1.5 hover:bg-[#2A85FF]/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Add Media
            </button>
          )}
        </div>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          rows={25}
          className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none resize-none border-none"
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div className="rich-text-editor border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <button
          type="button"
          className="px-3 py-1.5 text-sm font-medium rounded bg-[#2A85FF] text-white"
        >
          Visual
        </button>
        <button
          type="button"
          onClick={() => setIsSourceMode(true)}
          className="px-3 py-1.5 text-sm font-medium rounded bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
        >
          Code
        </button>
        {onMediaInsert && (
          <button
            type="button"
            onClick={onMediaInsert}
            className="ml-auto px-3 py-1.5 text-sm font-medium rounded bg-[#2A85FF] text-white flex items-center gap-1.5 hover:bg-[#2A85FF]/90 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Add Media
          </button>
        )}
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        readOnly={disabled}
        className="bg-white dark:bg-gray-900"
      />
      <style jsx global>{`
        .rich-text-editor .ql-toolbar {
          border: none !important;
          border-bottom: 1px solid #e5e7eb !important;
          background: #f9fafb;
        }
        .dark .rich-text-editor .ql-toolbar {
          background: #1f2937;
          border-bottom-color: #374151 !important;
        }
        .rich-text-editor .ql-container {
          border: none !important;
          font-size: 16px;
          min-height: 400px;
        }
        .rich-text-editor .ql-editor {
          min-height: 400px;
          padding: 16px;
          line-height: 1.6;
        }
        .dark .rich-text-editor .ql-editor {
          color: #fff;
        }
        .dark .rich-text-editor .ql-editor.ql-blank::before {
          color: #6b7280;
        }
        .rich-text-editor .ql-snow .ql-stroke {
          stroke: #374151;
        }
        .dark .rich-text-editor .ql-snow .ql-stroke {
          stroke: #9ca3af;
        }
        .rich-text-editor .ql-snow .ql-fill {
          fill: #374151;
        }
        .dark .rich-text-editor .ql-snow .ql-fill {
          fill: #9ca3af;
        }
        .rich-text-editor .ql-snow .ql-picker {
          color: #374151;
        }
        .dark .rich-text-editor .ql-snow .ql-picker {
          color: #9ca3af;
        }
        .rich-text-editor .ql-snow .ql-picker-options {
          background: #fff;
        }
        .dark .rich-text-editor .ql-snow .ql-picker-options {
          background: #1f2937;
        }
        .rich-text-editor .ql-editor img {
          max-width: 100%;
          height: auto;
        }
        .rich-text-editor .ql-editor blockquote {
          border-left: 4px solid #2A85FF;
          padding-left: 16px;
          margin: 16px 0;
          color: #6b7280;
        }
        .rich-text-editor .ql-editor pre {
          background: #f3f4f6;
          padding: 16px;
          border-radius: 8px;
          overflow-x: auto;
        }
        .dark .rich-text-editor .ql-editor pre {
          background: #1f2937;
        }
      `}</style>
    </div>
  );
}
