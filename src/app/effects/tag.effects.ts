import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ItemActionTypes, LoadItemsSuccess } from '../actions/item.actions';
import { TagActionTypes, AddTags, AddTagsSuccess, AddTagsFailure } from '../actions/tag.actions';
import { ItemModel, ItemService } from '../item';
import { Tag } from '../models/tag.model';

@Injectable()
export class TagEffects {
  constructor(private actions$: Actions, private itemService: ItemService) {}

  @Effect()
  loadItemsSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(ItemActionTypes.LoadItemsSuccess),
    map((action: LoadItemsSuccess) => action.payload),
    mergeMap((payload: ItemModel[]) => {
      return payload.map((item: ItemModel) => new AddTags({ itemId: item.id }));
    })
  );

  @Effect()
  addTags$: Observable<Action> = this.actions$.pipe(
    ofType(TagActionTypes.AddTags),
    map((action: AddTags) => action.payload),
    concatMap((payload: { itemId: string }) => {
      return this.itemService.getTags(payload.itemId).pipe(
        map((tags: Tag[]) => new AddTagsSuccess({ tags })),
        catchError(error => of(new AddTagsFailure(error)))
      );
    })
  );
}
