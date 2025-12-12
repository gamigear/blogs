"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import Image from "next/image";
import TestimonialImg from "../../../public/assets/img/testimonial/testi-1.jpg";
import TestimonialImg1 from "../../../public/assets/img/testimonial/testi-1.jpg";
import TestimonialImgBg from "../../../public/assets/img/testimonial/testimonial-bg.jpg";

const TestimonialSection = () => {
  return (
    <section
      className="testimonial__area testimonial__overlay pt-175 pb-170"
      style={{ backgroundImage: `url(${TestimonialImgBg.src})` }}
    >
      <div className="container">
        <div className="col-xxl-12">
          <div className="testimonial__slider p-relative">
            <div className="testimonial__slider-inner">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg}
                        style={{ width: "80px", height: "80px" }}
                        alt="image not found"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        " Nhờ GameHub mà mình không bỏ lỡ sự kiện nào của Liên Quân, 
                        đã nhận được rất nhiều skin miễn phí! "
                      </p>

                      <div className="testimonial__info">
                        <h4>Minh Tuấn</h4>
                        <span>Game thủ Liên Quân</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg1}
                        style={{ width: "80px", height: "80px" }}
                        alt="img not found"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        " Trang web rất tiện lợi, cập nhật nhanh chóng các sự kiện 
                        từ nhiều game khác nhau. Highly recommend! "
                      </p>

                      <div className="testimonial__info">
                        <h4>Thu Hằng</h4>
                        <span>Game thủ Genshin Impact</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg}
                        style={{ width: "80px", height: "80px" }}
                        alt="img not found"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        " Giao diện đẹp, dễ sử dụng. Mình check GameHub mỗi ngày 
                        để không bỏ lỡ event nào của Free Fire. "
                      </p>

                      <div className="testimonial__info">
                        <h4>Hoàng Nam</h4>
                        <span>Game thủ Free Fire</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="swiper-button-next swiper-nav">
              <i className="far fa-arrow-right"></i>
            </div>
            <div className="swiper-button-prev swiper-nav">
              <i className="far fa-arrow-left"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
