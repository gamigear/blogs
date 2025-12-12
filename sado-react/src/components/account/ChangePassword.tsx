"use client";

const ChangePassword = () => {
  return (
    <>
      <div className="box-title">
        <h3 className="mb-0">Change Password</h3>
      </div>
 
      <form className="account-form">
        <div className="form-group">
          <label>Old Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="***"
          />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="***"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="***"
          />
        </div>
  
        <div className="form-group mb-0">
          <button
            type="submit"
            className="default-btn rounded-10 active border-0"
          >
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
