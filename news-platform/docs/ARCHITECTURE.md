# Kiến trúc hệ thống

## Tổng quan

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Browser   │────▶│   Next.js   │────▶│   Strapi    │
│             │     │  (SSG/ISR)  │     │    CMS      │
└─────────────┘     └──────┬──────┘     └──────┬──────┘
                           │                    │
                    ┌──────▼──────┐      ┌──────▼──────┐
                    │    Redis    │      │  PostgreSQL │
                    │   (Cache)   │      │             │
                    └─────────────┘      └─────────────┘
                           │
┌─────────────┐     ┌──────▼──────┐     ┌─────────────┐
│  Keycloak   │◀───▶│   Next.js   │────▶│  Discourse  │
│    (SSO)    │     │    API      │     │   (Forum)   │
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                    ┌──────▼──────┐
                    │   Algolia   │
                    │  (Search)   │
                    └─────────────┘
```

## Data Flow

### 1. Đọc bài viết (SSG/ISR)
- Build time: Next.js fetch từ Strapi → Generate static HTML
- Runtime: Serve static HTML (TTFB < 100ms)
- Revalidate: Webhook từ Strapi trigger ISR

### 2. Tìm kiếm
- User search → Algolia API (client-side)
- Strapi webhook → Index to Algolia

### 3. Community Post
- User submit → API route → Check trust level
- Trust < 2: Status = pending → Moderator review
- Trust >= 2: Status = approved → Create Discourse topic

### 4. Authentication
- User login → Keycloak → JWT token
- Token shared: Next.js ↔ Strapi ↔ Discourse (SSO)

## Tối ưu Performance

### TTFB thấp
- SSG cho trang tĩnh
- ISR với revalidate ngắn
- Redis cache cho API calls
- CDN cho static assets

### SEO
- Server-rendered HTML
- Structured data (JSON-LD)
- Meta tags động
- Sitemap tự động

### Scalability
- Stateless Next.js → Horizontal scale
- PostgreSQL read replicas
- Redis cluster
- CDN edge caching

### Security
- Keycloak RBAC
- CSRF protection
- Rate limiting
- Input sanitization
- CSP headers
