import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappTemplatePicker } from './whatsapp-template-picker';

describe('WhatsappTemplatePicker', () => {
  let component: WhatsappTemplatePicker;
  let fixture: ComponentFixture<WhatsappTemplatePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappTemplatePicker],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsappTemplatePicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
