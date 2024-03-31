import React from "react";

function Skills() {
  return (
    <div className="ltn__progress-bar-area before-bg-right pt-115 pb-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ltn__progress-bar-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  skills
                </h6>
                <h1 className="section-title">
                  We Have A Skillest Team Ever<span>.</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className="ltn__progress-bar-inner">
                <div className="ltn__progress-bar-item">
                  <p>Car Repair</p>
                  <div className="progress">
                    <div
                      className="progress-bar wow fadeInLeft"
                      data-wow-duration="0.5s"
                      data-wow-delay=".5s"
                      role="progressbar"
                      style={{width: '72%'}}
                    >
                      <span>72%</span>
                    </div>
                  </div>
                </div>
                <div className="ltn__progress-bar-item">
                  <p>Car Rental Service</p>
                  <div className="progress">
                    <div
                      className="progress-bar wow fadeInLeft"
                      data-wow-duration="0.5s"
                      data-wow-delay=".5s"
                      role="progressbar"
                      style={{width: '74%'}}
                    >
                      <span>74%</span>
                    </div>
                  </div>
                </div>
                <div className="ltn__progress-bar-item">
                  <p>Car Cleaning & Parts</p>
                  <div className="progress">
                    <div
                      className="progress-bar wow fadeInLeft"
                      data-wow-duration="0.5s"
                      data-wow-delay=".5s"
                      role="progressbar"
                      style={{ width: "81%" }}
                    >
                      <span>81%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div
              className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50-- bg-image ml-30"
              data-bs-bg="assets/img/others/5.jpg"
            >
              <a
                className="ltn__video-icon-2 ltn__video-icon-2-border---"
                href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&amp;showinfo=0"
                data-rel="lightcase:myCollection"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
