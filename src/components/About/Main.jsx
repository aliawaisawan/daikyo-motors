import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BreadCrumb from "../common/BreadCrumb";
import About from "./About";
import Features from "./Features";
import Testimonials from "./Testimonials";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="About Us" />
      <About />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Main;
