/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarById = createAsyncThunk('product/fetchCarById', async (id) => {
  const response = await axios.get(`http://localhost:4000/api/v1/products/${id}`);
  return response.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
