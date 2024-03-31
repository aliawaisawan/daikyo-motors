import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import ReliableServices from "./ReliableServices";
import ServicesDo from "./ServicesDo";
import GetRewards from "./GetRewards";
import Video from "./Video";
import Blogs from "../About/Blogs";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Services" />
      <ReliableServices />
      <ServicesDo />
      <GetRewards />
      <Video />
      <Blogs/>
      <Footer />
    </div>
  );
}

export default Main;
