import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../../Redux/Reducers/favSlice';
import './favItem.scss';

const FavItem = (
  {
    id, image, name, desc, price, quantity = 1,
  },
) => {
  const dispatch = useDispatch();

  return (
    <div className="favItem">
      <img className="favItem__image" src={image} alt="item" />
      <div className="favItem__info">
        <p className="favItem__title">{name}</p>
        <p className="favItem__title">{desc}</p>
        <p className="favItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="myfav_addmorebtn">
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

FavItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default FavItem;
