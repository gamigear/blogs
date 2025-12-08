# Implementation Plan

## Phase 1: Core Infrastructure

- [x] 1. Set up database schema and core models
  - [x] 1.1 Create complete PostgreSQL schema with all tables
    - Create tables: articles, categories, authors, users, community_posts, moderation_queue, audit_logs, article_versions
    - Add indexes for performance optimization
    - Add foreign key constraints
    - _Requirements: 2.1, 3.1, 7.1, 10.2_
  - [ ]* 1.2 Write property test for slug generation
    - **Property 26: Slug Generation**
    - **Validates: Requirements 11.2**
  - [x] 1.3 Create database connection pool and query utilities
    - Implement connection pooling with max 20 connections
    - Create typed query functions
    - _Requirements: 9.5_
  - [ ]* 1.4 Write property test for new user trust level
    - **Property 10: New User Trust Level**
    - **Validates: Requirements 6.1**

- [x] 2. Implement Article Management
  - [x] 2.1 Create article CRUD operations
    - Implement createArticle, getArticle, updateArticle, deleteArticle
    - Generate unique slug from title
    - Set default status to 'draft'
    - _Requirements: 2.1, 11.1_
  - [ ]* 2.2 Write property test for article status machine
    - **Property 1: Article Status Machine**
    - **Validates: Requirements 2.1, 2.2, 2.3**
  - [x] 2.3 Implement article versioning
    - Create version record on each update
    - Store previous title and content
    - _Requirements: 2.5_
  - [ ]* 2.4 Write property test for article versioning round-trip
    - **Property 2: Article Versioning Round-Trip**
    - **Validates: Requirements 2.5**
  - [x] 2.5 Implement article status transitions
    - submitForReview: draft → pending_review
    - approve: pending_review → published
    - reject: pending_review → archived
    - _Requirements: 2.2, 2.3_
  - [ ]* 2.6 Write unit tests for article CRUD operations
    - Test create, read, update, delete
    - Test validation rules
    - _Requirements: 2.1, 2.2, 2.3_

- [x] 3. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 2: Community & Moderation

- [x] 4. Implement Community Post System
  - [x] 4.1 Create community post CRUD operations
    - Implement createCommunityPost, getCommunityPosts
    - Check author trust level for auto-approval
    - _Requirements: 3.1, 3.2_
  - [ ]* 4.2 Write property test for trust level determines approval
    - **Property 3: Trust Level Determines Approval**
    - **Validates: Requirements 3.1, 3.2**
  - [x] 4.3 Implement moderation actions
    - approveCommunityPost: pending → approved
    - rejectCommunityPost: pending → rejected with reason
    - _Requirements: 3.3, 3.4_
  - [ ]* 4.4 Write property test for community post moderation actions
    - **Property 4: Community Post Moderation Actions**
    - **Validates: Requirements 3.3, 3.4**

- [x] 5. Implement Moderation Queue
  - [x] 5.1 Create moderation queue operations
    - addToQueue with priority and timestamp
    - getQueue sorted by priority then created_at
    - assignToModerator with locking
    - _Requirements: 7.1, 7.2, 7.4_
  - [ ]* 5.2 Write property test for moderation queue ordering
    - **Property 14: Moderation Queue Ordering**
    - **Validates: Requirements 7.1, 7.2**
  - [ ]* 5.3 Write property test for queue item assignment
    - **Property 16: Queue Item Assignment**
    - **Validates: Requirements 7.4**

- [x] 6. Implement Audit Logging
  - [x] 6.1 Create audit log system
    - Log all sensitive actions (publish, delete, ban)
    - Include user_id, action, resource, timestamp, IP
    - Make logs immutable (no update/delete)
    - _Requirements: 10.2, 7.3_
  - [ ]* 6.2 Write property test for moderation action logging
    - **Property 15: Moderation Action Logging**
    - **Validates: Requirements 7.3**
  - [ ]* 6.3 Write property test for audit log immutability
    - **Property 22: Audit Log Immutability**
    - **Validates: Requirements 10.2**

- [x] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 3: Trust Level & Permissions

- [x] 8. Implement Trust Level System
  - [x] 8.1 Create trust level calculation
    - Calculate based on posts_created, likes_received, flagged_count
    - Implement promotion criteria check
    - _Requirements: 6.2, 6.5_
  - [ ]* 8.2 Write property test for trust level promotion criteria
    - **Property 11: Trust Level Promotion Criteria**
    - **Validates: Requirements 6.2**
  - [ ]* 8.3 Write property test for flags prevent promotion
    - **Property 13: Flags Prevent Promotion**
    - **Validates: Requirements 6.5**
  - [x] 8.4 Implement trust level permissions
    - Grant moderation capabilities for trust_level 4
    - _Requirements: 6.4_
  - [ ]* 8.5 Write property test for trust level permissions
    - **Property 12: Trust Level Permissions**
    - **Validates: Requirements 6.4**

- [x] 9. Implement Permission System
  - [x] 9.1 Create role-based access control
    - Define roles: reader, contributor, moderator, editor, admin
    - Implement permission checking middleware
    - _Requirements: 10.1_
  - [ ]* 9.2 Write property test for permission verification
    - **Property 21: Permission Verification**
    - **Validates: Requirements 10.1**

- [x] 10. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 4: API & Security

- [x] 11. Implement API Routes
  - [x] 11.1 Create article API endpoints
    - GET /api/articles - list articles
    - GET /api/articles/[slug] - get article by slug
    - POST /api/articles - create article (editor+)
    - PATCH /api/articles/[id] - update article
    - _Requirements: 2.1, 2.2, 2.3_
  - [x] 11.2 Create community post API endpoints
    - GET /api/community/posts - list approved posts
    - POST /api/community/posts - submit post
    - _Requirements: 3.1, 3.2_
  - [x] 11.3 Create moderation API endpoints
    - GET /api/admin/moderation/queue - get queue
    - POST /api/admin/moderation/[id]/approve - approve
    - POST /api/admin/moderation/[id]/reject - reject
    - _Requirements: 7.1, 7.2, 7.3_

- [x] 12. Implement Security Measures
  - [x] 12.1 Create input sanitization
    - Sanitize HTML to prevent XSS
    - Escape SQL parameters
    - _Requirements: 10.4_
  - [ ]* 12.2 Write property test for input sanitization
    - **Property 23: Input Sanitization**
    - **Validates: Requirements 10.4**
  - [x] 12.3 Implement rate limiting
    - Use Redis for rate limit counters
    - Return 429 when exceeded
    - _Requirements: 10.5_
  - [ ]* 12.4 Write property test for rate limiting
    - **Property 24: Rate Limiting**
    - **Validates: Requirements 10.5**

- [x] 13. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 5: Frontend Pages

- [x] 14. Implement Article Pages
  - [x] 14.1 Create article detail page with ISR
    - Implement getStaticProps with revalidate
    - Add SEO meta tags and JSON-LD
    - _Requirements: 4.1, 4.2, 4.3_
  - [ ]* 14.2 Write property test for SEO meta tags presence
    - **Property 5: SEO Meta Tags Presence**
    - **Validates: Requirements 4.3**
  - [x] 14.3 Create category listing page
    - List articles sorted by published_at desc
    - _Requirements: 11.3_
  - [ ]* 14.4 Write property test for category listing order
    - **Property 27: Category Listing Order**
    - **Validates: Requirements 11.3**

- [x] 15. Implement Sitemap
  - [x] 15.1 Create dynamic sitemap.xml
    - Include all published articles
    - Exclude unpublished articles
    - _Requirements: 4.4_
  - [ ]* 15.2 Write property test for sitemap completeness
    - **Property 6: Sitemap Completeness**
    - **Validates: Requirements 4.4**

- [x] 16. Implement Markdown Rendering
  - [x] 16.1 Create markdown to HTML renderer
    - Preserve heading hierarchy
    - Support code blocks, images, links
    - _Requirements: 4.5_
  - [ ]* 16.2 Write property test for markdown rendering consistency
    - **Property 7: Markdown Rendering Consistency**
    - **Validates: Requirements 4.5**

- [x] 17. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 6: Search & Webhooks

- [x] 18. Implement Algolia Search
  - [x] 18.1 Create search indexing functions
    - indexArticle: add/update article in Algolia
    - removeArticle: remove from Algolia
    - _Requirements: 5.3, 5.4_
  - [ ]* 18.2 Write property test for search index consistency
    - **Property 9: Search Index Consistency**
    - **Validates: Requirements 5.3, 5.4**
  - [x] 18.3 Create search API and UI
    - Return results with title, excerpt, category, published_at
    - _Requirements: 5.1, 5.2_
  - [ ]* 18.4 Write property test for search results format
    - **Property 8: Search Results Format**
    - **Validates: Requirements 5.2**

- [x] 19. Implement Webhook System
  - [x] 19.1 Create webhook signature validation
    - Validate HMAC signature on incoming webhooks
    - Reject invalid signatures
    - _Requirements: 8.5_
  - [ ]* 19.2 Write property test for webhook signature validation
    - **Property 17: Webhook Signature Validation**
    - **Validates: Requirements 8.5**
  - [x] 19.3 Implement webhook retry logic
    - Exponential backoff up to 5 attempts
    - Move to DLQ after all retries fail
    - _Requirements: 8.3, 8.4_
  - [ ]* 19.4 Write property test for webhook retry logic
    - **Property 18: Webhook Retry Logic**
    - **Validates: Requirements 8.3, 8.4**
  - [x] 19.5 Create Discourse webhook handler
    - Process topic_approved events
    - Create CommunityPost in database
    - _Requirements: 8.1_
  - [ ]* 19.6 Write property test for webhook creates community post
    - **Property 19: Webhook Creates Community Post**
    - **Validates: Requirements 8.1**

- [x] 20. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 7: Caching & Media

- [x] 21. Implement Caching
  - [x] 21.1 Create Redis cache layer
    - Implement getOrSet with TTL
    - Implement cache invalidation
    - _Requirements: 9.2_
  - [x] 21.2 Add cache headers to responses
    - Set Cache-Control, ETag headers
    - _Requirements: 9.1_
  - [ ]* 21.3 Write property test for cache headers present
    - **Property 20: Cache Headers Present**
    - **Validates: Requirements 9.1**

- [x] 22. Implement Image Upload
  - [x] 22.1 Create image upload handler
    - Validate file type and size
    - Store in S3-compatible storage
    - Generate optimized variants
    - _Requirements: 12.1, 12.3_
  - [ ]* 22.2 Write property test for image upload validation
    - **Property 29: Image Upload Validation**
    - **Validates: Requirements 12.3**
  - [ ]* 22.3 Write property test for image format optimization
    - **Property 30: Image Format Optimization**
    - **Validates: Requirements 12.1, 12.2**

- [x] 23. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 8: Category & Dashboard

- [x] 24. Implement Category Management
  - [x] 24.1 Create category CRUD operations
    - Validate article has at least one category
    - Reassign articles on category deletion
    - _Requirements: 11.1, 11.5_
  - [ ]* 24.2 Write property test for category validation
    - **Property 25: Category Validation**
    - **Validates: Requirements 11.1**
  - [ ]* 24.3 Write property test for category deletion reassignment
    - **Property 28: Category Deletion Reassignment**
    - **Validates: Requirements 11.5**

- [x] 25. Implement Admin Dashboard
  - [x] 25.1 Create dashboard metrics API
    - Return pending queue count, published articles count, active users
    - _Requirements: 14.1_
  - [ ]* 25.2 Write property test for dashboard metrics accuracy
    - **Property 31: Dashboard Metrics Accuracy**
    - **Validates: Requirements 14.1**

- [x] 26. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 9: Integration & Polish

- [x] 27. Integrate all components
  - [x] 27.1 Wire up authentication flow
    - Connect Keycloak SSO to Next.js
    - Sync user roles to database
    - _Requirements: 1.1, 1.2, 1.3_
  - [x] 27.2 Connect Discourse integration
    - Set up SSO between Keycloak and Discourse
    - Configure webhook endpoints
    - _Requirements: 3.5, 8.1_
  - [x] 27.3 Configure Algolia integration
    - Set up API keys
    - Configure search index settings
    - _Requirements: 5.1, 5.3_

- [x] 28. Create deployment configuration
  - [x] 28.1 Create production docker-compose
    - Configure all services
    - Set up networking
    - _Requirements: All_
  - [x] 28.2 Create environment configuration
    - Document all required env vars
    - Create .env.example
    - _Requirements: All_

- [x] 29. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
