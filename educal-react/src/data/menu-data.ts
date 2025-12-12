interface MenuItem {
  id: number;
  hasDropdown?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: any[];
  pages?: boolean;
}

const mobile_menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    title: "Trang chủ",
    link: "/",
  },
  {
    id: 2,
    hasDropdown: true,
    title: "Sự kiện",
    link: "/course-grid",
    pluseIncon: true,
    submenus: [
      { title: "Danh sách sự kiện", link: "/course-grid" },
      { title: "Chi tiết sự kiện", link: "/course-details" },
    ],
  },
  {
    id: 3,
    hasDropdown: true,
    title: "Tin tức",
    link: "/blog",
    pluseIncon: true,
    submenus: [
      { title: "Tin tức", link: "/blog" },
      { title: "Chi tiết bài viết", link: "/blog-details" },
    ],
  },
  {
    id: 4,
    hasDropdown: true,
    title: "Trang khác",
    link: "/about",
    submenus: [
      { title: "Giới thiệu", link: "/about" },
      { title: "Đăng nhập", link: "/sign-in" },
      { title: "Đăng ký", link: "/sign-up" },
      { title: "Điều khoản sử dụng", link: "/terms-conditions" },
      { title: "Chính sách bảo mật", link: "/policy-privacy" },
    ],
  },
  {
    id: 5,
    hasDropdown: false,
    title: "Liên hệ",
    link: "/contact",
  },
];

export default mobile_menu_data;
