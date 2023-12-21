import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
// import './checkOut.scss';
import { removeItem, decrementQuantity, incrementQuantity } from '../../Redux/Reducers/cartSlice';

const CheckOutItem = (
  {
    id, image, name, desc, price, quantity = 1,
  },
) => {
  const dispatch = useDispatch();

  return (
    <div className="checkOutItem">
      <img className="checkOutItem__image" src={image} alt="item" />
      <div className="checkOutItem__info">
        <p className="checkOutItem__title">{name}</p>
        <p className="checkOutItem__title">{desc}</p>
        <p className="checkOutItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="viewCart_addmorebtn">
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
    </div>
  );
};

CheckOutItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CheckOutItem;
