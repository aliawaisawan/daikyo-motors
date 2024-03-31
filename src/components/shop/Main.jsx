import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import Search from "./Search";
import ProductCategroies from "./ProductCategroies";
function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Shop" />
      <div class="ltn__product-area ltn__product-gutter mb-120">
        <div class="container">
          <div class="row">
            <Search />
            <ProductCategroies />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
