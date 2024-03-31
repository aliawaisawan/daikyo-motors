import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import Register from "./Register";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Register" />
      <Register />
      <Footer />
    </div>
  );
}

export default Main;
