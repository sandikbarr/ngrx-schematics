import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ThingEffects } from './thing.effects';

describe('ThingService', () => {
  let actions$: Observable<any>;
  let effects: ThingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ThingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
