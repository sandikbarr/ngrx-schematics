import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ThingActions, ThingActionTypes } from '../actions/thing.actions';

@Injectable()
export class ThingEffects {

  @Effect()
  effect$ = this.actions$.ofType(ThingActionTypes.LoadThings);

  constructor(private actions$: Actions) {}
}
