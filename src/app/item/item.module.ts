import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from '../effects/item.effects';
import { StoreModule } from '@ngrx/store';
import * as fromItem from '../reducers/item.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([ItemEffects]),
    StoreModule.forFeature('item', fromItem.reducer)
  ],
  declarations: []
})
export class ItemModule { }
