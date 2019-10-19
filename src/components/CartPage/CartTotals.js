import React from "react";

import { ProductConsumer } from "../../context";
import styled from "styled-components";

import PayPalBtn from "./PayPalBtn";

const CartTotals = ({ history }) => {
  return (
    <ProductConsumer>
      {value => {
        //console.log(value);
        const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
        return (
          <CartTotalsWrapper>
            <div className=" cart-total-container">
              <button type="button" className="main-link" onClick={clearCart}>
                clear cart
              </button>
              <h2 className="cart-total-text">subtotal: ${cartSubTotal}</h2>
              <h2 className="cart-total-text">tax: ${cartTax}</h2>
              <h2 className="cart-total-text">total: ${cartTotal}</h2>

              {/* paypal button */}
              <PayPalBtn
                history={history}
                cartTotal={cartTotal}
                clearCart={clearCart}
              />
            </div>
          </CartTotalsWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const CartTotalsWrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  .cart-total-container {
    text-align: center;
    margin-top: 3rem;

    button {
      margin-bottom: 3rem;
    }
  }

  .cart-total-text {
    text-transform: capitalize;
    display: block !important;
    letter-spacing: var(--mainSpacing);
  }
`;

export default CartTotals;
