import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: '',
  sort: 'Latest',
  searchValue: '',
  searchRequest: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setSearchRequest: (state, action) => {
      state.searchRequest = action.payload;
    },

    setClearSearchRequest: (state, action) => {
      state.searchValue = '';
      state.searchRequest = '';
    },

    setClearAllFilters: (state, action) => {
      return initialState;
    }
  }
});

export const { setCategory, setSort, setSearchRequest, setSearchValue, setClearSearchRequest, setClearAllFilters } = filterSlice.actions;

export const selectCategory = state => state.filter.category;
export const selectSort = state => state.filter.sort;
export const selectSearchValue = state => state.filter.searchValue;
export const selectSearchRequest = state => state.filter.searchRequest;

export default filterSlice.reducer;