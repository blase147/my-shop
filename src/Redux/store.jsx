import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Reducers/productSlice';
import cartReducer from './Reducers/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
