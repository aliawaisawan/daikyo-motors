import React from "react";

function Banner() {
  return (
    <div
      className="ltn__call-to-action-area call-to-action-2 pt-20 pb-20"
      data-bs-bg="img/1.jpg--"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="call-to-action-inner call-to-action-inner-2 text-center">
              <h2>Get A Free Service Or Make A Call</h2>
              <div className="btn-wrapper">
                <a className="btn btn-effect-4 btn-white" href="contact.html">
                  <i className="fas fa-phone-volume"></i> MAKE A CALL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
