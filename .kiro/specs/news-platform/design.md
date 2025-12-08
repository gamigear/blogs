# Design Document: News Platform

## Overview

News Platform là hệ thống website tin tức kết hợp cộng đồng, được xây dựng trên kiến trúc microservices với các thành phần chính: Next.js (frontend), PostgreSQL (database), Redis (cache), Keycloak (SSO), Discourse (forum), và Algolia (search). Hệ thống hỗ trợ workflow duyệt bài, trust levels tự động, và tối ưu SEO/performance.

## Architecture

```
┌───────────────┐       ┌──────────────┐
│   CDN/WAF     │ <---->│  Visitors    │
│ (Cloudflare)  │       └──────────────┘
└──────┬────────┘
       │
┌──────▼─────────┐
│   Next.js UI   │  (Vercel / Self-host)
│   Port: 3001   │
└──────┬─────────┘
       │
┌──────┴──────────────────────────────┐
│                                     │
▼                                     ▼
┌────────────────┐           ┌────────────────┐
│   PostgreSQL   │           │   Discourse    │
│   Port: 5432   │           │   Port: 3000   │
└────────┬───────┘           └────────┬───────┘
         │                            │
         │    ┌────────────┐          │
         └--->│   Redis    │<---------┘
              │ Port: 6379 │
              └────────────┘

┌────────────────┐           ┌────────────────┐
│   Keycloak     │           │   Algolia      │
│   Port: 8080   │           │   (Cloud)      │
└────────────────┘           └────────────────┘

Background Workers:
- Webhook Handler (Discourse → PostgreSQL sync)
- Search Indexer (PostgreSQL → Algolia)
- Trust Level Calculator (cron job)
```

## Components and Interfaces

### 1. Frontend (Next.js)

**Responsibilities:**
- Server-side rendering với SSG/ISR
- Authentication flow với Keycloak
- Article display và search UI
- Community post submission

**Interfaces:**
- `GET /` - Homepage với latest articles
- `GET /article/[slug]` - Article detail page
- `GET /category/[slug]` - Category listing
- `GET /community` - Community posts listing
- `POST /api/community/posts` - Submit community post
- `GET /api/search` - Search articles

### 2. Database Layer (PostgreSQL)

**Responsibilities:**
- Persistent storage cho articles, users, categories
- Transaction support cho content operations
- Full-text search fallback

**Interfaces:**
- Connection pool với max 20 connections
- Query functions trong `src/lib/db.ts`

### 3. Cache Layer (Redis)

**Responsibilities:**
- Session storage
- API response caching
- Rate limiting counters
- Background job queue

**Interfaces:**
- `getOrSet(key, fetcher, ttl)` - Cache-aside pattern
- `invalidateCache(pattern)` - Cache invalidation

### 4. Authentication (Keycloak)

**Responsibilities:**
- User authentication via OIDC
- Role management (reader, contributor, moderator, editor, admin)
- Session management

**Interfaces:**
- OIDC endpoints for login/logout
- Token validation
- Role claims in JWT

### 5. Forum (Discourse)

**Responsibilities:**
- Community discussions
- Trust level management
- Moderation tools

**Interfaces:**
- REST API for topic/post management
- Webhooks for content sync
- SSO integration

### 6. Search (Algolia)

**Responsibilities:**
- Fast full-text search
- Faceted filtering
- Search analytics

**Interfaces:**
- `indexArticle(article)` - Add/update index
- `removeArticle(id)` - Remove from index
- `searchArticles(query)` - Search query

## Data Models

### Article
```typescript
interface Article {
  id: number;
  title: string;
  slug: string;           // unique, generated from title
  excerpt: string;
  content: string;        // markdown/richtext
  featured_image?: string;
  category_id: number;
  author_id: number;
  status: 'draft' | 'pending_review' | 'published' | 'archived';
  published_at?: Date;
  created_at: Date;
  updated_at: Date;
  version: number;
}
```

### Category
```typescript
interface Category {
  id: number;
  name: string;
  slug: string;           // unique
  discourse_category_id?: number;
  created_at: Date;
}
```

### Author
```typescript
interface Author {
  id: number;
  name: string;
  email: string;          // unique
  avatar?: string;
  bio?: string;
  created_at: Date;
}
```

### User
```typescript
interface User {
  id: number;
  keycloak_id: string;    // unique
  discourse_id?: number;
  username: string;
  email: string;
  trust_level: 0 | 1 | 2 | 3 | 4;
  role: 'reader' | 'contributor' | 'moderator' | 'editor' | 'admin';
  banned_until?: Date;
  created_at: Date;
}
```

### CommunityPost
```typescript
interface CommunityPost {
  id: number;
  title: string;
  content: string;
  author_id: number;
  status: 'pending' | 'approved' | 'rejected';
  discourse_topic_id?: number;
  moderator_notes?: string;
  created_at: Date;
  updated_at: Date;
}
```

### ModerationQueue
```typescript
interface ModerationQueueItem {
  id: number;
  resource_type: 'community_post' | 'article' | 'comment';
  resource_id: number;
  reason: string;
  reported_by?: number;
  status: 'pending' | 'assigned' | 'resolved';
  assigned_to?: number;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  created_at: Date;
  resolved_at?: Date;
}
```

### AuditLog
```typescript
interface AuditLog {
  id: number;
  user_id: number;
  action: string;
  resource_type: string;
  resource_id: number;
  details: Record<string, any>;
  ip_address: string;
  created_at: Date;
}
```

### ArticleVersion
```typescript
interface ArticleVersion {
  id: number;
  article_id: number;
  editor_id: number;
  title: string;
  content: string;
  version: number;
  created_at: Date;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Article Status Machine
*For any* article, status transitions must follow the valid state machine: draft → pending_review → published/archived, and each transition must update the corresponding timestamp field.
**Validates: Requirements 2.1, 2.2, 2.3**

### Property 2: Article Versioning Round-Trip
*For any* article modification, a version record must be created that preserves the previous state, and restoring from that version should produce an equivalent article.
**Validates: Requirements 2.5**

### Property 3: Trust Level Determines Approval
*For any* community post submission, if the author's trust_level is less than 2, the post status must be "pending"; if trust_level is 2 or higher, the post status must be "approved".
**Validates: Requirements 3.1, 3.2**

### Property 4: Community Post Moderation Actions
*For any* moderation action (approve/reject) on a community post, the post status must be updated accordingly, and an audit log entry must be created.
**Validates: Requirements 3.3, 3.4**

### Property 5: SEO Meta Tags Presence
*For any* rendered article page, the HTML must contain meta tags for title, description, og:image, and valid JSON-LD structured data.
**Validates: Requirements 4.3**

### Property 6: Sitemap Completeness
*For any* published article, it must appear in the sitemap.xml; for any unpublished article, it must not appear in the sitemap.
**Validates: Requirements 4.4**

### Property 7: Markdown Rendering Consistency
*For any* valid markdown content, rendering to HTML and back (if applicable) should preserve semantic structure and heading hierarchy.
**Validates: Requirements 4.5**

### Property 8: Search Results Format
*For any* search result returned, it must contain title, excerpt, category, and published_at fields.
**Validates: Requirements 5.2**

### Property 9: Search Index Consistency
*For any* published article, it must exist in the Algolia index; for any deleted/unpublished article, it must not exist in the index.
**Validates: Requirements 5.3, 5.4**

### Property 10: New User Trust Level
*For any* newly registered user, their trust_level must be initialized to 0.
**Validates: Requirements 6.1**

### Property 11: Trust Level Promotion Criteria
*For any* user meeting promotion criteria (posts_created >= threshold, likes_received >= threshold, flagged_count == 0), their trust_level should be upgraded.
**Validates: Requirements 6.2**

### Property 12: Trust Level Permissions
*For any* user with trust_level 4, they must have moderation capabilities (can approve/reject posts).
**Validates: Requirements 6.4**

### Property 13: Flags Prevent Promotion
*For any* user with flagged_count > threshold, automatic trust_level promotion must be blocked.
**Validates: Requirements 6.5**

### Property 14: Moderation Queue Ordering
*For any* moderation queue view, items must be sorted by priority (descending) then by created_at (ascending), and each item must have priority and timestamp fields.
**Validates: Requirements 7.1, 7.2**

### Property 15: Moderation Action Logging
*For any* moderation action, an audit log entry must be created with moderator_id, action, and timestamp.
**Validates: Requirements 7.3**

### Property 16: Queue Item Assignment
*For any* queue item assigned to a moderator, it must be marked as assigned and no other moderator should be able to process it simultaneously.
**Validates: Requirements 7.4**

### Property 17: Webhook Signature Validation
*For any* incoming webhook, the payload signature must be validated before processing; invalid signatures must be rejected.
**Validates: Requirements 8.5**

### Property 18: Webhook Retry Logic
*For any* failed webhook delivery, the system must retry with exponential backoff up to 5 times before moving to dead-letter queue.
**Validates: Requirements 8.3, 8.4**

### Property 19: Webhook Creates Community Post
*For any* approved Discourse topic webhook, a corresponding CommunityPost record must be created in the database.
**Validates: Requirements 8.1**

### Property 20: Cache Headers Present
*For any* article page response, appropriate cache headers (Cache-Control, ETag) must be present.
**Validates: Requirements 9.1**

### Property 21: Permission Verification
*For any* admin action request, the OIDC token must be validated and role permissions must be checked before execution.
**Validates: Requirements 10.1**

### Property 22: Audit Log Immutability
*For any* sensitive action (publish, delete, ban), an immutable audit log entry must be created that cannot be modified or deleted.
**Validates: Requirements 10.2**

### Property 23: Input Sanitization
*For any* user input containing potential XSS or SQL injection patterns, the output must be sanitized/escaped.
**Validates: Requirements 10.4**

### Property 24: Rate Limiting
*For any* API endpoint, requests exceeding the rate limit must receive 429 status code.
**Validates: Requirements 10.5**

### Property 25: Category Validation
*For any* article creation, at least one category must be assigned; articles without categories must be rejected.
**Validates: Requirements 11.1**

### Property 26: Slug Generation
*For any* category or article creation, a unique slug must be generated from the title.
**Validates: Requirements 11.2**

### Property 27: Category Listing Order
*For any* category page, articles must be sorted by published_at in descending order.
**Validates: Requirements 11.3**

### Property 28: Category Deletion Reassignment
*For any* deleted category, all associated articles must be reassigned to the default category.
**Validates: Requirements 11.5**

### Property 29: Image Upload Validation
*For any* image upload, file type must be validated (jpg, png, webp, gif) and size must not exceed 10MB.
**Validates: Requirements 12.3**

### Property 30: Image Format Optimization
*For any* uploaded image, optimized variants (WebP/AVIF) must be generated and served with responsive srcset.
**Validates: Requirements 12.1, 12.2**

### Property 31: Dashboard Metrics Accuracy
*For any* admin dashboard view, displayed counts (pending queue, published articles, active users) must match actual database counts.
**Validates: Requirements 14.1**

## Error Handling

### Database Errors
- Connection failures: Retry with exponential backoff, fallback to read replica
- Query timeouts: Log and return 503 with retry-after header
- Constraint violations: Return 400 with specific error message

### Authentication Errors
- Invalid token: Return 401 with redirect to login
- Expired token: Attempt refresh, if fails return 401
- Insufficient permissions: Return 403 with required role

### Webhook Errors
- Signature validation failure: Log and return 401
- Processing failure: Queue for retry with exponential backoff
- DLQ overflow: Alert administrators

### External Service Errors
- Algolia unavailable: Fallback to PostgreSQL full-text search
- Discourse unavailable: Queue operations for later sync
- Keycloak unavailable: Use cached session data if valid

## Testing Strategy

### Unit Testing
- Framework: Jest
- Coverage target: 80%
- Focus areas: Data transformations, validation logic, utility functions

### Property-Based Testing
- Framework: fast-check
- Minimum iterations: 100 per property
- Focus areas: All correctness properties defined above

### Integration Testing
- Framework: Jest + Supertest
- Database: Test PostgreSQL instance
- Focus areas: API endpoints, database operations, webhook handling

### E2E Testing
- Framework: Playwright
- Focus areas: User flows (login, article viewing, search, community posting)

### Test Annotations
Each property-based test must include:
```typescript
/**
 * Feature: news-platform, Property {number}: {property_text}
 * Validates: Requirements {X.Y}
 */
```
