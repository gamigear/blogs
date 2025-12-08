# Requirements Document

## Introduction

Hệ thống News Platform là một nền tảng tin tức kết hợp chức năng thảo luận cộng đồng. Hệ thống cho phép user đăng bài community với workflow duyệt bài bởi moderator/biên tập viên, tích hợp hệ thống cấp bậc tự động (trust levels) dựa trên hoạt động người dùng thông qua Discourse. Mục tiêu tối ưu: TTFB thấp, SEO tốt, khả năng mở rộng theo traffic, và bảo mật cao.

**Stack công nghệ:**
- Strapi (Headless CMS)
- Next.js (SSG/ISR)
- Discourse (Community/Forum)
- Keycloak/Auth0 (SSO)
- PostgreSQL
- Redis
- Algolia/ElasticSearch

## Glossary

- **News_Platform**: Hệ thống website tin tức với chức năng cộng đồng
- **Article**: Bài viết tin tức do biên tập viên tạo
- **CommunityPost**: Bài viết do user cộng đồng đăng
- **Trust_Level**: Cấp bậc người dùng trong Discourse (0-4)
- **Moderator**: Người có quyền duyệt bài cộng đồng
- **Editor**: Biên tập viên có quyền tạo và xuất bản bài viết editorial
- **SSO**: Single Sign-On - đăng nhập một lần cho tất cả services
- **ISR**: Incremental Static Regeneration - tái tạo trang tĩnh theo yêu cầu
- **TTFB**: Time To First Byte - thời gian phản hồi đầu tiên

## Requirements

### Requirement 1: Authentication & SSO

**User Story:** As a user, I want to log in once and access all platform services (website, forum, admin), so that I have a seamless experience across the platform.

#### Acceptance Criteria

1. WHEN a user clicks login THEN the News_Platform SHALL redirect to Keycloak authentication page
2. WHEN a user successfully authenticates with Keycloak THEN the News_Platform SHALL create sessions for Next.js, Strapi, and Discourse simultaneously
3. WHEN a user logs out from any service THEN the News_Platform SHALL terminate sessions across all connected services
4. WHILE a user session is active THEN the News_Platform SHALL maintain authentication state for a maximum of 30 days with refresh tokens
5. IF a user session token expires THEN the News_Platform SHALL attempt automatic refresh before requiring re-authentication

### Requirement 2: Article Management (Editorial)

**User Story:** As an editor, I want to create, edit, and publish news articles, so that I can deliver content to readers.

#### Acceptance Criteria

1. WHEN an editor creates an article THEN the News_Platform SHALL save it with status "draft" and generate a unique slug from the title
2. WHEN an editor submits an article for review THEN the News_Platform SHALL change status to "pending_review" and notify senior editors
3. WHEN a senior editor approves an article THEN the News_Platform SHALL set status to "published", set published_at timestamp, and trigger frontend revalidation
4. WHEN an article is published THEN the News_Platform SHALL index it in Algolia within 60 seconds
5. WHEN an article is modified THEN the News_Platform SHALL create a version record preserving the previous state

### Requirement 3: Community Post Workflow

**User Story:** As a community member, I want to submit posts for publication, so that I can contribute content to the platform.

#### Acceptance Criteria

1. WHEN a user with trust_level less than 2 submits a community post THEN the News_Platform SHALL set status to "pending" and add to moderation queue
2. WHEN a user with trust_level 2 or higher submits a community post THEN the News_Platform SHALL auto-approve and publish the post
3. WHEN a moderator approves a pending community post THEN the News_Platform SHALL create a corresponding record in Strapi and trigger frontend revalidation
4. WHEN a moderator rejects a community post THEN the News_Platform SHALL mark the post as rejected and notify the author with reason
5. WHEN a community post is approved THEN the News_Platform SHALL create a Discourse topic for discussion

### Requirement 4: Content Display & SEO

**User Story:** As a reader, I want to browse articles with fast loading times and good search engine visibility, so that I can find and read content efficiently.

#### Acceptance Criteria

1. WHEN a reader requests an article page THEN the News_Platform SHALL serve a pre-rendered static page with TTFB under 200ms
2. WHEN an article is published or updated THEN the News_Platform SHALL regenerate the static page within 60 seconds using ISR
3. WHEN rendering an article page THEN the News_Platform SHALL include meta tags (title, description, og:image) and JSON-LD structured data
4. WHEN a search engine crawls the site THEN the News_Platform SHALL provide a valid sitemap.xml with all published articles
5. WHEN displaying article content THEN the News_Platform SHALL render markdown/richtext to HTML with proper heading hierarchy

### Requirement 5: Search Functionality

**User Story:** As a reader, I want to search for articles by keywords, so that I can find relevant content quickly.

#### Acceptance Criteria

1. WHEN a user enters a search query THEN the News_Platform SHALL return relevant results from Algolia within 300ms
2. WHEN displaying search results THEN the News_Platform SHALL show article title, excerpt, category, and published date
3. WHEN an article is published THEN the News_Platform SHALL index title, excerpt, content, and category in Algolia
4. WHEN an article is unpublished or deleted THEN the News_Platform SHALL remove it from the Algolia index
5. WHEN no search results are found THEN the News_Platform SHALL display a helpful message with suggested categories

### Requirement 6: User Trust Level System

**User Story:** As a platform administrator, I want users to earn trust levels based on their activity, so that trusted users can post without moderation.

#### Acceptance Criteria

1. WHEN a new user registers THEN the News_Platform SHALL assign trust_level 0 (new user)
2. WHEN a user meets promotion criteria (posts created, likes received, no flags) THEN the News_Platform SHALL automatically upgrade their trust_level
3. WHEN a user's trust_level changes THEN the News_Platform SHALL sync the new level to Keycloak roles and Discourse
4. WHILE a user has trust_level 4 (leader) THEN the News_Platform SHALL grant moderation capabilities
5. IF a user receives multiple content flags THEN the News_Platform SHALL prevent automatic trust_level promotion

### Requirement 7: Moderation Queue

**User Story:** As a moderator, I want to review and manage pending content in a centralized queue, so that I can efficiently moderate community submissions.

#### Acceptance Criteria

1. WHEN content requires moderation THEN the News_Platform SHALL add it to the moderation queue with priority and timestamp
2. WHEN a moderator views the queue THEN the News_Platform SHALL display items sorted by priority and creation time
3. WHEN a moderator takes action (approve/reject/request-changes) THEN the News_Platform SHALL log the action with moderator ID and timestamp
4. WHEN a moderator assigns an item to themselves THEN the News_Platform SHALL mark it as assigned and prevent duplicate processing
5. WHEN queue items exceed SLA threshold (24 hours) THEN the News_Platform SHALL escalate by notifying senior moderators

### Requirement 8: Webhook & Sync System

**User Story:** As a system administrator, I want services to sync data automatically via webhooks, so that content is consistent across Strapi, Discourse, and Algolia.

#### Acceptance Criteria

1. WHEN Discourse approves a topic THEN the News_Platform SHALL receive webhook and create CommunityPost in Strapi
2. WHEN Strapi publishes an article THEN the News_Platform SHALL trigger webhooks to Algolia indexer and frontend revalidation
3. IF a webhook delivery fails THEN the News_Platform SHALL retry with exponential backoff up to 5 attempts
4. IF all webhook retries fail THEN the News_Platform SHALL move the payload to dead-letter queue and alert administrators
5. WHEN processing webhooks THEN the News_Platform SHALL validate payload signatures to prevent unauthorized requests

### Requirement 9: Caching & Performance

**User Story:** As a platform operator, I want the system to handle high traffic efficiently, so that users experience fast response times.

#### Acceptance Criteria

1. WHEN serving article pages THEN the News_Platform SHALL utilize CDN edge caching with appropriate cache headers
2. WHEN fetching frequently accessed data THEN the News_Platform SHALL use Redis cache with configurable TTL
3. WHEN cache is invalidated THEN the News_Platform SHALL purge CDN cache for affected URLs within 30 seconds
4. WHILE under high load THEN the News_Platform SHALL maintain response times under 500ms for 95th percentile
5. WHEN database queries are executed THEN the News_Platform SHALL use connection pooling with maximum 20 connections

### Requirement 10: Security & Access Control

**User Story:** As a security administrator, I want robust access controls and audit logging, so that the platform is protected from unauthorized access.

#### Acceptance Criteria

1. WHEN a user attempts admin actions THEN the News_Platform SHALL verify OIDC token and check role permissions
2. WHEN sensitive actions are performed (publish, delete, ban) THEN the News_Platform SHALL create immutable audit log entries
3. WHEN accessing admin panel THEN the News_Platform SHALL enforce IP allowlist for production environment
4. WHILE handling user input THEN the News_Platform SHALL sanitize content to prevent XSS and SQL injection
5. WHEN API rate limits are exceeded THEN the News_Platform SHALL return 429 status and block requests for cooldown period

### Requirement 11: Category & Tag Management

**User Story:** As an editor, I want to organize articles with categories and tags, so that readers can browse content by topic.

#### Acceptance Criteria

1. WHEN creating an article THEN the News_Platform SHALL require at least one category assignment
2. WHEN a category is created THEN the News_Platform SHALL generate a unique slug and create corresponding Discourse category
3. WHEN displaying category pages THEN the News_Platform SHALL list articles sorted by published_at descending
4. WHEN a tag is applied to multiple articles THEN the News_Platform SHALL provide a tag archive page
5. WHEN a category is deleted THEN the News_Platform SHALL reassign articles to a default category

### Requirement 12: Media Management

**User Story:** As an editor, I want to upload and manage images for articles, so that I can create visually engaging content.

#### Acceptance Criteria

1. WHEN an editor uploads an image THEN the News_Platform SHALL store it in S3-compatible storage and generate optimized variants
2. WHEN displaying images THEN the News_Platform SHALL serve WebP/AVIF formats with responsive srcset
3. WHEN an image is uploaded THEN the News_Platform SHALL validate file type (jpg, png, webp, gif) and size (max 10MB)
4. WHEN serving images THEN the News_Platform SHALL use CDN with cache headers for 1 year
5. IF image upload fails THEN the News_Platform SHALL display error message and allow retry

### Requirement 13: Notification System

**User Story:** As a user, I want to receive notifications about relevant activities, so that I stay informed about content and interactions.

#### Acceptance Criteria

1. WHEN a user's post is approved THEN the News_Platform SHALL send in-app and email notification
2. WHEN a user's post requires changes THEN the News_Platform SHALL notify with moderator feedback
3. WHEN a user is mentioned in a discussion THEN the News_Platform SHALL send notification via Discourse
4. WHEN configuring notifications THEN the News_Platform SHALL allow users to set preferences per notification type
5. WHEN sending email notifications THEN the News_Platform SHALL use templated emails with unsubscribe links

### Requirement 14: Analytics & Reporting

**User Story:** As an administrator, I want to view platform analytics, so that I can make data-driven decisions.

#### Acceptance Criteria

1. WHEN viewing admin dashboard THEN the News_Platform SHALL display pending queue counts, published articles count, and active users
2. WHEN generating moderation reports THEN the News_Platform SHALL show time-to-approve metrics and moderator activity
3. WHEN tracking article performance THEN the News_Platform SHALL record page views and integrate with Google Analytics
4. WHEN exporting audit logs THEN the News_Platform SHALL provide CSV download with date range filter
5. WHEN displaying real-time metrics THEN the News_Platform SHALL update dashboard every 60 seconds

### Requirement 15: Backup & Disaster Recovery

**User Story:** As a system administrator, I want automated backups and recovery procedures, so that data is protected against loss.

#### Acceptance Criteria

1. WHEN scheduled backup runs THEN the News_Platform SHALL create PostgreSQL snapshot and store in versioned object storage
2. WHEN backup completes THEN the News_Platform SHALL verify integrity and log success/failure status
3. WHEN disaster recovery is needed THEN the News_Platform SHALL support point-in-time recovery within 24 hours
4. WHEN backup retention period expires THEN the News_Platform SHALL automatically delete old backups per retention policy
5. WHEN quarterly DR test is scheduled THEN the News_Platform SHALL support full restore to staging environment
