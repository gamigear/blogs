"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";

import destinationImg1 from "/public/images/popular/popular-1.jpg";
import destinationImg2 from "/public/images/popular/popular-2.jpg";
import destinationImg3 from "/public/images/popular/popular-3.jpg";
import destinationImg4 from "/public/images/popular/popular-4.jpg";
import destinationImg5 from "/public/images/popular/popular-5.jpg";
import destinationImg6 from "/public/images/popular/popular-6.jpg";

const PopularDestination = () => {
  return (
    <>
      <div className="popular-area pb-150">
        <div className="container">
          <div className="mb-30">
            <div className="section-title left-title mb-0">
              <span className="top-title">HẤP DẪN NHẤT</span>
              <h2>Điểm Đến Phổ Biến</h2>
            </div>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="destination-slider"
          >
            <SwiperSlide>
              <Link
                href="/stay-details"
                className="popular-single-item text-decoration-none d-block"
              >
                <Image src={destinationImg1} alt="destination" />
                <h3>Đà Nẵng</h3>
                <span>Giá từ 3.200.000đ</span>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href="/stay-details"
                className="popular-single-item text-decoration-none d-block"
              >
                <Image src={destinationImg2} alt="destination" />
                <h3>Phú Quốc</h3>
                <span>Giá từ 1.480.000đ</span>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href="/stay-details"
                className="popular-single-item text-decoration-none d-block"
              >
                <Image src={destinationImg3} alt="destination" />
                <h3>Hạ Long</h3>
                <span>Giá từ 4.600.000đ</span>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href="/stay-details"
                className="popular-single-item text-decoration-none d-block"
              >
                <Image src={destinationImg4} alt="destination" />
                <h3>Nha Trang</h3>
                <span>Giá từ 7.210.000đ</span>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href="/stay-details"
                className="popular-single-item text-decoration-none d-block"
              >
                <Image src={destinationImg5} alt="destination" />
                <h3>Sapa</h3>
                <span>Giá từ 2.150.000đ</span>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href="/stay-details"
                className="popular-single-item text-decoration-none d-block"
              >
                <Image src={destinationImg6} alt="destination" />
                <h3>Huế</h3>
                <span>Giá từ 6.210.000đ</span>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href="/stay-details"
                className="popular-single-item text-decoration-none d-block"
              >
                <Image src={destinationImg1} alt="destination" />
                <h3>Hội An</h3>
                <span>Giá từ 3.200.000đ</span>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href="/stay-details"
                className="popular-single-item text-decoration-none d-block"
              >
                <Image src={destinationImg2} alt="destination" />
                <h3>Đà Lạt</h3>
                <span>Giá từ 1.480.000đ</span>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PopularDestination;
