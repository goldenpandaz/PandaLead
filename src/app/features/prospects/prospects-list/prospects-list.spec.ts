import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectsList } from './prospects-list';

describe('ProspectsList', () => {
  let component: ProspectsList;
  let fixture: ComponentFixture<ProspectsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProspectsList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
