import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Porfolio() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Defines the maximum width for this setting
        settings: {
          slidesToShow: 1, // On screens smaller than 768px, show 1 slide
          slidesToScroll: 1,
        }
      }
      // You can add more breakpoints here if needed
    ]
  };

  return (
    <div className="ltn__img-slider-area ltn__img-slider-2 section-bg-1 pt-5 pb-115">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                Recently
              </h6>
              <h1 className="section-title">
                Imported Vehicles<span>.</span>
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
                <a href="#" data-rel="lightcase:myCollection">
                  <img src="assets/img/daikyo/import-1.jpg" alt="Image1" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="#" data-rel="lightcase:myCollection">
                  <img src="assets/img/daikyo/import-2.jpg" alt="Image2" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="#" data-rel="lightcase:myCollection">
                  <img src="assets/img/daikyo/import-3.jpg" alt="Image3" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="#" data-rel="lightcase:myCollection">
                  <img src="assets/img/daikyo/import-4.jpg" alt="Image4" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="#" data-rel="lightcase:myCollection">
                  <img src="assets/img/daikyo/import-5.jpg" alt="Image5" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="#" data-rel="lightcase:myCollection">
                  <img src="assets/img/daikyo/import-6.jpg" alt="Image6" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="#" data-rel="lightcase:myCollection">
                  <img src="assets/img/daikyo/import-7.jpg" alt="Image6" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__img-slide-item-2">
                <a href="#" data-rel="lightcase:myCollection">
                  <img src="assets/img/daikyo/import-8.jpg" alt="Image6" />
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
