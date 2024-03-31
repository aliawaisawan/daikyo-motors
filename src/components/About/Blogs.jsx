import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Blogs() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 850,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="ltn__blog-area pt-115 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                blog & insights
              </h6>
              <h1 className="section-title">
                News Feeds<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...settings}>
            <div className="col-lg-12">
              <div
                className="ltn__blog-item ltn__blog-item-4 bg-image"
                data-bs-bg="assets/img/blog/1.jpg"
              >
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      Electric Car Maintenance, Servicing & Repairs
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco.
                  </p>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="ltn__blog-item ltn__blog-item-4 bg-image"
                data-bs-bg="assets/img/blog/2.jpg"
              >
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      Common Engine Oil Problems and Solutions
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco.
                  </p>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="ltn__blog-item ltn__blog-item-4 bg-image"
                data-bs-bg="assets/img/blog/3.jpg"
              >
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      How to Prepare for your First Track Day!
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco.
                  </p>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="ltn__blog-item ltn__blog-item-4 bg-image"
                data-bs-bg="assets/img/blog/4.jpg"
              >
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      The branch of biology that deals with the normal.
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco.
                  </p>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-4">
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      How to: Make Your Tires Last Longer
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco.
                  </p>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> June 24, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
