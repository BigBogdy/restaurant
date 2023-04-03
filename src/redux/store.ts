import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import dishes from './slices/dishesSlice';

export const store = configureStore({
  reducer: { cart, dishes },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
