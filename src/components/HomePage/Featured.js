import React from "react";

import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import Product from "../Product";
import Title from "../Title";

const Featured = () => {
  return (
    <section className="py-5">
      <div className="container">
        {/* Title */}
        <Title title="featured products" center />

        {/* products */}
        <div className="row my-4">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;
              return featuredProducts.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
