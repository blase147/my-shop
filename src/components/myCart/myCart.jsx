import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { IoCartOutline } from 'react-icons/io5';
import CartItem from './cartItem';
import Total from './total';
import './myCart.scss';

const MyCart = ({ onClose }) => {
  const cart = useSelector((state) => state.cart.cart);

  const getTotalQuantity = () => {
    let total = 0;
    if (Array.isArray(cart)) {
      cart.forEach((item) => {
        total += item.quantity;
      });
    }
    return total;
  };

  return (
    <div className="myCart">
      <div className="title_closebtn">
        <h2>
          <div className="cart_no">
            <p>{getTotalQuantity() || 0}</p>
          </div>
          <IoCartOutline size={30} />
          SHOPPING CART
        </h2>
        <button type="button" aria-hidden="true" onClick={onClose}>
          X
        </button>
      </div>
      <div className="myCart_cont">
        <div className="myCart_card">
          {Array.isArray(cart)
          && cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.product_image_url}
              name={item.name}
              desc={item.description}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <div className="cart_summary_checkout">
        <div className="cart_total">
          <div className="cart_total_cont">
            <p>
              <Total />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

MyCart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MyCart;
