import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChallengerComponent } from './first-challenger.component';

describe('FirstChallengerComponent', () => {
  let component: FirstChallengerComponent;
  let fixture: ComponentFixture<FirstChallengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstChallengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChallengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
