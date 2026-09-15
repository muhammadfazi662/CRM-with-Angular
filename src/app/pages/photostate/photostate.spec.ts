import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photostate } from './photostate';

describe('Photostate', () => {
  let component: Photostate;
  let fixture: ComponentFixture<Photostate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Photostate],
    }).compileComponents();

    fixture = TestBed.createComponent(Photostate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
