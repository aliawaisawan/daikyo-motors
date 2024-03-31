import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import FormAppointment from "./FormAppointment";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Appointment" />
      <FormAppointment/>
      <Footer />
    </div>
  );
}

export default Main;
