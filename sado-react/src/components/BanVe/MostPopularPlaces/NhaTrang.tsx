"use client";

import Link from "next/link";
import Image from "next/image";

import placeImg1 from "/public/images/popular/popular-7.jpg";
import placeImg2 from "/public/images/popular/popular-8.jpg";
import placeImg3 from "/public/images/popular/popular-9.jpg";
import placeImg4 from "/public/images/popular/popular-10.jpg";
import placeImg5 from "/public/images/popular/popular-11.jpg";
import placeImg6 from "/public/images/popular/popular-12.jpg";

const NhaTrang = () => {
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
                <span className="discount">-12% Hôm Nay</span>
              </div>
            </div>

            <div className="most-popular-single-content">
              <ul className="ps-0 pe-0 list-unstyled d-flex align-items-center most-popular-single-star">
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><span>(3k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Tour VinPearl Land Nha Trang</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Đảo Hòn Tre, Nha Trang</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">2.800.000đ</span> / Người
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
                <li><span>(2k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Tour 4 Đảo Nha Trang</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Vịnh Nha Trang, Khánh Hòa</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">1.500.000đ</span> / Người
                </p>
                <p>1 Ngày</p>
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
                <span className="discount">-18% Hôm Nay</span>
              </div>
            </div>

            <div className="most-popular-single-content">
              <ul className="ps-0 pe-0 list-unstyled d-flex align-items-center most-popular-single-star">
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><i className="ri-star-fill"></i></li>
                <li><span>(4k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Tháp Bà Ponagar Linh Thiêng</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Tháp Bà, Nha Trang</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">500.000đ</span> / Người
                </p>
                <p>Nửa Ngày</p>
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
                <li><span>(5k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Bùn Khoáng I-Resort</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Ngọc Hiệp, Nha Trang</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">800.000đ</span> / Người
                </p>
                <p>1 Ngày</p>
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
                <li><span>(3k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Lặn Biển Hòn Mun</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Hòn Mun, Nha Trang</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">1.200.000đ</span> / Người
                </p>
                <p>1 Ngày</p>
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
                <li><span>(6k+ Đánh Giá)</span></li>
              </ul>
              <h3>
                <Link href="/stay-details">Resort Six Senses Ninh Vân</Link>
              </h3>

              <div className="d-flex align-items-center most-popular-single-location">
                <i className="flaticon-location"></i>
                <span>Ninh Vân Bay, Nha Trang</span>
              </div>

              <div className="d-flex align-items-center justify-content-between most-popular-single-price">
                <p>
                  <span className="title">12.000.000đ</span> / Người
                </p>
                <p>3 Ngày/2 Đêm</p>
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

export default NhaTrang;
