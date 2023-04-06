import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/slice';
import dishes from './dishes/slice';

export const store = configureStore({
  reducer: { cart, dishes },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
