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
import productsReducer from './Reducers/productsSlice';
import cartReducer from './Reducers/cartSlice';
import favReducer from './Reducers/favSlice';
import productReducer from './Reducers/productSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedProductsReducer = persistReducer(persistConfig, productsReducer);
const persistedProductReducer = persistReducer(persistConfig, productReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedFavReducer = persistReducer(persistConfig, favReducer);

export const store = configureStore({
  reducer: {
    products: persistedProductsReducer,
    product: persistedProductReducer,
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
