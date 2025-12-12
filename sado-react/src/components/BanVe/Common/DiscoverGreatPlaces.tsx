"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const discoverGreatPlacesData = [
  {
    id: "1",
    url: "/stay-details",
    image: "/images/discover/discover-1.jpg",
    location: "Hà Nội",
    distance: "10 Phút Lái Xe",
  },
  {
    id: "2",
    url: "/stay-details",
    image: "/images/discover/discover-2.jpg",
    location: "Đà Nẵng",
    distance: "5 Phút Lái Xe",
  },
  {
    id: "3",
    url: "/stay-details",
    image: "/images/discover/discover-3.jpg",
    location: "Nha Trang",
    distance: "15 Phút Lái Xe",
  },
  {
    id: "4",
    url: "/stay-details",
    image: "/images/discover/discover-4.jpg",
    location: "Phú Quốc",
    distance: "20 Phút Lái Xe",
  },
  {
    id: "5",
    url: "/stay-details",
    image: "/images/discover/discover-5.jpg",
    location: "Hội An",
    distance: "6 Phút Lái Xe",
  },
  {
    id: "6",
    url: "/stay-details",
    image: "/images/discover/discover-6.jpg",
    location: "Đà Lạt",
    distance: "7 Phút Lái Xe",
  },
  {
    id: "7",
    url: "/stay-details",
    image: "/images/discover/discover-7.jpg",
    location: "Sapa",
    distance: "10 Phút Lái Xe",
  },
  {
    id: "8",
    url: "/stay-details",
    image: "/images/discover/discover-8.jpg",
    location: "Hạ Long",
    distance: "5 Phút Lái Xe",
  },
  {
    id: "9",
    url: "/stay-details",
    image: "/images/discover/discover-9.jpg",
    location: "Huế",
    distance: "10 Phút Lái Xe",
  },
  {
    id: "10",
    url: "/stay-details",
    image: "/images/discover/discover-10.jpg",
    location: "Vũng Tàu",
    distance: "10 Phút Lái Xe",
  },
  {
    id: "11",
    url: "/stay-details",
    image: "/images/discover/discover-12.jpg",
    location: "Cần Thơ",
    distance: "10 Phút Lái Xe",
  },
  {
    id: "12",
    url: "/stay-details",
    image: "/images/discover/discover-12.jpg",
    location: "Quy Nhơn",
    distance: "10 Phút Lái Xe",
  },
];

const DiscoverGreatPlaces: React.FC = () => {
  return (
    <>
      <div className="discover-area bg-color-f3f4f6 pt-175 pb-150">
        <div className="container">
          <div className="section-title">
            <span className="top-title">KHÁM PHÁ GẦN BẠN</span>
            <h2>Khám Phá Những Địa Điểm Tuyệt Vời Gần Bạn</h2>
          </div>

          {discoverGreatPlacesData && (
            <div className="row justify-content-center">
              {discoverGreatPlacesData &&
                discoverGreatPlacesData.map((value, i) => (
                  <div className="col-xxl-2 col-lg-3 col-sm-6 col-md-4" key={i}>
                    <Link
                      href={value.url}
                      className="discover-single-item text-decoration-none d-block"
                    >
                      <Image
                        src={value.image}
                        className="rounded-circle"
                        alt={value.location}
                        width={100}
                        height={100}
                      />
                      <h4>{value.location}</h4>
                      <span>{value.distance}</span>
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscoverGreatPlaces;
