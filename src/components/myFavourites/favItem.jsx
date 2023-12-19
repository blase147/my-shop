import React from 'react';
import PropTypes from 'prop-types';
import './favItem.scss';

const FavItem = (
  {
    image, name, desc, price,
  },
) => (
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
  </div>
);

FavItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default FavItem;
