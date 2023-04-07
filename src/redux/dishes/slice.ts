import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Dish } from '../../types';
import { DishesSliceState, Status } from './types';

export const fetchDishesByCategoryId = createAsyncThunk<Dish[], number>(
  'dishes/fetchDishesByCategoryId',
  async (categoryId) => {
    const { data } = await axios.get<Dish[]>(
      'https://62f52077535c0c50e76a5f03.mockapi.io/dishes?category=' +
        categoryId
    );
    return data;
  }
);

export const fetchDishById = createAsyncThunk<Dish, string>(
  'dishes/fetchDishById',
  async (id) => {
    const { data } = await axios.get<Dish>(
      'https://62f52077535c0c50e76a5f03.mockapi.io/dishes/' + id
    );
    return data;
  }
);

export const fetchDishesRandomly = createAsyncThunk<Dish[]>(
  'dishes/fetchDishes',
  async () => {
    const { data } = await axios.get<Dish[]>(
      'https://62f52077535c0c50e76a5f03.mockapi.io/dishes'
    );
    return data.sort(() => Math.random() - 0.5).slice(0, 4);
  }
);
const initialState = {
  categoryDishes: [],
  selectedDish: null,
  randomDishes: [],
  status: Status.LOADING,
} as DishesSliceState;

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDishesByCategoryId.pending, (state) => {
      state.status = Status.LOADING;
      state.categoryDishes = [];
    });
    builder.addCase(fetchDishesByCategoryId.fulfilled, (state, action) => {
      state.categoryDishes = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchDishesByCategoryId.rejected, (state) => {
      state.status = Status.ERROR;
      state.categoryDishes = [];
    });
    builder.addCase(fetchDishById.pending, (state) => {
      state.status = Status.LOADING;
      state.selectedDish = null;
    });
    builder.addCase(fetchDishById.fulfilled, (state, action) => {
      state.selectedDish = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchDishById.rejected, (state) => {
      state.status = Status.ERROR;
      state.selectedDish = null;
    });
    builder.addCase(fetchDishesRandomly.pending, (state) => {
      state.status = Status.LOADING;
      state.randomDishes = [];
    });
    builder.addCase(fetchDishesRandomly.fulfilled, (state, action) => {
      state.randomDishes = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchDishesRandomly.rejected, (state) => {
      state.status = Status.ERROR;
      state.randomDishes = [];
    });
  },
});

export default dishesSlice.reducer;
