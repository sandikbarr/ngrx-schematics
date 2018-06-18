import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../effects/user.effects';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [],
  providers: [UserService]
})
export class UserModule { }
