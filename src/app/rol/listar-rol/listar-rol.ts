import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
interface Role {
  id_usuario: number;
  id_rol: string;
  nombrecompleto: string;
  email:string;
  password:number;
  estado:boolean;
}

@Component({
  selector: 'app-listar-roles',
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-rol.html',
  styleUrl: './listar-rol.css',
})
export class ListarRoles {
  roles: Role[] = [];

  constructor(
    private http: HttpClient, 
    private router: Router,
  ) {}


verRoles() {
    this.http.get<Role[]>(``,
      {
        headers: {
          
        }
      }
    ).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.roles = respuesta;

      },
    })
  }
  eliminarrol(id: number) {
    this.http.delete(``, {
      headers: {
      }
    }).subscribe({
      next: (respuesta) => {
        alert('Rol eliminado'+respuesta+ ' con ID: '+id);
        this.verRoles();
      }
    });
  }
  ActualizarRoles(id: number) {
    this.router.navigate(['/roles/actualizar', id]);
}
}