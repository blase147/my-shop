import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../../Redux/Reducers/cartSlice';

const CartItem = (
  {
    id, image, name, desc, price, quantity = 1,
  },
) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const subtotal = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0)
    : 0;

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt="item" />
      <div className="cartItem__info">
        <p className="cartItem__title">{name}</p>
        <p className="cartItem__title">{desc}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="myCart_addmorebtn">
          <button type="button" onClick={() => dispatch(decrementQuantity(id))}>
            -
          </button>
          <p>{quantity}</p>
          <button type="button" onClick={() => dispatch(incrementQuantity(id))}>
            +
          </button>
          <FaTrash
            className="trashbtn"
            onClick={() => dispatch(removeItem(id))}
          />
        </div>
      </div>
      <div className="cart_summary_checkout">
        <div className="cart_total">
          <div className="cart_total_cont">
            <div className="cart_total_desc">
              <h3>Subtotal</h3>
              <h3>
                $
                {subtotal.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CartItem;
