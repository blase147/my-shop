// cartActions.js
const addToCart = (product, quantity) => ({
  type: 'ADD_TO_CART',
  payload: { product, quantity },
});

export default addToCart;
