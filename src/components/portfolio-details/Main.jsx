import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import PortDeatils from "./PortDeatils";
import SidebarArea from "./SidebarArea";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Portfolio Details" />
      <div className="ltn__page-details-area ltn__portfolio-details-area mb-105">
        <div className="container">
          <div className="row">
            <PortDeatils />
            <SidebarArea />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
