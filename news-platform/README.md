# News Platform với Community Discussion

## Stack
- **CMS**: Strapi (Headless CMS)
- **Frontend**: Next.js 14 (App Router, SSG/ISR)
- **Community**: Discourse (Forum + Trust Levels)
- **Auth**: Keycloak (SSO)
- **Database**: PostgreSQL
- **Cache**: Redis
- **Search**: Algolia

## Cấu trúc dự án
```
news-platform/
├── frontend/          # Next.js app
├── cms/               # Strapi CMS
├── docker/            # Docker configs
└── docs/              # Documentation
```

## Quick Start

```bash
# 1. Start infrastructure
docker-compose up -d

# 2. Setup CMS
cd cms && npm install && npm run develop

# 3. Setup Frontend
cd frontend && npm install && npm run dev
```

## Features
- ✅ SSG/ISR cho SEO tối ưu
- ✅ TTFB thấp với Redis cache
- ✅ Discourse integration (trust levels)
- ✅ SSO với Keycloak
- ✅ Full-text search với Algolia
- ✅ Community posts với moderation workflow
