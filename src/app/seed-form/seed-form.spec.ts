import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedForm } from './seed-form';

describe('SeedForm', () => {
  let component: SeedForm;
  let fixture: ComponentFixture<SeedForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SeedForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
