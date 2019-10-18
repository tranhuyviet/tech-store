import React from "react";

import Cart from "../components/CartPage";
import Hero from "../components/Hero";
import storeBcg from "../images/storeBcg.jpeg";

const CartPage = () => {
  return (
    <>
      <Hero img={storeBcg} />
      <Cart />
    </>
  );
};

export default CartPage;
