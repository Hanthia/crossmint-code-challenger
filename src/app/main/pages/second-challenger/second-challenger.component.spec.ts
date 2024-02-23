import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChallengerComponent } from './second-challenger.component';

describe('SecondChallengerComponent', () => {
  let component: SecondChallengerComponent;
  let fixture: ComponentFixture<SecondChallengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondChallengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondChallengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
