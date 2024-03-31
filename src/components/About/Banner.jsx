import React from "react";

function Banner() {
  return (
    <div
      className="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25"
      data-bs-bg="assets/img/bg/13.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="call-to-action-inner call-to-action-inner-5 text-center">
              <h2 className="white-color text-decoration">
                24/7 Availability, Make{" "}
                <a href="appointment.html">An Appointment</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
