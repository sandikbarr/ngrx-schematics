import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../effects/user.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: []
})
export class UserModule { }
