import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDishes = createAsyncThunk(
  'dishes/fetchDishes',
  async (categoryId: number) => {
    const { data } = await axios.get(
      'https://62f52077535c0c50e76a5f03.mockapi.io/dishes?category=' +
        categoryId
    );
    return data;
  }
);

const initialState = {
  products: [],
  status: 'loading',
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDishes.pending, (state) => {
      state.status = 'loading';
      state.products = [];
    });
    builder.addCase(fetchDishes.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchDishes.rejected, (state) => {
      state.status = 'error';
      state.products = [];
    });
  },
});

export default dishesSlice.reducer;
