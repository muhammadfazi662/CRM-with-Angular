import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seed } from './seed';

describe('Seed', () => {
  let component: Seed;
  let fixture: ComponentFixture<Seed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seed],
    }).compileComponents();

    fixture = TestBed.createComponent(Seed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
