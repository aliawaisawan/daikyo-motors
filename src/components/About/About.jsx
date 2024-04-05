import React from "react";

function About() {
  return (
    <div className="ltn__about-us-area pt-120-- pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img src="assets/img/daikyo/about-main.jpg" alt="About Us Image1" />
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
                  About Us
                </h6>
                <h1 className="section-title">
                  We are the number one importers<span>.</span>
                </h1>
                <p>
                  we are in this business since 2014, we have contacts all over the world!
                </p>
              </div>

              <p>
                daikyo motors was found in etc etc ..........................{" "}
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
