import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from '../effects/item.effects';
import { StoreModule } from '@ngrx/store';
import * as fromItem from '../reducers/item.reducer';
import * as fromStarredItem from '../reducers/starred-item.reducer';
import { StarredItemEffects } from '../effects/starred-item.effects';
import { ItemService } from './item.service';

import { ItemListContainerComponent } from './components/item-list-container.component';
import { ItemListComponent } from './components/item-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([ItemEffects, StarredItemEffects]),
    StoreModule.forFeature('item', fromItem.reducer),
    StoreModule.forFeature('starredItem', fromStarredItem.reducer)
  ],
  declarations: [
    ItemListContainerComponent,
    ItemListComponent
  ],
  exports: [
    ItemListContainerComponent
  ],
  providers: [ItemService]
})
export class ItemModule { }
