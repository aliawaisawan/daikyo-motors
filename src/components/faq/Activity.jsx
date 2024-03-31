import React from "react";

function Activity() {
  return (
    <div
      className="ltn__counterup-area bg-image bg-overlay-theme-black-80 pt-115 pb-70"
      data-bs-bg="assets/img/bg/5.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="section-title-area ltn__section-title-2">
              <h6 className="section-subtitle white-color">activity</h6>
              <h1 className="section-title white-color">
                It’s Our Journey<span>.</span>
              </h1>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 align-self-center">
            <div className="ltn__counterup-item-3 text-color-white">
              <div className="counter-icon"></div>
              <h1>
                <span className="counter">733</span>
                <span className="counterUp-icon">+</span>{" "}
              </h1>
              <h6>Active Clients</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 align-self-center">
            <div className="ltn__counterup-item-3 text-color-white">
              <div className="counter-icon"></div>
              <h1>
                <span className="counter">33</span>
                <span className="counterUp-letter">K</span>
                <span className="counterUp-icon">+</span>{" "}
              </h1>
              <h6>Cup Of Coffee</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 align-self-center">
            <div className="ltn__counterup-item-3 text-color-white">
              <div className="counter-icon"></div>
              <h1>
                <span className="counter">100</span>
                <span className="counterUp-icon">+</span>{" "}
              </h1>
              <h6>Get Rewards</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 align-self-center">
            <div className="ltn__counterup-item-3 text-color-white">
              <div className="counter-icon"></div>
              <h1>
                <span className="counter">21</span>
                <span className="counterUp-icon">+</span>{" "}
              </h1>
              <h6>Country Cover</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
