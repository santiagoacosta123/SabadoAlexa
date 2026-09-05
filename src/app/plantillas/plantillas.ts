import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  plantillas: any[] = [];

  historial: any[] = [];


  guardar() {

    if (this.nombre == '' || this.producto == '') {
      alert('Faltan datos');
      return;
    }

    let plantilla = {
      id: this.plantillas.length + 1,
      nombre: this.nombre,
      producto: this.producto,
      cantidad: this.cantidad
    };

    this.plantillas.push(plantilla);

    this.historial.push({
      accion: 'Creó',
      nombre: plantilla.nombre
    });

    this.limpiar();
  }


  editar(plantilla: any) {

    this.nombre = plantilla.nombre;
    this.producto = plantilla.producto;
    this.cantidad = plantilla.cantidad;

    this.idEditar = plantilla.id;
    this.editando = true;
  }


  actualizar() {

    for (let plantilla of this.plantillas) {

      if (plantilla.id == this.idEditar) {

        plantilla.nombre = this.nombre;
        plantilla.producto = this.producto;
        plantilla.cantidad = this.cantidad;

        this.historial.push({
          accion: 'Actualizó',
          nombre: plantilla.nombre
        });
      }

    }

    this.limpiar();
    this.editando = false;
  }


  eliminar(id: number) {

    let plantilla = this.plantillas.find(x => x.id == id);

    if (plantilla) {

      this.historial.push({
        accion: 'Eliminó',
        nombre: plantilla.nombre
      });

    }

    this.plantillas = this.plantillas.filter(
      plantilla => plantilla.id != id
    );

  }


  limpiar() {

    this.nombre = '';
    this.producto = '';
    this.cantidad = 0;

  }


  get plantillasBuscadas() {

    return this.plantillas.filter(plantilla =>
      plantilla.nombre.toLowerCase().includes(this.buscar.toLowerCase())
    );

  }

}