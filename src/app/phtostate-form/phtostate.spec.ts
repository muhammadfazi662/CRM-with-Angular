import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phtostate } from './phtostate';

describe('Phtostate', () => {
  let component: Phtostate;
  let fixture: ComponentFixture<Phtostate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phtostate],
    }).compileComponents();

    fixture = TestBed.createComponent(Phtostate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
