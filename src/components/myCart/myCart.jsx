import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import { FaTrash } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
// import CartItem from './cartItem';

const MyCart = ({ onClose }) => {
  const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  const subtotal = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0)
    : 0;

  return (
    <div className="myCart">
      <div className="title_closebtn">
        <h2>
          <div className="cart_no">
            <p>{cart.length}</p>
          </div>
          <IoCartOutline size={30} />
          SHOPPING CART
        </h2>
        <button type="button" aria-hidden="true" onClick={onClose}>
          X
        </button>
      </div>
      <div className="myCart_cont">
        <div className="myCart_card">
          {Array.isArray(cart) && cart?.map((item) => (
            <div key={item.id} className="myCart_item">
              <div className="myCart_img_cont">
                <img
                  src={item.product_image_url}
                  alt={item.name}
                  width="200"
                  height="200"
                  className="cart_image"
                />
              </div>
              <div className="cart_desc">
                <h3 className="cart_title">{item.name}</h3>
                <p className="cart_desc">{item.description}</p>
                <p className="cart_price">
                  $
                  {item.price}
                </p>
                {/* <div className="myCart_addmorebtn">
                  <button type="button" onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button type="button" onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                  <FaTrash
                    className="trashbtn"
                    onClick={() => dispatch(removeItem(item.product))}
                  />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart_summary_checkout">
        <div className="cart_total">
          <div className="cart_total_cont">
            <div className="cart_total_desc">
              <h3>Subtotal</h3>
              <h3>
                $
                {subtotal.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MyCart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MyCart;
