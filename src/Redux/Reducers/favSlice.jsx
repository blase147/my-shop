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
        itemInFav.quantity += 1;
      } else {
        state.fav.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.fav.find((item) => item.id === id);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.fav.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const updatedFav = state.fav.filter((item) => item.id !== id);
      return {
        ...state,
        fav: updatedFav,
      };
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
