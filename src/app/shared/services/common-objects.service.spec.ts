import { TestBed } from '@angular/core/testing';

import { CommonObjectsService } from './common-objects.service';

describe('CommonObjectsService', () => {
  let service: CommonObjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonObjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
