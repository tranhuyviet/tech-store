import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const SideCartItems = ({ cart, cartTotal }) => {
  //console.log("cac", cart);
  return (
    <SideCartItemsWrapper>
      {cart.map(item => {
        return (
          <div className="items-container" key={item.id}>
            <div className="img-container">
              <img
                src={`../${item.image}`}
                alt="product"
                className="items-img"
              />
            </div>
            <h4>{item.title}</h4>
            <h5 className="text-title">amount: {item.count}</h5>
          </div>
        );
      })}

      <div className="items-total">
        <h2>cart total: ${cartTotal}</h2>
      </div>
      <div className="items-link">
        <Link to="/cart" className="main-link">
          cart page
        </Link>
      </div>
    </SideCartItemsWrapper>
  );
};

const SideCartItemsWrapper = styled.div`
  .items-container {
    padding: 1rem;
    border-bottom: 1px solid var(--primaryColor);
  }
  .img-container {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .items-img {
    width: 100px;
  }

  h4 {
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  h5 {
    text-transform: capitalize;
  }

  .items-total {
    text-align: center;

    h2 {
      color: var(--primaryColor);
      text-transform: capitalize;
      font-size: 1.7rem;
      padding: 2rem 0;
      background: var(--darkGrey);
    }
  }

  .items-link {
    text-align: center;
    padding: 3rem 0 6rem 0;
  }
`;

export default SideCartItems;
