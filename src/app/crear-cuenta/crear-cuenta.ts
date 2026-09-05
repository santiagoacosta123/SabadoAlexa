import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cuenta',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './crear-cuenta.html'
})
export class CrearCuentaComponent {
  private router = inject(Router);
  private http = inject(HttpClient);

  registro = {
    nombre: '',
    apellidos: '',
    correo: '',
    password: '',
    confirmPassword: '',
    genero: '',
    telefono: '',
    rol: '',
    fechaNacimiento: '',
    sede: '',
    tipoDocumento: '',
    direccion: '',
    numeroDocumento: ''
  };

  cargando: boolean = false;

  registrarCuenta() {
    if (!this.registro.correo || !this.registro.password) {
      Swal.fire({
        icon: 'warning',
        title: 'Datos incompletos',
        text: 'Por favor ingresa tu correo electrónico y una contraseña.'
      });
      return;
    }

    if (this.registro.password !== this.registro.confirmPassword) {
      Swal.fire({
        icon: 'warning',
        title: 'Contraseñas diferentes',
        text: 'Las contraseñas no coinciden. Por favor verifícalas.'
      });
      return;
    }

    this.cargando = true;

    const nombreCompleto = `${this.registro.nombre} ${this.registro.apellidos}`.trim() || this.registro.nombre;

    const datos = {
      nombre_completo: nombreCompleto,
      email: this.registro.correo,
      password: this.registro.password,
      id_rol: this.registro.rol === 'administrador' ? 1 : null,
      estado: 'activo'
    };

    this.http.post<any>(
      'https://backend-sirae.onrender.com/api/auth/register/',
      datos
    ).subscribe({
      next: (respuesta) => {
        console.log('Registro exitoso:', respuesta);

        // Iniciar sesión automáticamente con las credenciales registradas
        const credenciales = {
          email: this.registro.correo,
          password: this.registro.password
        };

        this.http.post<any>(
          'https://backend-sirae.onrender.com/api/auth/login/',
          credenciales
        ).subscribe({
          next: (loginRes) => {
            this.cargando = false;
            console.log('Login automático exitoso:', loginRes);
            localStorage.setItem('access', loginRes.access);
            localStorage.setItem('usuario', JSON.stringify(loginRes.usuario));
            Swal.fire({
              icon: 'success',
              title: 'Cuenta creada',
              text: '¡Cuenta creada exitosamente! Bienvenido a SiRAE.',
              timer: 1800,
              showConfirmButton: false
            });
            this.router.navigate(['/inicio']);
          },
          error: (loginErr) => {
            this.cargando = false;
            console.warn('Registro exitoso, pero login automático requirió autenticación manual:', loginErr);
            Swal.fire({
              icon: 'success',
              title: 'Cuenta creada',
              text: 'Por favor inicia sesión con tu correo y contraseña.'
            });
            this.router.navigate(['/login']);
          }
        });
      },
      error: (error) => {
        this.cargando = false;
        console.error('Error al registrar cuenta:', error);

        let mensajeError = 'No se pudo crear la cuenta. Intenta nuevamente.';
        if (error.error) {
          if (typeof error.error === 'string') {
            mensajeError = error.error;
          } else if (error.error.mensaje) {
            mensajeError = error.error.mensaje;
          } else if (error.error.email) {
            mensajeError = `Correo: ${Array.isArray(error.error.email) ? error.error.email.join(', ') : error.error.email}`;
          } else if (error.error.password) {
            mensajeError = `Contraseña: ${Array.isArray(error.error.password) ? error.error.password.join(', ') : error.error.password}`;
          } else if (error.error.detail) {
            mensajeError = error.error.detail;
          }
        }

        Swal.fire({
          icon: 'error',
          title: 'No se pudo crear la cuenta',
          text: mensajeError
        });
      }
    });
  }
}