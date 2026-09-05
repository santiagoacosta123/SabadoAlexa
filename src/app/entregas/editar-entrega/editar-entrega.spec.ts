import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEntrega } from './editar-entrega';

describe('EditarEntrega', () => {
  let component: EditarEntrega;
  let fixture: ComponentFixture<EditarEntrega>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEntrega],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarEntrega);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
