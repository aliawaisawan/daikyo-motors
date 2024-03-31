import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import ShopCart from "./ShopCart";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Cart" />
      <ShopCart />
      <Footer />
    </div>
  );
}

export default Main;
