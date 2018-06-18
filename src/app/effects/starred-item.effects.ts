import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadStarredItems, LoadStarredItemsSuccess, AddStarredItem, DeleteStarredItem,
  LOCAL_STORAGE_KEY, StarredItemActionTypes } from '../actions/starred-item.actions';
import { ItemActionTypes, DeleteItemSuccess } from '../actions/item.actions';

@Injectable()
export class StarredItemEffects {

  constructor(private actions$: Actions) {}

  readItemsFromLocalStorage(): string[] {
    const starredItemsStored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (starredItemsStored && starredItemsStored.length) {
      return starredItemsStored.split(',');
    }
  }

  addItemToLocalStorage(itemId: string) {
    const starredItemsStored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (starredItemsStored && starredItemsStored.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, starredItemsStored.split(',').concat([itemId]).join(',');
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, itemId);
    }
  }

  removeItemFromLocalStorage(itemId: string) {
    const starredItemsStored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (starredItemsStored && starredItemsStored.length) {
      const starredItems = starredItemsStored.split(',');
      const idx = starredItems.indexOf(itemId);
      localStorage.setItem(LOCAL_STORAGE_KEY, starredItems.slice(0, idx).concat(starredItems.slice(idx + 1)).join(','));
    }
  }

  @Effect()
  loadStarredItems$: Observable<Action> = this.actions$.pipe(
    ofType(StarredItemActionTypes.LoadStarredItems),
    startWith(new LoadStarredItems()),
    switchMap((action: LoadStarredItems) => {
      return of(new LoadStarredItemsSuccess(this.readItemsFromLocalStorage()));
    })
  );

  @Effect()
  addStarredItem$: Observable<Action> = this.actions$.pipe(
    ofType(StarredItemActionTypes.AddStarredItem),
    map((action: AddStarredItem) => action.payload),
    switchMap((payload: string) => {
      this.addItemToLocalStorage(payload);
      return of(new LoadStarredItemsSuccess(this.readItemsFromLocalStorage()));
    });
  );

  @Effect()
  deleteStarredItem$: Observable<Action> = this.actions$.pipe(
    ofType(StarredItemActionTypes.DeleteStarredItem),
    map((action: DeleteStarredItem) => action.payload),
    switchMap((payload: string) => {
      this.removeItemFromLocalStorage(payload);
      return of(new LoadStarredItemsSuccess(this.readItemsFromLocalStorage()));
    })
  );

  @Effect()
  deleteItem$: Observable<Action> = this.actions$.pipe(
    ofType(ItemActionTypes.DeleteItemSuccess),
    map((action: DeleteItemSuccess) => action.payload.id),
    switchMap((payload: string) => {
      this.removeItemFromLocalStorage(payload);
      return of(new LoadStarredItemsSuccess(this.readItemsFromLocalStorage()));
    })
  );
}
