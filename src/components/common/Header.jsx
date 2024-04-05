import React from "react";
import { Link } from "react-router-dom";


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const openMobileMenu = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <header className="ltn__header-area ltn__header-4 ltn__header-6 ltn__header-transparent gradient-color-2">
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black  ltn__logo-right-menu-option plr--9">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <a href="/">
                      <img src="assets/img/logo-2.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="get-support clearfix get-support-color-white">
                    <div className="get-support-icon">
                      <i className="icon-call"></i>
                    </div>
                    <div className="get-support-info">
                      <h6>Get Support</h6>
                      <h4>
                        <a href="tel:+8152-387-9911">+81 52-387-9911</a>
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
                        <li >
                          <a href="/">Home</a>
                        </li>
                       
                        <li >
                          <a href="#import-process">Import Process</a>                         
                        </li>
                        <li>
                          <a href="#parts-machinery">Parts & Machinery</a>
                        </li>
                        
                        
                        <li>
                          <Link to="/contact-us">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/about-us">About</Link>
                        </li>
                      
                        
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="ltn__header-options ltn__header-options-2">                    
                        <div class="mobile-menu-toggle d-xl-none">
                        <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle" onClick={openMobileMenu}>
                                <svg viewBox="0 0 800 600">
                                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                    <path d="M300,320 L540,320" id="middle"></path>
                                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                </svg>
                            </a>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </header>

   

      <div
        id="ltn__utilize-mobile-menu"
        className={`ltn__utilize ltn__utilize-mobile-menu ${isMobileMenuOpen ? "ltn__utilize-open" : ""}`}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              
            </div>
            <button className="ltn__utilize-close" onClick={closeMobileMenu}>×</button>
          </div>
          
          <div className="ltn__utilize-menu">
          <ul>
                        <li >
                          <a href="/">Home</a>
                        </li>
                       
                        <li >
                          <a href="/#import-process">Import Process</a>                         
                        </li>
                        <li>
                          <a href="/#parts-machinery">Parts & Machinery</a>
                        </li>
                        
                        
                        <li>
                          <Link to="/contact-us">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/about-us">About</Link>
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

      {isMobileMenuOpen && <div className="ltn__utilize-overlay" onClick={closeMobileMenu}></div>}
    </>
  );
}

export default Header;
