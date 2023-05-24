import { configureStore } from '@reduxjs/toolkit';
import productListSlice from '../store/features/products/productListSlice';
import shoppingCartSlice from '../store/shoppingCart/shoppingCartSlice';

export const store = configureStore({
  reducer: {
    productList: productListSlice,
    shoppingCart: shoppingCartSlice,
  }
})