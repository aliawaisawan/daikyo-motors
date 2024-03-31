import React from "react";

function Email() {
  return (
    <div className="ltn__contact-address-area mb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img src="assets/img/icons/10.png" alt="Icon Image1" />
              </div>
              <h3>Email Address</h3>
              <p>
                info@webmail.com <br />
                jobs@webexample.com
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img src="assets/img/icons/11.png" alt="Icon Image2" />
              </div>
              <h3>Phone Number</h3>
              <p>
                +0123-456789 <br /> +987-6543210
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img src="assets/img/icons/12.png" alt="Icon Image3" />
              </div>
              <h3>Office Address</h3>
              <p>
                18/A, New Born Town Hall <br />
                New York, US
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
