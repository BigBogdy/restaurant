import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Dish } from '../../types';
import { RootState } from '../store';
import { CartSliceState } from './types';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPrice: 0,
} as CartSliceState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Dish>) {
      const findProduct = state.products.find(
        (obj) => obj.id === action.payload.id
      );
      if (findProduct) {
        findProduct.count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.products.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusProduct(state, action: PayloadAction<string>) {
      const findProduct = state.products.find(
        (obj) => obj.id === action.payload
      );
      if (findProduct) {
        findProduct.count--;
        state.totalPrice -= findProduct.price;
      }
    },

    removeProduct(state, action: PayloadAction<string>) {
      const findProduct = state.products.find(
        (obj) => obj.id === action.payload
      );
      if (findProduct) {
        state.totalPrice -= findProduct.price * findProduct.count;
        state.products = state.products.filter(
          (obj) => obj.id !== action.payload
        );
      }
    },
    clearProduct(state) {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartProductById =
  (id: string | undefined) => (state: RootState) =>
    state.cart.products.find((item) => item.id === id);

export const { addProduct, removeProduct, clearProduct, minusProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
