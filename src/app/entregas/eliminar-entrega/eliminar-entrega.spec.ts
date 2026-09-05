import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEntrega } from './eliminar-entrega';

describe('EliminarEntrega', () => {
  let component: EliminarEntrega;
  let fixture: ComponentFixture<EliminarEntrega>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarEntrega],
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarEntrega);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
