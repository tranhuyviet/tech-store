import React from "react";

import {
  FaTrash,
  FaChevronCircleDown,
  FaChevronCircleUp
} from "react-icons/fa";

const CartItem = ({ cartItem, increment, decrement, removeItem }) => {
  const { id, image, title, price, count, total } = cartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      {/* image */}
      <div className="col-lg-2 col-10 mx-auto pb-2">
        <img src={image} alt="product" width="60" className="img-fluid" />
      </div>
      {/* end of image */}

      {/* title */}
      <div className="col-lg-2 col-10 mx-auto pb-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>
      {/* end of title */}

      {/* price */}
      <div className="col-lg-2 col-10 mx-auto pb-2">
        <span className="d-lg-none">price: $</span>
        {price}
      </div>
      {/* end of price */}

      {/* quatity */}
      <div className="col-lg-2 col-10 mx-auto my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown
              className="text-primary cart-icon"
              onClick={() => decrement(id)}
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp
              className="text-primary cart-icon"
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      {/* end of quatity */}

      {/* remove */}
      <div className="col-lg-2 col-10 mx-auto">
        <FaTrash
          className="text-danger cart-icon"
          onClick={() => removeItem(id)}
        />
      </div>
      {/* end of remove */}

      {/* total */}
      <div className="col-lg-2 col-10 mx-auto">
        <strong className="text-muted">item total: ${total}</strong>
      </div>
      {/* end of total */}
    </div>
  );
};

export default CartItem;
