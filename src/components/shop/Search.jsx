import React from "react";

function Search() {
  return (
    <div className="col-lg-8">
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/1.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/2.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/3.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">Hot</li>
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/4.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/5.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">Sell -25%</li>
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/6.png" alt="#" />
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
                      <span>$152.00</span>
                      <del>$158.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/7.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/9.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/10.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">Sell</li>
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/11.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/12.png" alt="#" />
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
                      <span>$165.00</span>
                      <del>$1720.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/1.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/2.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/3.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/4.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
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
              <div className="col-xl-4 col-sm-6 col-6">
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
                      <a href="product-details.html">OE Replica Wheels</a>
                    </h2>
                    <div className="product-price">
                      <span>$165.00</span>
                      <del>$1720.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/12.png" alt="#" />
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
                      <span>$165.00</span>
                      <del>$1720.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/1.png" alt="#" />
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
              <div className="col-xl-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-center">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/2.png" alt="#" />
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
                      <img src="assets/img/product/1.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">New</li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">Brake Conversion Kit</a>
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
                      <span>$165.00</span>
                      <del>$1720.00</del>
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
                      <img src="assets/img/product/2.png" alt="#" />
                    </a>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">Tail Light Lens</a>
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
                      <span>$165.00</span>
                      <del>$1720.00</del>
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
                      <img src="assets/img/product/3.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">New</li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">Brake Conversion Kit</a>
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
                      <span>$165.00</span>
                      <del>$1720.00</del>
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
                      <img src="assets/img/product/4.png" alt="#" />
                    </a>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">Wheel Bearing Retainer</a>
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
                      <span>$165.00</span>
                      <del>$1720.00</del>
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
                      <img src="assets/img/product/5.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">Hot</li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">OE Replica Wheels</a>
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
                      <span>$165.00</span>
                      <del>$1720.00</del>
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
                      <img src="assets/img/product/6.png" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">New</li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">OE Replica Wheels</a>
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
                      <span>$165.00</span>
                      <del>$1720.00</del>
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
                      <img src="assets/img/product/4.png" alt="#" />
                    </a>
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">
                      <a href="product-details.html">Wheel Bearing Retainer</a>
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
                      <span>$165.00</span>
                      <del>$1720.00</del>
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

export default Search;
