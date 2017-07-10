import { TestBed, inject } from '@angular/core/testing';

import { DragulaListService } from './dragula-list.service';

describe('DragulaListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragulaListService]
    });
  });

  it('should be created', inject([DragulaListService], (service: DragulaListService) => {
    expect(service).toBeTruthy();
  }));
});
