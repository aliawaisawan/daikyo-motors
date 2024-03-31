import React from "react";

function Footer() {
  return (
    <footer className="ltn__footer-area ltn__footer-2 ltn__footer-color-1">
      <div className="footer-top-area  section-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-5">
              <div
                className="footer-widget ltn__footer-timeline-widget ltn__footer-timeline-widget-1 bg-image bg-overlay-theme-black-90"
                data-bs-bg="img/bg/4.jpg"
              >
                <h6 className="ltn__secondary-color text-uppercase">
                  time shedule
                </h6>
                <h4 className="footer-title">Meet In Timeline.</h4>
                <ul>
                  <li>
                    Monday <span>07:00AM - 20:00PM</span>
                  </li>
                  <li>
                    Tuesday <span>07:00AM - 20:00PM</span>
                  </li>
                  <li>
                    Wednesday <span>07:00AM - 20:00PM</span>
                  </li>
                  <li>
                    Thursday <span>07:00AM - 20:00PM</span>
                  </li>
                  <li>
                    Friday <span>07:00AM - 20:00PM</span>
                  </li>
                  <li>
                    Saturday <span>07:00AM - 20:00PM</span>
                  </li>
                  <li>
                    Sunday <span>Official Holiday</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-md-7">
              <div className="footer-widget footer-menu-widget footer-menu-widget-2-column clearfix">
                <h4 className="footer-title">Services.</h4>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="service.html">Engine Diagnostics</a>
                    </li>
                    <li>
                      <a href="service.html">Vehicles Damaged</a>
                    </li>
                    <li>
                      <a href="service.html">Air Conditioning Evac</a>
                    </li>
                    <li>
                      <a href="service.html">Anti Lock Brake Service</a>
                    </li>
                    <li>
                      <a href="service.html">Computer Diagnostics</a>
                    </li>
                    <li>
                      <a href="service.html">Performance Upgrades</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="service.html">Car Wash & Cleaning</a>
                    </li>
                    <li>
                      <a href="service.html">Choose your Repairs</a>
                    </li>
                    <li>
                      <a href="service.html">Free Consultancy</a>
                    </li>
                    <li>
                      <a href="service.html">Emergency Time</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="footer-widget footer-blog-widget">
                <h4 className="footer-title">News Feeds.</h4>
                <div className="ltn__footer-blog-item">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt"></i> June 24, 2020
                      </li>
                    </ul>
                  </div>
                  <h4 className="ltn__blog-title">
                    <a href="blog-details.html">
                      The branch of biology that deals with the normal.
                    </a>
                  </h4>
                </div>
                <div className="ltn__footer-blog-item">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt"></i> June 28, 2020
                      </li>
                    </ul>
                  </div>
                  <h4 className="ltn__blog-title">
                    <a href="blog-details.html">
                      Electric Car Maintenance, Servicing & Repairs
                    </a>
                  </h4>
                </div>
                <div className="ltn__footer-blog-item">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt"></i> June 24, 2020
                      </li>
                    </ul>
                  </div>
                  <h4 className="ltn__blog-title">
                    <a href="blog-details.html">
                      The branch of biology that deals with the normal.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__copyright-area ltn__copyright-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="site-logo-wrap">
                <div className="site-logo">
                  <a href="index.html">
                    <img src="assets/img/logo-2.png" alt="Logo" />
                  </a>
                </div>
                <div className="get-support ltn__copyright-design clearfix">
                  <div className="get-support-info">
                    <h6>Copyright & Design By</h6>
                    <h4>
                      Example - <span className="current-year"></span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 align-self-center">
              <div className="ltn__copyright-menu text-end">
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Claim</a>
                  </li>
                  <li>
                    <a href="#">Privacy & Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
