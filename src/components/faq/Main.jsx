import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import Accordian from "./Accordian";
import NewsLetter from "./NewsLetter";
import Activity from "./Activity";
import Blogs from "../About/Blogs";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Faq" />
      <div className="ltn__faq-area mb-100">
        <div className="container">
          <div className="row">
            <Accordian />
            <NewsLetter />
          </div>
        </div>
      </div>
      <Activity/>
      <Blogs/>
      <Footer />
    </div>
  );
}

export default Main;
