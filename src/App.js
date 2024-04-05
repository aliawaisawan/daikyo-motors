import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import MyAccount from "./pages/MyAccount";
// import Wishlist from "./pages/Wishlist";
// import Services from "./pages/Services";
// import Shop from "./pages/Shop";
// import ProductDetails from "./pages/ProductDetails";
// import ShopCar from "./pages/ShopCar";
// import CarDetails from "./pages/CarDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import OrderTracking from "./pages/OrderTracking";
import Error from "./pages/Error";
// import Faq from "./pages/Faq";
// import Team from "./pages/Team";
// import TeamDetails from "./pages/TeamDetails";
// import ServicesDetails from "./pages/ServicesDetails";
// import Portfolio from "./pages/Portfolio";
// import PortfolioDetails from "./pages/PortfolioDetails";
// import Appointment from "./pages/Appointment";
// import News from "./pages/News";
// import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/my-account" element={<MyAccount />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/product-details" element={<ProductDetails />} />
        <Route exact path="/shop-car" element={<ShopCar />} />
        <Route exact path="/car-details" element={<CarDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/order-tracking" element={<OrderTracking />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/team-details" element={<TeamDetails />} />
        <Route exact path="/services-details" element={<ServicesDetails />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/Portfolio-details" element={<PortfolioDetails />} />
        <Route exact path="/appointment" element={<Appointment />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/news-details" element={<NewsDetails />} /> */}

        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
