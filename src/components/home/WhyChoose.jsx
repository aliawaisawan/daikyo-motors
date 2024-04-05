import React from "react";

function WhyChoose() {
  return (
    <div id='parts-machinery' className="ltn__why-choose-us-area section-bg-1 pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  Extra Benefits from Daikyo
                </h6>
                <h1 className="section-title">
                We also deal in heavy machinery and car parts<span>.</span>
                </h1>
                <p>
                  We deal in all sorts of parts and heavy machinery, anything can be provided upon request!
                </p>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="why-choose-us-feature-item">
                    <div className="why-choose-us-feature-icon">
                      <i className="icon-car-parts-1"></i>
                    </div>
                    <div className="why-choose-us-feature-brief">
                      <h3>
                        <a href="service-details.html">
                          Car Parts
                        </a>
                      </h3>
                      <p>
                        If you need a specific part replaced of your car during and after the import, Daikyo motors is here to assist!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="why-choose-us-feature-item">
                    <div className="why-choose-us-feature-icon">
                      <i className="icon-automobile"></i>
                    </div>
                    <div className="why-choose-us-feature-brief">
                      <h3>
                        <a href="service-details.html">
                          Heavy Machinery
                        </a>
                      </h3>
                      <p>
                        All sort of heavy machinery can be imported upon request from you with the help of Daikyo Motors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-us-img-wrap">
              <div className="why-choose-us-img-1 text-start">
                <img src="assets/img/daikyo/parts-1.jpg" alt="Image1" />
              </div>
              <div className="why-choose-us-img-2 text-end">
                <img src="assets/img/daikyo/parts-2.jpg" alt="Image2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
