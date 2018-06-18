import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromThing from '../reducers/thing.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ThingEffects } from '../effects/thing.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('thing', fromThing.reducer),
    EffectsModule.forFeature([ThingEffects])
  ],
  declarations: []
})
export class ThingModule { }
