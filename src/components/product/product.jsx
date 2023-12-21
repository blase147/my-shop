import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { fetchCarById } from '../../Redux/Reducers/productSlice';
import { addToCart, incrementPQuantity } from '../../Redux/Reducers/cartSlice';
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
  const cart = useSelector((state) => state.cart.cart);
  const [activeItem, setActiveItem] = useState('description');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const existingItem = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (existingItem) {
      dispatch(incrementPQuantity({ id: product.id, quantity }));
    } else {
      dispatch(addToCart({ ...product, quantity }));
    }
  };
  // const handleRemoveFromCart = () => {
  //   if (itemInCart && itemInCart.quantity > 1) {
  //     dispatch(decrementQuantity({ id, quantity: quantity }));
  //   } else {
  //     // Define removeFromCart in your cartSlice and dispatch it
  //     // Example: dispatch(removeFromCart(id));
  //   }
  // };

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
                  <button type="button" onClick={handleDecrement}>
                    -
                  </button>
                  <strong>{quantity}</strong>
                  <button type="button" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button
                  className="add_to_cart"
                  type="button"
                  onClick={handleAddToCart}
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
              className={`tab ${activeItem === 'description' ? 'active' : ''}`}
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
              className={`tab ${activeItem === 'delivery' ? 'active' : ''}`}
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
              className={`tab ${activeItem === 'shipping' ? 'active' : ''}`}
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
