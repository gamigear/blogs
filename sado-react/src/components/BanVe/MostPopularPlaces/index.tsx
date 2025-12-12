"use client";

import React, { useState } from "react";
import DaNang from "./DaNang";
import PhuQuoc from "./PhuQuoc";
import NhaTrang from "./NhaTrang";

const MostPopularPlaces: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="most-popular-area bg-color-fff7ed ptb-175">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center mb-70">
            <div className="section-title mb-0 left-title">
              <span className="top-title">ĐỊA ĐIỂM NỔI BẬT</span>
              <h2>Những Địa Điểm Phổ Biến Nhất</h2>
            </div>

            <ul className="nav nav-tabs most-popular-tab mt-3 mt-md-0">
              <li className="nav-item">
                <button
                  className={activeTab === 0 ? "active" : ""}
                  onClick={() => handleTabClick(0)}
                >
                  Đà Nẵng
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={activeTab === 1 ? "active" : ""}
                  onClick={() => handleTabClick(1)}
                >
                  Phú Quốc
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={activeTab === 2 ? "active" : ""}
                  onClick={() => handleTabClick(2)}
                >
                  Nha Trang
                </button>
              </li>
            </ul>
          </div>

          <div className="custom-tabs">
            <div className="tab-content">
              {activeTab === 0 && (
                <div>
                  <DaNang />
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <PhuQuoc />
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <NhaTrang />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopularPlaces;
