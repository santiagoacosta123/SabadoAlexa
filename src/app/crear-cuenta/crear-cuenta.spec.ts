import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CrearCuentaComponent } from './crear-cuenta';

describe('CrearCuentaComponent', () => {
  let component: CrearCuentaComponent;
  let fixture: ComponentFixture<CrearCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCuentaComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCuentaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
