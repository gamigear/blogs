import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <>
      <li>
        <Link href="/">Trang chủ</Link>
      </li>
      <li className="has-dropdown">
        <Link href="/course-grid">Sự kiện</Link>
        <ul className="submenu">
          <li>
            <Link href="/course-grid">Danh sách sự kiện</Link>
          </li>
          <li>
            <Link href="/course-details">Chi tiết sự kiện</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link href="/blog">Tin tức</Link>
        <ul className="submenu">
          <li>
            <Link href="/blog">Tất cả tin tức</Link>
          </li>
          <li>
            <Link href="/blog-details">Chi tiết bài viết</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/about">Giới thiệu</Link>
      </li>
      <li>
        <Link href="/contact">Liên hệ</Link>
      </li>
    </>
  );
};

export default Menu;
