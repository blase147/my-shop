import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from '../../Redux/Reducers/productSlice';
import { addToCart } from '../../Redux/Reducers/cartSlice';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <section className="details-sec">
      {product ? (
        <div className="product">
          <img className="product__image" src={product.product_image_url} alt={product.name} />
          <div className="product__info">
            <p className="product__title">{product.name}</p>
            <p className="product__title">{product.desc}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <button type="button" onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
          <Link to="/products">Go to Products</Link>
          <Link to="/viewCart">Go to Cart</Link>
          <Link to="/">Go back</Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

// Product.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
// };

export default Product;
