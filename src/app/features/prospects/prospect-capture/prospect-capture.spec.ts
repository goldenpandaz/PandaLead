import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectCapture } from './prospect-capture';

describe('ProspectCapture', () => {
  let component: ProspectCapture;
  let fixture: ComponentFixture<ProspectCapture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProspectCapture],
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectCapture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
