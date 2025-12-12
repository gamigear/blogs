# Du Lịch Việt Nam - Website Tin Tức Du Lịch

Website tin tức du lịch giới thiệu các địa phương Việt Nam, được xây dựng với Next.js 15 và Tailwind CSS.

## Cài đặt

```bash
npm install --legacy-peer-deps
```

## Chạy development

```bash
npm run dev
```

Website sẽ chạy tại http://localhost:3000

## Build production

```bash
npm run build
npm start
```

## Cấu trúc thư mục

```
travel-news/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   ├── [slug]/            # Trang chi tiết bài viết
│   ├── category/          # Trang danh mục
│   ├── blog/              # Trang tất cả bài viết
│   ├── about/             # Trang giới thiệu
│   └── contact/           # Trang liên hệ
├── content/               # Nội dung MDX
│   ├── author/            # Thông tin tác giả
│   ├── blog/              # Bài viết
│   └── pages/             # Các trang tĩnh
├── config/                # Cấu hình website
├── data/                  # Data JSON (tự động tạo)
├── libs/                  # Utilities
├── styles/                # SCSS styles
└── public/                # Static files
```

## Thêm bài viết mới

Tạo file `.mdx` trong `content/blog/` với format:

```mdx
---
title: "Tiêu đề bài viết"
date: "2024-12-10"
image: "https://example.com/image.jpg"
category: "Điểm đến"
author: "Nguyễn Văn A"
featured: false
trending: false
excerpt: "Mô tả ngắn"
---

Nội dung bài viết...
```

Sau đó chạy `npm run fetch` để cập nhật data.

## Danh mục có sẵn

- Điểm đến
- Ẩm thực
- Văn hóa
- Trải nghiệm
