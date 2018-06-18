import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromItem from './item.reducer';
import * as fromThing from './thing.reducer';
import * as fromStarredItem from './starred-item.reducer';

export interface State {
  item: fromItem.State;
  thing: fromThing.State;
  starredItem: fromStarredItem.State;
}

export const reducers: ActionReducerMap<State> = {
  item: fromItem.reducer,
  thing: fromThing.reducer,
  starredItem: fromStarredItem.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectRootState = (state: State) => state;
