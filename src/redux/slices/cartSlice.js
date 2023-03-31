import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
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

    minusProduct(state, action) {
      const findProduct = state.products.find(
        (obj) => obj.id === action.payload.id
      );
      if (findProduct) {
        findProduct.count--;
        state.totalPrice -= findProduct.price;
      }
    },

    removeProduct(state, action) {
      state.products = state.products.filter(
        (obj) => obj.id !== action.payload
      );
    },
    clearProduct(state) {
      state.products = [];
      state.totalPrice = [];
    },
  },
});

export const { addProduct, removeProduct, clearProduct, minusProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
