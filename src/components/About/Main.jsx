import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BreadCrumb from "../common/BreadCrumb";
import About from "./About";
import Features from "./Features";
import Banner from "./Banner";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="About Us" />
      <About />
      <Features />
      <Banner />
      <Skills />
      <Testimonials />
      <Blogs/>
      <Footer />
    </div>
  );
}

export default Main;
