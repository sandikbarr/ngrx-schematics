import { Action } from '@ngrx/store';
import { ThingActions, ThingActionTypes } from '../actions/thing.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ThingActions): State {
  switch (action.type) {

    case ThingActionTypes.LoadThings:
      return state;


    default:
      return state;
  }
}
