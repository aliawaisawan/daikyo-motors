import React from "react";

function SidebarNews() {
  return (
    <div className="col-lg-4">
      <aside className="sidebar-area blog-sidebar ltn__right-sidebar">
        <div className="widget ltn__author-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            About Me
          </h4>
          <div className="ltn__author-widget-inner text-center">
            <img src="assets/img/team/4.jpg" alt="Image" />
            <h5>Rosalina D. Willaimson</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.
            </p>
            <div className="ltn__social-media">
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
                  <a href="#" title="Behance">
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Youtube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
        <div className="widget ltn__popular-post-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Popular Feeds
          </h4>
          <ul>
            <li>
              <div className="popular-post-widget-item clearfix">
                <div className="popular-post-widget-img">
                  <a href="blog-details.html">
                    <img src="assets/img/team/5.jpg" alt="#" />
                  </a>
                </div>
                <div className="popular-post-widget-brief">
                  <h6>
                    <a href="blog-details.html">
                      Lorem ipsum dolor sit cing elit, sed do.
                    </a>
                  </h6>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <a href="#">
                          <i className="far fa-calendar-alt"></i>June 22, 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-post-widget-item clearfix">
                <div className="popular-post-widget-img">
                  <a href="blog-details.html">
                    <img src="assets/img/team/6.jpg" alt="#" />
                  </a>
                </div>
                <div className="popular-post-widget-brief">
                  <h6>
                    <a href="blog-details.html">
                      Lorem ipsum dolor sit cing elit, sed do.
                    </a>
                  </h6>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <a href="#">
                          <i className="far fa-calendar-alt"></i>June 22, 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-post-widget-item clearfix">
                <div className="popular-post-widget-img">
                  <a href="blog-details.html">
                    <img src="assets/img/team/7.jpg" alt="#" />
                  </a>
                </div>
                <div className="popular-post-widget-brief">
                  <h6>
                    <a href="blog-details.html">
                      Lorem ipsum dolor sit cing elit, sed do.
                    </a>
                  </h6>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <a href="#">
                          <i className="far fa-calendar-alt"></i>June 22, 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-post-widget-item clearfix">
                <div className="popular-post-widget-img">
                  <a href="blog-details.html">
                    <img src="assets/img/team/8.jpg" alt="#" />
                  </a>
                </div>
                <div className="popular-post-widget-brief">
                  <h6>
                    <a href="blog-details.html">
                      Lorem ipsum dolor sit cing elit, sed do.
                    </a>
                  </h6>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <a href="#">
                          <i className="far fa-calendar-alt"></i>June 22, 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="widget ltn__menu-widget ltn__menu-widget-2 ltn__menu-widget-2-color-2">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Categories
          </h4>
          <ul>
            <li>
              <a href="#">
                Business <span>26</span>
              </a>
            </li>
            <li>
              <a href="#">
                Consultant <span>30</span>
              </a>
            </li>
            <li>
              <a href="#">
                Creative <span>71</span>
              </a>
            </li>
            <li>
              <a href="#">
                UI/UX <span>56</span>
              </a>
            </li>
            <li>
              <a href="#">
                Technology <span>60</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="widget ltn__social-media-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Never Miss News
          </h4>
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
              <li>
                <a href="#" title="Behance">
                  <i className="fab fa-behance"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget ltn__popular-post-widget ltn__twitter-post-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Twitter Feeds
          </h4>
          <ul>
            <li>
              <div className="popular-post-widget-item clearfix">
                <div className="popular-post-widget-img">
                  <a href="blog-details.html">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="popular-post-widget-brief">
                  <p>
                    Carsafe - #Gutenberg ready @wordpress Theme for Car Service,
                    Auto Parts, Car Dealer available on @website
                    <a href="https://website.net/">https://website.net</a>
                  </p>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <a href="#">
                          <i className="far fa-calendar-alt"></i>June 22, 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-post-widget-item clearfix">
                <div className="popular-post-widget-img">
                  <a href="blog-details.html">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="popular-post-widget-brief">
                  <p>
                    Carsafe - #Gutenberg ready @wordpress Theme for Car Service,
                    Auto Parts, Car Dealer available on @website
                    <a href="https://website.net/">https://website.net</a>
                  </p>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <a href="#">
                          <i className="far fa-calendar-alt"></i>June 22, 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-post-widget-item clearfix">
                <div className="popular-post-widget-img">
                  <a href="blog-details.html">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="popular-post-widget-brief">
                  <p>
                    Carsafe - #Gutenberg ready @wordpress Theme for Car Service,
                    Auto Parts, Car Dealer available on @website
                    <a href="https://website.net/">https://website.net</a>
                  </p>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-date">
                        <a href="#">
                          <i className="far fa-calendar-alt"></i>June 22, 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="widget ltn__instagram-widget">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Instagram Feeds
          </h4>
          <div className="ltn__instafeed ltn__instafeed-grid insta-grid-gutter"></div>
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
        <div className="widget ltn__banner-widget">
          <a href="shop.html">
            <img src="assets/img/banner/banner-4.jpg" alt="Banner Image" />
          </a>
        </div>
      </aside>
    </div>
  );
}

export default SidebarNews;
