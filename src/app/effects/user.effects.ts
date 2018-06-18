import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UserActionTypes, LoadUser, LoadUserSuccess, LoadUserFailure } from '../actions/user.actions';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions) {}

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.LoadUser),
    map((action: LoadUser) => action.payload),
    switchMap((payload: {id: number}) => {
      return this.userService.getUser(payload.id).pipe(
        map((data: UserModel) => new LoadUserSuccess(data)),
        catchError(error => Observable.of(new LoadUserFailure({error})))
      );
    })
  );
}
