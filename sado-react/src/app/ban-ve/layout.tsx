import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VéXanh - Nền Tảng Đặt Vé Du Lịch Trực Tuyến",
  description: "VéXanh - Đặt vé du lịch trực tuyến hàng đầu Việt Nam. Khám phá các điểm đến tuyệt vời với giá tốt nhất.",
};

export default function BanVeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
