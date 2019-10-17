import React from "react";

import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpeg";
import Products from "../components/ProductsPage/Products";

const ProductsPage = () => {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
};

export default ProductsPage;
