import Link from "next/link";
import React from "react";
import FooterLogo from "../../../public/assets/img/logo/logo-2.png";
import Image from "next/image";
import CopyrightArea from "./copyright-area";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__area footer-bg">
          <div className="footer__top pt-190 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <div className="footer__logo">
                        <Link href="/">
                          <Image
                            src={FooterLogo}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-body">
                      <p>
                        GameHub - Nền tảng tổng hợp mini game trên mạng xã hội hàng đầu
                        Việt Nam. Cập nhật nhanh chóng, chính xác.
                      </p>

                      <div className="footer__social">
                        <ul>
                          <li>
                            <Link href="https://www.facebook.com/">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://discord.com/" className="tw">
                              <i className="fab fa-discord"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.youtube.com/"
                              className="pin"
                            >
                              <i className="fab fa-youtube"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Liên kết</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li>
                            <Link href="/about">Giới thiệu</Link>
                          </li>
                          <li>
                            <Link href="/course-grid">Sự kiện</Link>
                          </li>
                          <li>
                            <Link href="/blog">Tin tức</Link>
                          </li>
                          <li>
                            <Link href="/contact">Liên hệ</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Nền tảng</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li>
                            <Link href="/course-grid">Facebook</Link>
                          </li>
                          <li>
                            <Link href="/course-grid">TikTok</Link>
                          </li>
                          <li>
                            <Link href="/course-grid">Zalo</Link>
                          </li>
                          <li>
                            <Link href="/course-grid">Shopee</Link>
                          </li>
                          <li>
                            <Link href="/course-grid">MoMo</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer__widget footer__pl-70 mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Đăng ký nhận tin</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__subscribe">
                        <form action="#">
                          <div className="footer__subscribe-input mb-15">
                            <input
                              type="email"
                              placeholder="Nhập email của bạn"
                            />
                            <button type="submit">
                              <i className="fas fa-arrow-right"></i>
                              <i className="fas fa-arrow-right"></i>
                            </button>
                          </div>
                        </form>
                        <p>
                          Nhận thông báo sự kiện mới nhất qua email.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CopyrightArea />
        </div>
      </footer>
    </>
  );
};

export default Footer;
