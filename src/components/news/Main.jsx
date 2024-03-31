import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import NewsList from "./NewsList";
import SidebarNews from "./SidebarNews";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="News" />
      <div className="ltn__blog-area mb-120">
        <div className="container">
          <div className="row">
            <NewsList />
            <SidebarNews />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
