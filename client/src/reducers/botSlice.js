import { createSlice } from '@reduxjs/toolkit';
import getBotData from '../actions/botActions';

const initialState = {
  data: {},
};

const bot = createSlice({
  name: 'bot',
  initialState,
  reducers: {
    updateBotData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBotData.fulfilled, (state, action) => {
        console.log(action.payload);
        const [data] = action.payload;
        state.data = data;
      })
      .addCase(getBotData.rejected, (state, action) => {
        console.error('Bot Data Not Found');
        state.data = {};
      });
  },
});

export default bot.reducer;
