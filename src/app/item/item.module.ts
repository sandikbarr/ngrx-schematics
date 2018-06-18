import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from '../effects/item.effects';
import { StoreModule } from '@ngrx/store';
import * as fromItem from '../reducers/item.reducer';
import * as fromStarredItem from '../reducers/starred-item.reducer';
import { StarredItemEffects } from '../effects/starred-item.effects';
import { ItemService } from './item.service';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([ItemEffects, StarredItemEffects]),
    StoreModule.forFeature('item', fromItem.reducer),
    StoreModule.forFeature('starredItem', fromStarredItem.reducer)
  ],
  declarations: [],
  providers: [ItemService]
})
export class ItemModule { }
