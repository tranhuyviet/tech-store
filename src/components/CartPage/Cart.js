import React from "react";

import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = ({ history }) => {
  return (
    <section className="py-5">
      {/* title */}
      <div className="container">
        <Title title="your cart items" center />
      </div>

      {/* cart columns */}
      <CartColumns />

      {/* cart list */}
      <CartList />

      {/* cart totals */}
      <CartTotals history={history} />
    </section>
  );
};

export default Cart;
