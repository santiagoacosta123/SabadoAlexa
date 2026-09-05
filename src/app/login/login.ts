import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html'
})
export class LoginComponent {
  private router = inject(Router);

  login = {
    correo: '',
    password: '',
    rol: ''
  };

  iniciarSesion() {
    console.log('Datos del login:', this.login);
    this.router.navigate(['/inicio']);
  }
}