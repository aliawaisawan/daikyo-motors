import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import CarDetails from "./CarDetails";
import Description from "./Description";
import SliderCar from "./SliderCar";
function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Shop Car Details" />
      <CarDetails />
      <Description />
      <SliderCar/>
      <Footer />
    </div>
  );
}

export default Main;
