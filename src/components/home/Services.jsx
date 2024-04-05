import React from "react";

function Services() {
  return (
    <div className="ltn__service-area ltn__primary-bg before-bg-1 pt-115 pb-70 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center ">
              <h6 className="section-subtitle ltn__secondary-color">Our Services</h6>
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
                <img src="assets/img/daikyo/imports-1.jpg" alt="#" />
                <div className="service-item-icon">
                  <i className="icon-mechanic"></i>
                </div>
              </div>
              <div className="service-item-brief">
                <h3>
                  <a href="service-details.html">Vehicle Hunting</a>
                </h3>
                <p>We look for a perfect vehicle suiting your requirements perfectly, all around the globe!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="ltn__service-item-1">
              <div className="service-item-img">
                <img src="assets/img/daikyo/import-5.jpg" alt="#" />
                <div className="service-item-icon">
                  <i className="icon-car-parts-3"></i>
                </div>
              </div>
              <div className="service-item-brief">
                <h3>
                  <a href="service-details.html">Vehicle Finilaziation</a>
                </h3>
                <p>We do all the paper work, approvals, inspections and Import for you to get your hands on your desired vehicle!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="ltn__service-item-1">
              <div className="service-item-img">
                <img src="assets/img/daikyo/parts.jpg" alt="#" />
                <div className="service-item-icon">
                  <i className="icon-repair"></i>
                </div>
              </div>
              <div className="service-item-brief">
                <h3>
                  <a href="service-details.html">Parts & Machinery</a>
                </h3>
                <p>We import All sorts of parts & machinery and provide our customers with their desired equipment!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
