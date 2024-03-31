import React from "react";

function ShopOption() {
  return (
    <div className="col-lg-8 order-lg-2">
      <div className="ltn__shop-options">
        <ul>
          <li>
            <div className="ltn__grid-list-tab-menu ">
              <div className="nav">
                <a
                  className="active show"
                  data-bs-toggle="tab"
                  href="#liton_product_grid"
                >
                  <i className="fas fa-th-large"></i>
                </a>
                <a data-bs-toggle="tab" href="#liton_product_list">
                  <i className="fas fa-list"></i>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="showing-product-number text-right">
              <span>Showing 1–12 of 18 results</span>
            </div>
          </li>
          <li>
            <div className="short-by text-center">
              <select className="nice-select">
                <option>Default Sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by new arrivals</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className="tab-pane fade active show" id="liton_product_grid">
          <div className="ltn__product-tab-content-inner ltn__product-grid-view">
            <div className="row">
              <div className="col-sm-6 col-6">
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
              <div className="col-sm-6 col-6">
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
              <div className="col-sm-6 col-6">
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
              <div className="col-sm-6 col-6">
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
              <div className="col-sm-6 col-6">
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
              <div className="col-sm-6 col-6">
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
              <div className="col-sm-6 col-6">
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
              <div className="col-sm-6 col-6">
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
              <div className="col-sm-6 col-6">
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
              <div className="col-sm-6 col-6">
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
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="liton_product_list">
          <div className="ltn__product-tab-content-inner ltn__product-list-view">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-3">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product-2/1.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">New</li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">Mercedes A-Class</a>
                    </h2>
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
                    <div className="product-price">
                      <span>$65000.00</span>
                      <del>$68000.00</del>
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
                    <div className="product-brief">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae asperiores sit odit nesciunt, aliquid,
                        deleniti non et ut dolorem!
                      </p>
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
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-3">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product-2/2.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">New</li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">BMW 4 Series</a>
                    </h2>
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
                    <div className="product-price">
                      <span>$50000.00</span>
                      <del>$52000.00</del>
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
                    <div className="product-brief">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae asperiores sit odit nesciunt, aliquid,
                        deleniti non et ut dolorem!
                      </p>
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
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-3">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product-2/3.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">New</li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">Tesla Model S</a>
                    </h2>
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
                    <div className="product-price">
                      <span>$45000.00</span>
                      <del>$48000.00</del>
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
                    <div className="product-brief">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae asperiores sit odit nesciunt, aliquid,
                        deleniti non et ut dolorem!
                      </p>
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
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-3">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product-2/4.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">New</li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">Toyota Corolla</a>
                    </h2>
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
                    <div className="product-price">
                      <span>$55000.00</span>
                      <del>$58000.00</del>
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
                          <i className="fas fa-road"></i>72kph
                        </li>
                      </ul>
                    </div>
                    <div className="product-brief">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae asperiores sit odit nesciunt, aliquid,
                        deleniti non et ut dolorem!
                      </p>
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
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-3">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product-2/5.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">New</li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">Jaguar F-type</a>
                    </h2>
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
                    <div className="product-price">
                      <span>$62000.00</span>
                      <del>$68000.00</del>
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
                    <div className="product-brief">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae asperiores sit odit nesciunt, aliquid,
                        deleniti non et ut dolorem!
                      </p>
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
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-3">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product-2/6.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">New</li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">Mercedes A-Class</a>
                    </h2>
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
                    <div className="product-price">
                      <span>$65000.00</span>
                      <del>$68000.00</del>
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
                    <div className="product-brief">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae asperiores sit odit nesciunt, aliquid,
                        deleniti non et ut dolorem!
                      </p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__pagination-area text-center">
        <div className="ltn__pagination">
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-angle-double-left"></i>
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li className="active">
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">...</a>
            </li>
            <li>
              <a href="#">10</a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShopOption;
