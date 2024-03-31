import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BreadCrumb from "../common/BreadCrumb";
import Form from "./Form";

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Login" />
      <Form />
      <Footer />
    </div>
  );
}

export default Main;
