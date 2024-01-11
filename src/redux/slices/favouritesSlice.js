import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setToggleToFavourites: (state, action) => {
      const currentProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (currentProduct) {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        return;
      }

      state.products = [...state.products, action.payload];
    },

    setDeleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },

    setClearFavourites: (state, action) => {
      return initialState;
    }
  },
});

export const { setToggleToFavourites, setDeleteProduct, setClearFavourites } =
  favouritesSlice.actions;

export const selectFavouritesProducts = (state) => state.favourites.products;

export default favouritesSlice.reducer;
