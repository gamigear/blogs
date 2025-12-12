"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { login_schema } from "@/utils/validation-schema";
import { useAuth } from "@/contextApi/AuthContext";
import { toast } from "react-toastify";
import ErrorMsg from "./error-msg";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: login_schema,
      onSubmit: async (values) => {
        setIsLoading(true);
        const result = await login(values.email, values.password);
        setIsLoading(false);
        
        if (result.success) {
          toast.success("Đăng nhập thành công!");
          router.push("/");
        } else {
          toast.error(result.error || "Đăng nhập thất bại");
        }
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper mb-25">
        <h5>Email</h5>
        <div className="sign__input">
          <div className="login__input">
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
        <div className="sign__input-wrapper mb-10">
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
      </div>

      <div className="sign__action d-sm-flex justify-content-between mb-30">
        <div className="sign__agree d-flex align-items-center">
          <input className="m-check-input" type="checkbox" id="m-agree" />
          <label className="m-check-label" htmlFor="m-agree">
            Ghi nhớ đăng nhập
          </label>
        </div>
        <div className="sign__forgot">
          <Link href="/forgot-password">Quên mật khẩu?</Link>
        </div>
      </div>
      <button className="e-btn w-100" type="submit" disabled={isLoading}>
        {isLoading ? "Đang xử lý..." : "Đăng nhập"}
      </button>
      <div className="sign__new text-center mt-20">
        <p>
          Chưa có tài khoản? <Link href="/sign-up">Đăng ký ngay</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
