import React from "react";

function WhyChoose() {
  return (
    <div className="ltn__why-choose-us-area section-bg-1 pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  Why Choose Us
                </h6>
                <h1 className="section-title">
                  Safety Is Our First Priority<span>.</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="why-choose-us-feature-item">
                    <div className="why-choose-us-feature-icon">
                      <i className="icon-car-parts-1"></i>
                    </div>
                    <div className="why-choose-us-feature-brief">
                      <h3>
                        <a href="service-details.html">
                          Anytime Get Your Service
                        </a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor ut labore et dolore magna aliqua.
                        Ut enim ad minim
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="why-choose-us-feature-item">
                    <div className="why-choose-us-feature-icon">
                      <i className="icon-automobile"></i>
                    </div>
                    <div className="why-choose-us-feature-brief">
                      <h3>
                        <a href="service-details.html">
                          Hardcore Repair Service
                        </a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor ut labore et dolore magna aliqua.
                        Ut enim ad minim
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-us-img-wrap">
              <div className="why-choose-us-img-1 text-start">
                <img src="assets/img/others/1.jpg" alt="Image1" />
              </div>
              <div className="why-choose-us-img-2 text-end">
                <img src="assets/img/others/2.jpg" alt="Image2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
