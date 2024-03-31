import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RelatedProduct() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

        <div className="row  ">
          <Slider {...settings}>
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product/7.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
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
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Wheel Bearing Retainer</a>
                  </h2>
                  <div className="product-price">
                    <span>$149.00</span>
                    <del>$162.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product/8.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
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
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Brake Conversion Kit</a>
                  </h2>
                  <div className="product-price">
                    <span>$62.00</span>
                    <del>$85.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product/9.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
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
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Shock Mount Insulator</a>
                  </h2>
                  <div className="product-price">
                    <span>$75.00</span>
                    <del>$92.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product/10.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
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
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Tail Light Lens</a>
                  </h2>
                  <div className="product-price">
                    <span>$78.00</span>
                    <del>$85.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product/5.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
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
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">
                      Coil Spring Conversion Kit
                    </a>
                  </h2>
                  <div className="product-price">
                    <span>$150.00</span>
                    <del>$180.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product/6.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
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
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">OE Replica Wheels</a>
                  </h2>
                  <div className="product-price">
                    <span>$150.00</span>
                    <del>$180.00</del>
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

export default RelatedProduct;
