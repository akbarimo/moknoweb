import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '../reducers/pageSlice';
import botReducer from '../reducers/botSlice';

const store = configureStore({
  reducer: {
    page: pageReducer,
    bot: botReducer,
  },
});

export default store;
