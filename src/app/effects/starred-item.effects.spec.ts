import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StarredItemEffects } from './starred-item.effects';

describe('StarredItemService', () => {
  let actions$: Observable<any>;
  let effects: StarredItemEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StarredItemEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(StarredItemEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
