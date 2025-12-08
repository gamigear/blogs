/**
 * Markdown Rendering Module
 * Requirements: 4.5 - Preserve heading hierarchy, support code blocks, images, links
 */

import { marked } from 'marked';

// Configure marked options
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Convert \n to <br>
});

// Custom renderer for enhanced features
const renderer = new marked.Renderer();

// Preserve heading hierarchy with IDs for anchor links
renderer.heading = (text, level) => {
  const slug = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  return `<h${level} id="${slug}" class="heading-${level}">${text}</h${level}>`;
};

// Enhanced image rendering with lazy loading and responsive
renderer.image = (href, title, text) => {
  const titleAttr = title ? ` title="${title}"` : '';
  return `<figure class="article-image">
    <img src="${href}" alt="${text}" loading="lazy" decoding="async"${titleAttr} />
    ${text ? `<figcaption>${text}</figcaption>` : ''}
  </figure>`;
};

// Enhanced link rendering with external link handling
renderer.link = (href, title, text) => {
  const isExternal = href?.startsWith('http') && !href?.includes(process.env.NEXT_PUBLIC_SITE_URL || '');
  const titleAttr = title ? ` title="${title}"` : '';
  const externalAttrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
  
  return `<a href="${href}"${titleAttr}${externalAttrs}>${text}</a>`;
};

// Enhanced code block rendering with syntax highlighting placeholder
renderer.code = (code, language) => {
  const lang = language || 'plaintext';
  const escapedCode = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  return `<pre class="code-block" data-language="${lang}"><code class="language-${lang}">${escapedCode}</code></pre>`;
};

// Inline code
renderer.codespan = (code) => {
  return `<code class="inline-code">${code}</code>`;
};

// Blockquote styling
renderer.blockquote = (quote) => {
  return `<blockquote class="article-blockquote">${quote}</blockquote>`;
};

// Table rendering
renderer.table = (header, body) => {
  return `<div class="table-wrapper"><table class="article-table"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
};

marked.use({ renderer });

/**
 * Render markdown to HTML
 * Requirements: 4.5
 */
export function renderMarkdown(content: string): string {
  if (!content) return '';
  return marked.parse(content) as string;
}

/**
 * Extract table of contents from markdown
 */
export function extractTableOfContents(content: string): Array<{ level: number; text: string; slug: string }> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: Array<{ level: number; text: string; slug: string }> = [];
  
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const slug = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    toc.push({ level, text, slug });
  }
  
  return toc;
}

/**
 * Calculate reading time from markdown content
 */
export function calculateReadingTime(content: string): number {
  // Remove markdown syntax for accurate word count
  const plainText = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1') // Keep link text
    .replace(/[#*_~`]/g, '') // Remove markdown symbols
    .trim();
  
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Extract excerpt from markdown content
 */
export function extractExcerpt(content: string, maxLength = 200): string {
  // Remove markdown syntax
  const plainText = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1')
    .replace(/^#+\s+.+$/gm, '') // Remove headings
    .replace(/[#*_~`]/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  // Cut at word boundary
  const truncated = plainText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return truncated.substring(0, lastSpace) + '...';
}
