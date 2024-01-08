import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddProduct: (state, action) => {
      const currentProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (currentProduct) {
        return {
          ...state,
          totalAmount: state.totalAmount + 1,
          totalPrice: state.totalPrice + action.payload.price,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, amount: product.amount + 1 }
              : product
          ),
        };
      }

      state.products = [...state.products, action.payload];
      state.totalPrice += action.payload.price;
      state.totalAmount += 1;
    },

    setDeleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.totalPrice -= action.payload.price * action.payload.amount;
      state.totalAmount -= action.payload.amount;
    },

    setClearCart: () => {
      return initialState;
    },

    setPlusProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, amount: product.amount + 1 }
          : product
      );
      state.totalPrice += action.payload.price;
      state.totalAmount += 1;
    },
    setMinusProduct: (state, action) => {
      if (action.payload.amount === 1) {
        return;
      }
      state.totalPrice -= action.payload.price;
      state.totalAmount = state.totalAmount - 1;

      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, amount: product.amount - 1 }
          : product
      );
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

export const selectCartProducts = (state) => state.cart.products;
export const selectTotalAmount = (state) => state.cart.totalAmount;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
