import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html'
})
export class LoginComponent {

  private router = inject(Router);
  private http = inject(HttpClient);

  login = {
    correo: '',
    password: '',
    rol: ''
  };

  cargando: boolean = false;

  iniciarSesion() {
    if (!this.login.correo || !this.login.password) {
      Swal.fire({
        icon: 'warning',
        title: 'Datos incompletos',
        text: 'Por favor ingresa tu correo y contraseña.'
      });
      return;
    }

    this.cargando = true;

    const datos = {
      email: this.login.correo,
      password: this.login.password
    };

    this.http.post<any>(
      'https://backend-sirae.onrender.com/api/auth/login/',
      datos
    ).subscribe({
      
      next: (respuesta) => {
        this.cargando = false;
        console.log('Login exitoso:', respuesta);

        // Guardar el token
        localStorage.setItem('access', respuesta.access);

        // Guardar información del usuario
        localStorage.setItem(
          'usuario',
          JSON.stringify(respuesta.usuario)
        );

        // Entrar al sistema
        this.router.navigate(['/inicio']);
      },

      error: (error) => {
        this.cargando = false;
        console.error('Error en login:', error);

        Swal.fire({
          icon: 'error',
          title: 'No se pudo iniciar sesión',
          text: error.error?.mensaje ||
            error.error?.detail ||
            'Correo o contraseña incorrectos.'
        });
      }
    });
  }
}