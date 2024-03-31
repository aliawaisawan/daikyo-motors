import React from "react";

function Video() {
  return (
    <div className="ltn__video-popup-area ltn__video-popup-margin-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div
              className="ltn__video-bg-img ltn__video-popup-height-600 bg-overlay-black-50--- bg-image"
              data-bs-bg="assets/img/bg/16.jpg"
            >
              <a
                className="ltn__video-icon-2 ltn__video-icon-2-border---"
                href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&amp;showinfo=0"
                data-rel="lightcase:myCollection"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
