import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesticideForm } from './pesticide-form';

describe('PesticideForm', () => {
  let component: PesticideForm;
  let fixture: ComponentFixture<PesticideForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesticideForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PesticideForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
