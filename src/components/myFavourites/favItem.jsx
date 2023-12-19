import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import {
  removeItem,
} from '../../Redux/Reducers/favSlice';
import './favItem.scss';

const FavItem = (
  {
    id, image, name, desc, price,
  },
) => {
  const dispatch = useDispatch();

  return (
    <div className="favItem">
      <div>
        <img className="favItem__image" src={image} alt="item" />
        <p className="favItem__title">{name}</p>
        <p className="favItem__title">{desc}</p>
        <p className="favItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="myfav_addmorebtn">
        <FaTrash
          className="trashbtn"
          onClick={() => dispatch(removeItem(id))}
        />
      </div>
    </div>
  );
};

FavItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default FavItem;
