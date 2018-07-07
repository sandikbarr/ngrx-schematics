import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Tag } from '../models/tag.model';

export enum TagActionTypes {
  LoadTags = '[Tag] Load Tags',
  LoadTagsSuccess = '[Tag] Load Tags Success',
  LoadTagsFailure = '[Tag] Load Tags Failure',
  AddTag = '[Tag] Add Tag',
  AddTags = '[Tag] Add Tags',
  AddTagsSuccess = '[Tag] Add Tags Success',
  AddTagsFailure = '[Tag] Add Tags Failure',
  UpsertTag = '[Tag] Upsert Tag',
  UpsertTags = '[Tag] Upsert Tags',
  UpdateTag = '[Tag] Update Tag',
  UpdateTags = '[Tag] Update Tags',
  DeleteTag = '[Tag] Delete Tag',
  DeleteTags = '[Tag] Delete Tags',
  ClearTags = '[Tag] Clear Tags'
}

export class LoadTags implements Action {
  readonly type = TagActionTypes.LoadTags;

  constructor(public payload: { itemId: string }) {}
}

export class LoadTagsSuccess implements Action {
  readonly type = TagActionTypes.LoadTagsSuccess;

  constructor(public payload: { tags: Tag[] }) {}
}

export class LoadTagsFailure implements Action {
  readonly type = TagActionTypes.LoadTagsFailure;

  constructor(public payload: any) {}
}

export class AddTag implements Action {
  readonly type = TagActionTypes.AddTag;

  constructor(public payload: { tag: Tag }) {}
}

export class AddTags implements Action {
  readonly type = TagActionTypes.AddTags;

  constructor(public payload: { itemId: string }) {}
}

export class AddTagsSuccess implements Action {
  readonly type = TagActionTypes.AddTagsSuccess;

  constructor(public payload: { tags: Tag[] }) {}
}

export class AddTagsFailure implements Action {
  readonly type = TagActionTypes.AddTagsFailure;

  constructor(public payload: any) {}
}

export class UpsertTag implements Action {
  readonly type = TagActionTypes.UpsertTag;

  constructor(public payload: { tag: Tag }) {}
}

export class UpsertTags implements Action {
  readonly type = TagActionTypes.UpsertTags;

  constructor(public payload: { tags: Tag[] }) {}
}

export class UpdateTag implements Action {
  readonly type = TagActionTypes.UpdateTag;

  constructor(public payload: { tag: Update<Tag> }) {}
}

export class UpdateTags implements Action {
  readonly type = TagActionTypes.UpdateTags;

  constructor(public payload: { tags: Update<Tag>[] }) {}
}

export class DeleteTag implements Action {
  readonly type = TagActionTypes.DeleteTag;

  constructor(public payload: { id: string }) {}
}

export class DeleteTags implements Action {
  readonly type = TagActionTypes.DeleteTags;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearTags implements Action {
  readonly type = TagActionTypes.ClearTags;
}

export type TagActions =
  | LoadTags
  | LoadTagsSuccess
  | LoadTagsFailure
  | AddTag
  | AddTags
  | AddTagsSuccess
  | AddTagsFailure
  | UpsertTag
  | UpsertTags
  | UpdateTag
  | UpdateTags
  | DeleteTag
  | DeleteTags
  | ClearTags;
