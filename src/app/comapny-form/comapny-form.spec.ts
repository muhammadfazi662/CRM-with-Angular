import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapnyForm } from './comapny-form';

describe('ComapnyForm', () => {
  let component: ComapnyForm;
  let fixture: ComponentFixture<ComapnyForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComapnyForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ComapnyForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
