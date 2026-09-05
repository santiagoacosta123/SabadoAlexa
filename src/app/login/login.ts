import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html'
})
export class LoginComponent {

  login = {
    correo: '',
    password: '',
    rol: ''
  };

  iniciarSesion() {

    console.log('Datos del login:', this.login);

    alert('Inicio de sesión');

  }

}