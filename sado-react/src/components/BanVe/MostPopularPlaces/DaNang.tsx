"use client";

import Link from "next/link";
import Image from "next/image";

import placeImg1 from "/public/images/popular/popular-7.jpg";
import placeImg2 from "/public/images/popular/popular-8.jpg";
import placeImg3 from "/public/images/popular/popular-9.jpg";
import placeImg4 from "/public/images/popular/popular-10.jpg";
import placeImg5 from "/public/images/popular/popular-11.jpg";
import placeImg6 from "/public/images/popular/popular-12.jpg";

const DaNang = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-md-6">
          <div className="most-popular-single-item">
            <div className="most-popular-single-img position-relative">
              <Link href="/stay-details">
                <Image src={placeImg1} alt="place" />
              </Link>
              <div className="most-popular-single-heart-discount d-flex justify-content-between align-items-center">
                <button type="button" className="heart">
                  <i className="flaticon-heart"></i>
                </button>
                <span className="discount">-10% Hôm Nay</span>
              </div>
            </div>

            <div className="most-popular-single-content">
              <ul className="ps-0 pe-0 list-unstyled d-flex align-items-center most-popular-single-star">
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><span>(5k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Tour Bà Nà Hills Trọn Gói</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Đà Nẵng, Thành phố biển</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">1.500.000đ</span> / Người
                </p>
                <p>3 Ngày/2 Đêm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6">
          <div className="most-popular-single-item">
            <div className="most-popular-single-img position-relative">
              <Link href="/stay-details">
                <Image src={placeImg2} alt="place" />
              </Link>
              <div className="most-popular-single-heart-discount d-flex justify-content-between align-items-center">
                <button type="button" className="heart">
                  <i className="flaticon-heart"></i>
                </button>
              </div>
            </div>

            <div className="most-popular-single-content">
              <ul className="ps-0 pe-0 list-unstyled d-flex align-items-center most-popular-single-star">
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><span>(1k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Khám Phá Ngũ Hành Sơn</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Ngũ Hành Sơn, Đà Nẵng</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">4.520.000đ</span> / Người
                </p>
                <p>3 Ngày/2 Đêm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6">
          <div className="most-popular-single-item">
            <div className="most-popular-single-img position-relative">
              <Link href="/stay-details">
                <Image src={placeImg3} alt="place" />
              </Link>
              <div className="most-popular-single-heart-discount d-flex justify-content-between align-items-center">
                <button type="button" className="heart">
                  <i className="flaticon-heart"></i>
                </button>
                <span className="discount">-10% Hôm Nay</span>
              </div>
            </div>

            <div className="most-popular-single-content">
              <ul className="ps-0 pe-0 list-unstyled d-flex align-items-center most-popular-single-star">
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><span>(2k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Tour Cù Lao Chàm Lặn Biển</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Cù Lao Chàm, Hội An</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">3.800.000đ</span> / Người
                </p>
                <p>2 Ngày/1 Đêm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6">
          <div className="most-popular-single-item">
            <div className="most-popular-single-img position-relative">
              <Link href="/stay-details">
                <Image src={placeImg4} alt="place" />
              </Link>
              <div className="most-popular-single-heart-discount d-flex justify-content-between align-items-center">
                <button type="button" className="heart">
                  <i className="flaticon-heart"></i>
                </button>
              </div>
            </div>

            <div className="most-popular-single-content">
              <ul className="ps-0 pe-0 list-unstyled d-flex align-items-center most-popular-single-star">
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><span>(6k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Tour Phố Cổ Hội An</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Hội An, Quảng Nam</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">6.210.000đ</span> / Người
                </p>
                <p>5 Ngày/4 Đêm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6">
          <div className="most-popular-single-item">
            <div className="most-popular-single-img position-relative">
              <Link href="/stay-details">
                <Image src={placeImg5} alt="place" />
              </Link>
              <div className="most-popular-single-heart-discount d-flex justify-content-between align-items-center">
                <button type="button" className="heart">
                  <i className="flaticon-heart"></i>
                </button>
              </div>
            </div>

            <div className="most-popular-single-content">
              <ul className="ps-0 pe-0 list-unstyled d-flex align-items-center most-popular-single-star">
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><span>(6k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Tour Sơn Trà Hoang Dã</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Bán đảo Sơn Trà, Đà Nẵng</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">5.100.000đ</span> / Người
                </p>
                <p>3 Ngày/2 Đêm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6">
          <div className="most-popular-single-item">
            <div className="most-popular-single-img position-relative">
              <Link href="/stay-details">
                <Image src={placeImg6} alt="place" />
              </Link>
              <div className="most-popular-single-heart-discount d-flex justify-content-between align-items-center">
                <button type="button" className="heart">
                  <i className="flaticon-heart"></i>
                </button>
              </div>
            </div>

            <div className="most-popular-single-content">
              <ul className="ps-0 pe-0 list-unstyled d-flex align-items-center most-popular-single-star">
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><span>(1.5k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Resort Biển Mỹ Khê 5 Sao</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Bãi biển Mỹ Khê, Đà Nẵng</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">1.800.000đ</span> / Người
                </p>
                <p>4 Ngày/3 Đêm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-12 text-center">
          <Link href="/stay" className="default-btn active mt-35">
            Xem Thêm
          </Link>
        </div>
      </div>
    </>
  );
};

export default DaNang;
