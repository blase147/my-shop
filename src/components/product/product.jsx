import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
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
import CreditCardLogos from '../copyright/creditCardLogos';
import Services from '../services/services';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [activeItem, setActiveItem] = useState('description'); // Set initial state to 'description'
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
        <>
          <div className="product">
            <img
              className="product__image"
              src={product.product_image_url}
              alt={product.name}
            />
            <div className="product__info">
              <FontAwesomeIcon className="heart_icon" icon={faHeart} />
              <p className="product__title">{product.name}</p>
              <p className="product__price">
                <small>$</small>
                <strong>{product.price}</strong>
              </p>
              <p className="product__desc">{product.description}</p>
              <div className="myCart_addmorebtn">
                <div className="dec_inc_cont">
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
                </div>
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
              <div className="share_question_cont">
                <div className="share_question">
                  <FontAwesomeIcon className="share_icon" icon={faShareAlt} />
                  <p>Share</p>
                </div>
                <div className="share_question">
                  <FontAwesomeIcon
                    className="question_icon"
                    icon={faQuestionCircle}
                  />
                  <p>Ask a Question</p>
                </div>
              </div>
              <hr />
              <p>GUARANTEED SAFE CHECKOUT</p>
              <CreditCardLogos />
              <p>Order ships within 5 to 10 days.</p>
            </div>
          </div>
          <div className="product_desc_delivery_cont">
            <div
              className="tab"
              role="button"
              tabIndex={0}
              onClick={() => setActiveItem('description')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setActiveItem('description');
                }
              }}
            >
              DESCRIPTION
            </div>
            <div
              className="tab"
              role="button"
              tabIndex={0}
              onClick={() => setActiveItem('delivery')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setActiveItem('delivery');
                }
              }}
            >
              DELIVERY POLICY
            </div>
            <div
              className="tab"
              role="button"
              tabIndex={0}
              onClick={() => setActiveItem('shipping')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setActiveItem('shipping');
                }
              }}
            >
              SHIPPING & RETURN
            </div>
          </div>
          <div className="product_desc_delivery_text">
            {activeItem === 'description' && (
              <div className="text">
                <p>{product.description}</p>
              </div>
            )}
            {activeItem === 'delivery' && (
              <div className="text">
                <p>Delivery text </p>
              </div>
            )}
            {activeItem === 'shipping' && (
              <div className="text">
                <p>Shipping text</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
      <hr />
      <Services />
      <Link to="/products">Go to Products</Link>
      <Link to="/viewCart">Go to Cart</Link>
      <Link to="/">Go back</Link>
      <Newsletter />
      <Footer />
      <CopyRight />
    </section>
  );
};

export default Product;
