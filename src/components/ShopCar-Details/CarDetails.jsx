import React from "react";

function CarDetails() {
  return (
    <div className="ltn__shop-details-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__shop-details-inner">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ltn__shop-details-img-gallery">
                    <div className="ltn__shop-details-large-img">
                      <div className="single-large-img">
                        <a
                          href="img/product-2/1.png"
                          data-rel="lightcase:myCollection"
                        >
                          <img src="assets/img/product-2/1.png" alt="main" />
                        </a>
                      </div>
                      <div className="single-large-img">
                        <a
                          href="img/product-2/2.png"
                          data-rel="lightcase:myCollection"
                        >
                          <img src="assets/img/product-2/2.png" alt="Image1" />
                        </a>
                      </div>
                      <div className="single-large-img">
                        <a
                          href="img/product-2/3.png"
                          data-rel="lightcase:myCollection"
                        >
                          <img src="assets/img/product-2/3.png" alt="Image2" />
                        </a>
                      </div>
                      <div className="single-large-img">
                        <a
                          href="img/product-2/4.png"
                          data-rel="lightcase:myCollection"
                        >
                          <img src="assets/img/product-2/4.png" alt="Image3" />
                        </a>
                      </div>
                      <div className="single-large-img">
                        <a
                          href="img/product-2/5.png"
                          data-rel="lightcase:myCollection"
                        >
                          <img src="assets/img/product-2/5.png" alt="Image4" />
                        </a>
                      </div>
                      <div className="single-large-img">
                        <a
                          href="img/product-2/6.png"
                          data-rel="lightcase:myCollection"
                        >
                          <img src="assets/img/product-2/6.png" alt="Image5" />
                        </a>
                      </div>
                      <div className="single-large-img">
                        <a
                          href="img/product-2/7.png"
                          data-rel="lightcase:myCollection"
                        >
                          <img src="assets/img/product-2/7.png" alt="Image6" />
                        </a>
                      </div>
                    </div>
                    <div className="ltn__shop-details-small-img ">
                      <div className="single-small-img">
                        <img src="assets/img/product-2/1.png" alt="Image7" />
                      </div>
                      <div className="single-small-img">
                        <img src="assets/img/product-2/2.png" alt="Image8" />
                      </div>
                      <div className="single-small-img">
                        <img src="assets/img/product-2/3.png" alt="Image9" />
                      </div>
                      <div className="single-small-img">
                        <img src="assets/img/product-2/4.png" alt="Image10" />
                      </div>
                      <div className="single-small-img">
                        <img src="assets/img/product-2/5.png" alt="Image11" />
                      </div>
                      <div className="single-small-img">
                        <img src="assets/img/product-2/6.png" alt="Image12" />
                      </div>
                      <div className="single-small-img">
                        <img src="assets/img/product-2/7.png" alt="Image13" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="modal-product-info shop-details-info">
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
                        <li className="review-total">
                          {" "}
                          <a href="#"> ( 95 Reviews )</a>
                        </li>
                      </ul>
                    </div>
                    <h3>Mercedes A-Class</h3>
                    <div className="product-price">
                      <span>$49000.00</span>
                      <del>$65000.00</del>
                    </div>
                    <div className="modal-product-meta ltn__product-details-menu-1">
                      <ul>
                        <li>
                          <strong>Categories:</strong>
                          <span>
                            <a href="#">Parts</a>
                            <a href="#">Car</a>
                            <a href="#">Seat</a>
                            <a href="#">Cover</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__product-details-menu-2">
                      <ul>
                        <li>
                          <div className="cart-plus-minus">
                            <input
                              type="text"
                              value="02"
                              name="qtybutton"
                              className="cart-plus-minus-box"
                            />
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="theme-btn-1 btn btn-effect-1"
                            title="Add to Cart"
                            data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal"
                          >
                            <i className="fas fa-shopping-cart"></i>
                            <span>ADD TO CART</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__product-details-menu-3">
                      <ul>
                        <li>
                          <a
                            href="#"
                            className=""
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                          >
                            <i className="far fa-heart"></i>
                            <span>Add to Wishlist</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className=""
                            title="Compare"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                          >
                            <i className="fas fa-exchange-alt"></i>
                            <span>Compare</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="ltn__social-media">
                      <ul>
                        <li>Share:</li>
                        <li>
                          <a href="#" title="Facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Twitter">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Linkedin">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Instagram">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="ltn__safe-checkout">
                      <h5>Guaranteed Safe Checkout</h5>
                      <img
                        src="assets/img/icons/payment-2.png"
                        alt="Payment Image"
                      />
                    </div>
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

export default CarDetails;
