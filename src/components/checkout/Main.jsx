import React from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import Footer from "../common/Footer";
import BillingAddress from "./BillingAddress";
import PaymentMethod from "./PaymentMethod";
import CartTotals from "./CartTotals";
function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <BreadCrumb title="Checkout" />
      <div className="ltn__checkout-area mb-105">
        <div className="container">
          <div className="row">
            <BillingAddress />
            <PaymentMethod />
            <CartTotals />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
