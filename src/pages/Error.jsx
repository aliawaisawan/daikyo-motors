import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="ltn__404-area ltn__404-area-1 mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-404-inner text-center">
              <h1 className="error-404-title">404</h1>
              <h2>Page Not Found! Page Not Found!</h2>
              <h3>Oops! Looks like something going rong</h3>
              <p>
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <div className="btn-wrapper">
                <Link to="/" className="btn btn-transparent">
                  <i className="fas fa-long-arrow-alt-left"></i> BACK TO HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
