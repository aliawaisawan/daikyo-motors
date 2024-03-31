import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      className="ltn__testimonial-area bg-image pt-115 pb-70"
      data-bs-bg="assets/img/bg/8.jpg"
    >
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
          <Slider {...settings}>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-img">
                  <img src="assets/img/testimonial/6.jpg" alt="#" />
                </div>
                <div className="ltn__testimoni-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi sicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4>Rosalina D. William</h4>
                  <h6>Founder</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-img">
                  <img src="assets/img/testimonial/7.jpg" alt="#" />
                </div>
                <div className="ltn__testimoni-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi sicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4>Rosalina D. William</h4>
                  <h6>Founder</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-img">
                  <img src="assets/img/testimonial/1.jpg" alt="#" />
                </div>
                <div className="ltn__testimoni-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi sicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4>Rosalina D. William</h4>
                  <h6>Founder</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-img">
                  <img src="assets/img/testimonial/2.jpg" alt="#" />
                </div>
                <div className="ltn__testimoni-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi sicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4>Rosalina D. William</h4>
                  <h6>Founder</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-img">
                  <img src="assets/img/testimonial/5.jpg" alt="#" />
                </div>
                <div className="ltn__testimoni-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipi sicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4>Rosalina D. William</h4>
                  <h6>Founder</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments"></i>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
