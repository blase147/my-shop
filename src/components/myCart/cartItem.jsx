import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import './cartItem.scss';

const CartItem = ({
  image, name, desc, price, quantity = 1, onIncrement, onDecrement, onRemove,
}) => (
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
        <button type="button" onClick={onDecrement}>
          -
        </button>
        <p>{quantity}</p>
        <button type="button" onClick={onIncrement}>
          +
        </button>
        <FaTrash className="trashbtn" onClick={onRemove} />
      </div>
    </div>
  </div>
);

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
