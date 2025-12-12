"use client";

import React from "react";
import Image from "next/image";

const benefitsData = [
  {
    id: "1",
    icon: "/images/icons/icon1.png",
    title: "Chuyến Đi Độc Quyền",
    shortText:
      "Chúng tôi mang đến những chuyến đi độc đáo với trải nghiệm tuyệt vời nhất cho bạn",
  },
  {
    id: "2",
    icon: "/images/icons/icon2.png",
    title: "Nhiều Lựa Chọn",
    shortText:
      "Đa dạng các loại vé và điểm đến để bạn thoải mái lựa chọn theo sở thích",
  },
  {
    id: "3",
    icon: "/images/icons/icon3.png",
    title: "Hướng Dẫn Viên Chuyên Nghiệp",
    shortText:
      "Đội ngũ hướng dẫn viên giàu kinh nghiệm, nhiệt tình và am hiểu địa phương",
  },
];

const Benefits: React.FC = () => {
  return (
    <>
      <div className="benefits-area pt-175 pb-150">
        <div className="container">
          <div className="section-title">
            <span className="top-title">LỢI ÍCH</span>
            <h2>VéXanh Là Nền Tảng Đặt Vé Trực Tuyến Hàng Đầu</h2>
          </div>

          {benefitsData && (
            <div className="row justify-content-center">
              {benefitsData &&
                benefitsData.map((value, i) => (
                  <div className="col-lg-4 col-sm-6 for-child" key={i}>
                    <div className="benefits-single-item me-lg-auto">
                      <Image src={value.icon} alt="icon" width={110} height={110} />
                      <h5>{value.title}</h5>
                      <p>{value.shortText}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Benefits;
