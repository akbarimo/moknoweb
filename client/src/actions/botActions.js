import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getData = async (options) => {
  try {
    const result = await axios({
      url: `${process.env.HOST}:8080/bot/info`,
      method: 'GET',
    });
    return Promise.resolve(result.data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const getBotData = createAsyncThunk('bot/getBotData', getData);

export default getBotData;
