import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragulaListComponent } from './dragula-list.component';

describe('DragulaListComponent', () => {
  let component: DragulaListComponent;
  let fixture: ComponentFixture<DragulaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragulaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
