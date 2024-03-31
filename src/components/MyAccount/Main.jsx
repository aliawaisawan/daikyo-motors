import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import Wishlist from "./Wishlist";
function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="My Account" />
      <Wishlist />
      <Footer />
    </div>
  );
}

export default Main;
