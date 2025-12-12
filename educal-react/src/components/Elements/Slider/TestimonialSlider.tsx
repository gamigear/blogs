"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import Image from "next/image";
import img1 from "../../../../public/assets/img/testimonial/home-3/testi-1.jpg";
import img2 from "../../../../public/assets/img/testimonial/home-3/testi-2.jpg";
import img3 from "../../../../public/assets/img/testimonial/home-3/testi-3.jpg";
import img4 from "../../../../public/assets/img/testimonial/home-3/testi-2.jpg";

const TestimonialSlider = () => {
  return (
    <section
      className="testimonial__area pt-145 pb-150"
      style={{
        backgroundImage: `url(${"assets/img/testimonial/home-3/testimonial-bg-3.jpg"})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial__slider-3">
              <h3 className="testimonial__title">
                Cộng đồng <br /> Game thủ nói gì
              </h3>
              <div className="testimonial__slider-wrapper testimonial-text mb-35">
                <div>
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={true}
                    loop={true}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          "Từ khi biết đến GameHub, mình không còn bỏ lỡ bất kỳ
                          sự kiện nào của Liên Quân nữa. Đã nhận được rất nhiều
                          skin và tướng miễn phí. Cảm ơn GameHub!"
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>Minh Tuấn,</h4>
                          <span>Game thủ Liên Quân</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img1}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          "Giao diện đẹp, dễ sử dụng. Thông tin sự kiện được cập
                          nhật nhanh chóng và chính xác. Đây là trang web mình
                          check mỗi ngày để không bỏ lỡ event nào."
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>Thu Hằng,</h4>
                          <span>Game thủ Genshin Impact</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img2}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          "Nhờ GameHub mà mình đã nhận được rất nhiều phần thưởng
                          từ các sự kiện Free Fire. Highly recommend cho tất cả
                          game thủ!"
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>Hoàng Nam,</h4>
                          <span>Game thủ Free Fire</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img3}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          "Trang web tổng hợp sự kiện game tốt nhất mà mình từng
                          sử dụng. Cập nhật nhanh, đầy đủ thông tin và hướng dẫn
                          chi tiết cách tham gia."
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>Lan Anh,</h4>
                          <span>Game thủ PUBG Mobile</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img4}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial__video ml-70 fix">
              <div className="testimonial__thumb-3">
                <iframe
                  src="https://www.youtube.com/embed/Rr0uFzAOQus"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className="testimonial__video-content d-sm-flex">
                <div className="testimonial__video-icon mr-20 mb-20">
                  <span>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                </div>
                <div className="testimonial__video-text">
                  <h4>Lợi ích khi sử dụng GameHub</h4>
                  <p>
                    Cập nhật nhanh chóng các sự kiện game mini, hướng dẫn chi tiết
                    cách tham gia và nhận thưởng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
