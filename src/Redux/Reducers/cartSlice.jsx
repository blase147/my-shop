/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const itemInCart = state.cart.find((item) => item.id === id);

      if (itemInCart) {
        // Use Immer's draft syntax for immutability
        itemInCart.quantity += 1;
      } else {
        // Use Immer's draft syntax for immutability
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        // Use Immer's draft syntax for immutability
        item.quantity += 1;
      }
    },
    incrementPQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        // Use Immer's draft syntax for immutability
        item.quantity += quantity;
      }
    },

    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        // Use Immer's draft syntax for immutability
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      // Use Immer's draft syntax for immutability
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  incrementPQuantity,
} = cartSlice.actions;
