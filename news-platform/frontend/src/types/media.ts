export interface MediaFile {
  id: number;
  filename: string;
  original_filename: string;
  mime_type: string;
  size: number;
  width?: number;
  height?: number;
  url: string;
  thumbnail_url?: string;
  alt_text?: string;
  caption?: string;
  folder: string;
  uploaded_by: number;
  uploaded_by_name?: string;
  created_at: string;
  updated_at: string;
}

export interface MediaUploadOptions {
  convertToWebp: boolean;
  quality: number;
  folder?: string;
  alt_text?: string;
  caption?: string;
}

export interface MediaListResponse {
  files: MediaFile[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface MediaUploadResponse {
  success: boolean;
  file?: MediaFile;
  error?: string;
}
