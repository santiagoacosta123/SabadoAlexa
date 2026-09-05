import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Plantilla {
  id: number;
  nombre: string;
  producto: string;
  cantidad: number;
}

interface Movimiento {
  accion: string;
  nombre: string;
}

@Component({
  selector: 'app-plantillas',
  imports: [FormsModule],
  templateUrl: './plantillas.html',
  styleUrl: './plantillas.css'
})
export class Plantillas {

  nombre = '';
  producto = '';
  cantidad = 0;

  buscar = '';

  editando = false;
  idEditar = 0;

  plantillas: Plantilla[] = [];

  historial: Movimiento[] = [];


  guardar() {

    if (this.nombre.trim() === '' || this.producto.trim() === '') {
      alert('Faltan datos');
      return;
    }

    const plantilla: Plantilla = {
      id: this.obtenerNuevoId(),
      nombre: this.nombre.trim(),
      producto: this.producto.trim(),
      cantidad: this.cantidad
    };

    this.plantillas.push(plantilla);

    this.historial.push({
      accion: 'Creó',
      nombre: plantilla.nombre
    });

    this.limpiar();
  }


  editar(plantilla: Plantilla): void {

    this.nombre = plantilla.nombre;
    this.producto = plantilla.producto;
    this.cantidad = plantilla.cantidad;

    this.idEditar = plantilla.id;
    this.editando = true;
  }


  actualizar(): void {
    const posicion = this.plantillas.findIndex(
      plantilla => plantilla.id === this.idEditar
    );

    if (posicion !== -1) {
      this.plantillas[posicion].nombre = this.nombre.trim();
      this.plantillas[posicion].producto = this.producto.trim();
      this.plantillas[posicion].cantidad = this.cantidad;

      this.historial.push({
        accion: 'Actualizó',
        nombre: this.plantillas[posicion].nombre
      });
    }

    this.limpiar();
    this.editando = false;
  }


  eliminar(id: number): void {
    const plantilla = this.plantillas.find(item => item.id === id);

    if (!plantilla) {
      return;
    }

    const confirmar = confirm('¿Quieres eliminar la plantilla "' + plantilla.nombre + '"?');

    if (confirmar) {
      this.historial.push({
        accion: 'Eliminó',
        nombre: plantilla.nombre
      });

      this.plantillas = this.plantillas.filter(item => item.id !== id);
    }
  }


  limpiar(): void {

    this.nombre = '';
    this.producto = '';
    this.cantidad = 0;

  }


  get plantillasBuscadas(): Plantilla[] {
    const texto = this.buscar.trim().toLowerCase();

    return this.plantillas.filter(plantilla =>
      plantilla.nombre.toLowerCase().includes(texto) ||
      plantilla.producto.toLowerCase().includes(texto)
    );
  }

  obtenerNuevoId(): number {
    if (this.plantillas.length === 0) {
      return 1;
    }

    return Math.max(...this.plantillas.map(plantilla => plantilla.id)) + 1;
  }

}