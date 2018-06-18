import { ItemModel } from '../item';
import { ItemActions, ItemActionTypes } from '../actions/item.actions';

export interface State {
  entities?: {[id: string]: ItemModel};
  loaded: boolean;
  loading: boolean;
  error?: any;
}

export const initialState: State = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: ItemActions): State {
  switch (action.type) {

    case ItemActionTypes.LoadItems: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case ItemActionTypes.LoadItemsSuccess: {
      return {
        ...state,
        entities: action.payload.reduce(
          (entities: {[id: string]: ItemModel}, item: ItemModel) => {
            return {
              ...entities,
              [item.id]: item
            };
          },
          {...state.entities}
        ),
        loading: false,
        loaded: true
      };
    }

    case ItemActionTypes.LoadItemsFailure: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false
      };
    }

    default:
      return state;
  }
}
