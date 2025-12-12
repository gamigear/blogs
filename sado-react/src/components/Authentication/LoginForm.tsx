"use client";

import Link from 'next/link';

const LoginForm = () => {
  return (
    <>
      <form className="login-register-form">
        <h4>Log In To Your Account</h4>

        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <div className="form-group d-flex justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Keep me logged in
            </label>
          </div>
          <Link href="/authentication/forgot-password">Forgot your password?</Link>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="default-btn active rounded-10 w-100 text-center d-block border-0"
          >
            Log In
          </button>
        </div>

        <div className="form-group text-center or">
          <span className="bg">Or</span>
        </div>

        <div className="form-group">
          <a
            href="https://www.facebook.com/"
            className="login-others facebook"
            target="_blank"
          >
            Login With Facebook
          </a>
        </div>

        <div className="form-group">
          <a
            href="https://www.google.com/"
            className="login-others"
            target="_blank"
          >
            Login With Google
          </a>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
