import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragulaListEditComponent } from './dragula-list-edit.component';

describe('DragulaListEditComponent', () => {
  let component: DragulaListEditComponent;
  let fixture: ComponentFixture<DragulaListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragulaListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
