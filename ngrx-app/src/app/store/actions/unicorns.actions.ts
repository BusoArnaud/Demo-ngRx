import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../interfaces/unicorns.interface';


const getUnicornsList = createAction(
  '[Unicorn API] Get Unicorns List'
);

const setUnicornsList = createAction(
  '[Unicorn API] Set Unicorns List',
  props<Array<Unicorn>>()
);

export const UnicornsActions = {
  getUnicornsList,
  setUnicornsList,
};
