import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CarDeals() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
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
    <div className="ltn__product-tab-area ltn__product-gutter pt-115 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2">
              <h6 className="section-subtitle ltn__secondary-color">Cars</h6>
              <h1 className="section-title">Car Best Deals</h1>
            </div>
            <div className="ltn__tab-menu ltn__tab-menu-top-right text-uppercase">
              <div className="nav">
                <a
                  className="active show"
                  data-bs-toggle="tab"
                  href="#liton_tab_2_1"
                >
                  New Cars
                </a>
                <a data-bs-toggle="tab" href="#liton_tab_2_2" className="">
                  Old Cars
                </a>
              </div>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade active show" id="liton_tab_2_1">
                <div className="ltn__product-tab-content-inner">
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
                              <a href="product-details.html">
                                Mercedes A-Class
                              </a>
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
              <div className="tab-pane fade" id="liton_tab_2_2">
                <div className="ltn__product-tab-content-inner">
                  <div className="row ">
                  <Slider {...settings}>

                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="assets/img/product-2/6.png" alt="#" />
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
                            <a href="product-details.html">Nissan Skyline</a>
                          </h2>
                          <div className="product-price">
                            <span>$39,000</span>
                            <del>$42,000</del>
                          </div>
                          <div className="product-info-brief">
                            <ul>
                              <li>
                                <i className="fas fa-car"></i>2019
                              </li>
                              <li>
                                <i className="fas fa-cog"></i>Auto
                              </li>
                              <li>
                                <i className="fas fa-road"></i>75kph
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
                            <img src="assets/img/product-2/7.png" alt="#" />
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
                            <a href="product-details.html">Hyundai Tucson</a>
                          </h2>
                          <div className="product-price">
                            <span>$52,000</span>
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
                                <i className="fas fa-road"></i>82kph
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
                            <img src="assets/img/product-2/8.png" alt="#" />
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
                            <a href="product-details.html">Ford Ranger</a>
                          </h2>
                          <div className="product-price">
                            <span>$59,000</span>
                            <del>$62,000</del>
                          </div>
                          <div className="product-info-brief">
                            <ul>
                              <li>
                                <i className="fas fa-car"></i>2017
                              </li>
                              <li>
                                <i className="fas fa-cog"></i>Auto
                              </li>
                              <li>
                                <i className="fas fa-road"></i>92kph
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
                            <img src="assets/img/product-2/9.png" alt="#" />
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
                            <a href="product-details.html">Volkswagen Polo</a>
                          </h2>
                          <div className="product-price">
                            <span>$40,000</span>
                            <del>$43,000</del>
                          </div>
                          <div className="product-info-brief">
                            <ul>
                              <li>
                                <i className="fas fa-car"></i>2018
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
                            <img src="assets/img/product-2/10.png" alt="#" />
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
                            <a href="product-details.html">Honda Freed</a>
                          </h2>
                          <div className="product-price">
                            <span>$40,000</span>
                            <del>$43,000</del>
                          </div>
                          <div className="product-info-brief">
                            <ul>
                              <li>
                                <i className="fas fa-car"></i>2019
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
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDeals;
