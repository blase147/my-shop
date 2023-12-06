import React from 'react';
import './myCart.scss';
import { FaTrash } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const MyCart = () => (
  <div className="myCart">
    <div className="title_closebtn">
      <h2>
        <div className="cart_no">
          <p>2</p>
        </div>
        <IoCartOutline size={30} />
        SHOPPING CART
      </h2>
      <button type="button" aria-hidden="true">
        X
      </button>
    </div>
    <div className="myCart_cont">
      <div className="myCart_card">
        <div className="myCart_img_cont">
          <img
            src="https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_67f158ea-0232-4b8e-8f43-299dcb368639_360x.jpg?v=1658895275"
            alt="Empty Cart"
            width="200"
            height="200"
            className="cart_image"
          />
        </div>
        <div className="cart_desc">
          <h3 className="cart_title">Rolex bangle</h3>
          <p className="cart_desc">Rolex bangle</p>
          <p className="cart_price">$1100</p>
          <div className="myCart_addmorebtn">
            <button type="button">-</button>
            1
            <button type="button">
              +
            </button>
            <FaTrash className="trashbtn" />
          </div>
        </div>
      </div>
    </div>
    <div className="cart_summary_checkout">
      <div className="cart_total">
        <div className="cart_total_cont">
          <div className="cart_total_desc">
            <h3>Subtotal</h3>
            <h3>$1400</h3>
          </div>
          <div className="cart_total_desc">
            <h3>Shipping</h3>
            <h3>$10</h3>
          </div>
        </div>
      </div>
      <div className="view_cart_btn">
        <button type="button">VIEW CART</button>
      </div>
      <div className="checkout_btn">
        <button type="button">CHECKOUT</button>
      </div>
      <label htmlFor="termsCheckbox" className="termsCheckbox">
        <input type="checkbox" id="termsCheckbox" className="checkbox" />
        I agree to the Terms & Conditions
      </label>
    </div>
  </div>
);

export default MyCart;
