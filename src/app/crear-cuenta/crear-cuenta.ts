import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './crear-cuenta.html'
})
export class CrearCuentaComponent {

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

    alert('Registrarse');

  }

}