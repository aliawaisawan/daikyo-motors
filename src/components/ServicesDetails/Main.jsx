import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import DetailsInner from "./DetailsInner";
import SidebarArea from "./SidebarArea";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Services Details" />
      <div class="ltn__page-details-area ltn__service-details-area mb-105">
        <div class="container">
          <div class="row">
            <DetailsInner />
            <SidebarArea />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
