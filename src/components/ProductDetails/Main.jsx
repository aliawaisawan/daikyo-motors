import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import DetailsLeft from "./DetailsLeft";
import RatedProduct from "./RatedProduct";
import RelatedProduct from "./RelatedProduct";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Product Details" />
      <div class="ltn__shop-details-area pb-85">
        <div class="container">
          <div class="row">
            <DetailsLeft />
            <RatedProduct />
          </div>
        </div>
      </div>
      <RelatedProduct />
      <Footer />
    </div>
  );
}

export default Main;
