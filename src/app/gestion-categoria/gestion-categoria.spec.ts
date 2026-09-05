import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCategoria } from './gestion-categoria';

describe('GestionCategoria', () => {
  let component: GestionCategoria;
  let fixture: ComponentFixture<GestionCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCategoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
