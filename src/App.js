import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import all pages for router setup
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import DefaultPage from "./pages/DefaultPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/products/:id" component={SingleProductPage} />
        <Route component={DefaultPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
