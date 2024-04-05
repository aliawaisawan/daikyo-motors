import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb(props) {
  return (
    <div
      className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-contact  bg-image"
      data-bs-bg="assets/img/daikyo/contact-us.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  Daikyo
                </h6>
                <h1 className="section-title white-color">{props.title}</h1>
              </div>
              <div className="ltn__breadcrumb-list">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>{props.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
