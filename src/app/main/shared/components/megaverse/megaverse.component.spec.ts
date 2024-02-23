import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaverseComponent } from './megaverse.component';

describe('MegaverseComponent', () => {
  let component: MegaverseComponent;
  let fixture: ComponentFixture<MegaverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaverseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
