import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ItemModel } from '../../item';

import * as fromItem from '../item.reducer';
import * as fromStarredItem from '../starred-item.reducer';
import * as fromTag from '../tag.reducer';
import { Tag } from '../../models/tag.model';

export const selectItemState = createFeatureSelector<fromItem.State>('item');
export const selectItemEntities = createSelector(selectItemState, fromItem.getEntities);
export const selectItems = createSelector(
  selectItemEntities,
  (entities): ItemModel[] => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
export const selectItemsLoaded = createSelector(selectItemState, fromItem.getLoaded);
export const selectItemsLoading = createSelector(selectItemState, fromItem.getLoading);
export const selectItemError = createSelector(selectItemState, fromItem.getError);

export const selectStarredItemsState = createFeatureSelector<fromStarredItem.State>('starredItem');
export const selectStarredItemIds = createSelector(
  selectStarredItemsState,
  fromStarredItem.getStarredItemIds
);
export const selectStarredItems = createSelector(
  selectStarredItemIds,
  selectItems,
  (ids: string[], items: ItemModel[]) => {
    return items.filter(item => ids.indexOf(item.id) > -1);
  }
);

export const selectTagState = createFeatureSelector<fromTag.State>('tag');
export const selectAllTags = createSelector(selectTagState, fromTag.selectAll);
export const selectItemsWithTags = createSelector(
  selectItemEntities,
  selectAllTags,
  (entities: { [id: string]: ItemModel }, allTags: Tag[]): ItemModel[] => {
    return Object.keys(entities).map(id => {
      return { ...entities[id], tags: allTags.filter(tag => tag.itemId === id) };
    });
  }
);
