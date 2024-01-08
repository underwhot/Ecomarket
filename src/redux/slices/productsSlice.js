import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  isLoadingViaAPI: false,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      // thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoadingViaAPI = false;
    });
  },
});

export const selectProducts = (state) => state.products.products;
export const selectIsLoadingViaAPI = (state) => state.products.isLoadingViaAPI;

export default productsSlice.reducer;
