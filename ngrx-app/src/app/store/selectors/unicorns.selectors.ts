import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { Unicorn } from '../interfaces/unicorns.interface';

export const selectUnicornsList = createSelector(
  (state: AppState) => state.unicornsList,
  (unicornsList: Array<Unicorn>) => unicornsList
);

export const selectEvenUnicornsIdList = createSelector(
  (state: AppState) => state.unicornsList.filter((unicorn: Unicorn) => unicorn.id % 2 === 0),
  (unicornsList: Array<Unicorn>) => unicornsList
);
