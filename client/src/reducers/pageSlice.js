import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
  currentPage: 'Bot Stats',
};

const page = createSlice({
  name: 'Page',
  initialState,
  reducers: {
    updateIsDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { updateIsDarkMode, updateCurrentPage } = page.actions;

export const pageReducer = page.reducer;
