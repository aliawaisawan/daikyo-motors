import React from "react";

function DetailsLeft() {
  return (
    <div className="col-lg-8 col-md-12">
      <div className="ltn__shop-details-inner mb-60">
        <div className="row">
          <div className="col-md-6">
            <div className="ltn__shop-details-img-gallery">
              <div className="ltn__shop-details-large-img">
                <div className="single-large-img">
                  <a href="img/product/1.png" data-rel="lightcase:myCollection">
                    <img src="assets/img/product/1.png" alt="Image" />
                  </a>
                </div>
                <div className="single-large-img">
                  <a href="img/product/2.png" data-rel="lightcase:myCollection">
                    <img src="assets/img/product/2.png" alt="Image" />
                  </a>
                </div>
                <div className="single-large-img">
                  <a href="img/product/3.png" data-rel="lightcase:myCollection">
                    <img src="assets/img/product/3.png" alt="Image" />
                  </a>
                </div>
                <div className="single-large-img">
                  <a href="img/product/4.png" data-rel="lightcase:myCollection">
                    <img src="assets/img/product/4.png" alt="Image" />
                  </a>
                </div>
                <div className="single-large-img">
                  <a href="img/product/5.png" data-rel="lightcase:myCollection">
                    <img src="assets/img/product/5.png" alt="Image" />
                  </a>
                </div>
                <div className="single-large-img">
                  <a href="img/product/6.png" data-rel="lightcase:myCollection">
                    <img src="assets/img/product/6.png" alt="Image" />
                  </a>
                </div>
                <div className="single-large-img">
                  <a href="img/product/7.png" data-rel="lightcase:myCollection">
                    <img src="assets/img/product/7.png" alt="Image" />
                  </a>
                </div>
              </div>
              <div className="ltn__shop-details-small-img slick-arrow-2">
                <div className="single-small-img">
                  <img src="assets/img/product/1.png" alt="Image4" />
                </div>
                <div className="single-small-img">
                  <img src="assets/img/product/2.png" alt="Image5" />
                </div>
                <div className="single-small-img">
                  <img src="assets/img/product/3.png" alt="Image6" />
                </div>
                <div className="single-small-img">
                  <img src="assets/img/product/4.png" alt="Image7" />
                </div>
                <div className="single-small-img">
                  <img src="assets/img/product/5.png" alt="Image8" />
                </div>
                <div className="single-small-img">
                  <img src="assets/img/product/6.png" alt="Image9" />
                </div>
                <div className="single-small-img">
                  <img src="assets/img/product/7.png" alt="Image10" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="modal-product-info shop-details-info pl-0">
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
              <h3>Brake Conversion Kit</h3>
              <div className="product-price">
                <span>$49.00</span>
                <del>$65.00</del>
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
                <img src="assets/img/icons/payment-2.png" alt="Payment Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
        <div className="ltn__shop-details-tab-menu">
          <div className="nav">
            <a
              className="active show"
              data-bs-toggle="tab"
              href="#liton_tab_details_1_1"
            >
              Description
            </a>
            <a data-bs-toggle="tab" href="#liton_tab_details_1_2" className="">
              Reviews
            </a>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="liton_tab_details_1_1">
            <div className="ltn__shop-details-tab-content-inner">
              <h4 className="title-2">Lorem ipsum dolor sit amet elit.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
          <div className="tab-pane fade" id="liton_tab_details_1_2">
            <div className="ltn__shop-details-tab-content-inner">
              <h4 className="title-2">Customer Reviews</h4>
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
              <hr />
              <div className="ltn__comment-area mb-30">
                <div className="ltn__comment-inner">
                  <ul>
                    <li>
                      <div className="ltn__comment-item clearfix">
                        <div className="ltn__commenter-img">
                          <img
                            src="assets/img/testimonial/1.jpg"
                            alt="Image3"
                          />
                        </div>
                        <div className="ltn__commenter-comment">
                          <h6>
                            <a href="#">Adam Smit</a>
                          </h6>
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
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Doloribus, omnis fugit corporis iste magnam
                            ratione.
                          </p>
                          <span className="ltn__comment-reply-btn">
                            September 3, 2020
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="ltn__comment-item clearfix">
                        <div className="ltn__commenter-img">
                          <img
                            src="assets/img/testimonial/3.jpg"
                            alt="Image2"
                          />
                        </div>
                        <div className="ltn__commenter-comment">
                          <h6>
                            <a href="#">Adam Smit</a>
                          </h6>
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
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Doloribus, omnis fugit corporis iste magnam
                            ratione.
                          </p>
                          <span className="ltn__comment-reply-btn">
                            September 2, 2020
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="ltn__comment-item clearfix">
                        <div className="ltn__commenter-img">
                          <img
                            src="assets/img/testimonial/2.jpg"
                            alt="Image1"
                          />
                        </div>
                        <div className="ltn__commenter-comment">
                          <h6>
                            <a href="#">Adam Smit</a>
                          </h6>
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
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Doloribus, omnis fugit corporis iste magnam
                            ratione.
                          </p>
                          <span className="ltn__comment-reply-btn">
                            September 2, 2020
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ltn__comment-reply-area ltn__form-box mb-30">
                <form action="#">
                  <h4 className="title-2">Add a Review</h4>
                  <div className="mb-30">
                    <div className="add-a-review">
                      <h6>Your Ratings:</h6>
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
                    </div>
                  </div>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea placeholder="Type your comments...."></textarea>
                  </div>
                  <div className="input-item input-item-name ltn__custom-icon">
                    <input type="text" placeholder="Type your name...." />
                  </div>
                  <div className="input-item input-item-email ltn__custom-icon">
                    <input type="email" placeholder="Type your email...." />
                  </div>
                  <div className="input-item input-item-website ltn__custom-icon">
                    <input
                      type="text"
                      name="website"
                      placeholder="Type your website...."
                    />
                  </div>
                  <label className="mb-0">
                    <input type="checkbox" name="agree" /> Save my name, email,
                    and website in this browser for the next time I comment.
                  </label>
                  <div className="btn-wrapper">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsLeft;
