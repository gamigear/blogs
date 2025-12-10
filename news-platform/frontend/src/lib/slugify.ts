/**
 * Bảng chuyển đổi ký tự tiếng Việt có dấu sang không dấu
 */
const vietnameseMap: Record<string, string> = {
  // Chữ a
  'à': 'a', 'á': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
  'ă': 'a', 'ằ': 'a', 'ắ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
  'â': 'a', 'ầ': 'a', 'ấ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',
  'À': 'A', 'Á': 'A', 'Ả': 'A', 'Ã': 'A', 'Ạ': 'A',
  'Ă': 'A', 'Ằ': 'A', 'Ắ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ặ': 'A',
  'Â': 'A', 'Ầ': 'A', 'Ấ': 'A', 'Ẩ': 'A', 'Ẫ': 'A', 'Ậ': 'A',
  
  // Chữ e
  'è': 'e', 'é': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
  'ê': 'e', 'ề': 'e', 'ế': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e',
  'È': 'E', 'É': 'E', 'Ẻ': 'E', 'Ẽ': 'E', 'Ẹ': 'E',
  'Ê': 'E', 'Ề': 'E', 'Ế': 'E', 'Ể': 'E', 'Ễ': 'E', 'Ệ': 'E',
  
  // Chữ i
  'ì': 'i', 'í': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
  'Ì': 'I', 'Í': 'I', 'Ỉ': 'I', 'Ĩ': 'I', 'Ị': 'I',
  
  // Chữ o
  'ò': 'o', 'ó': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
  'ô': 'o', 'ồ': 'o', 'ố': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o',
  'ơ': 'o', 'ờ': 'o', 'ớ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o',
  'Ò': 'O', 'Ó': 'O', 'Ỏ': 'O', 'Õ': 'O', 'Ọ': 'O',
  'Ô': 'O', 'Ồ': 'O', 'Ố': 'O', 'Ổ': 'O', 'Ỗ': 'O', 'Ộ': 'O',
  'Ơ': 'O', 'Ờ': 'O', 'Ớ': 'O', 'Ở': 'O', 'Ỡ': 'O', 'Ợ': 'O',
  
  // Chữ u
  'ù': 'u', 'ú': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
  'ư': 'u', 'ừ': 'u', 'ứ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u',
  'Ù': 'U', 'Ú': 'U', 'Ủ': 'U', 'Ũ': 'U', 'Ụ': 'U',
  'Ư': 'U', 'Ừ': 'U', 'Ứ': 'U', 'Ử': 'U', 'Ữ': 'U', 'Ự': 'U',
  
  // Chữ y
  'ỳ': 'y', 'ý': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
  'Ỳ': 'Y', 'Ý': 'Y', 'Ỷ': 'Y', 'Ỹ': 'Y', 'Ỵ': 'Y',
  
  // Chữ đ
  'đ': 'd', 'Đ': 'D',
};

/**
 * Loại bỏ dấu tiếng Việt
 */
export function removeVietnameseTones(str: string): string {
  return str
    .split('')
    .map(char => vietnameseMap[char] || char)
    .join('');
}

/**
 * Tạo slug từ tiêu đề tiếng Việt
 * @param title - Tiêu đề cần chuyển đổi
 * @returns Slug đã được chuẩn hóa
 * 
 * @example
 * slugify("Một ngày mới của chúng ta") // "mot-ngay-moi-cua-chung-ta"
 * slugify("Đây là bài viết số 1!") // "day-la-bai-viet-so-1"
 */
export function slugify(title: string): string {
  if (!title) return '';
  
  return removeVietnameseTones(title)
    .toLowerCase()                      // Chuyển thành chữ thường
    .trim()                             // Xóa khoảng trắng đầu cuối
    .replace(/[^\w\s-]/g, '')           // Xóa ký tự đặc biệt (giữ lại chữ, số, khoảng trắng, gạch ngang)
    .replace(/\s+/g, '-')               // Thay khoảng trắng bằng gạch ngang
    .replace(/-+/g, '-')                // Gộp nhiều gạch ngang liên tiếp thành 1
    .replace(/^-+|-+$/g, '');           // Xóa gạch ngang đầu cuối
}

/**
 * Tạo slug unique bằng cách thêm số đếm nếu slug đã tồn tại
 * @param title - Tiêu đề cần chuyển đổi
 * @param existingSlugs - Danh sách slug đã tồn tại
 * @returns Slug unique
 */
export function slugifyUnique(title: string, existingSlugs: string[]): string {
  const baseSlug = slugify(title);
  
  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug;
  }
  
  let counter = 1;
  let newSlug = `${baseSlug}-${counter}`;
  
  while (existingSlugs.includes(newSlug)) {
    counter++;
    newSlug = `${baseSlug}-${counter}`;
  }
  
  return newSlug;
}

export default slugify;
