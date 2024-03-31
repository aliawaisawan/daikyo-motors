import React from "react";

function About() {
  return (
    <div className="ltn__about-us-area pt-120-- pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img src="assets/img/team/4.jpg" alt="About Us Image1" />
              <div className="about-us-img-info about-us-img-info-2">
                <div className="about-us-img-info-inner">
                  <h1>
                    25<span>+</span>
                  </h1>
                  <h6>Years Experience</h6>
                  <span className="dots-bottom"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  bout Us
                </h6>
                <h1 className="section-title">
                  Safety Is Our First & Main Priority<span>.</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed
                do eius mod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad min im veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequ at.{" "}
              </p>
              <div className="btn-wrapper">
                <a href="service.html" className="theme-btn-3 btn btn-effect-4">
                  OUR SERVICES
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
