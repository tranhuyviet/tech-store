import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context";

const Product = ({ product }) => {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;
        return (
          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  src={product.image}
                  alt="product"
                  className="card-img-top p-5"
                  style={{ height: "320px" }}
                />
                <div className="product-icons">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={() => setSingleProduct(product.id)}
                  >
                    <FaSearch className="icon" />
                  </Link>

                  <FaCartPlus
                    className="icon"
                    onClick={() => addToCart(product.id)}
                  />
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const ProductWrapper = styled.div`
  .card {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    /* height: 100%; co nghia la khi text dai qua thi cung khong anh huong den height */
    height: 100%;
  }
  .card:hover {
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .card-img-top {
    transition: var(--mainTransition);
  }

  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.5;
  }

  .image-container {
    position: relative;
  }

  .product-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: var(--mainTransition);
  }

  .icon {
    color: var(--primaryColor);
    background: var(--mainBlack);
    padding: 0.5rem;
    margin: 0 1rem;
    font-size: 2rem;
    height: 50px;
    width: 50px;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--mainTransition);
  }

  .card:hover .product-icons {
    opacity: 1;
  }

  .icon:hover {
    color: var(--mainWhite);
  }

  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export default Product;
