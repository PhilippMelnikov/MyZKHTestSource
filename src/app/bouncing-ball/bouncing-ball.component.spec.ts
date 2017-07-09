import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingBallComponent } from './bouncing-ball.component';

describe('BouncingBallComponent', () => {
  let component: BouncingBallComponent;
  let fixture: ComponentFixture<BouncingBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouncingBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncingBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
