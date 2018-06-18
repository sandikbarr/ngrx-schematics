import { Action } from '@ngrx/store';

export enum ThingActionTypes {
  LoadThings = '[Thing] Load Things'
}

export class LoadThings implements Action {
  readonly type = ThingActionTypes.LoadThings;
}

export type ThingActions = LoadThings;
