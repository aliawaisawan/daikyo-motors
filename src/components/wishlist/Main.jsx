import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import CartMenu from "./CartMenu";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Wishlist" />
      <CartMenu />
      <Footer />
    </div>
  );
}

export default Main;
