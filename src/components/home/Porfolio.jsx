import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Porfolio() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="ltn__img-slider-area ltn__img-slider-2 section-bg-1 pt-115 pb-250">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                Portfolio
              </h6>
              <h1 className="section-title">
                We Have Done<span>.</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <Slider
            {...settings}
            className="ltn__image-slider-2-active slick-arrow-1 slick-arrow-1-inner"
          >
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="img/img-slide/1.jpg" data-rel="lightcase:myCollection">
                  <img src="assets/img/img-slide/1.jpg" alt="Image1" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="img/img-slide/2.jpg" data-rel="lightcase:myCollection">
                  <img src="assets/img/img-slide/2.jpg" alt="Image2" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="img/img-slide/3.jpg" data-rel="lightcase:myCollection">
                  <img src="assets/img/img-slide/3.jpg" alt="Image3" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="img/img-slide/4.jpg" data-rel="lightcase:myCollection">
                  <img src="assets/img/img-slide/4.jpg" alt="Image4" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="img/img-slide/1.jpg" data-rel="lightcase:myCollection">
                  <img src="assets/img/img-slide/1.jpg" alt="Image5" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="img/img-slide/2.jpg" data-rel="lightcase:myCollection">
                  <img src="assets/img/img-slide/2.jpg" alt="Image6" />
                </a>
              </div>
            </div>{" "}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
