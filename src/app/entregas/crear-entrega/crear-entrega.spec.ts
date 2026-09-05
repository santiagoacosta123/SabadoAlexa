import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEntrega } from './crear-entrega';

describe('CrearEntrega', () => {
  let component: CrearEntrega;
  let fixture: ComponentFixture<CrearEntrega>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearEntrega],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearEntrega);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
