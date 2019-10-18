import React from "react";

import { ProductConsumer } from "../context";

import styled from "styled-components";
import SideCartItems from "../components/SideCartItems";

const SideCart = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        //console.log("value sidecart", value);
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <SideCartItems cart={cart} cartTotal={cartTotal} />
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

  /* when side cart over screen hight, can scoll side cart */
  overflow: scroll;

  @media screen and (min-width: 576px) {
    width: 20rem;
  }
`;

export default SideCart;
