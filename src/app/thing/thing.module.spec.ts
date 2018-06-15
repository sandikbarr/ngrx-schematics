import { ThingModule } from './thing.module';

describe('ThingModule', () => {
  let thingModule: ThingModule;

  beforeEach(() => {
    thingModule = new ThingModule();
  });

  it('should create an instance', () => {
    expect(thingModule).toBeTruthy();
  });
});
