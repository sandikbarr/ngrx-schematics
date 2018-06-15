import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, startWith } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ItemActionTypes, LoadItems, LoadItemsSuccess, LoadItemsFailure } from '../actions/item.actions';
import { ItemModel, ItemService } from '../item';


@Injectable()
export class ItemEffects {

  constructor(private actions$: Actions,
              private itemService: ItemService) {}

  @Effect()
  loadItems$: Observable<Action> = this.actions$.pipe(
    ofType(ItemActionTypes.LoadItems),
    // startWith(new LoadItems()), to trigger the effect immediately on start up and hydrate your app
    switchMap((action: LoadItems) => {
      return this.itemService.getItems().pipe(
        map((data: ItemModel[]) => new LoadItemsSuccess(data)),
        catchError(error => of(new LoadItemsFailure(error)))
      );
    })
  );
}
