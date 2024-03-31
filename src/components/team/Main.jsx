import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BreadCrumb from "../common/BreadCrumb";
import Teamprofile from "./Teamprofile";
import CallAction from "../home/CallAction";
import Skills from "./Skills";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Team" />
      <Teamprofile />
      <CallAction/>
      <Skills/>
      
      <Footer />
    </div>
  );
}

export default Main;
