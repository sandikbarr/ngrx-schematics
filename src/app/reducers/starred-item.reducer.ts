import { StarredItemActions, StarredItemActionTypes } from '../actions/starred-item.actions';

export interface State {
  items: string[];
}

export const initialState: State = {
  items: []
};

export function reducer(state = initialState, action: StarredItemActions): State {
  switch (action.type) {

    case StarredItemActionTypes.LoadStarredItemsSuccess: {
      return {items: action.payload};
    }

    default:
      return state;
  }
}

export const getStarredItemIds = (state: State) => state.items;
