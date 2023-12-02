import React from 'react';

const Checkout = () => (
  <div className="checkout">
    <div className="checkout_inner">
      <div className="checkout_title">
        <h2>Checkout</h2>
      </div>
      <div className="checkout_list">
        <div className="checkout_item">
          <div className="checkout_image">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71g40mlbinL._AC_SL1500_.jpg" alt="checkout" />
          </div>
          <div className="checkout_info">
            <div className="checkout_name">
              <h3>Product Name</h3>
            </div>
            <div className="checkout_price">
              <h3>$ 10</h3>
            </div>
            <div className="checkout_quantity">
              <h3>Quantity</h3>
            </div>
            <div className="checkout_total">
              <h3>$ 10</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout_total_price">
        <h2>Total: $ 10</h2>
      </div>
      <div className="checkout_button">
        <button type="button" className="btn btn-primary">Checkout</button>
      </div>
    </div>
  </div>
);

export default Checkout;
