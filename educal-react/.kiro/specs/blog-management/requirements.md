# Requirements Document

## Introduction

Chức năng Quản lý Blog toàn diện cho hệ thống website giáo dục/gaming. Hệ thống cho phép quản trị viên tạo, chỉnh sửa, xóa bài viết blog, quản lý danh mục blog và tags. Phía frontend hiển thị danh sách bài viết theo danh mục, tags, bài viết liên quan và hỗ trợ tìm kiếm/lọc bài viết.

## Glossary

- **Blog**: Bài viết chứa nội dung tin tức, hướng dẫn hoặc thông tin liên quan đến website
- **BlogCategory**: Danh mục phân loại bài viết blog (khác với Category cho courses/products)
- **BlogTag**: Nhãn/thẻ gắn với bài viết để phân loại chi tiết hơn
- **RelatedBlog**: Bài viết có liên quan dựa trên cùng danh mục hoặc tags
- **Admin**: Người dùng có quyền quản trị hệ thống
- **Frontend**: Giao diện người dùng cuối xem bài viết
- **Backend**: Giao diện quản trị viên quản lý nội dung

## Requirements

### Requirement 1: Quản lý Danh mục Blog (BlogCategory)

**User Story:** As an Admin, I want to manage blog categories, so that I can organize blog posts into logical groups.

#### Acceptance Criteria

1. WHEN an Admin creates a new blog category with title and optional description THEN the System SHALL save the category to the database and display it in the category list
2. WHEN an Admin edits an existing blog category THEN the System SHALL update the category information and reflect changes immediately
3. WHEN an Admin deletes a blog category that has no associated blogs THEN the System SHALL remove the category from the database
4. WHEN an Admin attempts to delete a blog category that has associated blogs THEN the System SHALL display a warning and require confirmation before proceeding
5. WHEN displaying the category list THEN the System SHALL show category title, description, blog count, and status

### Requirement 2: Quản lý Tags Blog (BlogTag)

**User Story:** As an Admin, I want to manage blog tags, so that I can add detailed labels to blog posts for better content discovery.

#### Acceptance Criteria

1. WHEN an Admin creates a new blog tag with name and optional slug THEN the System SHALL save the tag and auto-generate slug if not provided
2. WHEN an Admin edits an existing blog tag THEN the System SHALL update the tag information
3. WHEN an Admin deletes a blog tag THEN the System SHALL remove the tag and unlink it from all associated blogs
4. WHEN displaying the tag list THEN the System SHALL show tag name, slug, and usage count
5. WHEN an Admin creates a tag with a duplicate name THEN the System SHALL reject the creation and display an error message

### Requirement 3: Quản lý Bài viết Blog

**User Story:** As an Admin, I want to create and manage blog posts, so that I can publish content for website visitors.

#### Acceptance Criteria

1. WHEN an Admin creates a new blog post with title, content, category, and tags THEN the System SHALL save the blog and associate it with selected category and tags
2. WHEN an Admin edits an existing blog post THEN the System SHALL update all modified fields including category and tag associations
3. WHEN an Admin deletes a blog post THEN the System SHALL remove the blog and its tag associations from the database
4. WHEN an Admin publishes a blog post THEN the System SHALL set the status to published and record the publishedAt timestamp
5. WHEN an Admin saves a blog as draft THEN the System SHALL save the blog with draft status without publishing
6. WHEN displaying the blog list THEN the System SHALL show title, category, tags, author, status, views, and publish date with sorting and filtering options

### Requirement 4: Hiển thị Danh sách Blog theo Danh mục (Frontend)

**User Story:** As a Visitor, I want to browse blogs by category, so that I can find content relevant to my interests.

#### Acceptance Criteria

1. WHEN a Visitor navigates to a category page THEN the System SHALL display all published blogs belonging to that category
2. WHEN displaying blogs in a category THEN the System SHALL show blog title, excerpt, image, author, date, and tags
3. WHEN a category has more than 10 blogs THEN the System SHALL paginate results with 10 blogs per page
4. WHEN a category has no published blogs THEN the System SHALL display an appropriate empty state message

### Requirement 5: Hiển thị Danh sách Blog theo Tag (Frontend)

**User Story:** As a Visitor, I want to browse blogs by tag, so that I can discover related content across categories.

#### Acceptance Criteria

1. WHEN a Visitor clicks on a tag THEN the System SHALL display all published blogs associated with that tag
2. WHEN displaying blogs by tag THEN the System SHALL show blog title, excerpt, image, category, author, and date
3. WHEN a tag has more than 10 blogs THEN the System SHALL paginate results with 10 blogs per page
4. WHEN a tag has no published blogs THEN the System SHALL display an appropriate empty state message

### Requirement 6: Hiển thị Bài viết Liên quan

**User Story:** As a Visitor, I want to see related blog posts, so that I can discover more content of interest.

#### Acceptance Criteria

1. WHEN a Visitor views a blog post THEN the System SHALL display up to 4 related blogs based on matching category or tags
2. WHEN determining related blogs THEN the System SHALL prioritize blogs with the same category, then blogs sharing common tags
3. WHEN fewer than 4 related blogs exist THEN the System SHALL display all available related blogs
4. WHEN no related blogs exist THEN the System SHALL hide the related blogs section

### Requirement 7: Tìm kiếm và Lọc Blog (Frontend)

**User Story:** As a Visitor, I want to search and filter blogs, so that I can quickly find specific content.

#### Acceptance Criteria

1. WHEN a Visitor enters a search term THEN the System SHALL return blogs with matching title or content
2. WHEN a Visitor filters by category THEN the System SHALL display only blogs in the selected category
3. WHEN a Visitor filters by tag THEN the System SHALL display only blogs with the selected tag
4. WHEN combining search and filters THEN the System SHALL apply all criteria and return matching results
5. WHEN no results match the search criteria THEN the System SHALL display an appropriate message with suggestions

### Requirement 8: API Endpoints cho Blog

**User Story:** As a Developer, I want RESTful API endpoints for blog management, so that the frontend can interact with blog data.

#### Acceptance Criteria

1. WHEN a client requests GET /api/blogs THEN the System SHALL return a paginated list of published blogs with category and tag information
2. WHEN a client requests GET /api/blogs/[id] THEN the System SHALL return the full blog details including category, tags, and author
3. WHEN a client requests GET /api/blog-categories THEN the System SHALL return all active blog categories with blog counts
4. WHEN a client requests GET /api/blog-tags THEN the System SHALL return all blog tags with usage counts
5. WHEN a client requests GET /api/blogs?category=[id] THEN the System SHALL return blogs filtered by the specified category
6. WHEN a client requests GET /api/blogs?tag=[slug] THEN the System SHALL return blogs filtered by the specified tag
7. WHEN serializing blog data to JSON THEN the System SHALL include all required fields in a consistent format
8. WHEN deserializing blog data from JSON THEN the System SHALL validate and parse all fields correctly, with round-trip consistency (serialize then deserialize produces equivalent data)
