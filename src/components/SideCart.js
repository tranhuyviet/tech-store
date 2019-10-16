import React from "react";

import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideCart = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>cart items</p>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const CartWrapper = styled.aside`
  position: fixed;
  top: 61px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 3px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};

  @media screen and (min-width: 576px) {
    width: 20rem;
  }
`;

export default SideCart;
