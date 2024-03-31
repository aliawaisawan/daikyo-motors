import React from "react";

function NewsLetter() {
  return (
    <div className="col-lg-4">
      <aside className="sidebar-area ltn__right-sidebar">
        <div className="widget ltn__search-widget ltn__newsletter-widget">
          <h6 className="ltn__widget-sub-title">subscribe</h6>
          <h4 className="ltn__widget-title">Get Newsletter</h4>
          <form action="#">
            <input type="text" name="search" placeholder="Search" />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="ltn__newsletter-bg-icon">
            <i className="fas fa-envelope-open-text"></i>
          </div>
        </div>
        <div className="widget ltn__banner-widget">
          <a href="shop.html">
            <img src="assets/img/banner/banner-3.jpg" alt="Banner img" />
          </a>
        </div>
      </aside>
    </div>
  );
}

export default NewsLetter;
