import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-white mb-3">News Platform</h3>
            <p className="text-sm">Tin tức và cộng đồng thảo luận</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Liên kết</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">Giới thiệu</Link></li>
              <li><Link href="/contact" className="hover:text-white">Liên hệ</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Chính sách</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Cộng đồng</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/community" className="hover:text-white">Diễn đàn</Link></li>
              <li><Link href="/community/guidelines" className="hover:text-white">Quy định</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          © 2024 News Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
