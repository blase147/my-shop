import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from '../../Redux/Reducers/productSlice';
import {
  addToCart, decrementQuantity, incrementQuantity,
} from '../../Redux/Reducers/cartSlice';
import './product.scss';
import Header from '../header/header';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';
import Newsletter from '../newsletterSub/newsletterSub';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  // const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

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
    <section className="details-sec">
      <div className="search_header">
        <Logo />
        <Search />
        <Header />
      </div>
      <Menu />
      {product ? (
        <div className="product">
          <img className="product__image" src={product.product_image_url} alt={product.name} />
          <div className="product__info">
            <p className="product__title">{product.name}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <p className="product__desc">{product.description}</p>
            <div className="myCart_addmorebtn">
              <diV className="dec_inc_cont">
                <button
                  type="button"
                  onClick={() => dispatch(decrementQuantity(product))}
                >
                  -
                </button>
                <strong>{getTotalQuantity()}</strong>
                <button
                  type="button"
                  onClick={() => dispatch(incrementQuantity(product))}
                >
                  +
                </button>
              </diV>
              <button
                className="add_to_cart"
                type="button"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
            <button className="paypal_btn" type="button">
              Buy with Paypal
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Link to="/products">Go to Products</Link>
      <Link to="/viewCart">Go to Cart</Link>
      <Link to="/">Go back</Link>
      <Newsletter />
      <Footer />
      <CopyRight />
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
