import React from "react";

function AboutUs() {
  return (
    <div className="ltn__about-us-area pt-80 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <ul
                className="ltn__parallax-effect-wrap ltn__parallax-effect-active"
                data-friction-x="0.1"
                data-friction-y="0.1"
                data-scalar-x="15"
                data-scalar-y="25"
              >
                <li className="layer" data-depth="0.00"></li>
                <li className="layer" data-depth="0.10">
                  <div className="ltn__effect-img ltn__effect-img-top-left">
                    <img src="assets/img/effect/1.png" alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.30">
                  <div className="ltn__effect-img ltn__effect-img-top-right">
                    <img src="assets/img/effect/2.png" alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.50">
                  <div className="ltn__effect-img ltn__effect-img-center-left">
                    <img src="assets/img/effect/3.png" alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.20">
                  <div className="ltn__effect-img ltn__effect-img-center-right">
                    <img src="assets/img/effect/4.png" alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.20">
                  <div className="ltn__effect-img ltn__effect-img-bottom-left">
                    <img src="assets/img/effect/5.png" alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.20">
                  <div className="ltn__effect-img ltn__effect-img-bottom-right">
                    <img src="assets/img/effect/6.png" alt="#" />
                  </div>
                </li>
                <li className="layer" data-depth="0.50">
                  <div className="wave ltn__animation-wave-5s ltn__effect-img-top-center ">
                    <div className="about-us-img-info">
                      <div className="about-us-img-info-inner">
                        <h1>
                          <span className="counter">42</span>
                          <span>+</span>
                        </h1>
                        <h6>
                          <span>Years</span> Of Experience
                        </h6>
                        <span className="dots-bottom"></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  About Us
                </h6>
                <h1 className="section-title">
                  Get Amazing Service From Us<span>.</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim ven iam, quis nostrud exercitation ullamco laboris
                nisi{" "}
              </p>
              <hr />
              <div className="about-call-us">
                <div className="call-us-icon">
                  <img src="assets/img/icons/7.png" alt="Icon Images" />
                </div>
                <div className="call-us-info">
                  <p>
                    Call us 24/7. We can answer for{" "}
                    <a
                      href="contact.html"
                      className="ltn__secondary-color text-decoration"
                    >
                      <strong>all your questions</strong>
                    </a>
                    .
                  </p>
                  <h2>
                    <a href="tel:+123456789">507-452-1254</a>{" "}
                    <small> or </small>{" "}
                    <a href="tel:+123456789">508-452-1253</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
