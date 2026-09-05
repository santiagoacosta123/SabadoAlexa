import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './crear-cuenta.html'
})
export class CrearCuentaComponent {
  private router = inject(Router);

  registro = {
    nombre: '',
    apellidos: '',
    correo: '',
    genero: '',
    telefono: '',
    rol: '',
    fechaNacimiento: '',
    sede: '',
    tipoDocumento: '',
    direccion: '',
    numeroDocumento: ''
  };

  registrarCuenta() {
    console.log('Datos del registro:', this.registro);
    this.router.navigate(['/inicio']);
  }
}