"use client";

const BookingSearchForm = () => {
  return (
    <>
      <form 
        className="location-track" 
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="row align-items-center">
          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="form-group d-flex align-items-center">
              <div className="flex-shrink-0">
                <i className="flaticon-placeholder"></i>
              </div>
              <div className="flex-grow-1 ms-3">
                <span className="title">Điểm Đến</span>
                <select className="form-select">
                  <option defaultValue="0">Đà Nẵng</option>
                  <option defaultValue="1">Hà Nội</option>
                  <option defaultValue="2">TP. Hồ Chí Minh</option>
                  <option defaultValue="3">Nha Trang</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="form-group d-flex align-items-center">
              <div className="flex-shrink-0">
                <i className="flaticon-calendar"></i>
              </div>
              <div className="flex-grow-1 ms-3">
                <span className="title">Ngày Đặt Vé</span>
                <input type="date" className="booking-date" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="form-group d-flex align-items-center">
              <div className="flex-shrink-0">
                <i className="flaticon-plane"></i>
              </div>
              <div className="flex-grow-1 ms-3">
                <span className="title">Loại Vé</span>
                <select className="form-select">
                  <option defaultValue="0">Tour Nhóm</option>
                  <option defaultValue="1">Tour Gia Đình</option>
                  <option defaultValue="2">Tour Công Ty</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="form-group">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <i className="flaticon-account"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span className="title">Số Khách</span>
                    <select className="form-select">
                      <option defaultValue="0">08</option>
                      <option defaultValue="1">10</option>
                      <option defaultValue="2">15</option>
                      <option defaultValue="3">20</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="src-btn">
                  <i className="flaticon-loupe"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingSearchForm;
