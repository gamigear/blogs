import BlogImg from "../../public/assets/img/blog/blog-1.jpg";
import BlogImgTwo from "../../public/assets/img/blog/blog-2.jpg";
import BlogImgThree from "../../public/assets/img/blog/blog-3.jpg";
import BlogImgFour from "../../public/assets/img/blog/blog-4.jpg";
import BlogImgFive from "../../public/assets/img/blog/blog-5.jpg";
import BlogImgSix from "../../public/assets/img/blog/blog-6.jpg";
import authorImg from "../../public/assets/img/blog/author/author-1.jpg";
import authorImgTwo from "../../public/assets/img/blog/author/author-2.jpg";
import authorImgThree from "../../public/assets/img/blog/author/author-3.jpg";
import { blogType } from "@/interFace/interFace";

const blog_data: blogType[] = [
  {
    id: 1,
    image: BlogImg,
    blogTag: "Liên Quân",
    title: "Tổng hợp code Liên Quân mới nhất tháng 12/2025",
    authorImg: authorImg,
    author: "Admin",
    date: "11/12/2025",
  },
  {
    id: 2,
    image: BlogImgTwo,
    blogTag: "Free Fire",
    blogWrapperClass: "purple",
    title: "Hướng dẫn nhận skin súng miễn phí trong Free Fire",
    authorImg: authorImgTwo,
    author: "GameHub",
    date: "10/12/2025",
  },
  {
    id: 3,
    image: BlogImgThree,
    blogTag: "Genshin",
    blogWrapperClass: "pink",
    title: "Cách farm Primogem hiệu quả cho người chơi mới",
    authorImg: authorImgThree,
    author: "Admin",
    date: "09/12/2025",
  },
  {
    id: 4,
    image: BlogImg,
    blogTag: "PUBG Mobile",
    title: "Top 10 mẹo leo rank hiệu quả trong PUBG Mobile",
    authorImg: authorImg,
    author: "GameHub",
    date: "08/12/2025",
  },
  {
    id: 5,
    image: BlogImgTwo,
    blogTag: "Mobile Legends",
    blogWrapperClass: "purple",
    title: "Cập nhật meta mới nhất Mobile Legends tháng 12",
    authorImg: authorImgTwo,
    author: "Admin",
    date: "07/12/2025",
  },
  {
    id: 6,
    image: BlogImgThree,
    blogTag: "Honkai",
    blogWrapperClass: "pink",
    title: "Hướng dẫn build nhân vật mạnh nhất Honkai Star Rail",
    authorImg: authorImgThree,
    author: "GameHub",
    date: "06/12/2025",
  },
  {
    id: 7,
    image: BlogImgFour,
    blogTag: "Liên Quân",
    blogWrapperClass: "green",
    title: "Tướng mới Liên Quân: Kỹ năng và cách chơi hiệu quả",
    authorImg: authorImg,
    author: "Admin",
    date: "05/12/2025",
  },
  {
    id: 8,
    image: BlogImgFive,
    blogTag: "Free Fire",
    blogWrapperClass: "orange",
    title: "Sự kiện Free Fire x One Piece: Cách nhận skin Luffy",
    authorImg: authorImgTwo,
    author: "GameHub",
    date: "04/12/2025",
  },
  {
    id: 9,
    image: BlogImgSix,
    blogTag: "Genshin",
    blogWrapperClass: "blue",
    title: "Leak banner 4.4: Nhân vật và vũ khí sắp ra mắt",
    authorImg: authorImgThree,
    author: "Admin",
    date: "03/12/2025",
  },
];

export default blog_data;
