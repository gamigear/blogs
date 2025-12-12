"use client";
import Link from "next/link";
import React from "react";

const ContactForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-md-6">
          <div className="contact__form-input">
            <input type="text" placeholder="Họ và tên" name="name" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-md-6">
          <div className="contact__form-input">
            <input type="email" placeholder="Email của bạn" name="email" />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="contact__form-input">
            <input type="text" placeholder="Tiêu đề" name="subject" />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="contact__form-input">
            <textarea
              placeholder="Nội dung tin nhắn"
              name="message"
            ></textarea>
          </div>
        </div>

        <div className="col-xxl-12">
          <div className="contact__form-agree  d-flex align-items-center mb-20">
            <input className="e-check-input" type="checkbox" id="e-agree" />
            <label className="e-check-label" htmlFor="e-agree">
              Tôi đồng ý với
              <Link href="/terms-conditions"> Điều khoản sử dụng</Link>
            </label>
          </div>
        </div>

        <div className="col-xxl-12">
          <div className="contact__btn">
            <button type="submit" className="e-btn">
              Gửi tin nhắn
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
