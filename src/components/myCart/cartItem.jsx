// src/components/CartItem.js
import './cartItem.css';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../Redux/Reducers/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, product_image_url, name, price, quantity = 0 }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={product_image_url} alt="item" />
      <div className="cartItem__info">
        <p className="cartItem__title">{name}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="myCart_addmorebtn">
          <button
            type="button"
            onClick={() => dispatch(decrementQuantity(id))}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            type="button"
            onClick={() => dispatch(incrementQuantity(id))}
          >
            +
          </button>
          <FaTrash
            className="trashbtn"
            onClick={() => dispatch(removeItem(id))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
