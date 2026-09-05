import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-roles',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './crear-rol.html',
  styleUrl: './crear-rol.css',
})
export class CrearRoles {
  roles = {
    nombre_rol: '',
    descripcion: '',
    estado: true
  };

  constructor(private http: HttpClient) {}

  crearRoles() {
    this.http.post(``, 
      this.roles,
      {
        headers: {
        }
      }
    ).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        alert('rol creado con éxito');
      },
    });
  }
}