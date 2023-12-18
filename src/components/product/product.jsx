// Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../../Redux/Reducers/cartSlice';

const Product = ({
  id, image, name, desc, price,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(
      {
        id, image, name, desc, price, quantity: 1,
      },
    ));
  };

  return (
    <div className="product">
      <img className="product__image" src={image} alt={name} />
      <div className="product__info">
        {/* <p className="product__title">{name}</p> */}
        {/* <p className="product__title">{desc}</p> */}
        <p className="product__price">
          <small>$</small>
          {/* <strong>{price}</strong> */}
        </p>
        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Product;
