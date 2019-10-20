import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { Unicorn } from '../interfaces/unicorns.interface';

export const selectUnicornsList = createSelector(
  (state: AppState) => state.unicornsList,
  (unicornsList: Array<Unicorn>) => unicornsList
);
