import { createSlice } from '@reduxjs/toolkit';
import getBotData from '../actions/botActions';

const initialState = {
  data: {},
};

const bot = createSlice({
  name: 'bot',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBotData.fulfilled, (state, action) => {
        const [data] = action.payload;
        state.data = data;
      })
      .addCase(getBotData.rejected, (state, action) => {
        console.error('Bot Data Not Found');
        state.data = {};
      });
  },
});

export const botReducer = bot.reducer;
