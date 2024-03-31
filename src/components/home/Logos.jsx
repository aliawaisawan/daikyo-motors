import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Logos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 550,
    slidesToShow: 5,
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
    <div className="ltn__brand-logo-area ltn__brand-logo-1 pt-80 pb-110 plr--9">
      <div className="container-fluid">
        <Slider {...settings}>
          <div className="ltn__brand-logo-item">
            <img src="assets/img/brand-logo/1.png" alt="Brand Logo" />
          </div>
          <div className="ltn__brand-logo-item">
            <img src="assets/img/brand-logo/2.png" alt="Brand Logo" />
          </div>
          <div className="ltn__brand-logo-item">
            <img src="assets/img/brand-logo/3.png" alt="Brand Logo" />
          </div>
          <div className="ltn__brand-logo-item">
            <img src="assets/img/brand-logo/4.png" alt="Brand Logo" />
          </div>
          <div className="ltn__brand-logo-item">
            <img src="assets/img/brand-logo/5.png" alt="Brand Logo" />
          </div>
          <div className="ltn__brand-logo-item">
            <img src="assets/img/brand-logo/3.png" alt="Brand Logo" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Logos;
