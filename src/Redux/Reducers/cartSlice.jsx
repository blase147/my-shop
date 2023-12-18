import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const itemInCart = state.cart.find((item) => item.id === id);

      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    // removeItem: (state, action) => {
    //   const { id } = action.payload;
    //   state.cart = state.cart.filter((item) => item.id !== id);
    // },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
