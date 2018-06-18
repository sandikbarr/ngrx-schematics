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

export interface State {
  item: fromItem.State;
  thing: fromThing.State;
}

export const reducers: ActionReducerMap<State> = {
  item: fromItem.reducer,
  thing: fromThing.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
