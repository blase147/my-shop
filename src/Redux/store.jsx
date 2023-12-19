import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import productsReducer from './Reducers/productSlice';
import cartReducer from './Reducers/cartSlice';
import favReducer from './Reducers/favSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedProductsReducer = persistReducer(persistConfig, productsReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedFavReducer = persistReducer(persistConfig, favReducer);

export const store = configureStore({
  reducer: {
    products: persistedProductsReducer,
    cart: persistedCartReducer,
    fav: persistedFavReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export default persistor;
