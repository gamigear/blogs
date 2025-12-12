import CourseImgOne from "../../public/assets/img/course/course-1.jpg";
import CourseImgTwo from "../../public/assets/img/course/course-2.jpg";
import CourseImgThree from "../../public/assets/img/course/course-3.jpg";
import CourseImgFour from "../../public/assets/img/course/course-4.jpg";
import CourseImgFive from "../../public/assets/img/course/course-5.jpg";
import CourseImgSix from "../../public/assets/img/course/course-6.jpg";

import TeacherImgOne from "../../public/assets/img/course/teacher/teacher-1.jpg";
import TeacherImgTwo from "../../public/assets/img/course/teacher/teacher-2.jpg";
import TeacherImgOnThree from "../../public/assets/img/course/teacher/teacher-3.jpg";
import TeacherImgFour from "../../public/assets/img/course/teacher/teacher-4.jpg";
import TeacherImgFive from "../../public/assets/img/course/teacher/teacher-5.jpg";
import TeacherImgSix from "../../public/assets/img/course/teacher/teacher-6.jpg";

import { coursesType } from "@/interFace/interFace";

const courses_data: coursesType[] = [
  {
    id: 1,
    image: CourseImgOne,
    category: "Facebook",
    lesson: 7,
    ratingAve: 4.8,
    ratingCount: 156,
    ratings: 5,
    title: "Mini Game Tết 2025 - Lắc Lì Xì nhận quà khủng",
    tutorImg: TeacherImgOne,
    author: "Facebook VN",
    videoUrl: "a-CEyHSNrx0",
    price: 0,
    oldPrice: 0,
    quantity: 0,
  },
  {
    id: 2,
    image: CourseImgTwo,
    category: "TikTok",
    categoryClass: "sky-blue",
    lesson: 5,
    ratingAve: 4.7,
    ratingCount: 203,
    ratings: 5,
    title: "TikTok Shop - Săn deal 1K nhận voucher giảm giá",
    tutorImg: TeacherImgTwo,
    author: "TikTok",
    price: 0,
    priceClass: "sky-blue",
    oldPrice: 0,
    videoUrl: "a-CEyHSNrx0",
    quantity: 0,
  },
  {
    id: 3,
    image: CourseImgThree,
    category: "Zalo",
    categoryClass: "green",
    lesson: 10,
    ratingAve: 4.9,
    ratingCount: 89,
    ratings: 5,
    title: "Zalo Pay - Quay số trúng thưởng tiền mặt",
    tutorImg: TeacherImgOnThree,
    author: "Zalo",
    price: 0,
    priceClass: "green",
    oldPrice: 0,
    videoUrl: "dDTWCbtAh2Y",
    quantity: 0,
  },
  {
    id: 4,
    image: CourseImgSix,
    category: "Shopee",
    categoryClass: "pink",
    lesson: 14,
    ratingAve: 4.6,
    ratingCount: 178,
    ratings: 5,
    title: "Shopee Lắc Xu - Nhận xu miễn phí mỗi ngày",
    tutorImg: TeacherImgSix,
    author: "Shopee",
    price: 0,
    priceClass: "pink",
    oldPrice: 0,
    videoUrl: "lvYM9tHRz0M",
    quantity: 0,
  },
  {
    id: 5,
    image: CourseImgFour,
    category: "Lazada",
    categoryClass: "blue",
    lesson: 21,
    ratingAve: 4.8,
    ratingCount: 234,
    ratings: 5,
    title: "Lazada Game - Chơi game nhận voucher giảm giá",
    tutorImg: TeacherImgFour,
    author: "Lazada",
    price: 0,
    priceClass: "blue",
    videoUrl: "ybTdykZpbII",
    oldPrice: 0,
    quantity: 0,
  },
  {
    id: 6,
    image: CourseImgFive,
    category: "MoMo",
    categoryClass: "orange",
    lesson: 3,
    ratingAve: 4.5,
    ratingCount: 145,
    ratings: 5,
    title: "MoMo Lắc Xì - Lắc điện thoại nhận lì xì",
    tutorImg: TeacherImgFive,
    author: "MoMo",
    price: 0,
    priceClass: "orange",
    oldPrice: 0,
    videoUrl: "Egy-jJUNJ3A",
    quantity: 0,
  },
];

export default courses_data;
