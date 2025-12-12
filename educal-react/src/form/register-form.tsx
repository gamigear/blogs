"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { register_schema } from "@/utils/validation-schema";
import { useAuth } from "@/contextApi/AuthContext";
import { toast } from "react-toastify";
import ErrorMsg from "./error-msg";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      validationSchema: register_schema,
      onSubmit: async (values) => {
        setIsLoading(true);
        const result = await register(values.name, values.email, values.password);
        setIsLoading(false);
        
        if (result.success) {
          toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
          router.push("/sign-in");
        } else {
          toast.error(result.error || "Đăng ký thất bại");
        }
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper">
        <h5>Họ và tên</h5>
        <div className="sign__input mb-25">
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Nhập họ và tên"
            id="name"
          />
          <i className="fal fa-user"></i>
          {touched.name && <ErrorMsg error={errors.name} />}
        </div>

        <div className="sign__input-wrapper mb-25">
          <h5>Email</h5>
          <div className="sign__input">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Nhập email của bạn"
              id="email"
            />
            <i className="fal fa-envelope"></i>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>

        <div className="sign__input-wrapper mb-25">
          <h5>Mật khẩu</h5>
          <div className="sign__input">
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showPass ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              id="password"
            />
            <i className="fal fa-lock"></i>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>

        <div className="sign__input-wrapper mb-10">
          <h5>Xác nhận mật khẩu</h5>
          <div className="sign__input">
            <input
              name="passwordConfirmation"
              value={values.passwordConfirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showConPass ? "text" : "password"}
              placeholder="Nhập lại mật khẩu"
              id="passwordConfirmation"
            />
            <i className="fal fa-lock"></i>
          </div>
          {touched.passwordConfirmation && (
            <ErrorMsg error={errors.passwordConfirmation} />
          )}
        </div>
      </div>
      <div className="sign__action d-flex justify-content-between mb-30">
        <div className="sign__agree d-flex align-items-center">
          <input className="m-check-input" type="checkbox" id="m-agree" />
          <label className="m-check-label" htmlFor="m-agree">
            Tôi đồng ý với <Link href="/terms-conditions">Điều khoản sử dụng</Link>
          </label>
        </div>
      </div>
      <button className="e-btn w-100" type="submit" disabled={isLoading}>
        {isLoading ? "Đang xử lý..." : "Đăng ký"}
      </button>
      <div className="sign__new text-center mt-20">
        <p>
          Đã có tài khoản? <Link href="/sign-in">Đăng nhập</Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
