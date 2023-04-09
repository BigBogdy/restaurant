import { Dish } from '../../types';

export interface CartSliceState {
  totalPrice: number;
  products: Dish[];
}
