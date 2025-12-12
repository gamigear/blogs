"use client";

import Link from "next/link";
import Image from "next/image";

import welcome from "/public/images/welcome-img.jpg";
import mokup from "/public/images/mokaup/mokup-1.png";
import shape3 from "/public/images/shape/shape-3.png";
import shape4 from "/public/images/shape/shape-4.png";

const Welcome = () => {
  return (
    <>
      <div className="welcome-area pb-175 position-relative z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="welcome-img position-relative z-1">
                <Image src={welcome} alt="welcome" />
                <Image
                  src={mokup}
                  className="mokup-1 position-absolute top-0 start-0"
                  alt="mokup"
                />
                <Image src={shape3} className="shape shape-3" alt="shape" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="welcome-content">
                <span className="top-title">CHÀO MỪNG ĐẾN VỚI VÉXANH</span>
                <h2>Chúng Tôi Giới Thiệu Điểm Đến Tuyệt Đẹp Mỗi Tháng</h2>
                <p>
                  Với hơn 30 năm kinh nghiệm trong ngành du lịch, chúng tôi cam kết mang đến cho bạn những trải nghiệm tuyệt vời nhất. Đội ngũ chuyên nghiệp luôn sẵn sàng hỗ trợ bạn 24/7.
                </p>

                <div className="row justify-content-center">
                  <div className="col-md-4 col-sm-6">
                    <div className="welcome-single-item">
                      <h4>30+</h4>
                      <span>Năm Kinh Nghiệm</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="welcome-single-item">
                      <h4>60K+</h4>
                      <span>Khách Hàng Toàn Cầu</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="welcome-single-item">
                      <h4>80+</h4>
                      <span>Giải Thưởng Đạt Được</span>
                    </div>
                  </div>
                </div>

                <div className="welcome-btn-wrap d-flex align-items-center justify-content-center justify-content-lg-start">
                  <Link href="/stay" className="default-btn active">
                    Xem Thêm
                  </Link>
                  <Link
                    href="/subscription"
                    className="default-btn active bg-transparent text-dark text-decoration-underline"
                  >
                    Bắt Đầu Tìm Kiếm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image src={shape4} className="shape shape-4" alt="shape" />
      </div>
    </>
  );
};

export default Welcome;
