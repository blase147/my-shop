import { useSelector } from 'react-redux';

const Total = () => {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    // Check if cart is an array before using forEach
    if (Array.isArray(cart)) {
      cart.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
      });
    }
    return { totalPrice, totalQuantity };
  };
  return (
    <div>
      <h2>Total</h2>
      <h3>{getTotal().totalQuantity}</h3>
      <h3>{getTotal().totalPrice}</h3>
    </div>
  );
};

export default Total;
