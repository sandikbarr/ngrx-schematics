import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from '../effects/item.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([ItemEffects])
  ],
  declarations: []
})
export class ItemModule { }
