import React from 'react';
import { useSelector } from 'react-redux';
import './total.scss';

const Total = () => {
  const cart = useSelector((state) => state.cart.cart);

  const getTotal = () => {
    // let totalQuantity = 0;
    let totalPrice = 0;

    if (Array.isArray(cart)) {
      cart.forEach((item) => {
        // Convert quantity and price to numbers if they are stored as strings
        const quantity = parseInt(item.quantity, 10);
        const price = parseFloat(item.price);

        if (!Number.isNaN(quantity) && !Number.isNaN(price)) {
          // totalQuantity += quantity;
          totalPrice += price * quantity;
        }
      });
    }

    return { totalPrice };
  };

  return (
    <div className="total">
      <div>
        <h3>Total Price: </h3>
      </div>
      <diV>
        <h2>
          $
          {getTotal().totalPrice.toFixed(2)}
        </h2>
      </diV>
    </div>
  );
};

export default Total;
