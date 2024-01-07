import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
  cartTotalAmount: 0,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddProduct: (state, action) => {
      state.cartProducts.push(action.payload);
    },

    setDeleteProduct: (state, action) => {
      console.log('del');
    },

    setClearCart: () => {
      return initialState;
    },

    setPlusProduct: (state, action) => {
      console.log('plus');
    },
    setMinusProduct: (state, action) => {
      console.log('minus');
    },
  },
});

export const {
  setAddProduct,
  setDeleteProduct,
  setClearCart,
  setPlusProduct,
  setMinusProduct,
} = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalPrice = (state) => state.cart.cartTotalPrice;

export default cartSlice.reducer;
