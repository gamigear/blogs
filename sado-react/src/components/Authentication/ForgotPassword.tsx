"use client";

import React from "react"; 

const ForgotPassword = () => {
  return (
    <>
      <div className="login-register-area ptb-175">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form className="login-register-form">
                <h4>Forgot your Password</h4>

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

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
 
                <div className="form-group">
                  <button
                    type="submit"
                    className="default-btn active rounded-10 w-100 text-center d-block border-0"
                  >
                    Reset Password
                  </button>
                </div> 
              </form>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
