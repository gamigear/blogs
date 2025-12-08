# Hướng dẫn cài đặt

## 1. Yêu cầu hệ thống
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+

## 2. Khởi động Infrastructure

```bash
cd news-platform
docker-compose up -d
```

Các service sẽ chạy tại:
- PostgreSQL: localhost:5432
- Redis: localhost:6379
- Keycloak: http://localhost:8080
- Discourse: http://localhost:3000

## 3. Cấu hình Keycloak

1. Truy cập http://localhost:8080
2. Đăng nhập admin/admin
3. Tạo Realm "news-platform"
4. Tạo Client "news-frontend" với:
   - Client Protocol: openid-connect
   - Access Type: confidential
   - Valid Redirect URIs: http://localhost:3001/*
5. Tạo roles: user, moderator, editor, admin

## 4. Cấu hình Discourse

1. Truy cập http://localhost:3000
2. Hoàn thành setup wizard
3. Bật SSO:
   - Admin > Settings > Login > enable sso
   - Cấu hình SSO URL với Keycloak
4. Tạo category "Community" (ID: 5)
5. Bật Embedding:
   - Admin > Customize > Embedding
   - Allowed Hosts: localhost:3001

## 5. Setup Strapi CMS

```bash
cd cms
cp .env.example .env
# Cập nhật .env với credentials
npm install
npm run develop
```

Truy cập http://localhost:1337/admin để tạo admin account.

## 6. Setup Frontend

```bash
cd frontend
cp .env.example .env.local
# Cập nhật .env.local
npm install
npm run dev
```

## 7. Cấu hình Algolia

1. Tạo account tại algolia.com
2. Tạo index "articles"
3. Cập nhật API keys trong .env

## 8. Trust Levels (Discourse)

| Level | Tên | Quyền |
|-------|-----|-------|
| 0 | New User | Đọc, comment |
| 1 | Basic | Đăng bài (cần duyệt) |
| 2 | Member | Đăng bài không cần duyệt |
| 3 | Regular | Chỉnh sửa wiki |
| 4 | Leader | Moderate |

## 9. Webhook Strapi → Frontend

Trong Strapi Admin:
1. Settings > Webhooks
2. Tạo webhook cho Article events
3. URL: http://localhost:3001/api/revalidate
4. Header: x-revalidate-secret: your-secret
