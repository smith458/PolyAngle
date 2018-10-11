import { TestBed } from '@angular/core/testing';

import { SenatorsService } from './senators.service';

describe('SenatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SenatorsService = TestBed.get(SenatorsService);
    expect(service).toBeTruthy();
  });
});
