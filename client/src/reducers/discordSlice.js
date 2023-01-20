import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
};

const discord = createSlice({
  name: 'Discord',
  initialState,
  reducers: {
    updateIsLoggedIn: (state) => {
      console.log('YOO');
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
  extraReducers: (builder) => {},
});

export const { updateIsLoggedIn } = discord.actions;

export const discordReducer = discord.reducer;
