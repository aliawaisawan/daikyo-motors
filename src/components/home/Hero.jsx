import React from "react";

function Hero() {
  return (
    <div className="ltn__slider-area ltn__slider-4 position-relative fix">
      <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
        <video autoplay muted loop id="myVideo">
          <source src="media/1.mp4" type="video/mp4" />
        </video>
        <div className="ltn__youtube-video-background">
          <iframe
            title="Hero"
            frameborder="0"
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/fzD6S1dMhrw?playlist=fzD6S1dMhrw&loop=1&controls=0&showinfo=0&autoplay=1&mute=1"
          ></iframe>
        </div>

        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- bg-overlay-theme-black-30"
          data-bs-bg="img/slider/41.jpg"
        >
          <div className="ltn__slide-item-inner text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h6 className="slide-sub-title white-color animated">
                        TALENTED ENGINEER & MECHANICS
                      </h6>
                      <h1 className="slide-title text-uppercase white-color animated ">
                        Professional Car <br /> Service Provide
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
