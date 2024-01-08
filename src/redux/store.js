import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import popularProductsReducer from './slices/popularProductsSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    popularProducts: popularProductsReducer,
    cart: cartReducer,
  },
});
