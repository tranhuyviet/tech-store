import React from "react";

import { ProductConsumer } from "../../context";
import Title from "../Title";
import Product from "../Product";

const Products = () => {
  return (
    <section className="py-5">
      {/* title */}
      <div className="container">
        <Title title="our products" center />
        {/* products */}
        <div className="row pt-5">
          <ProductConsumer>
            {value => {
              const { filteredProducts } = value;
              return filteredProducts.map(item => {
                return <Product key={item.id} product={item} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
};

export default Products;
