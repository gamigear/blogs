"use client"; 

import Image from "next/image";

import HowItWorksImg1 from "/public/images/works/works-1.jpg";
import HowItWorksImg2 from "/public/images/works/works-2.jpg";
import HowItWorksImg3 from "/public/images/works/works-3.jpg";
import HowItWorksImg4 from "/public/images/works/works-4.jpg";
import shape1 from "/public/images/shape/shape-5.png";

const HowItWorks = () => {
  return (
    <>
      <div className="works-area pt-175 pb-150">
        <div className="container">
          <div className="section-title">
            <span className="top-title">CÁCH THỨC HOẠT ĐỘNG</span>
            <h2>Hãy Tìm Điểm Đến Mơ Ước Và Tận Hưởng</h2>
          </div>

          <div className="position-relative z-1">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="works-single-item">
                  <div className="works-single-img">
                    <Image src={HowItWorksImg1} alt="works" />
                    <span className="count">01</span>
                  </div>
                  <h4>Đặt Vé & Thư Giãn</h4>
                  <p>
                    Chọn điểm đến yêu thích và đặt vé chỉ với vài thao tác đơn giản
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="works-single-item">
                  <div className="works-single-img">
                    <Image src={HowItWorksImg2} alt="works" />
                    <span className="count">02</span>
                  </div>
                  <h4>Danh Sách Thông Minh</h4>
                  <p>
                    Hệ thống gợi ý thông minh giúp bạn lựa chọn tour phù hợp nhất
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="works-single-item">
                  <div className="works-single-img">
                    <Image src={HowItWorksImg3} alt="works" />
                    <span className="count">03</span>
                  </div>
                  <h4>Giá Cả Hợp Lý</h4>
                  <p>
                    Cam kết giá tốt nhất thị trường với nhiều ưu đãi hấp dẫn
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="works-single-item">
                  <div className="works-single-img">
                    <Image src={HowItWorksImg4} alt="works" />
                    <span className="count">04</span>
                  </div>
                  <h4>Thanh Toán An Toàn</h4>
                  <p>
                    Hệ thống thanh toán bảo mật với nhiều phương thức linh hoạt
                  </p>
                </div>
              </div>
            </div>

            <Image
              src={shape1}
              className="shape shape-5"
              alt="shape-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
