import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import ShopOption from "./ShopOption";
import Menu from "./Menu";
function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Shop Car" />
      <div class="ltn__product-area ltn__product-gutter mb-120">
        <div class="container">
          <div class="row">
            <ShopOption />
            <Menu/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
