import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="ltn__header-area ltn__header-4 ltn__header-6 ltn__header-transparent gradient-color-2">
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black  ltn__logo-right-menu-option plr--9">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link to="/">
                      <img src="assets/img/logo-2.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="get-support clearfix get-support-color-white">
                    <div className="get-support-icon">
                      <i className="icon-call"></i>
                    </div>
                    <div className="get-support-info">
                      <h6>Get Support</h6>
                      <h4>
                        <a href="tel:+123456789">123-456-789-10</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column menu-color-white">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li className="menu-icon">
                          <a href="#">Home</a>
                        </li>
                        <li className="menu-icon">
                          <a href="#">About</a>
                          <ul>
                            <li>
                              <Link to="/about-us">About</Link>
                            </li>
                            <li>
                              <a href="/services">Services</a>
                            </li>
                            <li>
                              <a href="/services-details">Service Details</a>
                            </li>
                            <li>
                              <a href="/portfolio">Portfolio</a>
                            </li>
                            <li>
                              <a href="/portfolio-details">Portfolio Details</a>
                            </li>
                            <li>
                              <a href="/team">Team</a>
                            </li>
                            <li>
                              <a href="/team-details">Team Details</a>
                            </li>
                            <li>
                              <a href="/faq">FAQ</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <a href="#">Shop</a>
                          <ul>
                            <li>
                              <a href="/shop">Shop</a>
                            </li>
                            <li>
                              <a href="/product-details">Shop details </a>
                            </li>
                            <li>
                              <a href="#">
                                Other Pages <span className="float-end"></span>
                              </a>
                              <ul>
                                <li>
                                  <a href="/cart">Cart</a>
                                </li>
                                <li>
                                  <a href="/checkout">Checkout</a>
                                </li>
                                <li>
                                  <a href="/order-tracking">Order Tracking</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/shop-car">Shop Car</a>
                            </li>
                            <li>
                              <a href="/car-details">
                                Shop Car details{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <a href="#">News</a>
                          <ul>
                            <li>
                              <a href="/news">News</a>
                            </li>
                            <li>
                              <a href="/news-details">News details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/contact-us">Contact</a>
                        </li>
                        <li className="special-link">
                          <a href="/appointment">GET APPOINTMENT</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="ltn__header-options ltn__header-options-2">
                <div className="header-search-wrap">
                  <div className="header-search-1">
                    <div className="search-icon">
                      <i className="icon-search for-search-show"></i>
                      <i className="icon-cancel  for-search-close"></i>
                    </div>
                  </div>
                  <div className="header-search-1-form">
                    <form id="#" method="get" action="#">
                      <input
                        type="text"
                        name="search"
                        value=""
                        placeholder="Search here..."
                      />
                      <button type="submit">
                        <span>
                          <i className="icon-search"></i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon-user"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="login.html">Sign in</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                        <li>
                          <a href="account.html">My Account</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mini-cart-icon">
                  <a
                    href="#ltn__utilize-cart-menu"
                    className="ltn__utilize-toggle"
                  >
                    <i className="icon-shopping-cart"></i>
                    <sup>2</sup>
                  </a>
                </div>
                <div className="mobile-menu-toggle d-xl-none">
                  <a
                    href="#ltn__utilize-mobile-menu"
                    className="ltn__utilize-toggle"
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      ></path>
                      <path d="M300,320 L540,320" id="middle"></path>
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="ltn__utilize-cart-menu"
        className="ltn__utilize ltn__utilize-cart-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <span className="ltn__utilize-menu-title">Cart</span>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="mini-cart-product-area ltn__scrollbar">
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="assets/img/product/1.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel"></i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Wheel Bearing Retainer</a>
                </h6>
                <span className="mini-cart-quantity">1 x $65.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="assets/img/product/2.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel"></i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Brake Conversion Kit</a>
                </h6>
                <span className="mini-cart-quantity">1 x $85.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="assets/img/product/3.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel"></i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">OE Replica Wheels</a>
                </h6>
                <span className="mini-cart-quantity">1 x $92.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="assets/img/product/4.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel"></i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Shock Mount Insulator</a>
                </h6>
                <span className="mini-cart-quantity">1 x $68.00</span>
              </div>
            </div>
          </div>
          <div className="mini-cart-footer">
            <div className="mini-cart-sub-total">
              <h5>
                Subtotal: <span>$310.00</span>
              </h5>
            </div>
            <div className="btn-wrapper">
              <a href="cart.html" className="theme-btn-1 btn btn-effect-1">
                View Cart
              </a>
              <a href="cart.html" className="theme-btn-2 btn btn-effect-2">
                Checkout
              </a>
            </div>
            <p>Free Shipping on All Orders Over $100!</p>
          </div>
        </div>
      </div>

      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <a href="index.html">
                <img src="assets/img/logo.png" alt="Logo" />
              </a>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/about-us">About</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/services-details">Service Details</a>
                  </li>
                  <li>
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/portfolio-details">Portfolio Details</a>
                  </li>
                  <li>
                    <a href="/team">Team</a>
                  </li>
                  <li>
                    <a href="/team-details">Team Details</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Shop</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/shop">Shop</a>
                  </li>
                  <li>
                    <a href="/product-details">Shop details </a>
                  </li>
                  <li>
                    <a href="/shop-car">Shop Car</a>
                  </li>
                  <li>
                    <a href="/car-details">Shop Car details </a>
                  </li>
                  <li>
                    <a href="/cart">Cart</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="/checkout">Checkout</a>
                  </li>
                  <li>
                    <a href="/order-tracking">Order Tracking</a>
                  </li>
                  <li>
                    <a href="account.html">My Account</a>
                  </li>
                  <li>
                    <a href="login.html">Sign in</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">News</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/news">News</a>
                  </li>
                  <li>
                    <a href="/news-details">News details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact-us">Contact</a>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              <li>
                <a href="account.html" title="My Account">
                  <span className="utilize-btn-icon">
                    <i className="far fa-user"></i>
                  </span>
                  My Account
                </a>
              </li>
              <li>
                <a href="wishlist.html" title="Wishlist">
                  <span className="utilize-btn-icon">
                    <i className="far fa-heart"></i>
                    <sup>3</sup>
                  </span>
                  Wishlist
                </a>
              </li>
              <li>
                <a href="/cart" title="Shoping Cart">
                  <span className="utilize-btn-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <sup>5</sup>
                  </span>
                  Shoping Cart
                </a>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
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
        </div>
      </div>

      <div className="ltn__utilize-overlay"></div>
    </>
  );
}

export default Header;
