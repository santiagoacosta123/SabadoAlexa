import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarRol } from './listar-rol';

describe('ListarRol', () => {
  let component: ListarRol;
  let fixture: ComponentFixture<ListarRol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarRol],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarRol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
