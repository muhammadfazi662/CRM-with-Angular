import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pesticide } from './pesticide';

describe('Pesticide', () => {
  let component: Pesticide;
  let fixture: ComponentFixture<Pesticide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pesticide],
    }).compileComponents();

    fixture = TestBed.createComponent(Pesticide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
