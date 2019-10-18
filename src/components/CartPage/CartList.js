import React from "react";

import { ProductConsumer } from "../../context";
import CartItem from "./CartItem";

const CartList = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const { cart, increment, decrement, removeItem } = value;
              //console.log(cart);
              if (cart.length === 0) {
                return (
                  <h1 className="text-title text-center my-4">
                    your cart is currently empty
                  </h1>
                );
              }
              return (
                <>
                  {cart.map(item => {
                    return (
                      <CartItem
                        cartItem={item}
                        increment={increment}
                        decrement={decrement}
                        removeItem={removeItem}
                        key={item.id}
                      />
                    );
                  })}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
};

export default CartList;
