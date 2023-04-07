import { Dish } from '../../types';

export type MyObject = {
  id: string;
};

export interface CartSliceState {
  totalPrice: number;
  products: Dish[];
}
