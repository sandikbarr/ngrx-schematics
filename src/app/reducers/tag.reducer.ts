import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Tag } from '../models/tag.model';
import { TagActions, TagActionTypes } from '../actions/tag.actions';

export interface State extends EntityState<Tag> {
  // additional entities state properties
}

export function sortByName(a: Tag, b: Tag): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<Tag> = createEntityAdapter<Tag>({
  sortComparer: sortByName
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(state = initialState, action: TagActions): State {
  switch (action.type) {
    case TagActionTypes.AddTag: {
      return adapter.addOne(action.payload.tag, state);
    }

    case TagActionTypes.UpsertTag: {
      return adapter.upsertOne(action.payload.tag, state);
    }

    case TagActionTypes.AddTagsSuccess: {
      return adapter.addMany(action.payload.tags, state);
    }

    case TagActionTypes.UpsertTags: {
      return adapter.upsertMany(action.payload.tags, state);
    }

    case TagActionTypes.UpdateTag: {
      return adapter.updateOne(action.payload.tag, state);
    }

    case TagActionTypes.UpdateTags: {
      return adapter.updateMany(action.payload.tags, state);
    }

    case TagActionTypes.DeleteTag: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TagActionTypes.DeleteTags: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TagActionTypes.LoadTagsSuccess: {
      return adapter.addAll(action.payload.tags, state);
    }

    case TagActionTypes.ClearTags: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
