import { Dish } from '../../types';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface DishesSliceState {
  categoryDishes: Dish[];
  selectedDish: Dish | null;
  randomDishes: Dish[];
  status: Status;
}
