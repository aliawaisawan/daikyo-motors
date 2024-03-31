import React from "react";
import BreadCrumb from "../common/BreadCrumb";
import Header from "../common/Header";
import Footer from "../common/Footer";
import NewsDetails from "./NewsDetails";
import SidebarNewsdetails from "./SidebarNewsdetails";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="News Details" />
      <div className="ltn__page-details-area ltn__blog-details-area mb-120">
        <div className="container">
          <div className="row">
            <NewsDetails />
            <SidebarNewsdetails />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
