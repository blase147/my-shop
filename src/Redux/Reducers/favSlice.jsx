/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
  name: 'fav',
  initialState: {
    products: [],
    fav: [],
  },
  reducers: {
    addToFav: (state, action) => {
      const { id } = action.payload;
      const itemInFav = state.fav.find((item) => item.id === id);

      if (itemInFav) {
        // Use Immer's draft syntax for immutability
        itemInFav.quantity += 1;
      } else {
        // Use Immer's draft syntax for immutability
        state.fav.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.fav.find((item) => item.id === id);

      if (item) {
        // Use Immer's draft syntax for immutability
        item.quantity += 1;
      }
    },
    incrementPQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.fav.find((item) => item.id === id);

      if (item) {
        // Use Immer's draft syntax for immutability
        item.quantity += quantity;
      }
    },

    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.fav.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        // Use Immer's draft syntax for immutability
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      // Use Immer's draft syntax for immutability
      state.fav = state.fav.filter((item) => item.id !== id);
    },
  },
});

export default favSlice.reducer;
export const {
  addToFav,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = favSlice.actions;
