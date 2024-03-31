import React from "react";

function RatedProduct() {
  return (
    <div className="col-lg-4">
      <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
        <div className="widget ltn__top-rated-product-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Top Rated Product
          </h4>
          <ul>
            <li>
              <div className="top-rated-product-item clearfix">
                <div className="top-rated-product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product/1.png" alt="#" />
                  </a>
                </div>
                <div className="top-rated-product-info">
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
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h6>
                    <a href="product-details.html">Mixel Solid Seat Cover</a>
                  </h6>
                  <div className="product-price">
                    <span>$49.00</span>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="top-rated-product-item clearfix">
                <div className="top-rated-product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product/2.png" alt="#" />
                  </a>
                </div>
                <div className="top-rated-product-info">
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
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h6>
                    <a href="product-details.html">Brake Conversion Kit</a>
                  </h6>
                  <div className="product-price">
                    <span>$49.00</span>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="top-rated-product-item clearfix">
                <div className="top-rated-product-img">
                  <a href="product-details.html">
                    <img src="assets/img/product/3.png" alt="#" />
                  </a>
                </div>
                <div className="top-rated-product-info">
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
                  <h6>
                    <a href="product-details.html">Coil Spring Conversion</a>
                  </h6>
                  <div className="product-price">
                    <span>$49.00</span>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="widget ltn__banner-widget">
          <a href="shop.html">
            <img src="assets/img/banner/2.jpg" alt="#" />
          </a>
        </div>
      </aside>
    </div>
  );
}

export default RatedProduct;
