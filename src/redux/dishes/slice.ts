import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Dish } from '../../components/types';

interface DishesSliceState {
  categoryDishes: Dish[];
  selectedDish: Dish | null;
  randomDishes: Dish[];
  status: 'loading' | 'success' | 'error';
}

export const fetchDishesByCategoryId = createAsyncThunk(
  'dishes/fetchDishesByCategoryId',
  async (categoryId: number) => {
    const { data } = await axios.get(
      'https://62f52077535c0c50e76a5f03.mockapi.io/dishes?category=' +
        categoryId
    );
    return data;
  }
);

export const fetchDishById = createAsyncThunk(
  'dishes/fetchDishById',

  async (id: string | undefined) => {
    const { data } = await axios.get(
      'https://62f52077535c0c50e76a5f03.mockapi.io/dishes/' + id
    );
    return data;
  }
);

export const fetchDishesRandomly = createAsyncThunk(
  'dishes/fetchDishes',
  async () => {
    const { data } = await axios.get(
      'https://62f52077535c0c50e76a5f03.mockapi.io/dishes'
    );
    return data.sort(() => Math.random() - 0.5).slice(0, 4);
  }
);
const initialState: DishesSliceState = {
  categoryDishes: [],
  selectedDish: null,
  randomDishes: [],
  status: 'loading',
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDishesByCategoryId.pending, (state) => {
      state.status = 'loading';
      state.categoryDishes = [];
    });
    builder.addCase(fetchDishesByCategoryId.fulfilled, (state, action) => {
      state.categoryDishes = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchDishesByCategoryId.rejected, (state) => {
      state.status = 'error';
      state.categoryDishes = [];
    });
    builder.addCase(fetchDishById.pending, (state) => {
      state.status = 'loading';
      state.selectedDish = null;
    });
    builder.addCase(fetchDishById.fulfilled, (state, action) => {
      state.selectedDish = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchDishById.rejected, (state) => {
      state.status = 'error';
      state.selectedDish = null;
    });
    builder.addCase(fetchDishesRandomly.pending, (state) => {
      state.status = 'loading';
      state.randomDishes = [];
    });
    builder.addCase(fetchDishesRandomly.fulfilled, (state, action) => {
      state.randomDishes = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchDishesRandomly.rejected, (state) => {
      state.status = 'error';
      state.randomDishes = [];
    });
  },
});

export default dishesSlice.reducer;
