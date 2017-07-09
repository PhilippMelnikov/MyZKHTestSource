import { TestBed, inject } from '@angular/core/testing';

import { DragAndDropListService } from './drag-and-drop-list.service';

describe('DragAndDropListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragAndDropListService]
    });
  });

  it('should be created', inject([DragAndDropListService], (service: DragAndDropListService) => {
    expect(service).toBeTruthy();
  }));
});
