import React from "react";

function SidebarArea() {
  return (
    <div className="col-lg-4">
      <aside className="sidebar-area ltn__right-sidebar">
        <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
          <ul>
            <li>
              <a href="#">
                Engine repairing <span>10</span>
              </a>
            </li>
            <li className="active">
              <a href="#">
                Car Repair <span>05</span>
              </a>
            </li>
            <li>
              <a href="#">
                Engine repairing <span>03</span>
              </a>
            </li>
            <li>
              <a href="#">
                Engine repairing <span>06</span>
              </a>
            </li>
            <li>
              <a href="#">
                Engine repairing <span>01</span>
              </a>
            </li>
            <li>
              <a href="#">
                Engine repairing <span>12</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="widget ltn__search-widget ltn__newsletter-widget">
          <h6 className="ltn__widget-sub-title">// subscribe</h6>
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
            <img src="assets/img/banner/banner-2.jpg" alt="Banner Image" />
          </a>
        </div>
      </aside>
    </div>
  );
}

export default SidebarArea;
