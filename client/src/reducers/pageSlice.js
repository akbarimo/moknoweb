import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

const page = createSlice({
  name: 'Page',
  initialState,
  reducers: {
    updateIsDarkMode: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  extraReducers: (builder) => {},
});

export const { updateIsDarkMode } = page.actions;

export default page.reducer;
