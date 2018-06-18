import { Action } from '@ngrx/store';
import { ItemModel } from '../item';

export enum ItemActionTypes {
  LoadItems = '[The API] Load Items',
  LoadItemsSuccess = '[The API] Load Items Success',
  LoadItemsFailure = '[The API] Load Items Failure',
  AddItem = '[The API] Add Item',
  AddItemSuccess = '[The API] Add Item Success',
  AddItemFailure = '[The API] Add Item Failure',
  UpdateItem = '[The API] Update Item',
  UpdateItemSuccess = '[The API] Update Item Success',
  UpdateItemFailure = '[The API] Update Item Failure',
  DeleteItem = '[The API] Delete Item',
  DeleteItemSuccess = '[The API] Delete Item Success',
  DeleteItemFailure = '[The API] Delete Item Failure'
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

export class AddItem implements Action {
  readonly type = ItemActionTypes.AddItem;

  constructor(public payload: ItemModel) {}
}

export class AddItemSuccess implements Action {
  readonly type = ItemActionTypes.AddItemSuccess;

  constructor(public payload: ItemModel) {}
}

export class AddItemFailure implements Action {
  readonly type = ItemActionTypes.AddItemFailure;

  constructor(public payload: any) {}
}

export class UpdateItem implements Action {
  readonly type = ItemActionTypes.UpdateItem;

  constructor(public payload: ItemModel) {}
}

export class UpdateItemSuccess implements Action {
  readonly type = ItemActionTypes.UpdateItemSuccess;

  constructor(public payload: ItemModel) {}
}

export class UpdateItemFailure implements Action {
  readonly type = ItemActionTypes.UpdateItemFailure;

  constructor(public payload: any) {}
}

export class DeleteItem implements Action {
  readonly type = ItemActionTypes.DeleteItem;

  constructor(public payload: ItemModel) {}
}

export class DeleteItemSuccess implements Action {
  readonly type = ItemActionTypes.DeleteItemSuccess;

  constructor(public payload: ItemModel) {}
}

export class DeleteItemFailure implements Action {
  readonly type = ItemActionTypes.DeleteItemFailure;

  constructor(public payload: any) {}
}

export type ItemActions = LoadItems | LoadItemsSuccess | LoadItemsFailure
  | AddItem | AddItemSuccess | AddItemFailure
  | UpdateItem | UpdateItemSuccess | UpdateItemFailure
  | DeleteItem | DeleteItemSuccess | DeleteItemFailure;
