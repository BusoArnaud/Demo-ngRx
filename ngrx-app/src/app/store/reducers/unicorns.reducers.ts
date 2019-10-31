import { Unicorn } from '../interfaces/unicorns.interface';
import { createReducer, on } from '@ngrx/store';
import { UnicornsActions } from '../actions/unicorns.actions';

const initialUnicornState: Array<Unicorn> = [];

const unicornsReducer$ = createReducer(initialUnicornState,
  on(
    UnicornsActions.setUnicornsList,
    (state: Array<Unicorn>, action: {list: Array<Unicorn>}) => {
      return state = action.list;
    }
  ),
);


export function unicornsReducer(state, action) {
  return unicornsReducer$(state, action);
}
