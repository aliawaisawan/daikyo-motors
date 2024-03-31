import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BreadCrumb from "../common/BreadCrumb";
import Email from "./Email";
import GetQuote from "./GetQuote";
import Map from "./Map";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Contact Us" />
      <Email />
      <GetQuote/>
      <Map/>
      <Footer />
    </div>
  );
}

export default Main;
