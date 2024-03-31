import React from "react";

function Menu() {
  return (
    <div className="col-lg-4">
      <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
        <div className="widget ltn__menu-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Product categories
          </h4>
          <ul>
            <li>
              <a href="#">
                Body{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Interior{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Lights{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Parts{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Tires{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Uncategorized{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Wheel{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="widget ltn__price-filter-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Filter by price
          </h4>
          <div className="price_filter">
            <div className="price_slider_amount">
              <input type="submit" value="Your range:" />
              <input
                type="text"
                className="amount"
                name="price"
                placeholder="Add Your Price"
              />
            </div>
            <div className="slider-range"></div>
          </div>
        </div>
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
        <div className="widget ltn__search-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Search Objects
          </h4>
          <form action="#">
            <input
              type="text"
              name="search"
              placeholder="Search your keyword..."
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="widget ltn__tagcloud-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Popular Tags
          </h4>
          <ul>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">desgin</a>
            </li>
            <li>
              <a href="#">ux</a>
            </li>
            <li>
              <a href="#">usability</a>
            </li>
            <li>
              <a href="#">develop</a>
            </li>
            <li>
              <a href="#">icon</a>
            </li>
            <li>
              <a href="#">Car</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Repairs</a>
            </li>
            <li>
              <a href="#">Auto Parts</a>
            </li>
            <li>
              <a href="#">Oil</a>
            </li>
            <li>
              <a href="#">Dealer</a>
            </li>
            <li>
              <a href="#">Oil Change</a>
            </li>
            <li>
              <a href="#">Body Color</a>
            </li>
          </ul>
        </div>
        <div className="widget ltn__tagcloud-widget ltn__size-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Product Size
          </h4>
          <ul>
            <li>
              <a href="#">S</a>
            </li>
            <li>
              <a href="#">M</a>
            </li>
            <li>
              <a href="#">L</a>
            </li>
            <li>
              <a href="#">XL</a>
            </li>
            <li>
              <a href="#">XXL</a>
            </li>
          </ul>
        </div>
        <div className="widget ltn__color-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Product Color
          </h4>
          <ul>
            <li className="black">
              <a href="#"></a>
            </li>
            <li className="white">
              <a href="#"></a>
            </li>
            <li className="red">
              <a href="#"></a>
            </li>
            <li className="silver">
              <a href="#"></a>
            </li>
            <li className="gray">
              <a href="#"></a>
            </li>
            <li className="maroon">
              <a href="#"></a>
            </li>
            <li className="yellow">
              <a href="#"></a>
            </li>
            <li className="olive">
              <a href="#"></a>
            </li>
            <li className="lime">
              <a href="#"></a>
            </li>
            <li className="green">
              <a href="#"></a>
            </li>
            <li className="aqua">
              <a href="#"></a>
            </li>
            <li className="teal">
              <a href="#"></a>
            </li>
            <li className="blue">
              <a href="#"></a>
            </li>
            <li className="navy">
              <a href="#"></a>
            </li>
            <li className="fuchsia">
              <a href="#"></a>
            </li>
            <li className="purple">
              <a href="#"></a>
            </li>
            <li className="pink">
              <a href="#"></a>
            </li>
            <li className="nude">
              <a href="#"></a>
            </li>
            <li className="orange">
              <a href="#"></a>
            </li>

            <li>
              <a href="#" className="orange"></a>
            </li>
            <li>
              <a href="#" className="orange"></a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Menu;
