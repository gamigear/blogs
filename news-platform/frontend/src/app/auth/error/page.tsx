'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const errorMessages: Record<string, { title: string; description: string }> = {
    Configuration: {
      title: 'Lỗi cấu hình',
      description: 'Có vấn đề với cấu hình máy chủ xác thực. Vui lòng liên hệ quản trị viên.',
    },
    AccessDenied: {
      title: 'Truy cập bị từ chối',
      description: 'Bạn không có quyền truy cập vào tài nguyên này.',
    },
    Verification: {
      title: 'Xác minh thất bại',
      description: 'Liên kết xác minh đã hết hạn hoặc đã được sử dụng.',
    },
    OAuthSignin: {
      title: 'Lỗi đăng nhập',
      description: 'Không thể bắt đầu quá trình đăng nhập. Vui lòng thử lại.',
    },
    OAuthCallback: {
      title: 'Lỗi xác thực',
      description: 'Có lỗi xảy ra trong quá trình xác thực. Vui lòng thử lại.',
    },
    OAuthCreateAccount: {
      title: 'Không thể tạo tài khoản',
      description: 'Không thể tạo tài khoản với thông tin được cung cấp.',
    },
    EmailCreateAccount: {
      title: 'Không thể tạo tài khoản',
      description: 'Không thể tạo tài khoản với email này.',
    },
    Callback: {
      title: 'Lỗi callback',
      description: 'Có lỗi xảy ra trong quá trình xử lý. Vui lòng thử lại.',
    },
    OAuthAccountNotLinked: {
      title: 'Tài khoản chưa liên kết',
      description: 'Email này đã được sử dụng với phương thức đăng nhập khác.',
    },
    EmailSignin: {
      title: 'Lỗi gửi email',
      description: 'Không thể gửi email đăng nhập. Vui lòng thử lại.',
    },
    CredentialsSignin: {
      title: 'Đăng nhập thất bại',
      description: 'Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.',
    },
    SessionRequired: {
      title: 'Yêu cầu đăng nhập',
      description: 'Bạn cần đăng nhập để truy cập trang này.',
    },
    Default: {
      title: 'Lỗi xác thực',
      description: 'Có lỗi xảy ra trong quá trình xác thực. Vui lòng thử lại.',
    },
  };

  const errorInfo = errorMessages[error || 'Default'] || errorMessages.Default;

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">{errorInfo.title}</h1>
        <p className="text-gray-600 mb-6">{errorInfo.description}</p>

        {error && (
          <p className="text-xs text-gray-400 mb-6">Mã lỗi: {error}</p>
        )}

        <div className="space-y-3">
          <Link
            href="/auth/signin"
            className="block w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Thử đăng nhập lại
          </Link>
          <Link
            href="/"
            className="block w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-6"></div>
          <div className="h-12 bg-gray-200 rounded mb-3"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-4">
      <Suspense fallback={<LoadingFallback />}>
        <AuthErrorContent />
      </Suspense>
    </div>
  );
}
