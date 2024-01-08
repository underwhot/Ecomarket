import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  popularProducts: [],
  isLoadingViaAPI: false,
};

export const fetchPopularProducts = createAsyncThunk(
  'popularProducts/fetchPopularProducts',
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

const popularProductsSlice = createSlice({
  name: 'popularProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularProducts.pending, (state, action) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchPopularProducts.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      state.popularProducts = action.payload;
    });
    builder.addCase(fetchPopularProducts.rejected, (state, action) => {
      state.isLoadingViaAPI = false;
    });
  },
});

export const selectPopularProducts = (state) => state.popularProducts.popularProducts;
export const selectIsLoadingViaAPI = (state) => state.popularProducts.isLoadingViaAPI;

export default popularProductsSlice.reducer;
