import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntregas } from './lista-entregas';

describe('ListaEntregas', () => {
  let component: ListaEntregas;
  let fixture: ComponentFixture<ListaEntregas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEntregas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEntregas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
