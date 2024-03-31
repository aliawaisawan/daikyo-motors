import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderCar() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <div className="ltn__product-slider-area ltn__product-gutter pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2">
              <h6 className="section-subtitle ltn__secondary-color">cars</h6>
              <h1 className="section-title">
                Related Products<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...settings}>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product-2/1.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="soldout-badge">New</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-bs-toggle="modal"
                          data-bs-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-bs-toggle="modal"
                          data-bs-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <h2 className="product-title">
                    <a href="product-details.html">Mercedes A-Class</a>
                  </h2>
                  <div className="product-price">
                    <span>$65,000</span>
                    <del>$68,000</del>
                  </div>
                  <div className="product-info-brief">
                    <ul>
                      <li>
                        <i className="fas fa-car"></i>2020
                      </li>
                      <li>
                        <i className="fas fa-cog"></i>Auto
                      </li>
                      <li>
                        <i className="fas fa-road"></i>90kph
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product-2/2.png" alt="#" />
                  </a>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-bs-toggle="modal"
                          data-bs-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-bs-toggle="modal"
                          data-bs-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <h2 className="product-title">
                    <a href="product-details.html">BMW 4 Series</a>
                  </h2>
                  <div className="product-price">
                    <span>$50,000</span>
                    <del>$62,000</del>
                  </div>
                  <div className="product-info-brief">
                    <ul>
                      <li>
                        <i className="fas fa-car"></i>2020
                      </li>
                      <li>
                        <i className="fas fa-cog"></i>Auto
                      </li>
                      <li>
                        <i className="fas fa-road"></i>95kph
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product-2/3.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="soldout-badge">Hot</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-bs-toggle="modal"
                          data-bs-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-bs-toggle="modal"
                          data-bs-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <h2 className="product-title">
                    <a href="product-details.html">Tesla Model S</a>
                  </h2>
                  <div className="product-price">
                    <span>$49,000</span>
                    <del>$55,000</del>
                  </div>
                  <div className="product-info-brief">
                    <ul>
                      <li>
                        <i className="fas fa-car"></i>2020
                      </li>
                      <li>
                        <i className="fas fa-cog"></i>Auto
                      </li>
                      <li>
                        <i className="fas fa-road"></i>80kph
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product-2/4.png" alt="#" />
                  </a>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-bs-toggle="modal"
                          data-bs-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-bs-toggle="modal"
                          data-bs-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <h2 className="product-title">
                    <a href="product-details.html">Toyota Corolla </a>
                  </h2>
                  <div className="product-price">
                    <span>$43,000</span>
                    <del>$48,000</del>
                  </div>
                  <div className="product-info-brief">
                    <ul>
                      <li>
                        <i className="fas fa-car"></i>2020
                      </li>
                      <li>
                        <i className="fas fa-cog"></i>Auto
                      </li>
                      <li>
                        <i className="fas fa-road"></i>70kph
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product-2/5.png" alt="#" />
                  </a>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-bs-toggle="modal"
                          data-bs-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-bs-toggle="modal"
                          data-bs-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <h2 className="product-title">
                    <a href="product-details.html">Jaguar F-type </a>
                  </h2>
                  <div className="product-price">
                    <span>$43,000</span>
                    <del>$48,000</del>
                  </div>
                  <div className="product-info-brief">
                    <ul>
                      <li>
                        <i className="fas fa-car"></i>2020
                      </li>
                      <li>
                        <i className="fas fa-cog"></i>Auto
                      </li>
                      <li>
                        <i className="fas fa-road"></i>70kph
                      </li>
                    </ul>
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

export default SliderCar;
