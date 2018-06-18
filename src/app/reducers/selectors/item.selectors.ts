import { createSelector } from '@ngrx/store';
import * as fromRoot from '../';

import * as fromItem from '../item.reducer';
import * as fromStarredItem from '../starred-item.reducer';
import { ItemModel } from '../../item';

export const selectItemState = createSelector(fromRoot.selectRootState, (state: fromRoot.State) => state.item);
export const selectItemEntities = createSelector(selectItemState, fromItem.getEntities);
export const selectItems = createSelector(selectItemEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});
export const selectItemsLoaded = createSelector(selectItemState, fromItem.getLoaded);
export const selectItemsLoading = createSelector(selectItemState, fromItem.getLoading);
export const selectItemError = createSelector(selectItemState, fromItem.getError);

export const selectStarredItemsState = createSelector(fromRoot.selectRootState, (state: fromRoot.State) => state.starredItem);
export const selectStarredItemIds = createSelector(selectStarredItemsState, fromStarredItem.getStarredItemIds);
export const selectStarredItems = createSelector(selectStarredItemIds, selectItems, (ids: string[], items) => {
  return items.filter(item => ids.indexOf(item.id) > -1);
});
