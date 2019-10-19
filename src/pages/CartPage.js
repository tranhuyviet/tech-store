import React from "react";

import Cart from "../components/CartPage";
import Hero from "../components/Hero";
import storeBcg from "../images/storeBcg.jpeg";

const CartPage = props => {
  //console.log(props);
  return (
    <>
      <Hero img={storeBcg} />
      <Cart history={props.history} />
    </>
  );
};

export default CartPage;
