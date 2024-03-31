import React from "react";

function Services() {
  return (
    <div className="ltn__service-area ltn__primary-bg before-bg-1 pt-115 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">Service</h6>
              <h1 className="section-title white-color">
                What We Do<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="ltn__service-item-1">
              <div className="service-item-img">
                <img src="assets/img/service/1.jpg" alt="#" />
                <div className="service-item-icon">
                  <i className="icon-mechanic"></i>
                </div>
              </div>
              <div className="service-item-brief">
                <h3>
                  <a href="service-details.html">Performance Upgrades</a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consect</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="ltn__service-item-1">
              <div className="service-item-img">
                <img src="assets/img/service/2.jpg" alt="#" />
                <div className="service-item-icon">
                  <i className="icon-car-parts-3"></i>
                </div>
              </div>
              <div className="service-item-brief">
                <h3>
                  <a href="service-details.html">Anti Lock Break</a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consect</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="ltn__service-item-1">
              <div className="service-item-img">
                <img src="assets/img/service/3.jpg" alt="#" />
                <div className="service-item-icon">
                  <i className="icon-repair"></i>
                </div>
              </div>
              <div className="service-item-brief">
                <h3>
                  <a href="service-details.html">Crash Car Repair</a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
