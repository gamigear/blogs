"use client";

const RegisterForm = () => {
  return (
    <>
      <form className="login-register-form">
        <h4>Create An Account</h4>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name" />
        </div>

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
            placeholder="Repeat Password"
          />
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="default-btn active rounded-10 w-100 text-center d-block border-0"
          >
            Regiester Now
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
