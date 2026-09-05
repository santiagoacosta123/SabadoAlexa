import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEntrega } from './detalle-entrega';

describe('DetalleEntrega', () => {
  let component: DetalleEntrega;
  let fixture: ComponentFixture<DetalleEntrega>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleEntrega],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleEntrega);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
