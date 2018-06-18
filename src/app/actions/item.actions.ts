import { Action } from '@ngrx/store';
import { ItemModel } from '../item';

export enum ItemActionTypes {
  LoadItems = '[The API] Load Items',
  LoadItemsSuccess = '[The API] Load Items Success',
  LoadItemsFailure = '[The API] Load Items Failure'
}

export class LoadItems implements Action {
  readonly type = ItemActionTypes.LoadItems;

  // TODO: according to the discriminated union pattern, I should not need a payload here, but reducers don't type narrow in switch WTF
  constructor(public payload?: any) {}
}

export class LoadItemsSuccess implements Action {
  readonly type = ItemActionTypes.LoadItemsSuccess;

  constructor(public payload: ItemModel[]) {}
}

export class LoadItemsFailure implements Action {
  readonly type = ItemActionTypes.LoadItemsFailure;

  constructor(public payload: any) {}
}

export type ItemActions = LoadItems | LoadItemsSuccess | LoadItemsFailure;
