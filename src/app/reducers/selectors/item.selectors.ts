import { createSelector } from '@ngrx/store';
import * as fromRoot from '../';
import { ItemModel } from '../../item';

import * as fromItem from '../item.reducer';
import * as fromStarredItem from '../starred-item.reducer';

export const selectItemState = createSelector(fromRoot.selectRootState, (state: fromRoot.State) => state.item);
export const selectItemEntities = createSelector(selectItemState, fromItem.getEntities);
export const selectItems = createSelector(selectItemEntities, (entities): ItemModel[] => {
  return Object.keys(entities).map(id => entities[id]);
});
export const selectItemsLoaded = createSelector(selectItemState, fromItem.getLoaded);
export const selectItemsLoading = createSelector(selectItemState, fromItem.getLoading);
export const selectItemError = createSelector(selectItemState, fromItem.getError);

export const selectStarredItemsState = createSelector(fromRoot.selectRootState, (state: fromRoot.State) => state.starredItem);
export const selectStarredItemIds = createSelector(selectStarredItemsState, fromStarredItem.getStarredItemIds);
export const selectStarredItems = createSelector(selectStarredItemIds, selectItems, (ids: string[], items: ItemModel[]) => {
  return items.filter(item => ids.indexOf(item.id) > -1);
});
