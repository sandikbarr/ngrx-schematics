import { Action } from '@ngrx/store';

export const LOCAL_STORAGE_KEY = 'starredItems';

export enum StarredItemActionTypes {
  LoadStarredItems = '[Local Storage] Load Starred Items',
  LoadStarredItemsSuccess = '[Local Storage] Load Starred Items Success',
  AddStarredItem = '[Local Storage] Add Starred Items',
  DeleteStarredItem = '[Local Storage] Delete Starred Item'
}

export class LoadStarredItems implements Action {
  readonly type = StarredItemActionTypes.LoadStarredItems;
  payload: string[];

  constructor() {}
}

export class LoadStarredItemsSuccess implements Action {
  readonly type = StarredItemActionTypes.LoadStarredItemsSuccess;

  constructor(public payload: string[]) {}
}

export class AddStarredItem implements Action {
  readonly type = StarredItemActionTypes.AddStarredItem;

  constructor(public payload: string) {}
}

export class DeleteStarredItem implements Action {
  readonly type = StarredItemActionTypes.DeleteStarredItem;

  constructor(public payload: string) {}
}

export type StarredItemActions = LoadStarredItems | LoadStarredItemsSuccess | AddStarredItem | DeleteStarredItem;
