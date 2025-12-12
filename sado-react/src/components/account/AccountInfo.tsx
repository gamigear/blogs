"use client";

import Image from "next/image";

import author from "/public/images/author/author-18.jpg";

const AccountInfo = () => {
  return (
    <>
      <div className="box-title">
        <h3 className="mb-0">Account information</h3>
      </div>

      <div className="d-sm-flex">
        <div className="flex-shrink-0 mb-3 mb-sm-0">
          <Image
            src={author}
            className="rounded-circle"
            alt="author"
            style={{ width: '120px', height: '120px' }}
          />
          <input type="file" style={{ display: 'block', fontSize: '13px', marginTop: '20px' }} />
        </div>
        
        <div className="flex-grow-1 ms-sm-4">
          <form className="account-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Zalatan Ibrahim"
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select
                className="form-select form-control"
                aria-label="Default select example"
              >
                <option defaultValue="0">Male</option>
                <option defaultValue="1">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="@Zalatan_Ibrahim"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <label>Date of birth</label>
              <input type="date" className="form-control" />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="New York, USA"
              />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input
                type="text"
                className="form-control"
                placeholder="003 888 232"
              />
            </div>

            <div className="form-group">
              <label>About you</label>
              <textarea
                className="form-control"
                placeholder="Something Write"
                cols={30}
                rows={10}
              ></textarea>
            </div>

            <div className="form-group mb-0">
              <button
                type="submit"
                className="default-btn rounded-10 active border-0"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
