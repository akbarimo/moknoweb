import { configureStore } from '@reduxjs/toolkit';
import { pageReducer } from '../reducers';

const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export default store;