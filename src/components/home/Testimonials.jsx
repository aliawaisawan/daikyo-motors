import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="ltn__testimonial-area ltn__testimonial-4 pt-115 pb-100 plr--9">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                Testimonials
              </h6>
              <h1 className="section-title">
                Clients Feedbacks<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Slider
              {...settings}
              className="ltn__testimonial-slider-4 ltn__testimonial-slider-4-active slick-arrow-1"
            >
              <div className="ltn__testimonial-item-5">
                <div className="ltn__quote-icon">
                  <i className="far fa-comments"></i>
                </div>
                <div className="ltn__testimonial-image">
                  <img src="assets/img/testimonial/3.jpg" alt="quote" />
                </div>
                <div className="ltn__testimonial-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud ullamco
                    laboris nisi ut aliquip ex ea commodo.{" "}
                  </p>
                  <h4>Jacob William</h4>
                  <h6>Manager</h6>
                </div>
              </div>
              <div className="ltn__testimonial-item-5">
                <div className="ltn__quote-icon">
                  <i className="far fa-comments"></i>
                </div>
                <div className="ltn__testimonial-image">
                  <img src="assets/img/testimonial/4.jpg" alt="quote" />
                </div>
                <div className="ltn__testimonial-info">
                  <p>
                    Quidem Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco
                    laboris nisi ut aliquip ex ea.{" "}
                  </p>
                  <h4>Ethan James</h4>
                  <h6>Admin</h6>
                </div>
              </div>{" "}
              <div className="ltn__testimonial-item-5">
                <div className="ltn__quote-icon">
                  <i className="far fa-comments"></i>
                </div>
                <div className="ltn__testimonial-image">
                  <img src="assets/img/testimonial/6.jpg" alt="quote" />
                </div>
                <div className="ltn__testimonial-info">
                  <p>
                    Dolor Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco
                    nisi ut aliquip ex ea commodo.{" "}
                  </p>
                  <h4>Noah Alexander</h4>
                  <h6>Professor</h6>
                </div>
              </div>
              <div className="ltn__testimonial-item-5">
                <div className="ltn__quote-icon">
                  <i className="far fa-comments"></i>
                </div>
                <div className="ltn__testimonial-image">
                  <img src="assets/img/testimonial/1.jpg" alt="quote" />
                </div>
                <div className="ltn__testimonial-info">
                  <p>
                    Amet Ipsum Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud nisi ut aliquip ex ea commodo.{" "}
                  </p>
                  <h4>Liam Mason</h4>
                  <h6>Officer</h6>
                </div>
              </div>
            </Slider>
            <ul className="ltn__testimonial-quote-menu d-none d-lg-block">
              <li>
                <img src="assets/img/testimonial/3.jpg" alt="Quote image1" />
              </li>
              <li>
                <img src="assets/img/testimonial/4.jpg" alt="Quote image2" />
              </li>
              <li>
                <img src="assets/img/testimonial/6.jpg" alt="Quote image3" />
              </li>
              <li>
                <img src="assets/img/testimonial/1.jpg" alt="Quote image4" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
