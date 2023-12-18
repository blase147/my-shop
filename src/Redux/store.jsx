import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Reducers/productSlice';
import cartReducer from './Reducers/cartSlice';
import favReducer from './Reducers/favSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    fav: favReducer,
  },
});

export default store;
