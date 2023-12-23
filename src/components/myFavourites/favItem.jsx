import React from 'react';
import PropTypes from 'prop-types';
import './myFavourites.scss';

const FavItem = ({
  image, name, desc, price,
}) => (
  <div className="FavItem">
    <img className="FavItem__image" src={image} alt="item" />
    <div className="FavItem__info">
      <h3 className="FavItem__title">{name}</h3>
      <p className="FavItem__title">{desc}</p>
      <p className="FavItem__price">
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
