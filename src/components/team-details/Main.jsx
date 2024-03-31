import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import ProfileDetails from "./ProfileDetails";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Team Details" />
      <ProfileDetails />
      <Footer />
    </div>
  );
}

export default Main;
