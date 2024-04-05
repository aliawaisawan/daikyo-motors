import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import WhyChoose from "./WhyChoose";
import Services from "./Services";
import Porfolio from "./Porfolio";
import Testimonials from "./Testimonials";
import GetQuote from "../contact/GetQuote";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <Hero />
      <AboutUs />
      <WhyChoose />
      <Porfolio />
      <GetQuote/>
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Main;
