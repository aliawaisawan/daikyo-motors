import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import WhyChoose from "./WhyChoose";
import OurPrice from "./OurPrice";
import Services from "./Services";
import CarDeals from "./CarDeals";
import Banner from "./Banner";
import Benefits from "./Benefits";
import Porfolio from "./Porfolio";
import CallAction from "./CallAction";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";
import Logos from "./Logos";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <Hero />
      <AboutUs />
      <WhyChoose />
      <OurPrice />
      <Services />
      <CarDeals />
      <Banner />
      <Benefits />
      <Porfolio />
      <CallAction />
      <Testimonials />
      <Blogs />
      <Logos />
      <Footer />
    </div>
  );
}

export default Main;
