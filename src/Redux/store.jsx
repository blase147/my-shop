import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Reducers/productSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
